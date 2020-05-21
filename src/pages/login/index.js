import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TextInput, Image, Text, TouchableOpacity, Alert, Modal, Animated, TouchableHighlight, ActivityIndicator } from 'react-native';


import logoImg from '../../assets/meio.png';
import logoImg2 from '../../assets/cash.png';
import logomission from '../../assets/missao.png';
import logotitle from '../../assets/titulos.png';
import logoperfil from '../../assets/perfil.png';

import styles from './styles';
import api from '../../services/api';

export default function menu() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  var [senha, setSenha] = useState(false);
  const [visible, setvisible] = useState(false);
  var [email, setEmail] = useState('');
  var [usertop, setUsertop] = useState([]);
  var [user, setUser] = useState([]);
  var [password, setPassword] = useState('');
  var [user, setUser] = useState([]);



  async function logando() {


    /*console.log(email);
    console.log(password);
    console.log('---------------------------');*/
    try {
      const responsequestion = await api.post(`/login`, { email, password });
      setUser(responsequestion.data);

      if (responsequestion.status === 200) {
        setModalVisible(!modalVisible);
        setUsertop(responsequestion.data.user.id);

        setUser(responsequestion.data.user);

        //setvisible(!visible);

        navigateToQuiz(responsequestion.data.user);


      }
    } catch (error) {
      console.log(error)

      setModalVisible(!modalVisible);
      alert('email ou senha invalidos');

    }




  }
  function colocarsenha() {


  }


  function navigateToQuiz(user) {
    //setUsertop(user.user);
    //console.log(user.user);
    //const id =user.id;
    //console.log('teste');
    //console.log(user);
    // setvisible(!visible)
    // if(escolha ==1){
    navigation.navigate('menu', { user });
    // }else{
    //  navigation.navigate('menu2',{user});
    // }
    //navigation.navigate('menu2',{user});
  }
  function navigateToregistrer() {
    //setUsertop(user.user);
    //console.log(user.user);
    //const id =user.id;
    //console.log('teste');
    //console.log(user);
    navigation.navigate('registrar');
  }
  function colocartrue() {
    setModalVisible(!modalVisible);
    //console.log('teste')
  }
  return (

    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onShow={() => { logando() }}
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
        transparent={false}
        visible={visible}
        onShow={() => { }}
        style={styles.modalcor}
        onRequestClose={() => { Alert.alert("Modal has been closed."); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>escolha uma opção de layout</Text>


            <TouchableOpacity style={styles.action} onPress={() => navigateToQuiz(user, 2)}>
              <Text style={styles.actionText}>menor</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.action} onPress={() => navigateToQuiz(user, 1)}>
              <Text style={styles.actionText}>normal</Text>

            </TouchableOpacity>

          </View>
        </View>
      </Modal>

      <View style={styles.logintest}>


        <Image source={logoImg} />
        <View style={styles.top}>
          <Text style={styles.cash}>Bem-vindo</Text>
        </View>
        <Feather name="chevron-down" size={20} color="#6c63ff" />






        < View style={styles.login}>
          <Feather name="user" size={20} color="#fff" />
          <TextInput

            underlineColorAndroid="transparent"
            placeholder="digite seu login"
            placeholderTextColor="white"
            keyboardType="email-address"
            style={styles.logininput}
            onChangeText={(val) => setEmail(val)} />
        </View>

        < View style={styles.login}>
          <Feather name="key" size={20} color="#fff" />
          <TextInput

            underlineColorAndroid="transparent"
            placeholder="digite sua senha"
            placeholderTextColor="white"
            keyboardType={senha ? "visible-password" : "password"}
            style={styles.logininput}
            //maxLength={4}
            onChangeText={(val) => setPassword(val)} />

          <TouchableOpacity
            onPress={() => setSenha(!senha)}>

            <Feather name={senha ? "eye" : "eye-off"} size={20} color="#fff" />
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          style={styles.detailsButton}
          onPress={() => colocartrue()}
        >
          <Text style={styles.detailsButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.detailsButton, { width: 140 }]}
          onPress={() => navigateToregistrer()}
        >
          <Text style={styles.detailsButtonText}>CADASTRAR</Text>
        </TouchableOpacity>







      </View>

    </View>
  );



}
