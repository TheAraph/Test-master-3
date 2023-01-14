import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'
import { ScrollView } from 'react-native-gesture-handler'

const Register = () => {

  //set variables needed
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [waterGoal, setWaterGoal] = useState('')
  const [weightGoal, setWeightGoal] = useState('')
  const [calorieGoal, setCalorieGoal] = useState('')
  

  //registeruser function
  registerUser = async (email, password, firstName, lastName, weight, weightGoal, height, waterGoal, calorieGoal, age) => {
    //before moving wait for firebase auth
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => { //when firebase auth is present, send email verification
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: "true",
        url: 'https://healthify-2b416.firebaseapp.com',
      })
      .then(() => {//if it works, send email to inbox to verify
        alert('Congrats! You are now logged in. Please verify your email')
      }).catch((error) => {
          alert(error.message)
      })
      .then(() => {//add user to database
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
          weight,
          weightGoal,
          height,
          waterGoal,
          calorieGoal,
          age,
          caloriesConsumed : 0,
          waterDrank: 0,
          stepCounter: 0
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    })
    .catch((error => {
      alert(error.message)
    }))
  }


return(
  <ScrollView>
  <View style = {styles.container}>
        <Text style={styles.Headline4}>Welcome to</Text>
        <Text style={styles.Healthify}>Healthify</Text>
        <Text style={styles.Headline4}>Please Enter Your...</Text>
        <View style = {{marginTop: 20}}>
        <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChangeText={(firstName) => setFirstName(firstName)}
            autoCorrect={false}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChangeText={(lastName) => setLastName(lastName)}
            autoCorrect={false}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
        />
        </View>
        <View style = {{marginTop:20}}>
        <Text style={styles.Headline4}>Let's get to know you...</Text>
        </View>
        <View style = {{marginTop: 20}}>
        <TextInput
            style={styles.textInput}
            placeholder="Age"
            onChangeText={(age) => setAge(age)}
            autoCorrect={false}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.textInput}
            placeholder="Current Weight in kg"
            onChangeText={(weight) => setWeight(weight)}
            autoCorrect={false}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.textInput}
            placeholder="Weight Goal in kg"
            onChangeText={(weightGoal) => setWeightGoal(weightGoal)}
            autoCorrect={false}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.textInput}
            placeholder="Calorie Goal in cal"
            onChangeText={(calorieGoal) => setCalorieGoal(calorieGoal)}
            autoCorrect={false}
            keyboardType="number-pad"
        />
        <TextInput
            style={styles.textInput}
            placeholder="Height in cm"
            onChangeText={(height) => setHeight(height)}
            keyboardType="number-pad"
            autoCorrect={false}
        />
        <TextInput
            style={styles.textInput}
            placeholder="Water Goal in L"
            onChangeText={(waterGoal) => setWaterGoal(waterGoal)}
            keyboardType="number-pad"
            autoCorrect={false}
        />
        <TouchableOpacity 
            style = {styles.Button}
            onPress = {() => registerUser(email, password, firstName, lastName, weight, weightGoal, height, waterGoal, calorieGoal, age)}>
            <Text style = 
                {styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style = {{marginTop:20, alignItems:"center"}}
            onPress = {() => navigation.navigate('Login')}>
            <Text style = 
                {{
                    fontWeight:"bold",
                    fontSize: 16,
                    textDecorationLine: "underline",
                    fontFamily: "Avenir"
                }}>Already registered? Go back to Login</Text>
            
        </TouchableOpacity>
        </View>
        <View style = {{marginTop:40}}>
        <Text style={styles.Headline4}></Text>
        </View>
    </View>
    </ScrollView>
)
              }

export default Register

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: "center",
      marginTop:20,
  },
  newcontainer:{
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 341,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#FFF',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 25,
    borderWidth: 2,
  borderColor: 'black',
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
    },
    ButtonText:{
      fontFamily: "AvenirNext-Heavy",
      fontSize: 34,
      fontWeight: 'bold',
      color: '#fff'
    },
    Healthify:{
      fontFamily: "AvenirNext-Heavy",
      fontSize: 61,
      color: "#D5342B",
      fontWeight: 'bold',
    },
    HealthifyUserName:{
      fontFamily: "AvenirNext-Heavy",
      fontSize: 61,
      color: "#E2716B",
      fontWeight: 'bold',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: .2,
      shadowRadius: 5,
      elevation: 25,
    },
    Headline4:{
      fontFamily: "Avenir",
      fontSize: 34,
      color: "#000",
      marginTop: 10,
      alignItems: "center"
    },
    Headline4Courier:{
      fontFamily: "American Typewriter",
      fontSize: 34,
      color: "#000",
      margin: 10,
      alignItems: "center"
    },
    Button2:{
      marginTop:20, alignItems:"center",
    },
    Headline2Black:{
      fontFamily: "AvenirNext-Heavy",
      fontSize: 61,
      color: "#000",
      margin: 10,
      fontWeight: 'bold'
    },
    Button2Text:{
      fontWeight:"bold",
      fontSize: 16,
      textDecorationLine: "underline",
      fontFamily: "Avenir"
    },
    Date:{
      fontFamily: "AvenirNext-UltraLightItalic",
      fontSize: 24,
      color: "#000",
      fontStyle: 'italic',
      fontWeight: 'bold'
    }
})