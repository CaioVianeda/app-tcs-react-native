import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './styles';

// COMPONENTES
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native'
import {editCbo, editData,editDayweek,editDoctor,editHourInitial,editHourFinal} from '../../redux/actions/SchedulesActions'
import { connect } from 'react-redux';

import iconCardiologista from '../../../assets/pulso.png'
import iconClinico from '../../../assets/clinico.png'
import iconUrologista from '../../../assets/urologista.png'
import iconPsicologia from '../../../assets/psicologia.png'
import iconPediatra from '../../../assets/pediatra.png'
import iconCardiovascular from '../../../assets/cardiovascular.png'
import iconUltrassonografista from '../../../assets/ultrassom.png'
import iconFisioterapeuta from '../../../assets/fisioterapia.png'
import iconGastro from '../../../assets/gastro.png'


function Home(props){

  function typeIcon(cbo){

        if(cbo == "Cardiologista")
          return iconCardiologista;
        
        else if(cbo == "Clínico")
          return iconClinico;

        else if(cbo == "Urologista")
          return iconUrologista;

        else if(cbo == "Psicólogo")
          return iconPsicologia;

        else if(cbo == "Pediatra")
          return iconPediatra;

        else if(cbo == "Cardiovascular")
          return iconCardiovascular;

        else if(cbo == "Ultrassonografista")
          return iconUltrassonografista;

        else if(cbo == "Fisioterapeuta")
          return iconFisioterapeuta;

        else if(cbo == "Gastroenterologista")
          return iconGastro;
    }

    //const para teste
    const [medicos, setMedicos] = useState([{name: 'Jose Augusto',cbo: 'Cardiologista',days: ['seg'], hourInitial: 12, hourFinal: 18}, 
    {name: 'Jose Fernando',cbo:'Clínico',days: ['seg','qua','sex'], hourInitial: 12, hourFinal: 18},
    {name: 'Tatiana Boguchesky',cbo:'Psicólogo',days: ['ter','qui'], hourInitial: 7, hourFinal: 18},
    {name: 'Edgar Gutierrez',cbo:'Pediatra',days: ['qui'], hourInitial: 12, hourFinal: 18},
    {name: 'Marcos Damian',cbo:'Ultrassonografista',days: ['sex','ter'], hourInitial: 12, hourFinal: 18},
    {name: 'Renata Franklin',cbo:'Fisioterapeuta',days: ['qua'], hourInitial: 8, hourFinal: 16},
    {name: 'Carlo Alessandro',cbo:'Cardiovascular',days: ['ter'], hourInitial: 9, hourFinal: 14}])

    const navigation = useNavigation()

    const [DayOfWeek,setDayOfWeek] = useState('seg')

    function agendar(medico){
      //navigation.navigate('Scheduling', {medico: medico })
      props.editCbo(medico.cbo)
      props.editDoctor(medico.name)
      props.editDayweek(DayOfWeek)
      props.editHourInitial(medico.hourInitial)
      props.editHourFinal(medico.hourFinal)
      navigation.navigate('Scheduling')
    }

  return (

    <View style={styles.container}>

      <Header view={'Home'}/>

      <View style={styles.filter}>

        <TouchableOpacity onPress={() => setDayOfWeek('seg')}>
        <Text style={DayOfWeek == 'seg' ? styles.filterTextActived : styles.filterTextInative}>Seg</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDayOfWeek('ter')}>
        <Text style={DayOfWeek == 'ter' ? styles.filterTextActived : styles.filterTextInative}>Ter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDayOfWeek('qua')}>
        <Text style={DayOfWeek == 'qua' ? styles.filterTextActived : styles.filterTextInative}>Qua</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDayOfWeek('qui')}>
        <Text style={DayOfWeek == 'qui' ? styles.filterTextActived : styles.filterTextInative}>Qui</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDayOfWeek('sex')}>
        <Text style={DayOfWeek == 'sex' ? styles.filterTextActived : styles.filterTextInative}>Sex</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>ATENDIMENTOS</Text>
      </View>

    
      <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>      

        {   
            medicos.map((medico,index)=>(
              medico.days.map((dayweek)=>(
                dayweek == DayOfWeek
                &&
                <TouchableOpacity key={index} style={styles.card} onPress={()=> agendar(medico)}>
                <View style={styles.cardLeft}>
                  <Image source={typeIcon(medico.cbo)} style={styles.imageIcon} />
                  <Text style={styles.cardTitle}>{medico.cbo}</Text>
                </View>
                <View style={styles.cardRight}>
                  <Text style={styles.cardDate}>{medico.name}</Text>
                  <Text style={styles.cardTime}>{`${medico.hourInitial}:00/${medico.hourFinal}:00 `}</Text>
                </View>
              </TouchableOpacity>
              )) 
            ))
            
        }
          
      </ScrollView>

    </View>
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

const HomeConnect = connect(mapStateToProps,{editCbo,editDoctor,editData,editDayweek,editHourFinal,editHourInitial})(Home);

export default HomeConnect;