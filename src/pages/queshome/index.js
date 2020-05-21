import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Alert, Modal, ActivityIndicator } from 'react-native';


import api from '../../services/api';

import logoImg from '../../assets/meio.png';

import styles from './styles';
import logoImg2 from '../../assets/cash.png';
//import questions from '../questions';


export default function queshome() {
  const route = useRoute();
  const [user, setUser] = useState([]);
  const [question, setQuestion] = useState([]);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(true);


  function navigateToMenu(user) {
    //Console.log(question)

    navigation.navigate('menu', { user });
  }
  function navigateToCreateQuest(user) {
    //Console.log(question)

    navigation.navigate('ques', { user });
  }





  async function loadQuestion() {
    var usertop = route.params.user;
    setUser(usertop);
    const response = await api.get(`users/${usertop.id}/questionslistnotuser`);
    //console.log(response.data);
    setQuestion(response.data);
    setModalVisible(!modalVisible);

  }

  useEffect(() => {
    loadQuestion();

  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onShow={() => { loadQuestion() }}
        style={styles.modalcor}
        onRequestClose={() => { Alert.alert("Modal has been closed."); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Carregando...</Text>
            <ActivityIndicator size="large" color="#6c63ff" />

          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => navigateToMenu(user)}
        >

          <Feather name="arrow-left" size={35} color="#6c63ff" />
        </TouchableOpacity>

        <View style={styles.actions}>

          <TouchableOpacity style={styles.action} onPress={() => navigateToCreateQuest(user)}>
            <Text style={styles.actionText}>criar</Text>
          </TouchableOpacity>


        </View>
      </View>

      <View style={styles.cent}>

        <View style={styles.top}>
          <Text style={styles.cash}>{user.name}</Text>
        </View>

        <View style={styles.top}>
          <Image source={logoImg2} />
          <Text style={styles.cash}>{user.cash}</Text>
        </View>

        <Feather name="chevron-down" size={20} color="#6c63ff" />

      </View>

      <FlatList
        data={question}
        style={styles.quizlist}
        // passa o id
        keyExtractor={question => String(question.id)}
        // mostra o negocio do scroo
        showsVerticalScrollIndicator={false}
        renderItem={({ item: question }) => (
          <View style={styles.quiz}>
            <Text style={styles.quizProperty}>codigo da questão:</Text>
            <Text style={styles.quizValue}>{question.id}</Text>
            <Text style={styles.quizProperty}>enuciado:</Text>
            <Text style={styles.quizValue}>{question.enunciated}</Text>
            <Text style={styles.quizProperty}>alternative a :</Text>
            <Text style={styles.quizValue}>{question.alternativea}</Text>
            <Text style={styles.quizProperty}>alternative b :</Text>
            <Text style={styles.quizValue}>{question.alternativeb}</Text>
            <Text style={styles.quizProperty}>alternative c :</Text>
            <Text style={styles.quizValue}>{question.alternativec}</Text>
            <Text style={styles.quizProperty}>alternative certa :</Text>
            <Text style={styles.quizValue}>{question.alternativetrue}</Text>
            { /*<Text style={styles.quizProperty}>tempo da questão :</Text>
            <Text style={styles.quizValue}>{question.timelimite}</Text>*/}

          </View>

        )}
      />
    </View>
  );

}
