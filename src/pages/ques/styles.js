import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#3F3D56',
    //backgroundColor:'#3F3D56'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'space-between',
    alignItems: 'center',

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
    marginTop: 150,
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

  card: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    marginEnd: 10,
    width: 400,


  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  action: {
    backgroundColor: '#6c63ff',
    borderRadius: 8,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#6c63ff',

  },
  item: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  checkBoxTxt: {
    marginLeft: 20
  },



});