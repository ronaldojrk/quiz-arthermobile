import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/meio.png';
import { CheckBox } from "native-base";
import api from '../../services/api';
import styles from './styles';
import logoImg2 from '../../assets/cash.png';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';


export default function fimquiz() {

  var [select, setSelect] = useState([0]);
  var [relogio1, setRelogio1] = useState([0]);
  const [modalVisible, setModalVisible] = useState(false);

  var [acerto, setAcertos] = useState(0);
  var [pontos, setPontos] = useState(0);
  var [contacerto, setContacerto] = useState(0);
  var [antesAcerto, setAntesAcerto] = useState(false);
  const navigation = useNavigation();
  const [visible, setvisible] = useState(false);

  var [question1, setQuestion1] = useState([{ acerto: 0, pontos: 0 }]);


  function navigateToQuiz(user) {
    //Console.log(question)

    navigation.navigate('quiz', { user });
  }



  //var [countdownInterval,setCountdownInterval] =useState([0]);

  var [seconds, setSeconds] = useState([10]);
  var [start, setStart] = useState(false);
  var [status, setStatus] = useState(['Start']);
  var [record, setRecods] = useState([]);



  var [num, setNum] = useState([0]);
  const [istrue, setIstrue] = useState(false);
  var num2 = 0;
  var relogio;
  var tempo2;


  const route = useRoute();
  //const question = route.params.fist;
  const user = route.params;
  //const user_id = route.params.idquestion;


  /*function navigateToQuestions(fist,user){
    //Console.log(question)
    
    navigation.navigate('questions',{fist,user});
  }*/
  async function test(cash, user_id) {
    //const cash=user.pontos;
    console.log(cash)
    console.log(user_id)
    try {
      //const responsecash =await api.put(`addcash/${user_id}`,{cash});
      const responsecash = await api.post(`addcash/${user_id}`, { cash: cash });
      setvisible(!visible);
      console.log('foi')
      if (responsecash.status == 200) {
        navigateToQuiz(responsecash.data)

      }

    } catch (error) {
      setvisible(!visible);
      console.log('nao foi foi')
      console.log(error)

    }
  }
  ///
  async function finalizar() {

    const user = route.params;
    const pontos = user.pontos;
    const acerto = user.acerto;
    const cash = user.pontos;
    const totalquest = user.total;
    const mytime = 60;
    try {

      const responsequestion = await api.post(`recordcreate/${user.user.id}/${user.test.id}`, { pontos, acerto, totalquest });
      console.log(responsequestion.data);
      setRecods(responsequestion.data);
      console.log('test')
      //if(responsequestion.status==200){
      console.log('teste')
      test(cash, user.user.id);

      //navigateToQuiz(user.user)
      // }


    } catch (error) {

    }





  }




  return (

    <View style={styles.container}>
      <View style={styles.header}>






      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => { Alert.alert("Modal has been closed."); }}
        onShow={() => finalizar()}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>finalizando aguarde...</Text>



          </View>
        </View>
      </Modal>



      <View style={styles.question}>

        <Text style={[styles.questionProperty, { marginTop: 0 }]}>instruções para fazer a atividade:</Text>
        <Text style={styles.questionValue}>{console.log('v---------------------')}</Text>


        <TouchableOpacity style={styles.action} onPress={() => setvisible(!visible)}>
                                         <Text style={styles.actionText}>finalizar quiz</Text>

        </TouchableOpacity>



      </View>








      <View>


      </View>







    </View>
  );

}

