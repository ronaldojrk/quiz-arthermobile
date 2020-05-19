import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Alert, Modal } from 'react-native';


import api from '../../services/api';

import logoImg from '../../assets/meio.png';

import styles from './styles';
import logoImg2 from '../../assets/cash.png';
import questions from '../questions';


export default function quiz() {

  const route = useRoute();
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState([]);
  var usertop = route.params.user;
  const [modalVisible, setModalVisible] = useState(true);

  const navigation = useNavigation();

  async function toQuestions(test) {

    if (test.user_id == usertop.id) {
      alert('voce nao pode fazer essa atividade por quer vc criou')
    } else {
      try {
        console.log('teste-começa=------------');
        const responsequestion = await api.post(`quizpagina2/${test.id}`);
        //loadQuestion(test.id);
        //setQuestion(responsequestion.data);
        const questionfist = responsequestion.data;
        //console.log(test.id) ;
        //console.log(responsequestion.data);
        console.log('taindo');
        // do{
        // const questionid =test.id;
        //if(question!==undefined){

        //esperaAi();
        //setInterval(() => navigateToQuestions(), 3000);
        //setTimeout(()=>{navigateToQuestions(questionfist);},5000);
        navigateToQuestions(questionfist, usertop, test);
        //navigation.navigate('questions',{question});
        // console.log(question);

        // }
        // console.log('errado');

        // }while(question===undefined)


      } catch (error) {


      }



    }
  }


  /*function esperaAi(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve(navigateToQuestions());},5000);
    });
  }*/
  function navigateToQuestions(fist, user, test) {
    //Console.log(question)

    navigation.navigate('inicioquiz', { fist, user, test });
  }


  /* async function loadQuestion(id){
     const responsequestion =await api.post(`quizpagina2/${id}`);
     setQuestion(responsequestion.data);
   }*/


  async function loadQuiz() {


    const response = await api.get('quiz');
    //console.log(response.data);
    setQuiz(response.data);
    setModalVisible(!modalVisible);

  }
  function navigateToMenu(user) {
    //Console.log(question)

    navigation.navigate('menu', { user });
  }
  function navigateToCreateTask(user) {
    //Console.log(question)

    navigation.navigate('task', { user });
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
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigateToMenu(usertop)}
        >

          <Feather name="arrow-left" size={35} color="#6c63ff" />
        </TouchableOpacity>

        <View style={styles.actions}>

          <TouchableOpacity style={styles.action} onPress={() => navigateToCreateTask(usertop)}>
            <Text style={styles.actionText}>criar</Text>
          </TouchableOpacity>


        </View>
      </View>

      <View style={styles.cent}>

        <View style={styles.top}>
          <Text style={styles.cash}>{usertop.name}</Text>
        </View>

        <View style={styles.top}>
          <Image source={logoImg2} />
          <Text style={styles.cash}>{usertop.cash}</Text>
        </View>

        <Feather name="chevron-down" size={20} color="#6c63ff" />
      </View>

      <FlatList
        data={quiz}
        style={styles.quizlist}
        // passa o id
        keyExtractor={quiz => String(quiz.id)}
        // mostra o negocio do scroo
        showsVerticalScrollIndicator={false}
        renderItem={({ item: quiz }) => (
          <View style={[
            styles.quiz,
            {
              backgroundColor: quiz.user_id == usertop.id ? '#6c63ff' : '#fff',
            },
          ]}>
            <Text style={styles.quizProperty}>Titulo:</Text>
            <Text style={[styles.quizValue, {
              color: quiz.user_id == usertop.id ? "#fff" : "#737380",
            }]}>{quiz.title}</Text>

            <Text style={styles.quizProperty}>descricao:</Text>
            <Text style={[styles.quizValue, {
              color: quiz.user_id == usertop.id ? "#fff" : "#737380",
            }]}>{quiz.description}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => toQuestions(quiz)}
            >
              <Text style={styles.detailsButtonText}>fazer a atividade</Text>
              <Feather name="arrow-right" size={16} color="#6c63ff" />
            </TouchableOpacity>
          </View>

        )}
      />
    </View>
  );

}
