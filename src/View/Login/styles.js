import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color:'#008b8d',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textinput: {
        fontSize: 18,
        padding: 10,
        width: '90%',
        borderBottomWidth: 1, 
        borderBottomColor: '#008b8d',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    confirmBottom:{
        marginTop: 20,
        height: 60,
        width: 300,
        backgroundColor: '#008b8d',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        borderRadius: 10,
    },  
    confirm:{
        color:'#fff',
        fontSize: 25,
    }
})

export default styles;