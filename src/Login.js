import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../config'


const Login = () => {
    //login variables
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //login function
  loginUser = async (email, password) => {
    try{//try authenticate using username and password
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error){
        //show error message
        alert("Incorrect email or email doesn't exist")
    }
  }

  //forgot password
  const forgotPassword = () => {
      firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent")
      }).catch((error) => {
        alert("Incorrect email or email doesn't exist!")
      })
  }

  return (
    <View style = {styles.container}>
        <Text style={styles.Headline4}>Welcome to</Text>
        <Text style={styles.Healthify}>Healthify</Text>
        <View style = {{marginTop: 40}}>
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
        <TouchableOpacity 
            style = {styles.Button}
            onPress = {() => loginUser(email, password)}>
            <Text style = 
                {styles.ButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style = {{marginTop:20, alignItems:"center", fontFamily:"Avenir"}}
            onPress = {() => navigation.navigate('Register')}>
            <Text style = 
                {{
                    fontWeight:"bold",
                    fontSize: 16,
                    textDecorationLine: "underline",
                    fontFamily: "Avenir"
                }}>Don't have an account? Sign Up Here</Text>
            
        </TouchableOpacity>
        <TouchableOpacity
            style = {{marginTop:20, alignItems:"center", fontFamily:"Avenir"}}
            onPress = {() => {forgotPassword()}}>
            <Text style = 
                {{
                    fontWeight:"bold",
                    fontSize: 16,
                    textDecorationLine: "underline",
                    fontFamily: "Avenir"
                }}>Forgot Password</Text>
            
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

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
      marginTop: 70,
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