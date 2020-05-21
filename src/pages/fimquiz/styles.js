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

    alignItems: 'center'
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
  question: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  pontos: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#6c63ff',
    marginBottom: 10,
  },

  questionProperty: {
    alignItems: 'center',
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  questionValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },
  nextBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,

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

  input: {
    backgroundColor: 'rgb(0, 0, 0)',
    textDecorationLine: 'none',
    height: 50,
    width: 200,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: 'rgb(73, 143, 255)',
    textAlign: 'center'
  },

  viewClock: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  inputTime: {
    backgroundColor: 'rgb(0, 0, 0)',
    textDecorationLine: 'none',
    height: 100,
    width: 130,
    padding: 10,
    fontSize: 50,
    marginTop: 10,
    marginBottom: 10,
    color: 'rgb(73, 143, 255)',
    textAlign: 'center',
  },

  alertText: {
    color: 'rgb(73, 143, 255)',
    fontSize: 20
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
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





});