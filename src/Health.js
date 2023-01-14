import { StatusBar } from 'expo-status-bar';
import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import Weight from "../src/Weight";
import FoodDrink from "../src/FoodDrink";
import Sleep from "../src/Sleep";
import LogWeight from "../src/LogWeight";
import LogDrink from "../src/LogDrink";
import LogFood from "../src/LogFood";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Health = () => {
  const navigation = useNavigation()
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={() => (
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.card} onPress = {() => navigation.navigate('Weight')}>
              <Image  
              source = {require('../assets/img_245669.png')}
              style = {styles.image}>
              </Image>
                <Text style = {styles.btntext}>Weight</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.card} onPress = {() => navigation.navigate('Sleep')}>
              <Image  
              source = {require('../assets/Sleep-PNG-HD.png')}
              style = {styles.image}>
              </Image>
                <Text style = {styles.btntext}>Sleep</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.card} onPress = {() => navigation.navigate('FoodDrink')}>
              <Image  
              source = {require('../assets/icone-de-nourriture-noire-symbole-png.png')}
              style = {styles.image}>
              </Image>
                <Text style = {styles.btntext}>Food {'\n'}& Drink</Text>
              </TouchableOpacity>
            </View>
          )}

          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Weight" 
          component={Weight} 
          options={{
          headerTitle: () => <Header name = "Weight"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Stack.Screen 
          name="Sleep" 
          component={Sleep} 
          options={{
          headerTitle: () => <Header name = "Sleep"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Stack.Screen 
          name="FoodDrink" 
          component={FoodDrink} 
          options={{
          headerTitle: () => <Header name = "Food & Drink"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Stack.Screen 
          name="LogWeight" 
          component={LogWeight} 
          options={{
          headerTitle: () => <Header name = "Log Weight"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Stack.Screen 
          name="LogDrink" 
          component={LogDrink} 
          options={{
          headerTitle: () => <Header name = "Log Drink"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Stack.Screen 
          name="LogFood" 
          component={LogFood} 
          options={{
          headerTitle: () => <Header name = "Log Food"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
      </Stack.Navigator>
  )
}


export default Health

const styles = StyleSheet.create({
  btntext:{
    fontFamily: "AvenirNext-Heavy",
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    right: 75
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 344,
    height: 73,
    borderRadius: 73,
    elevation: 3,
    backgroundColor: '#D5342B',
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  input:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 344,
    height: 73,
    borderRadius:50,
    elevation: 3,
    backgroundColor: '#FFF',
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
  },
  headline4:{
    fontFamily: "AvenirNext-Heavy",
    fontSize: 34,
    color: "#000",
    margin: 10,
  },
  headline4INPUT:{
    fontFamily: "Helvetica",
    fontSize: 34,
    color: "grey",
    margin: 10,
  },
  headline4DATE:{
    fontFamily: "Helvetica",
    fontSize: 34,
    color: "#000",
    margin: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  headline2BLACK:{
    fontFamily: "Helvetica",
    fontSize: 61,
    color: "#000",
    margin: 10,
    fontWeight: 'bold',
  },
  card:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 341,
      height: 177, 
      borderRadius: 30,
      elevation: 3,
      backgroundColor: '#D5342B',
      marginBottom: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 25,
      borderWidth: 2,
    borderColor: 'black',
  },
  rightContainer:{
    backgroundColor: '#96d0e3'
  },
  image: {
    position: 'absolute',
    top: 35,
    left: 200,
    right: 0,
    bottom: 0,
    width: 100,
    height: 100,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 25,
  }
})