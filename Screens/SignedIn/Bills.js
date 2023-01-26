import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {getFirestore, collection, getDocs, doc, setDoc} from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
 

 
const Bills= ({navigation})=>{
  //Finction that can be attached to a button to allow the user to navigate back to the home screen.
  function navigate() {
    navigation.navigate('Home');
  }
//this sends the data that the heating bill has been clicked to firebase.
const SetData = async ()=>{
const Bill1 = "Heating";
await setDoc(doc(db,  "Bills","Heating Bill"),  //Bills is the name of the file on firebase. and heating bill will be the title of what is uploaded there.
{
Bill_name: Bill1,
});
}
//this sends the data that the Wifi bill has been clicked to firebase.
const SetData2 = async ()=>{
  const Bill2 = "Wifi";
  await setDoc(doc(db,  "Bills","WiFi Bill"),  //Bills is the name of the file on firebase. and Wifi bill will be the title of what is uploaded there.
  {
  Bill_name: Bill2
  });
  }



/**
 Returns the assets i've made for heating and wifi and shows buttons that are attached tio the functions that send the data to firebase.
 */
  return(
    <View style={styles.mainView}>
       <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Bills</Text>
    </View>
    <TouchableOpacity style={styles.CircleShapeView}>
<Image style={styles.icon2}   source={require('../../assets/images/Heating.png')}/>
     </TouchableOpacity>

      <TouchableOpacity onPress={SetData} style={styles.Button}>
        <Text style={styles.BtnTxt}>
          Paid!
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.CircleShapeView}>
<Image style={styles.icon2}   source={require('../../assets/images/Wifi.png')}/>
     </TouchableOpacity>

        <TouchableOpacity onPress={SetData2} style={styles.Button}>
        <Text style={styles.BtnTxt}>
          Paid!
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BotButton} onPress={navigate}> 
        <Text style={styles.BtnTxt2}>Home</Text> 
        </TouchableOpacity>
    </View>


  )
  

}


const styles = StyleSheet.create({
  Button:{
    width:'40%',
    color:'#000',
    height:52,
    backgroundColor:'#6b564e',
    borderRadius: 15,
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  top: -90,
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 4 ,
    shadowOffset : { width: 1, height: 10},
  },
  mainView: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#dfd2bf',
  },

BtnTxt:{
  fontWeight:'bold',
  fontSize:20,
  color: '#ffffff',
  fontFamily: 'Bodoni 72 Oldstyle',
},
text5:{
  fontWeight:'bold',
  fontSize:20,
  color: '#ffffff',
  fontFamily: 'Bodoni 72 Oldstyle',
  
},
CircleShapeView: {
  width: 150,
  height: 150,
  borderRadius: 180/2,
  backgroundColor: '#6b564e',
   top: -75,
 
 }, icon2: {
 alignSelf:'center',
 top:'18%',
   width: 100,
   height: 100,
 
 },
 tasksWrapper: {
  top:-50,
  paddingHorizontal: 20,
  
  
  },
  sectionTitle: {
    color:'#6b564e',
    fontSize:36,
paddingBottom:100,
    fontFamily: 'Bodoni 72 Oldstyle',
  },
  txt2:{
    color:'#6b564e',
    fontFamily: 'Bodoni 72 Oldstyle',
    fontSize: '15',
    fontWeight:'bold',
    top:35,
    alignSelf:'center',
  },
  BotButton: {
    width:'40%',
    color:'#000',
    height:52,
    
    borderRadius: 10,
   
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  
    borderWidth:3,
    borderColor:'#6b564e',
    
      
  }
  
  });
export default Bills
