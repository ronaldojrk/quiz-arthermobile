import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: '#3F3D56',
    //backgroundColor:'#3F3D56'
  },
  logintest: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 10,
    marginBottom: 100,

    backgroundColor: '#3F3D56',

  },
  login: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#3F3D56',
    marginHorizontal: 20,
    marginBottom: 40,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    elevation: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6c63ff',

  },
  logininput: {
    marginLeft: 10,
    flex: 1,
    fontWeight: '700',
    color: '#fff',
    backgroundColor: '#3F3D56',

  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cash: {
    fontSize: 18,
    marginLeft: 1,
    color: '#fff',
    fontWeight: 'bold'
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c63ff',
    height: 50,
    width: 140,
    padding: 30,
    borderRadius: 8,
    marginBottom: 16,

  },
  detailsButtonText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'

  },




  modalView: {
    margin: 20,
    marginTop: 300,
    paddingTop: Constants.statusBarHeight + 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  modalcor: {
    backgroundColor: "#F194FF",

  },



});