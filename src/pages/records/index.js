import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Alert, Modal, ActivityIndicator } from 'react-native';


import api from '../../services/api';

import logoImg from '../../assets/meio.png';

import styles from './styles';
import logoImg2 from '../../assets/cash.png';
import questions from '../questions';


export default function rankcash() {

  const route = useRoute();
  const [user, setUser] = useState([]);
  const [question, setQuestion] = useState([]);
  var usertop = route.params.user;
  const [modalVisible, setModalVisible] = useState(true);

  const navigation = useNavigation();





  function navigateToQuestions(fist) {
    //Console.log(question)

    navigation.navigate('questions', { fist });
  }



  async function loadQuiz() {
    var usertop = route.params.user;
    const response = await api.get(`recorduser/${usertop.id}`);
    console.log(response.data);
    setUser(response.data);
    setModalVisible(!modalVisible);

  }
  function navigateToMenu(user) {
    //Console.log(question)

    navigation.navigate('menu', { user });
  }

  useEffect(() => {
    loadQuiz();

  }, []);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onShow={() => { loadQuiz() }}
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
          onPress={() => navigateToMenu(usertop)}
        >

          <Feather name="arrow-left" size={35} color="#6c63ff" />
        </TouchableOpacity>

        <View style={styles.actions}>




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
        data={user}
        style={styles.quizlist}
        // passa o id
        keyExtractor={user => String(user.id)}
        // mostra o negocio do scroo
        showsVerticalScrollIndicator={false}
        renderItem={({ item: user }) => (
          <View style={styles.quiz}>
            <Text style={styles.quizProperty}> Cash: <Text style={styles.quizValue}>{user.pontos}</Text>  Acertos: <Text style={styles.quizValue}>{user.acerto}</Text> Total de questão: <Text style={styles.quizValue}>{user.totalquest}</Text></Text>




          </View>

        )}
      />
    </View>
  );

}
