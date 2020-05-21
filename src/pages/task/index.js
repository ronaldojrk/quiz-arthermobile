import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, TextInput, Image, Text, TouchableOpacity, Modal, Alert, ScrollView } from 'react-native';

import SelectMultiple from 'react-native-select-multiple'


import api from '../../services/api';

import logoImg from '../../assets/meio.png';

import styles from './styles';
import logoImg2 from '../../assets/cash.png';

//import questions from '../questions';


export default function task() {

  const route = useRoute();
  const [quiz, setQuiz] = useState([]);
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [question, setQuestion] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  var usertop = route.params.user;



  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected]);

  const navigation = useNavigation();





  function navigateToMenu(user) {
    //Console.log(question)

    navigation.navigate('menu', { user });
  }
  function logando() {
    //title.length!=0
    // description.length!==0 && title.length!==0

    if (description.length !== 0 && title.length !== 0) {
      var j = 0;
      for (var [kei, valu] of selected) {
        //console.log(key + " = " + value);
        if (valu === true) {
          j++;

        }
      }
      if (j > 5) {

        /* console.log('----------teste')
         console.log(selected)
         console.log(title)
         console.log(description)
         //console.log(usertop)*/

        setModalVisible(!modalVisible);
      } else {
        console.log('errou nao selecinou uma quest ou')
        alert('Precisa selecionar 6 question no minimo pra fazer um quiz')
      }


    } else {
      console.log('errou feio')
      alert('preenchar os dados de titulo e descrição')

    }

  }
  function navigateToCreateTask(user, sel, title, description) {
    var id_question = [];
    //const newSel = new Map(sel);

    ////console.log(title)
    //console.log(description)
    for (var [key, value] of sel) {
      //console.log(key + " = " + value);
      if (value === true) {
        //console.log('---passou')
        // console.log(key);
        //teste(key);
        id_question.push(key);//

      }
    }

    teste(title, description, user, id_question)

  }
  async function teste(title, description, user, id_question) {
    try {
      console.log('-->to' + title)
      console.log('-->desc' + description)
      console.log('-> user' + user.id)
      console.log('->idsques' + id_question)

      const responsetask = await api.post(`users/${user.id}/tasksregister`, { title, description });
      if (responsetask.status === 200) {
        console.log('deu sucesso')
        criarTask(responsetask.data.id, id_question)
      }

    } catch (error) {
      console.log('deu errado')
      setModalVisible(!modalVisible);
      alert('Deu erro na criação do quiz talvez o titulo ja existe')

    }


  }
  async function criarTask(task_id, id) {
    try {

      for (var i = 0; i < id.length; i++) {
        var question_id = id[i];
        const responsetask = await api.post(`task/question`, { task_id, question_id });
        if (responsetask.status === 200) {
          console.log('deu sucesso nas quest')
          //alert('erro na criação do quiz');  
        }
      }
      alert('Quiz criado');
      setModalVisible(!modalVisible);
      navigateToMenu(usertop);

    } catch (error) {
      alert('Erro na criação do quiz');
      console.log('deu erro na criação de quiz')
      setModalVisible(!modalVisible);

    }

  }


  async function loadQuestion() {
    var usertop = route.params.user;
    setUser(usertop);
    const response = await api.get(`users/${usertop.id}/questionslistnotuser`);
    //console.log(response.data);
    setQuestion(response.data);

  }

  useEffect(() => {
    loadQuestion();

  }, []);



  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onShow={() => { navigateToCreateTask(usertop, selected, title, description) }}
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

          <TouchableOpacity style={styles.action} onPress={() => logando()}>
            <Text style={styles.actionText}>criar</Text>
          </TouchableOpacity>


        </View>
      </View>

      <View style={styles.cent}>




        < View style={styles.login}>

          <TextInput

            underlineColorAndroid="transparent"
            placeholder="digite o titulo da atividade"
            placeholderTextColor="white"
            style={styles.logininput}
            onChangeText={(val) => setTitle(val)} />
        </View>
        < View style={styles.login}>

          <TextInput

            underlineColorAndroid="transparent"
            placeholder="digite a descrição de sua atividade"
            placeholderTextColor="white"
            style={styles.logininput}
            onChangeText={(val) => setDescription(val)} />
        </View>

      </View>




      <FlatList
        data={question}
        style={styles.quizlist}
        extraData={selected}
        // passa o id
        keyExtractor={question => String(question.id)}
        // mostra o negocio do scroo
        showsVerticalScrollIndicator={false}
        renderItem={({ item: question }) => (

          <View style={styles.quiz}>



            <TouchableOpacity
              onPress={() => onSelect(question.id)}
              style={[
                styles.quizProperty,
                {
                  backgroundColor: !!selected.get(question.id) ? '#6c63ff' : '#fff',
                },
              ]}
            >
              <Text style={[styles.quizValue,
              {
                color: !!selected.get(question.id) ? "#fff" : "#000000",
                fontWeight: !!selected.get(question.id) ? "bold" : "normal"
              }]}><Text style={styles.quizProperty}>codigo :</Text> {question.id}  <Text style={styles.quizProperty}>Enuciado :</Text> {question.enunciated}</Text>

            </TouchableOpacity>




          </View>


        )}

      />
    </View>
  );

}
