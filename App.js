import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, {useState, useEffect} from 'react';
import {firebase} from './config';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from "./src/Login";
import Register from "./src/Register"
import Home from "./src/Home";
import Header from "./components/Header";
import Health from "./src/Health";
import Resources from "./src/Resources";
import MainContainer from "./src/mainContainer";

const Stack = createStackNavigator();

function App(){
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //Handle user state changes
  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }

  //detect state
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  //If user is not logged in, show only login and signup pages
  if (!user){
    return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          
          options={{
            headerTitle: () => <Header name = "Healthify"></Header>,
            headerStyle: {
            height:98,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowRadius: 10,
            elevation: 25
          }
          }}

          />
        <Stack.Screen 
          name = "Register" 
          component = {Register}

          options={{
            headerTitle: () => <Header name = "Healthify"/>,
            headerStyle: {
            height:98,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowRadius: 10,
            elevation: 25
          }
          }}
          />

      </Stack.Navigator>
    );
  }


  const homeName = 'Home';
  const healthName = 'Health';
  const infoName = 'Info';
  const stackContainer = ' ';

  const Tab = createBottomTabNavigator();

  //When user is signed in
  return (
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if(rn === homeName) {
                iconName = focused ? 'home' : 'home-outline'
            } else if (rn === healthName) {
                iconName = focused ? 'heart' : 'heart-outline'
            } else if (rn === infoName) {
                iconName = focused ? 'information' : 'information-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color}/>
        },
    })}
    
    tabBarOptions={{
        activeTintColor: '#D5342B',
        inactiveTintColor: 'grey',
        tabBarVisible: false,
        labelStyle: { fontSize: 15}
    }}

    >

    <Tab.Screen 
    name={homeName} 
    component={Home} 
    options={{
          headerTitle: () => <Header name = "Home"/>,
          headerStyle: {
            height:98,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowRadius: 10,
            elevation: 25
          }
        }}
    />
    <Tab.Screen name={healthName} component={Health} options={{
          headerTitle: () => <Header name = "Health"/>,
          headerStyle: {
            height:98,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowRadius: 10,
            elevation: 25
          }
        }}/>
    <Tab.Screen name={infoName} component={Resources} options={{
          headerTitle: () => <Header name = "Resources"/>,
          headerStyle: {
            height:98,
            borderBottomLeftRadius:30,
            borderBottomRightRadius:30,
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowRadius: 10,
            elevation: 25
          }
        }}/>
    </Tab.Navigator>

  )
}

export default () => {
  return(
    
    <NavigationContainer>
        <App />
    </NavigationContainer>
    
  )
}