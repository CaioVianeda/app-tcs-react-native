
import React, { useState } from 'react'
import {View, TextInput, Text, TouchableOpacity, Alert} from 'react-native';
import { connect } from 'react-redux';
import {editBirthdate,editCpf,editName,editSurname} from '../../redux/actions/LoginActions'

import styles from './styles'

import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from '@react-navigation/native'


function Login(props){
    
    const [cpf,setCpf] = useState();
    const [birthdate, setBirthdate] = useState();
    const [name,setName] = useState();
    const [surname,setSurname] = useState();
    const navigation = useNavigation()

    function register(){

        if(!name){
            return Alert.alert('Informe seu primeiro nome!');
        }else
        if(!surname){
            return Alert.alert('Informe seu sobrenome!');
        }else
        if(!birthdate){
            return Alert.alert('Informe sua data de nascimento!');
        }else
        if(!birthdate[9]){
            return Alert.alert('Informe uma data de nascimento válida!');
        }else
        if(!cpf){
            return Alert.alert('Informe seu CPF!');
        }else 
        if(!cpf[13]){
            return Alert.alert('Informe um CPF valido!');
        }else

        Alert.alert(
            'Cadastrado!',
            `Dados:\n
            Nome: ${name} ${surname}\n
            Nascimento: ${birthdate}\n
            CPF: ${cpf}\n`,
            
            [
              {text: 'Voltar'},
              {text: 'Confirmar', onPress: () => navegar()},
            ],
            { cancelable: true }
          )

    }
    
    function maskName(aux){
        
        const nameaux = aux

        if(nameaux != null && nameaux[0] <= 97 ){
            nameaux[0] = nameaux[0]-32
        }

        setName(nameaux)
    }

    function navegar(){

        props.editName(name);
        props.editSurname(surname);
        props.editBirthdate(birthdate);
        props.editCpf(cpf);
        navigation.navigate('Home');
    }

    return(

        
        <View style={styles.container}>
            
           
            <Text style={styles.title}>Área Restrita</Text>

               
                <TextInput placeholder={"Nome"} style={styles.textinput} onChangeText={text => {maskName(text)}}/>
                <TextInput placeholder={"Sobrenome"} style={styles.textinput} onChangeText={text => {setSurname(text)}}/>
                <TextInputMask
                placeholder={"Data de Nascimento"}
                style={styles.textinput}
                type={'datetime'}
                options={{format: 'DD/MM/YYYY' }}
                value={birthdate}
                onChangeText={text => {setBirthdate(text)}}/>

                <TextInputMask
                style={styles.textinput}
                value={cpf}
                onChangeText={text => {setCpf(text)}}
                type={'cpf'}
                placeholder={"CPF"}
                />

                <TouchableOpacity style={styles.confirmBottom} onPress={register}>
                    <Text style={styles.confirm}>AUTENTICAR</Text>
                </TouchableOpacity>

        </View>
        
    );
}

const mapStateToProps = (state) => {
    return { name: state.login.name,
     surname: state.login.surname, 
     birthdate: state.login.birthdate , 
     cpf: state.login.cpf,
    }
 }

 const LoginConnect = connect(mapStateToProps, {editName,editBirthdate,editSurname,editCpf})(Login);

export default LoginConnect;