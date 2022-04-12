import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, Alert, Image } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {editAtt} from '../../redux/actions/SchedulesActions'

import Header from '../../components/Header';


//icones
import iconCardiologista from '../../../assets/pulso.png'
import iconClinico from '../../../assets/clinico.png'
import iconUrologista from '../../../assets/urologista.png'
import iconPsicologia from '../../../assets/psicologia.png'
import iconPediatra from '../../../assets/pediatra.png'
import iconCardiovascular from '../../../assets/cardiovascular.png'
import iconUltrassonografista from '../../../assets/ultrassom.png'
import iconFisioterapeuta from '../../../assets/fisioterapia.png'
import iconGastro from '../../../assets/gastro.png'


 function Schedules(list){

    //const para teste
    const [ex,setEx] = useState([]);
    //const [ex,setEx] = useState([{cbo : "Cardiologista", doctor: "Jose Fernando", data: "12:50", dayweek: "qui"}]);

    //inicia filtro
    const [DayOfWeek,setDayOfWeek] = useState('all');

    //async storage

    async function loadStorage() {

        try {
            const arr = await AsyncStorage.getItem('list');
            if(arr != null) {
                setEx(JSON.parse(arr));
            }
            
        } catch(e) {
            alert('[ERROR]: AsyncStorage - getItem()')    
        }


    }

    async function add() {
            if(list.att.cbo && list.att.doctor && list.att.data && list.dayweek){

            
                const arr = ex
                arr.push(list.att)
                try {
                    const json = JSON.stringify(arr)
                    await AsyncStorage.setItem('list', json)
                    alert('Adicionado com Sucesso!')
                    list.editAtt({})
                    
                } catch (e) {
                    alert('[ERROR]: AsyncStorage - setItem()')    
                }

            }
    }

    async function removeStorage(index){

        const aux = ex;
        aux.splice(index,1);
        setEx(aux);

        try {
            const json = JSON.stringify(ex)
            await AsyncStorage.setItem('list', json)
            Alert.alert(
                'Cancelar',
                'Agendamento removido com sucesso!',
                [   
                    {text:'Ok'},
                ],);
        } catch (e) {
            alert('[ERROR]: AsyncStorage - setItem()')    
        }

        onRefresh()
    }

    //atualiza os agendamentos
    useEffect(() => {
        loadStorage();
    }, []);
    useEffect(() => {
        add();
    }, [ex]);

    //refresh 
    const [refreshing, setRefreshing] = useState(false);

    function onRefresh(){
        //add()
        loadStorage();
        setRefreshing(true);
        setTimeout(() => {setRefreshing(false)}, 500);
    }

    function typeIcon(cbo){
        
        if (cbo == "Cardiologista")
            return iconCardiologista;
        
        else if(cbo == "Clínico")
            return iconClinico

        else if(cbo == "Urologista")
            return iconUrologista

        else if(cbo == "Psicólogo")
            return iconPsicologia

        else if(cbo == "Pediatra")
            return iconPediatra

        else if(cbo == "Cardiovascular")
          return iconCardiovascular

        else if(cbo == "Ultrassonografista")
          return iconUltrassonografista

        else if(cbo == "Fisioterapeuta")
          return iconFisioterapeuta  

        else if(cbo == "Gastroenterologista")
          return iconGastro
        
    }

    function remove(index){
       
        Alert.alert(
            'Cancelar',
            'Deseja cancelar este agendamento ?',
            [   
                {text: 'Não'},
                {text: 'Sim' ,onPress:() =>  removeStorage(index)},
            ],);
    }

    return (

        <View style={styles.container}>

            <Header view={"Schedules"} sizeof={ex.length}/>

            <View style={styles.filter}>

                <TouchableOpacity onPress={() => setDayOfWeek('all')}>
                <Text style={DayOfWeek == 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                
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
                <Text style={styles.titleText}>AGENDADOS</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}} 
             refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
            }>   
                    
            {   
                ex != null
                &&
                ex.map((item,index)=> (

                    DayOfWeek == item.dayweek 
                    ?
                    <TouchableOpacity  key={index}style={styles.card} onPress={()=>remove(index)}>
                    <View style={styles.cardLeft}>
                        <Image source={typeIcon(item.cbo)} style={styles.imageIcon} />
                        <Text style={styles.cardTitle}>{item.cbo}</Text>
                    </View>
                    <View style={styles.cardRight}>
                        <Text style={styles.cardDate}>{item.doctor}</Text>
                        <Text style={styles.cardTime}>{`${item.data}`}</Text>
                    </View>
                    </TouchableOpacity>

                    :

                    DayOfWeek == 'all'
                    &&
                    <TouchableOpacity  key={index}style={styles.card} onPress={()=>remove(index)}>
                        <View style={styles.cardLeft}>
                            <Image source={typeIcon(item.cbo)} style={styles.imageIcon} />
                            <Text style={styles.cardTitle}>{item.cbo}</Text>
                        </View>
                        <View style={styles.cardRight}>
                            <Text style={styles.cardDate}>{item.doctor}</Text>
                            <Text style={styles.cardTime}>{`${item.dayweek}/${item.data}`}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
                
            </ScrollView>

        </View>

    )  
}

const mapStateToProps = (state) => {
   return { cbo: state.schedules.cbo,
    doctor: state.schedules.doctor, 
    data: state.schedules.data , 
    dayweek: state.schedules.dayweek,
    hourInitial: state.schedules.hourInitial,
    hourFinal: state.schedules.hourFinal,
    definitHour: state.schedules.definitHour,
    att: state.schedules.att}
}

const SchedulesConnect = connect(mapStateToProps, {editAtt})(Schedules)

export default SchedulesConnect;
