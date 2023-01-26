import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GSystem from '../Components/Gsystem';







const Home = ({navigation})=>{

 

//Functions to allow the buttons to navigate to the different parts of the app.
function navigate(){
  navigation.navigate('ShoppingList');
}
function navigate2() {
  navigation.navigate('Chores');
}
function navigate3(){
  navigation.navigate('Bills');
}
function navigate4(){
navigation.navigate('Notice');
}
function navigate5(){
  navigation.navigate('GSystem');
}




/**
Pretty simple return code that lays out the home screen with touchable opecetys that can be used to navigate to all parts of the app.
*/


return(
<View style={styles.mainView}>


<View style={styles.BotView}>

<TouchableOpacity onPress={navigate5} style={styles.CircleShapeView}>
<Image style={styles.icon2}   source={require('../assets/images/MainIcon.png')}/>
     </TouchableOpacity>
<TouchableOpacity onPress={navigate}  style={styles.Button}>
<Text style={styles.BtnTxt}>
Shopping List
</Text>
</TouchableOpacity>




<TouchableOpacity onPress={navigate2} style={styles.Button}>
<Text style={styles.BtnTxt}>
Chores
</Text>
</TouchableOpacity>




<TouchableOpacity onPress={navigate3} style={styles.Button}>
<Text style={styles.BtnTxt}>
Bills
</Text>
</TouchableOpacity>




<TouchableOpacity onPress={navigate4} style={styles.Button}>
<Text style={styles.BtnTxt}>
Notice Board
</Text>
</TouchableOpacity>




</View>
</View>
);
} 


//Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({
mainView: {
flex:1,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
backgroundColor:'#c9bea7',
height:'100%',
   },
BotView:{
width:'100%',
height:'80%',
borderTopLeftRadius:30,
borderTopRightRadius:30,
marginTop: 50,
   },
ImageStyle:{
width:'50%',
resizeMode:'contain'
},
Header:{
color:'#fff',
fontSize:36,
fontWeight:'bold',
marginLeft:'20%',
marginTop:10
},
TextInput:{
width:'90%',
left: '5%',
borderWidth:1,
borderColor:'#fff',
height:52,
borderRadius:5,
marginTop:20,
color:'#fff'
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
 marginTop:60,
 top: 70,
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
 left: '5%',
 shadowColor: 'rgba(0, 0, 0, 0.9)',
 shadowOpacity: 1,
 elevation: 6,
 shadowRadius: 15 ,
 shadowOffset : { width: 1, height: 13},
},
BtnTxt:{
 fontWeight:'bold',
 fontSize:20,
 color:'#ffffff',
 fontFamily: 'Bodoni 72 Oldstyle',
},
SignupTxt:{
 color:'gray',
},
Icon:{
 marginLeft:330,
 marginTop:-200,
},
CircleShapeView: {
 width: 180,
 height: 180,
 borderRadius: 180/2,
 backgroundColor: '#6b564e',
 left: '29%',
 top: 50,
 shadowColor: 'rgba(0, 0, 0, 0.8)',
 shadowOpacity: 1,
 elevation: 6,
 shadowRadius: 15 ,
 shadowOffset : { width: 1, height: 13},
}, icon2: {
alignSelf:'center',
top:'18%',
  width: 120,
  height: 120,

}

   });




export default Home