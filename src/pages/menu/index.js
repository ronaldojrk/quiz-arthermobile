import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';


import logoImg from '../../assets/meio.png';
import logoImg2 from '../../assets/cash.png';
import logomission from '../../assets/missao.png';
import logotitle from '../../assets/titulos.png';
import logoperfil from '../../assets/perfil.png';

import styles from './styles';

export default function menu() {
  const navigation = useNavigation();

  const route = useRoute();
  const [usergod, setUsergod] = useState([]);
  const [menu, setMenu] = useState([1]);
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
    navigation.navigate('quiz', { user, menu });
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
    navigation.navigate('perfil', { user, menu });
  }
  function navigateToRank(user) {
    navigation.navigate('rankcash', { user, menu });
  }
  function navigateToRel(user) {
    navigation.navigate('records', { user, menu });
  }
  function navigateToQueshome(user) {
    navigation.navigate('queshome', { user, menu });
  }
  return (

    <View style={styles.container}>
      <Image source={logoImg} />
      <View style={styles.top}>
        <Text style={styles.cash}>Bem-vindo, {usertop.name}</Text>


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
            <TouchableOpacity
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
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardItem}
              onPress={() => navigateToperfil(usertop)}
            >
              <Text style={styles.cardText}>Perfil</Text>
              <Image source={logoperfil} />
            </TouchableOpacity>

          </ScrollView>
        </View>

      </View>


      <View style={styles.tabsCon}>


        <View style={styles.tabs}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => navigateToQuiz(usertop)}
            >
              <Text style={styles.tabText}>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => navigateToQueshome(usertop)}
            >
              <Text style={styles.tabText}>Questão</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => navigateToRel(usertop)}
            >
              <Text style={styles.tabText}>relatorio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => navigateToRank(usertop)}
            >
              <Text style={styles.tabText}>Rank Global</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>

      </View>



    </View>
  );



}
