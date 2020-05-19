import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();
import Quiz from './pages/quiz';
import Questions from './pages/questions';
import Menu from './pages/menu';
import Login from './pages/login';
import Queshome from './pages/queshome';
import Ques from './pages/ques';
import Task from './pages/task';
import Rel from './pages/relogio';
import Rank from './pages/rankcash';
import Inquiz from './pages/inicioquiz';
import Fnquiz from './pages/fimquiz';
import Registrar from './pages/registro';
import Records from './pages/records';
import Perfil from './pages/perfil';
import Menu2 from './pages/menu2';

export default function Routes() {

  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }} >

        <AppStack.Screen name="login" component={Login} />
        <AppStack.Screen name="menunormal" component={Menu} />
        <AppStack.Screen name="quiz" component={Quiz} />
        <AppStack.Screen name="questions" component={Questions} />
        <AppStack.Screen name="queshome" component={Queshome} />
        <AppStack.Screen name="ques" component={Ques} />
        <AppStack.Screen name="task" component={Task} />
        <AppStack.Screen name="rankcash" component={Rank} />
        <AppStack.Screen name="inicioquiz" component={Inquiz} />
        <AppStack.Screen name="fimquiz" component={Fnquiz} />
        <AppStack.Screen name="registrar" component={Registrar} />
        <AppStack.Screen name="records" component={Records} />
        <AppStack.Screen name="perfil" component={Perfil} />
        <AppStack.Screen name="menu" component={Menu2} />
      </AppStack.Navigator>

    </NavigationContainer>

  );
}