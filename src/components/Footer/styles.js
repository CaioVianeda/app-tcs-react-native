import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#074d9b',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 5,
    borderTopColor: '#008b8d',
    alignItems: 'center',
  }, 
  button: {
    position: 'relative',
    top: -40
  },
  image: {
    width: 80,
    height: 80
  },
  text: {
    position: 'relative',
    top: -35,
    color: '#FFF'
  }

});

export default styles;