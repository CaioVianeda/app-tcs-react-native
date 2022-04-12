import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  filter: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    height: 70,
    alignItems: 'center'
  },
  filterTextActived: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#008b8d'
  },
  filterTextInative: {
    color: '#20295f',
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.5
  },
  content: {
    width: '100%',
    marginTop: 30
  },
  title: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#20295f',
    alignItems: 'center'
  },
  titleText: {
    color: '#20295f',
    fontSize: 18,
    position: 'relative',
    top: 11,
    backgroundColor: '#FFF',
    paddingHorizontal: 10
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    marginVertical: 10,
    height: 80,
    elevation: 5,
    borderRadius: 10
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: 'bold', 
    fontSize: 16
  },
  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  cardDate: {
    color: '#008b8d',
    fontWeight: 'bold',
    fontSize: 16
  },
  cardTime: {
    color: '#707070'
  },
  imageIcon: {
    width: 40,
    height: 40,
    
  }
});

export default styles;