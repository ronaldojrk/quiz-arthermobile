import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TextInput, Image, Text, TouchableOpacity, Alert, Modal, Animated, ScrollView, ActivityIndicator } from 'react-native';


import logoImg from '../../assets/meio.png';
import logoImg2 from '../../assets/cash.png';
import logomission from '../../assets/missao.png';
import logotitle from '../../assets/titulos.png';
import logoperfil from '../../assets/perfil.png';
import { CheckBox } from "native-base";

import styles from './styles';
import api from '../../services/api';

export default function ques() {
  var [select, setSelect] = useState([0]);
  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  var [user, setUser] = useState([]);
  var [enunciated, setEnunciated] = useState([]);
  //var [alternativetrue,setAlternativetrue]=useState([]);
  var [alternativea, setAlternativea] = useState([]);
  var [alternativeb, setAlternativeb] = useState([]);
  var [alternativec, setAlternativec] = useState([]);
  var [timelimite, setTimelimite] = useState([60]);

  var usertop = route.params.user;



  async function criandoQuest(al) {
    setVisible(!visible);
    const alternativetrue = al;


    /*console.log(usertop.id);
    console.log(enunciated);
    console.log(alternativetrue);
    console.log(alternativea);
    console.log(alternativeb);
    console.log(alternativec);
    console.log(timelimite);*/
    //console.log(email);

    console.log('---------------------------');
    try {
      const responsequestion = await api.post(`users/${usertop.id}/questionsregister`, { enunciated, alternativetrue, alternativea, alternativeb, alternativec, timelimite });
      //setUser(responsequestion.data);

      if (responsequestion.status === 200) {
        //setModalVisible(!modalVisible);
        console.log('deu sucesso')
        alert('Questão registrada com sucesso');
        //setUsertop(responsequestion.data.user.id);

        setVisible(!visible);
        navigateToMenu(usertop);


      }
    } catch (error) {
      console.log('deu errado')
      alert('Erro na criação de questão');

      // setModalVisible(!modalVisible);

    }




  }




  /* function navigateToQuiz(user){
     //setUsertop(user.user);
     //console.log(user.user);
     //const id =user.id;
     //console.log('teste');
     //console.log(user);
     navigation.navigate('menu',{user});
   }*/
  /*function colocartrue(){
    setModalVisible(!modalVisible);
    //console.log('teste')
}*/
  function navigateToMenu(user) {
    //Console.log(question)

    navigation.navigate('menu', { user });
  }
  function navigateToCreateQuest(user) {
    //Console.log(question)

    navigation.navigate('ques', { user });
  }
  function check() {
    /*setAlternativetrue('');
    console.log(alternativetrue);*/

    navigation.navigate('ques', { user });
  }
  function colocartruefinal(i) {
    setModalVisible(!modalVisible);
    setSelect(0);
    //console.log(i)
    switch (i) {
      case 1:
        //setAlternativetrue(alternativea);
        criandoQuest(alternativea);

        break;

      case 2:
        //setAlternativetrue(alternativeb);
        criandoQuest(alternativeb);

        break;

      case 3:
        //setAlternativetrue(alternativec);
        criandoQuest(alternativec);

        break;


    }

    /*console.log(alternativetrue)
    setModalVisible(!modalVisible);*/

    // criandoQuest();

  }
  function zera() {
    setSelect(0)
    //console.log(select)
  }


  function tudoDiferentedenull() {
    if (alternativea.length !== 0 && alternativeb.length !== 0 && alternativec.length !== 0 && enunciated.length !== 0 && timelimite !== 0 && timelimite <= 60) {
      // alert('vamos')
      setModalVisible(!modalVisible);
    } else {
      alert('Preenchar todos os dados')
      // setModalVisible1(!modalVisible1);

    }

  }
  return (

    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onShow={() => { }}
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





      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { Alert.alert("Modal has been closed."); }}
        onShow={() => { zera() }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Marque a alternativa certa.</Text>
            <View style={styles.item} >
              <CheckBox checked={select === 1} color="#6c63ff" onPress={() => setSelect(1)} />
              <Text style={
                {
                  ...styles.checkBoxTxt,
                  color: select === 1 ? "#6c63ff" : "gray",
                  fontWeight: select === 1 ? "bold" : "normal"
                }}
              >{alternativea}</Text>
            </View>
            <View style={styles.item} >
              <CheckBox checked={select === 2} color="#6c63ff" onPress={() => setSelect(2)} />
              <Text style={
                {
                  ...styles.checkBoxTxt,
                  color: select === 2 ? "#6c63ff" : "gray",
                  fontWeight: select === 2 ? "bold" : "normal"
                }}
              >{alternativeb}</Text>
            </View>
            <View style={styles.item} >
              <CheckBox checked={select === 3} color="#6c63ff" onPress={() => setSelect(3)} />
              <Text style={
                {
                  ...styles.checkBoxTxt,
                  color: select === 3 ? "#6c63ff" : "gray",
                  fontWeight: select === 3 ? "bold" : "normal"
                }}
              >{alternativec}</Text>
            </View>


            <TouchableOpacity style={styles.action} onPress={() => colocartruefinal(select)}>
              <Text style={styles.actionText}>Marcar</Text>
            </TouchableOpacity>

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

          <TouchableOpacity style={styles.action} onPress={() => tudoDiferentedenull()}>
            <Text style={styles.actionText}>Criar</Text>
          </TouchableOpacity>


        </View>
      </View>

      <View style={styles.logintest}>



        <Feather name="chevron-down" size={20} color="#6c63ff" />

        <View style={styles.card}>
          <ScrollView>


            < View style={styles.login}>
              <TextInput

                underlineColorAndroid="transparent"
                placeholder="digite o enuciado"
                placeholderTextColor="white"
                style={styles.logininput}
                maxLength={250}
                onChangeText={(val) => setEnunciated(val)} />
            </View>


            < View style={styles.login}>
              <TextInput

                underlineColorAndroid="transparent"
                placeholder="digite sua alternativa a"
                placeholderTextColor="white"
                style={styles.logininput}
                maxLength={250}
                onChangeText={(val) => setAlternativea(val)}
              />
            </View>
            < View style={styles.login}>
              <TextInput

                underlineColorAndroid="transparent"
                placeholder="digite sua alternativa b"
                placeholderTextColor="white"
                style={styles.logininput}
                maxLength={250}
                onChangeText={(val) => setAlternativeb(val)}
              />
            </View>
            < View style={styles.login}>
              <TextInput

                underlineColorAndroid="transparent"
                placeholder="digite sua alternativa c"
                placeholderTextColor="white"
                style={styles.logininput}
                maxLength={250}
                onChangeText={(val) => setAlternativec(val)}
              />
            </View>


          </ScrollView>



        </View>





      </View>

    </View>
  );



}
