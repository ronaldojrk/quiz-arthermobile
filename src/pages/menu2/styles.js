import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 0,
    backgroundColor: '#3F3D56'
    //backgroundColor:'#3F3D56'
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    marginLeft: 1,
    color: '#fff',
    fontWeight: 'bold'
  },
  cash: {
    fontSize: 18,
    marginLeft: 1,
    color: '#fff',
    fontWeight: 'bold'
  },
  cardCon: {
    height: 300,
    marginTop: 20,
    width: 400,
  },
  card: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    marginEnd: 15,

  },
  cardItem: {
    marginLeft: 15,
    width: 370,
    height: 300,
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
    alignItems: 'center',
  },
  cardText: {
    color: '#6c63ff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    alignItems: 'center'

  },

  tabsCon: {
    height: 120,
    marginTop: 20,
    width: 400,
    //marginTop: Constants.statusBarHeight,

  },

  tabs: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    marginEnd: 10

  },
  tabItem: {

    marginLeft: 10,
    width: 120,
    height: 80,
    padding: 12,
    paddingRight: 10,

    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 16,
    alignItems: 'center',

  },
  tabText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
    alignItems: 'center'

  },



});