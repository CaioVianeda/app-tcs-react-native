import React, { useState } from 'react';
import {View, ScrollView,Text,TextInput,KeyboardAvoidingView,TouchableOpacity,Modal,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import {editDefinitHour, editAtt} from '../../redux/actions/SchedulesActions'

import styles from './styles';


// COMPONENTES
import Header from '../../components/Header';

function Scheduling(props){

  const [schedulesHour,setSchedulesHour] = useState([]);

  const titleSchedule = `Consulta com ${props.cbo}`

  const [title, setTitle] = useState(titleSchedule);
  const [description, setDescription] = useState();
  const [aux, setAux] = useState({title: titleSchedule, schedule: hour, obs: description });
  const [hour, setHour] = useState();
  const [modal,setModal] = useState(false);
  const navigation = useNavigation();

  function SaveSchedule(){

    function navegar(){
      navigation.navigate('Home')
    }

    function agendar(){
      const aux = {cbo : props.cbo, doctor: props.doctor, data: props.definitHour, dayweek: props.dayweek}
      props.editAtt(aux);
      navigation.navigate('Schedules');
    }

    if(!hour)
    return Alert.alert('Escolha uma hora para o agendamento!');
    else
      Alert.alert(
      titleSchedule + ' Agendada',
      'Compareça à clínica portando documento com foto as '+ hour + 'h',
      [
        {text: 'Ok!', onPress:() => agendar()},
      ],
      
    )
  }

    function Remove(){

      function navegar(){
        navigation.navigate('Home')
      }

      Alert.alert(
        'Cancelar Agendamento',
        'Deseja realmente cancelar o agendamento?',
        [
          {text: 'Não'},
          {text: 'Sim', onPress:() => navegar()},
        ],
        
      )
  }

  function openModal() {

    const aux = []
    
    for(var i = props.hourInitial; i <= props.hourFinal;i += 0.5){
      if(i%2 == 0 || i%2 == 1)
        aux.push(`${i}:00`);
      else
        aux.push(`${parseInt(i)}:30`);
    }
    setSchedulesHour(aux);
    setModal(true);
  }

  function selectHour(hour) {
    setHour(hour);
    props.editDefinitHour(hour)
    setModal(false);
  }

  return (    
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Header view={"Home"}/>

        <ScrollView style={{width: '100%'}}>

        <Text style={styles.label}>Exame</Text>
        <View style={styles.title}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>

        <Text style={styles.label}>Médico</Text>
        <View style={styles.title}>
          <Text style={styles.textTitle}>{props.doctor}</Text>
        </View>

        <Text style={styles.label}>Horário</Text>
        <TouchableOpacity style={styles.title} onPress={openModal}>
          <Text style={hour != null ? styles.textHour : styles.textHourInactive}>{hour != null ? hour : 'Clique para selecionar um horário'}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Observações</Text>
        <TextInput 
          style={styles.inputarea} 
          maxLength={200} 
          multiline={true}
          placeholder="Detalhes sobre minha consulta..."
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
  
        <View style={styles.inLine}>
            <TouchableOpacity style={styles.inputInline} onPress={SaveSchedule}>
              <Text style={styles.removeLabel}>Agendar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Remove}>
              <Text style={styles.removeLabel}>Cancelar</Text>
            </TouchableOpacity>
        </View>       

        <Modal transparent={true} animationType="slide" visible={modal}>

              <View style={styles.containerModal}>
                <View style={styles.headerModal}>
                    <Text style={styles.headerTextModal}>Escolha um dos horários disponíveis</Text>
                </View>

                <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
              
                  {
                    schedulesHour != null
                    &&
                    schedulesHour.map((item,index)=> (
                      item != null &&
                      <TouchableOpacity key={index} style={styles.hoursModal} onPress={() => selectHour(item)}>
                        <Text style={styles.textHoursModal}>{item}</Text>
                      </TouchableOpacity > 
                    ))
                  }                

                </ScrollView>

                <TouchableOpacity style={styles.bottomCancelModal} onPress={()=>setModal(false)}>
                  <Text style={styles.bottomTextModal}>Voltar</Text>
                </TouchableOpacity>
              
              </View>    
        </Modal>
        
      </ScrollView> 
         
    </KeyboardAvoidingView>
  )
}

const mapStateToProps = (state) =>{{
  return { cbo: state.schedules.cbo,
    doctor: state.schedules.doctor, 
    data: state.schedules.data , 
    dayweek: state.schedules.dayweek,
    hourInitial: state.schedules.hourInitial,
    hourFinal: state.schedules.hourFinal,
    definitHour: state.schedules.definitHour,
    att: state.schedules.att}
}}

const SchedulingConnect = connect(mapStateToProps,{editDefinitHour,editAtt})(Scheduling);

export default SchedulingConnect;
