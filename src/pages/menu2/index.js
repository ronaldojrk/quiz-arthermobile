import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';


import logoImg from '../../assets/meio.png';
import logoImg2 from '../../assets/cash.png';
import logomission from '../../assets/missao.png';
import logotitle from '../../assets/titulos.png';
import logoperfil from '../../assets/perfil.png';

import logoquestao from '../../assets/questao.png';
import logoquiz from '../../assets/quiz.png';
import logorank from '../../assets/rank.png';
import logorelatorio from '../../assets/relatorio.png';
import logodesconectar from '../../assets/desconectar.png';

import styles from './styles';

export default function menu() {
  const navigation = useNavigation();

  const route = useRoute();
  const [usergod, setUsergod] = useState([]);
  var usertop = route.params.user;
  //setUsergod(route.params.user);

  /* async function loadUser(){
       try {
           var usertop = route.params.id;
           const response = await api.get(`user/${usertop}`);
             console.log(response.data);
           setUsergod(response.data);
           
       } catch (error) {
           
       }

     }

     useEffect(()=>{
       loadUser();
       
     },[]);*/
  function navigateToQuiz(user) {
    navigation.navigate('quiz', { user });
  }
  function navigateTomissao(user) {
    alert('funcionalidade incompletar')
    //navigation.navigate('quiz',{user});
  }
  function navigateTotitulo(user) {
    alert('funcionalidade incompletar')
    // navigation.navigate('quiz',{user});
  }
  function navigateToperfil(user) {
    navigation.navigate('perfil', { user });
  }
  function navigateToRank(user) {
    navigation.navigate('rankcash', { user });
  }
  function navigateToDes() {
    navigation.navigate('login');
  }
  function navigateToRel(user) {
    navigation.navigate('records', { user });
  }
  function navigateToQueshome(user) {
    navigation.navigate('queshome', { user });
  }
  return (

    <View style={styles.container}>
      <Image source={logoImg} />
      <View style={styles.top}>
        <Text style={styles.cash}>Bem-vindo,{usertop.name}!</Text>


      </View>

      <View style={styles.top}>
        <Image source={logoImg2} />
        <Text style={styles.cash}>{usertop.cash}</Text>
      </View>

      <Feather name="chevron-down" size={20} color="#6c63ff" />


      <View style={styles.cardCon}>


        <View style={styles.card}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {/* <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateTotitulo(usertop)}
            >
              <Text style={styles.cardText}>Titulos</Text>
              <Image source={logotitle} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateTomissao(usertop)}
            >
              <Text style={styles.cardText}>missão</Text>
              <Image source={logomission} />
            </TouchableOpacity>*/}



            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToQuiz(usertop)}
            >
              <Text style={styles.cardText}>Quiz</Text>
              <Image source={logoquiz} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToQueshome(usertop)}
            >
              <Text style={styles.cardText}>Questão</Text>
              <Image source={logoquestao} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToRel(usertop)}
            >
              <Text style={styles.cardText}>Relatorio</Text>
              <Image source={logorelatorio} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToRank(usertop)}
            >
              <Text style={styles.cardText}>Rank Global</Text>
              <Image source={logorank} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToperfil(usertop)}
            >
              <Text style={styles.cardText}>Perfil</Text>
              <Image source={logoperfil} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToDes()}
            >
              <Text style={styles.cardText}>Desconectar</Text>
              <Image source={logodesconectar} />
            </TouchableOpacity>


          </ScrollView>
        </View>

      </View>






    </View>
  );



}
