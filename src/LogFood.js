import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'
import { ScrollView } from 'react-native-gesture-handler';


const LogFood = () => {
    const navigation = useNavigation()
    
    const [caloriesConsumed, setCaloriesConsumed] = useState('')
    useEffect(() => {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
        .then((snapshot) => {
          if(snapshot.exists){
            setCaloriesConsumed(snapshot.data().caloriesConsumed)
          }
          else{
            console.log('User does not exist')
          }
        })
      }, [])

      const updateFood = () => {
        const db = firebase.firestore();
        db.collection("users").doc(firebase.auth().currentUser.uid).update({
            caloriesConsumed: caloriesConsumed
        })
        .then(function() {
            console.log("Calories Consumed successfully updated!");
            alert('Calories Consumed successfully updated!')
            navigation.navigate('Health');
        })
        .catch(function(error) {
            console.error("Error updating Calories Consumed: ", error);
        });
    }

  return (
    <ScrollView>
    <View>
      <View style = {styles.container}>
      <Text style={styles.Headline4}>Enter Calories Consumed</Text>
      <TextInput
            style={styles.textInput}
            placeholder="Calories Consumed"
            onChangeText={(caloriesConsumed) => setCaloriesConsumed(caloriesConsumed)}
            keyboardType="number-pad"
            autoCorrect={false}
        />
      <TouchableOpacity style = {styles.Button} onPress = {() => updateFood()}>
        <Text style = {styles.ButtonText}>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.Button} onPress = {() => navigation.navigate('FoodDrink')}>
        <Text style = {styles.ButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )
}

export default LogFood

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    marginTop:30,
    justifyContent:"flex-end"
},
textInput:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 344,
    height: 73,
    borderRadius:15,
    elevation: 3,
    backgroundColor: '#FFF',
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
    fontFamily: 'Avenir'
  },
  Button:{
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .5,
    shadowRadius: 3,
    elevation: 25,
  },
  ButtonText:{
    fontFamily: "AvenirNext-Heavy",
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  Healthify:{
    fontFamily: "Helvetica",
    fontSize: 61,
    color: "#D5342B",
    margin: 0,
    fontWeight: 'bold',
  },
  Headline4:{
    fontFamily: "Avenir",
  fontSize: 34,
  color: "#000",
  margin: 10,
  textAlign: 'center'
  }
})



  