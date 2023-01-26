import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native';
import FormNo from '../Components/FormNo';
import { signInWithEmailAndPassword } from "@firebase/auth";
import { authentication } from '../Firebase/firebase';



const Signin = ({navigation})=>{
  //Variables to be used within this file.
const [Password, setPassword] =useState('');
const [email, setEmail] =useState('');
const [errorMessage, setErrorMessage] = useState('');
const [FailInfo,setFailInfo] = useState(false);




//Navigation function to take the user to the SignUp screen.
  function navigate(){
      navigation.navigate('SignUp');
  }


//If the user foes not fill in their name and password this reminder will pop-up.
  const InputValidation =()=>{
 var Inputs = [email,Password];
 if(Inputs.includes('') || Inputs.includes(undefined)){ //If either input is empty this statement will run.
  setErrorMessage('Missing Email or Password'); //Message displayed to user
  return setFailInfo(true); //returns the error message popup
 }
  }


//uses Firebase to Authenticate if the user exists.
  const SignInUser = ()=> {
    signInWithEmailAndPassword(authentication,email,Password) //Uses firebase to check if the relivent data exists in the database.
    .then((re)=>{
      navigation.navigate('Home'); //If true the user will be taken to the home page.
    })
    .catch((re)=>{
      console.log(re);
    })
   }


//This code checks if the FailInfo variable is true and if it is it will display the fail info form with the correct error message.
  {
    FailInfo == true?
    <FailInfo hideErrorOverlay={setFailInfo} err={errorMessage}/>
    :
    null
   }






/*
Screen, split into sections the Top secction shows an image I hae created to act as a background.
the bottom contains all the inpurs and outputs for the buttons and the forms for signOn.
*/
return(


<View style={styles.Main}>


<View style={styles.Top}>
 <Image style={styles.ImageStyle} source={require('../assets/images/Backgorund.jpg')}/>
</View>


<View style={styles.Bot}>
  <Text style={styles.Header}>
    Welcome back!
  </Text>


<View style={styles.FormView}>
  <TextInput value={email} onChangeText={(val)=>setEmail(val)} placeholder={"Email address"} placeholderTextColor={"#6b564e"} style={styles.TextInput}/>
  <TextInput value={Password} onChangeText={(val)=>setPassword(val)} secureTextEntry={true} placeholder={"Password"} secureTextEntry={true} placeholderTextColor={"#6b564e"} style={styles.TextInput}/>
<TouchableOpacity style={styles.Button} onPress={SignInUser}>
  <Text style={styles.BtnTxt}> Sign in </Text>
</TouchableOpacity>
</View>
<TouchableOpacity style={styles.Button2} onPress={navigate}>
  <Text style={styles.BtnTxt2}>
    Sign up
  </Text>
 </TouchableOpacity>
</View>
</View>
)
}


//Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({
Main: {
   flex:1,
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'#6b564e',
   },
Top:{
   width:'100%',
   height:'40%',
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
  
   },
Bot:{
   top:40,
   width:'100%',
   height:'60%',
   backgroundColor:'#c9bea7',
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
   shadowColor: 'rgba(0, 0, 0, 0.9)',
   shadowOpacity: 1,
   elevation: 6,
   shadowRadius: 23,
   shadowOffset : { width: 1, height: 13},
   },


ImageStyle:{
   width:'100%',
   resizeMode:'contain'
},


Header:{
   color:'#6b564e',
   fontSize:36,
   fontWeight:'',
   marginLeft:'23%',
   marginTop:60,
   fontFamily: 'Bodoni 72 Oldstyle',
},


TextInput:{
   width:'90%',
   left: '5%',
   borderWidth:1,
   borderColor:'#6b564e',
   height:52,
   borderRadius:10,
   marginTop:20,
   color:'#6b564e',
   fontFamily: 'Bodoni 72 Oldstyle',
},


FormView:{
   width:'100%',
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   marginTop:40
},


Button:{
   width:'90%',
   color:'#000',
   height:52,
   backgroundColor:'#6b564e',
   borderRadius: 10,
   marginTop:20,
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   left: '5%',
   shadowColor: 'rgba(0, 0, 0, 0.8)',
   shadowOpacity: 1,
   elevation: 6,
   shadowRadius: 4 ,
   shadowOffset : { width: 1, height: 13},
},


BtnTxt:{
   fontWeight:'bold',
   fontSize:20,
   color: '#ffffff',
   fontFamily: 'Bodoni 72 Oldstyle',
},


BtnTxt2:{
   fontWeight:'bold',
   fontSize:18,
   color: '#6b564e',
   fontFamily: 'Bodoni 72 Oldstyle',
},


SignupTxt:{
   color:'#6b564e',
},


Button2:{
   width:'90%',
   color:'#000',
   height:52,
   backgroundColor:'#c9bea7',
   borderRadius: 10,
   marginTop:20,
   display:'flex',
   justifyContent:'center',
   alignItems:'center',
   left: '5%'
}
 });





export default Signin

 