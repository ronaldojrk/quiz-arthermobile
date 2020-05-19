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
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
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
    color: '#737380',
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

});