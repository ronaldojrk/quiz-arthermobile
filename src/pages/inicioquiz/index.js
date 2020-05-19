import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/meio.png';
import { CheckBox } from "native-base";
import api from '../../services/api';
import styles from './styles';
import logoImg2 from '../../assets/cash.png';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';


//import api from '../../services/api';


export default function inicioquiz() {

  var [select, setSelect] = useState([0]);

  var [relogio1, setRelogio1] = useState([0]);
  const [modalVisible, setModalVisible] = useState(true);

  var [acerto, setAcertos] = useState(0);
  var [pontos, setPontos] = useState(0);
  var [contacerto, setContacerto] = useState(0);
  var [antesAcerto, setAntesAcerto] = useState(false);
  const navigation = useNavigation();


  var [question1, setQuestion1] = useState([{ acerto: 0, pontos: 0 }]);



  //var [countdownInterval,setCountdownInterval] =useState([0]);

  var [seconds, setSeconds] = useState([10]);
  var [start, setStart] = useState(false);
  var [status, setStatus] = useState(['Start']);



  var [num, setNum] = useState([0]);
  const [istrue, setIstrue] = useState(true);
  var num2 = 0;
  var relogio;
  var tempo2;


  const route = useRoute();
  const question = route.params.fist;
  const user = route.params.user;
  const test = route.params.test;
  //const user_id = route.params.idquestion;


  function navigateToQuestions(fist, user) {
    //Console.log(question)

    navigation.navigate('questions', { fist, user, test });
  }
  function navigateToQuiz(user) {
    //Console.log(question)

    navigation.navigate('quiz', { user });
  }

  ///
  async function loadQuiz() {
    const user1 = route.params.user;
    const test1 = route.params.test;
    //setModalVisible(!modalVisible);
    const response = await api.get(`recordistask/${user1.id}/${test1.id}`);
    console.log(response.data)
    if (response.data.message == 'nao pode fazer') {
      setModalVisible(!modalVisible);
      navigateToQuiz(user1);
      alert('voce ja fez essa atividade');

    } else {
      setModalVisible(!modalVisible);
      alert('voce pode fazer essa atividade');

    }
    //console.log(response.data);
    // setQuiz(response.data);
    //setModalVisible(!modalVisible);

  }

  useEffect(() => {
    loadQuiz();

  }, []);


  return (

    <View style={styles.container}>

      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onShow={() => { loadQuiz() }}
        style={styles.modalcor}
        onRequestClose={() => { Alert.alert("Modal has been closed."); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Carregando</Text>

          </View>
        </View>
      </Modal>
      <View style={styles.header}>






      </View>



      <View style={styles.question}>

        <Text style={[styles.questionProperty, { marginTop: 0 }]}>instruções para fazer a atividade:</Text>
        <Text style={styles.questionValue}>{console.log(test)}</Text>

        <TouchableOpacity style={styles.action} onPress={() => navigateToQuestions(question, user, test)}>
          <Text style={styles.actionText}>Iniciar</Text>

        </TouchableOpacity>

      </View>








      <View>


      </View>







    </View>
  );

}

