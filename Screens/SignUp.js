import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {authentication} from '../Firebase/firebase';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import FormNo from '../Components/FormNo';
import FormYes from '../Components/FormYes';

const SignUp = ({navigation})=>{

//Variables to be used within this file.
const [Name, setName] =useState('');
const [email, setEmail] =useState('');
const [password, setPassword] =useState('');
const [confPassword, setConfPassword] =useState('');
const [displayFailInfo,setDisplayFailInfo] = useState(false);
const [errMessage, setErrorMessage] = useState('');
const [successMessage,setSuccessMessage]= useState('');
const [Loading,setLoading]= useState(false);


//Navigate function to to take the user back to the SignIn page.
function navigate(){  
   navigation.navigate('SignIn');
}
//This uses firebase to to take the users input and store it in the database I have created.
const registerUser = ()=>{
  setLoading(true);
  createUserWithEmailAndPassword(authentication,email,password)
  .then((re)=>{
    setSuccessMessage("Account Creation Sucessfull"); //Once it has been successfully created then this will display to the user.
    setLoading(false);
    console.log(re);
      })
      .catch((err)=>{   //If it for any reason doesnt woek it will show the error message to the user with a popup.
        setLoading(false);  
      setErrorMessage(err.message);
      setDisplayFailInfo(true);
      })
}


//Sets the value for the name under the correct variable to send to firebase.
function NameChange(value){
 setName(value);
}




//Validation
const validatForm =()=> {
var form_inputs = [Name,email,password,confPassword]; //Taking in all of the inputs the user has put in
var passwords_match = password == confPassword;




if(form_inputs.includes('') || form_inputs.includes(undefined)){ //If not all the inputs have been correctly filled out.
  setErrorMessage('Missing Feilds, please check you have filled out all requirements.');
  return setDisplayFailInfo(true);
}


if(passwords_match) registerUser(); //checking for matching passwords


if(!passwords_match){
  setErrorMessage('Passwords Must Match');  //tells user to match them if needed.
  return setDisplayFailInfo(true);
}
}


/*
  This is what returns to the user. it is the iteractable form,
  that allows the user to input their information and will then call the correct functions to send them to the firebase database.
*/
return(


<View style={styles.mainView}>
<View style={styles.BotView}>
 <Text style={styles.Header}>
  Create account
 </Text>


<View style={styles.FormView}>
 <TextInput onChangeText={NameChange} value={Name} placeholder={"Full Name"} placeholderTextColor={"#6b564e"} style={styles.TextInput}/>
 <TextInput onChangeText={(val)=>setEmail(val)} placeholder={"Email"} value={email}  placeholderTextColor={"#6b564e"} style={styles.TextInput}/>
 <TextInput onChangeText={(val)=>setPassword(val)} placeholder={"Password"} value={password}secureTextEntry={true} placeholderTextColor={"#6b564e"} style={styles.TextInput}/>
 <TextInput onChangeText={(val)=>setConfPassword(val)} placeholder={"Confirm Password"} value={confPassword} secureTextEntry={true} placeholderTextColor={"#6b564e"} style={styles.TextInput}/>
</View>


 <TouchableOpacity onPress={validatForm}  style={styles.Button}>
  <Text style={styles.BtnTxt}>
  Sign up
  </Text>
 </TouchableOpacity>
 
 <Icon onPress={navigate} style={styles.Icon} name="chevron-left" size={50} color={"#6b564e"} />
</View>


{ displayFailInfo == true?
<FormNo hideErrorOverlay={setDisplayFailInfo} err={errMessage}/>
:
null
}
{
Loading== true?
<FormYes/>
:
successMessage=="Account Creation Sucessfull"?
<FormYes successMessage={successMessage} close={setSuccessMessage}/>
:
null
}
</View>


)
}
 //Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({
mainView: {
 flex:1,
 flexDirection:'column',
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'#c9bea7',
    },
TopView:{
 width:'100%',
 height:'20%',
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
    },
BotView:{
 width:'100%',
 height:'100%',
 backgroundColor:'#c9bea7',
 top: 150,
    },
ImageStyle:{
 width:'50%',
 resizeMode:'contain',
},
Header:{
 color:'#6b564e',
 fontSize:36,
 top: -25,
 marginLeft:'24%',
 marginTop:20,
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
  marginTop:50,
  borderRadius: 10,
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
  color:'#ffffff',
  fontFamily: 'Bodoni 72 Oldstyle',
},
SignupTxt:{
  color:'#6b564e',
 },
Icon:{
  marginLeft:15,
  marginTop:40,
},

  
      });
    export default SignUp