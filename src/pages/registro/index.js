import React,{useState,useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation,useRoute} from '@react-navigation/native';
import{View,TextInput,Image,Text,TouchableOpacity,Alert,Modal,Animated,TouchableHighlight} from 'react-native';


import logoImg from '../../assets/meio.png';
import logoImg2 from '../../assets/cash.png';
import logomission from '../../assets/missao.png';
import logotitle from '../../assets/titulos.png';
import logoperfil from '../../assets/perfil.png';

import styles from './styles';
import api from '../../services/api';

export default function registrar() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    var [email,setEmail]=useState('');
    var [name,setName]=useState('');
    var [usertop,setUsertop]=useState([]);
    var [password,setPassword]=useState('');
    var [user,setUser]=useState([]);

    
    
    async function logando(){

      
      /*console.log(email);
      console.log(password);
      console.log('---------------------------');*/
      try {
        const responsequestion =await api.post(`/register`,{name,email,password});
        setUser(responsequestion.data);

        if(responsequestion.status===200){
          setModalVisible(!modalVisible);
          setUsertop(responsequestion.data.user.id);


          navigateToQuiz(responsequestion.data.user);
          
          
        }
      } catch (error) {
        console.log(error)
        
        setModalVisible(!modalVisible);
        alert('dados ja existente ou serviço indisponivel tente mais tarde');
        
      }




    }
    
    
      function navigateToQuiz(user){
        //setUsertop(user.user);
        //console.log(user.user);
        //const id =user.id;
        //console.log('teste');
        //console.log(user);
        navigation.navigate('menu',{user});
      }
      function navigateToregistrer(){
        //setUsertop(user.user);
        //console.log(user.user);
        //const id =user.id;
        //console.log('teste');
        //console.log(user);
        navigation.navigate('login');
      }
      function colocartrue(){
        setModalVisible(!modalVisible);
        //console.log('teste')
    }
    return(
        
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onShow={()=>{logando()}}
                style={styles.modalcor}
                onRequestClose={() => {Alert.alert("Modal has been closed.");}}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Carregando</Text>

                  </View>
                </View>
              </Modal>

          <View style={styles.logintest}>

         
            <Image source={logoImg}/>
            <View style={styles.top}>
            <Text style={styles.cash}>Bem-vindo</Text>
            </View>
            <Feather name="chevron-down" size={20} color="#6c63ff"/>


            
            


            < View style={styles.login}>
            <Feather name="user" size={20} color="#fff"/>
            <TextInput
                  
                  underlineColorAndroid="transparent"
                  placeholder="digite seu nome"
                  placeholderTextColor="white"
                  style={styles.logininput}
                  onChangeText={(val)=>setName(val)}/>
            </View>
            < View style={styles.login}>
            <Feather name="user" size={20} color="#fff"/>
            <TextInput
                  
                  underlineColorAndroid="transparent"
                  placeholder="digite seu email"
                  placeholderTextColor="white"
                  style={styles.logininput}
                  onChangeText={(val)=>setEmail(val)}/>
            </View>

            < View style={styles.login}>
            <Feather name="key" size={20} color="#fff"/>
            <TextInput

                  underlineColorAndroid="transparent"
                  placeholder="digite sua senha"
                  placeholderTextColor="white"
                  style={styles.logininput}
                  //maxLength={4}
                  onChangeText={(val)=>setPassword(val)}/>
            </View>


            <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={()=>colocartrue()}
                  >
                    <Text style={styles.detailsButtonText}>CADASTRAR</Text>
                  </TouchableOpacity>
            <TouchableOpacity 
                        style={styles.detailsButton} 
                        onPress={()=>navigateToregistrer()}
                  >
                    <Text style={styles.detailsButtonText}>LOGIN</Text>
                  </TouchableOpacity>


           


              
            
                  </View>     
            
        </View>
    );



}
