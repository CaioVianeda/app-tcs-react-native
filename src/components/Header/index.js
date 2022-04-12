import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';



import styles from './styles';

import logoAtivo from '../../../assets/logoAtivo.png';
import logo from '../../../assets/logo.png';
import agendamentos from '../../../assets/agendamentos.png';
import agendamentosAtivo from '../../../assets/agendamentosAtivo.png';
import logout from '../../../assets/logout.png';
import voltar from '../../../assets/voltar.png'

import { useNavigation } from '@react-navigation/native';

export default function Header({view, sizeof}){

  const navigation = useNavigation();

  function Back(){

    view == 'Schedules'
    ?
    navigation.navigate('Home')
    :
    navigation.navigate('Login')
  }

  function Home(){
    navigation.navigate('Home')
  }

  function Agendar(){
    navigation.navigate('Schedules');
  }
  
  return(
      <View style={styles.header}>

        <TouchableOpacity style={styles.leftIcon} onPress={Back}>
        {view == "Schedules" 
        ?
        <Image source={voltar} style={styles.leftIconImage}/>
        :
        <Image source={logout} style={styles.leftIconImage}/>
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={Home}>
        {
          view == 'Home'
          ?
          <Image source={logoAtivo} style={styles.logo}/>
          :
          <Image source={logo} style={styles.logo}/>
        }
        </TouchableOpacity>
             
        <TouchableOpacity style={styles.notification} onPress={Agendar}>
          {view == "Schedules"
          ?
          <Image source={agendamentosAtivo} style={styles.notificationImage}/>
          :
          <Image source={agendamentos} style={styles.notificationImage}/>
          }

          {view == "Schedules"
          &&
          <View style={styles.circle}>
            <Text style={styles.notificationText}>{sizeof}</Text>
          </View>
          
          }
           
          
        </TouchableOpacity>
        
        
      </View>
  )
}