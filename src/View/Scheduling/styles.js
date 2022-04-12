import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
 
  label: {
    color: '#707070',
    fontSize: 17,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#008b8d',
    marginHorizontal: 10
  },
  textTitle:{
    color: '#707070',
    fontSize: 16,
    paddingHorizontal: 10,

  },
  textHour:{
    color: '#707070',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  textHourInactive:{
    color: '#999999',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  inputarea: {
    fontSize: 16,
    padding: 10,
    width: '95%',
    borderWidth: 1,
    borderColor: '#008b8d',
    marginHorizontal: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'top'
  },
  inLine: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 50
  },
  inputInline: {
   flexDirection: 'row',
   alignItems: 'center', 
   marginVertical: 10
  },
  removeLabel: {
    fontWeight: 'bold',
    color: '#20295F',
    textTransform: 'uppercase',
    fontSize: 16
  },
  typeIconInative: {
    opacity: 0.5
  },
  containerModal:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "black"
  },
  headerModal:{
      width: '100%',
      height: 75,
      backgroundColor: '#008b8d',
      alignItems: 'center',
      justifyContent: 'center'
  },
  headerTextModal:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
  },
  hoursModal:{
      alignItems:'center',
      justifyContent: 'center',
      fontSize: 22,
      height: 55,
      width:'25%',
      margin: 2,
      borderBottomWidth: 1,
      borderColor: '#008b8d',
      padding: 15,
      borderRadius: 10,
  },
  textHoursModal:{
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
  },
  bottomCancelModal:{
      alignItems:'center',
      justifyContent: 'center',
      marginTop: 30,
      height: 55,
      width:'85%',
      
      borderRadius: 10,
  },
  bottomTextModal: {
      fontSize: 20,
      color: '#fff',
  },
  content: {
    width: '100%',
  },

});

export default styles;