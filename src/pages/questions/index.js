import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/meio.png';
import { CheckBox } from "native-base";
import api from '../../services/api';
import styles from './styles';
import logoImg2 from '../../assets/cash.png';
import moment from 'moment';
import CountDown from 'react-native-countdown-component';


export default function questions() {
  const navigation = useNavigation();
  var [select, setSelect] = useState([0]);
  var [relogio1, setRelogio1] = useState([60]);
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setvisible] = useState(false);

  var [acerto, setAcertos] = useState(0);
  var [pontos, setPontos] = useState(0);
  var [contacerto, setContacerto] = useState(0);
  var [antesAcerto, setAntesAcerto] = useState(false);

  var [question1, setQuestion1] = useState([{ acerto: 0, pontos: 0 }]);



  //var [countdownInterval,setCountdownInterval] =useState([0]);

  var [seconds, setSeconds] = useState([10]);
  var [start, setStart] = useState(false);
  var [status, setStatus] = useState(['Start']);


  function navigateToQuestions(acerto, pontos, user, test, total) {
    //setIstrue(!istrue);
    setvisible(!visible);
    /*console.log(user);
    console.log(acerto);
    console.log(pontos);*/
    const tudo = {
      acerto: acerto,
      total: total,
      pontos: pontos,
      user: user,
      test: test,
    }
    //console.log(tudo);
    navigation.navigate('fimquiz', tudo);
  }



  var [num, setNum] = useState([0]);
  var [istrue, setIstrue] = useState(true);
  var num2 = 0;
  var relogio;
  var tempo2;


  const route = useRoute();
  const question = route.params.fist;
  const user = route.params.user;
  const test = route.params.test;

  ///










  function proximoQuest(ac, po, num, contacerto, antesAcerto, i) {
    if (i == 1) {
      setModalVisible(!modalVisible);
      setIstrue(!istrue);
    }
    setRelogio1(60);
    if (num < question.length - 1) {
      console.log('------------ testando')
      /* console.log('antes e depois');
       console.log(' num->' + num);
       console.log('conta ' + contacerto)
       console.log(' true/false->' + antesAcerto);*/
      /* console.log(' select->'+select);
        console.log('conta a'+contacerto)
        console.log(' true/false->'+antesAcerto);
        console.log(' acertos->'+ac);
        console.log(' pontos->'+po);
        console.log(' a->'+question[[parseInt(num)]].alternativea)
        console.log(' b->'+question[[parseInt(num)]].alternativeb)
        console.log(' c->'+question[[parseInt(num)]].alternativec)
        console.log(' true->'+question[[parseInt(num)]].alternativetrue)
        console.log(question[[parseInt(num)]].alternativetrue===question[[parseInt(num)]].alternativeb)
        console.log('teste'==='teste')*/
      /* if(question[[parseInt(num)]].alternativetrue===question[[parseInt(num)]].alternativeb){
          console.log('true ronaldo')
        }else{
          console.log('false ronadlo')
        }
*/



      switch (select) {
        case 1:
          if (question[[parseInt(num)]].alternativea == question[[parseInt(num)]].alternativetrue) {
            let acer = ac + 1;
            setAcertos(acer);
            if (antesAcerto) {
              if (contacerto < 2 && contacerto > 0) {
                let p = po + 120;
                setPontos(p);

              }
              if (contacerto < 4 && contacerto >= 2) {
                let p = po + 130;
                setPontos(p);

              }


              if (contacerto < 6 && contacerto >= 4) {
                let p = po + 140;
                setPontos(p);



              }
              if (contacerto >= 6) {
                let p = po + 200;
                setPontos(p);



              }


              let cont = contacerto + 1;
              setContacerto(cont)


            } else {
              let p = po + 100;
              setPontos(p)
              setAntesAcerto(!antesAcerto)
              let cont = contacerto + 1;
              setContacerto(cont)
            }

          } else {

            let cont = 0;
            setContacerto(cont)

          }

          break;

        case 2:
          if (question[[parseInt(num)]].alternativeb == question[[parseInt(num)]].alternativetrue) {
            let acer = ac + 1;
            setAcertos(acer);
            if (antesAcerto) {
              if (contacerto < 2 && contacerto > 0) {
                let p = po + 120;
                setPontos(p);

              }
              if (contacerto < 4 && contacerto >= 2) {
                let p = po + 130;
                setPontos(p);

              }


              if (contacerto < 6 && contacerto >= 4) {
                let p = po + 140;
                setPontos(p);



              }
              if (contacerto >= 6) {
                let p = po + 200;
                setPontos(p);



              }


              let cont = contacerto + 1;
              setContacerto(cont)


            } else {
              let p = po + 100;
              setPontos(p)
              setAntesAcerto(!antesAcerto)
              let cont = contacerto + 1;
              setContacerto(cont)
            }

          } else {

            let cont = 0;
            setContacerto(cont)

          }

          break;
        case 3:
          if (question[[parseInt(num)]].alternativec == question[[parseInt(num)]].alternativetrue) {
            let acer = ac + 1;
            setAcertos(acer);
            if (antesAcerto) {
              if (contacerto < 2 && contacerto > 0) {
                let p = po + 120;
                setPontos(p);

              }
              if (contacerto < 4 && contacerto >= 2) {
                let p = po + 130;
                setPontos(p);

              }


              if (contacerto < 6 && contacerto >= 4) {
                let p = po + 140;
                setPontos(p);



              }
              if (contacerto >= 6) {
                let p = po + 200;
                setPontos(p);



              }


              let cont = contacerto + 1;
              setContacerto(cont)


            } else {
              let p = po + 100;
              setPontos(p)
              setAntesAcerto(!antesAcerto)
              let cont = contacerto + 1;
              setContacerto(cont)
            }

          } else {

            let cont = 0;
            setContacerto(cont)

          }

          break;




      }
      /*console.log(antesAcerto);
      console.log(acerto);
      console.log(pontos);*/
      /* if(num<question.length-1){
        num++;
        
        setNum(num++);
         
      } */
      //if(num<question.length-1){

      num++;
      setNum(num++);
      // }


      setSelect(0);

      /*console.log(' final->');
      console.log(' num->'+num);
      console.log(' select->'+select);
      console.log(' true/false->'+antesAcerto);
      console.log(' acertos->'+acerto);
      console.log(' pontos->'+pontos);*/
      //iniciarRelogio();
    } else {
      console.log('------------ testando')
      /* console.log('antes e depois');
       console.log(' num->' + num);
       console.log('conta a' + contacerto)
       console.log(' true/false->' + antesAcerto);*/
      /* console.log(' select->'+select);
        console.log('conta a'+contacerto)
        console.log(' true/false->'+antesAcerto);
        console.log(' acertos->'+ac);
        console.log(' pontos->'+po);
        console.log(' a->'+question[[parseInt(num)]].alternativea)
        console.log(' b->'+question[[parseInt(num)]].alternativeb)
        console.log(' c->'+question[[parseInt(num)]].alternativec)
        console.log(' true->'+question[[parseInt(num)]].alternativetrue)
        console.log(question[[parseInt(num)]].alternativetrue===question[[parseInt(num)]].alternativeb)
        console.log('teste'==='teste')*/
      /* if(question[[parseInt(num)]].alternativetrue===question[[parseInt(num)]].alternativeb){
          console.log('true ronaldo')
        }else{
          console.log('false ronadlo')
        }
*/



      switch (select) {
        case 1:
          if (question[[parseInt(num)]].alternativea == question[[parseInt(num)]].alternativetrue) {
            let acer = ac + 1;
            setAcertos(acer);
            if (antesAcerto) {
              if (contacerto < 2 && contacerto > 0) {
                let p = po + 120;
                setPontos(p);

              }
              if (contacerto < 4 && contacerto >= 2) {
                let p = po + 130;
                setPontos(p);

              }


              if (contacerto < 6 && contacerto >= 4) {
                let p = po + 140;
                setPontos(p);



              }
              if (contacerto >= 6) {
                let p = po + 200;
                setPontos(p);



              }


              let cont = contacerto + 1;
              setContacerto(cont)


            } else {
              let p = po + 100;
              setPontos(p)
              setAntesAcerto(!antesAcerto)
              let cont = contacerto + 1;
              setContacerto(cont)
            }

          } else {

            let cont = 0;
            setContacerto(cont)

          }

          break;

        case 2:
          if (question[[parseInt(num)]].alternativeb == question[[parseInt(num)]].alternativetrue) {
            let acer = ac + 1;
            setAcertos(acer);
            if (antesAcerto) {
              if (contacerto < 2 && contacerto > 0) {
                let p = po + 120;
                setPontos(p);

              }
              if (contacerto < 4 && contacerto >= 2) {
                let p = po + 130;
                setPontos(p);

              }


              if (contacerto < 6 && contacerto >= 4) {
                let p = po + 140;
                setPontos(p);



              }
              if (contacerto >= 6) {
                let p = po + 200;
                setPontos(p);



              }


              let cont = contacerto + 1;
              setContacerto(cont)


            } else {
              let p = po + 100;
              setPontos(p)
              setAntesAcerto(!antesAcerto)
              let cont = contacerto + 1;
              setContacerto(cont)
            }

          } else {

            let cont = 0;
            setContacerto(cont)

          }

          break;
        case 3:
          if (question[[parseInt(num)]].alternativec == question[[parseInt(num)]].alternativetrue) {
            let acer = ac + 1;
            setAcertos(acer);
            if (antesAcerto) {
              if (contacerto < 2 && contacerto > 0) {
                let p = po + 120;
                setPontos(p);

              }
              if (contacerto < 4 && contacerto >= 2) {
                let p = po + 130;
                setPontos(p);

              }


              if (contacerto < 6 && contacerto > 4) {
                let p = po + 140;
                setPontos(p);



              }
              if (contacerto >= 6) {
                let p = po + 200;
                setPontos(p);



              }


              let cont = contacerto + 1;
              setContacerto(cont)


            } else {
              let p = po + 100;
              setPontos(p)
              setAntesAcerto(!antesAcerto)
              let cont = contacerto + 1;
              setContacerto(cont)
            }

          } else {

            let cont = 0;
            setContacerto(cont)

          }

          break;




      }


      setSelect(0);

      console.log('terminou o quiz');
      /*console.log(antesAcerto);*/
      /* console.log(acerto);
       console.log(pontos);*/
      setIstrue(istrue);
      setvisible(!visible);
      //navigateToQuestions();




    }


  }



  var countdownInterval = 0;



  function iniciarRelogio() {

    if (start) {
      setNum(1)
      console.log('ronaldo start')
      setStatus('Stop')
      setStart(false)
      clearInterval(countdownInterval);
      startCountdown(0);
    }
    else {


      console.log('stop')
      setStatus('Start')
      setStart(true)
      startCountdown(0);


    }


    function startCountdown(i) {
      if (i == 1) {
        clearInterval(countdownInterval);

      } else {
        const explodeTime = moment();
        let sec = seconds ? seconds : 0;
        explodeTime.add(sec, 'seconds');

        const currentTime = moment();
        let diffTime = explodeTime.unix() - currentTime.unix();
        let duration = moment.duration(diffTime * 1000, 'milliseconds');
        const interval = 1000;

        /* console.log(explodeTime)
         console.log(currentTime)
         console.log(diffTime)
         console.log(duration)
         console.log(interval)*/


        if (diffTime > 0) {
          countdownInterval = setInterval(() => {
            duration = moment.duration(duration.asMilliseconds() - interval, 'milliseconds');
            sec = moment.duration(duration).seconds().toString();

            var segundos = seconds
            segundos = sec.length === 1 ? '0' + sec : sec;


            if (num == 1) {
              console.log('parou aqui')
              console.log(num)
            }
            if (segundos <= 0) {
              clearInterval(countdownInterval);
              console.log("nao foi");
            }
            setSeconds(segundos)
            //this.setState({ bombClock: bombClock });
          }, 1000);
        }

      }

    }




  }


  function pararRelogio() {
    clearInterval(relogio)


  }


  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { Alert.alert("Modal has been closed."); }}
          onShow={() => { setIstrue(!istrue) }}
        >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>acabou sem tempo</Text>
              <TouchableOpacity style={styles.action} onPress={() => proximoQuest(acerto, pontos, num, contacerto, antesAcerto, 1)}>
                <Text style={styles.actionText}>proximo</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>

        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={() => { Alert.alert("Modal has been closed."); }}
          onShow={() => setIstrue(!istrue)}
        >

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>finalizar atividade</Text>

              <TouchableOpacity style={styles.action} onPress={() => navigateToQuestions(acerto, pontos, user, test, question.length)}>
                <Text style={styles.actionText}>ok</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
        <CountDown
          id={question[[parseInt(num)]].enunciated}
          until={relogio1}
          onPress={() => alert('hello')}
          running={istrue}
          size={12}
          onFinish={() => { setModalVisible(!modalVisible) }}
          digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#6c63ff' }}
          digitTxtStyle={{ color: '#6c63ff' }}
          timeToShow={['S']}
          //timeLabels={{ s: 'Sec' }}
          timeLabels={{ m: null, s: null }}

        />

        {/*console.log(question[parseInt(num)].timelimite)*/}



        <Text style={styles.headerText}>
          questão: <Text style={styles.headerTextBold}>{parseInt(num) + 1}/{question.length}</Text>
        </Text>


        <View style={styles.actions}>

          <TouchableOpacity style={styles.action} onPress={() => proximoQuest(acerto, pontos, num, contacerto, antesAcerto, 0)}>
            <Text style={styles.actionText}>proximo</Text>

          </TouchableOpacity>




          {/**  <TouchableOpacity style={styles.action} onPress={()=>iniciarRelogio()}>
                    <Text style={styles.actionText}>{status}</Text>
                  </TouchableOpacity>
                 
                */}

        </View>
      </View>



      <View style={styles.question}>

        <Text style={[styles.questionProperty, { marginTop: 0 }]}>Enuciado:</Text>
        <Text style={styles.questionValue}>{question[parseInt(num)].enunciated}</Text>
      </View>

      <View style={styles.item} >
        <CheckBox checked={select === 1} color="#6c63ff" onPress={() => setSelect(1)} />
        <Text style={
          {
            ...styles.checkBoxTxt,
            color: select === 1 ? "#6c63ff" : "gray",
            fontWeight: select === 1 ? "bold" : "normal"
          }}
        >{question[[parseInt(num)]].alternativea}</Text>
      </View>
      <View style={styles.item} >
        <CheckBox checked={select === 2} color="#6c63ff" onPress={() => setSelect(2)} />
        <Text style={
          {
            ...styles.checkBoxTxt,
            color: select === 2 ? "#6c63ff" : "gray",
            fontWeight: select === 2 ? "bold" : "normal"
          }}
        >{question[[parseInt(num)]].alternativeb}</Text>
      </View>
      <View style={styles.item} >
        <CheckBox checked={select === 3} color="#6c63ff" onPress={() => setSelect(3)} />
        <Text style={
          {
            ...styles.checkBoxTxt,
            color: select === 3 ? "#6c63ff" : "gray",
            fontWeight: select === 3 ? "bold" : "normal"
          }}
        >{question[[parseInt(num)]].alternativec}</Text>

      </View>



      {/* <Text style={styles.headerText}>
        acerto{acerto} pontos {pontos} cont {contacerto}
      </Text>     */}




      <View>


      </View>







    </View>
  );

}

