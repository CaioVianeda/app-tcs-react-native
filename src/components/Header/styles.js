import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    backgroundColor: '#074d9b',
    borderBottomWidth: 5,
    borderBottomColor: '#008b8d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 60,
    height: 60
  },
  notification: {
    position: 'absolute',
    right: 20
  },
  notificationImage: {
    marginTop: 10,
    width: 35,
    height: 35
  },
  notificationText: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: '#008b8d',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 22,
    bottom: 22
  },
  leftIcon: {
    position: 'absolute',
    left: 20,
    bottom: 16
  },
  leftIconImage: {
    width: 35,
    height: 35
  }
});

export default styles;