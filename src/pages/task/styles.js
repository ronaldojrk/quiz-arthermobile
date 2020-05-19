import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#3F3D56'
  },
  cent: {


    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    color: '#fff',
  },
  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 40,
    color: '#fff',
  },
  descp: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
  },

  quizlist: {

    marginTop: 32,


  },
  quiz: {
    color: '#6c63ff',
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#6c63ff',
    marginBottom: 16,
  },


  quizProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  quizValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  detailsButtontText: {
    color: '#6c63ff',
    fontSize: 15,
    fontWeight: 'bold'

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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },


  modalcor: {
    backgroundColor: "#F194FF",

  },

});