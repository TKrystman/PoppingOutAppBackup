import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GSystem = ({navigation})=>{
  //Variables to be userd in this file.
  const [Shop, setShop] = useState(0);
  const [Chore, setChore] = useState(0);
  const [Total, setTotal] = useState(0);

//Finction that can be attached to a button to allow the user to navigate back to the home screen.
    function navigate() {
      navigation.navigate('Home');
    }
//Loads in the different poitnts sestems from the asyn storage.
  useEffect(() => {
      async function loadShop() {
          const ShopValue = await AsyncStorage.getItem('count1'); //This is what is used within the shopping list.
          if (ShopValue !== null) {
              setShop(parseInt(ShopValue));
          }
      }
      async function loadChore() {
          const ChoreValue = await AsyncStorage.getItem('count2'); //This is what is used within the Bills.
          if (ChoreValue !== null) {
              setChore(parseInt(ChoreValue));
          }
      }//The funtion that loads the total number that counts for the grade.
      async function loadTotal() {
          const TotalValue = await AsyncStorage.getItem('Total'); 
          if (TotalValue !== null) {
              setTotal(parseInt(TotalValue));
          }
      }
      loadTotal();
      loadShop();
      loadChore(); 
  }, []);
//This sets the Total to be the addion od the two counters from the lists
  useEffect(() => {//This is used when either counter changes number 
      AsyncStorage.setItem('Total', (Shop + Chore).toString());
  }, [Shop, Chore]); 


//Resets all numbers to 0 to allow the user to start over if they desire.
  const Reset = async() => { 
    await AsyncStorage.removeItem('Total');
    await AsyncStorage.removeItem('count1');
    await AsyncStorage.removeItem('count2');  
    setShop(0);
    setChore(0);
    setTotal(0);
}
//Loads the correct icon assoixiated with the correct grade
const RankIcon = () => {
  if (Total >= 0 && Total <= 9) {
    return <Image style={styles.icon2} source={require('../assets/images/One.png')}/> //Rank 1
  } else if (Total >= 10 && Total <= 19) {
    return <Image style={styles.icon2} source={require('../assets/images/Two.png')}/> //Rank 2
  }else if (Total >= 20 && Total <= 29) {
      return <Image style={styles.icon2} source={require('../assets/images/Three.png')}/>//Rank 3
    }else if (Total >= 30 && Total <= 39) {
      return <Image style={styles.icon2} source={require('../assets/images/Four.png')}/>//Rank 4
    }else if (Total >= 40 && Total <= 49) {
      return <Image style={styles.icon2} source={require('../assets/images/Five.png')}/>//Rank 5
    }else if (Total >= 50 && Total <= 59) {
      return  <Image style={styles.icon2} source={require('../assets/images/Six.png')}/>//Rank 6
    }else if (Total >= 60 && Total <= 70) {
      return <Image style={styles.icon2} source={require('../assets/images/Seven.png')}/>//Rank 7
    }
  return null;
}

    return (

      <View style={styles.container}>
     
      <ScrollView style={styles.Bot}>
           <Text style={styles.title}> Grade </Text>
           <View style={styles.iconDisplay}>
             <RankIcon/>
           </View>
             
        <Text style={styles.txt1}>Grade total: {Total}</Text>
        <Text style={styles.txt2}>Shopping Points Earned: {Shop}</Text>
        <Text style={styles.txt2}>Chores Points Earned: {Chore}</Text>
        <Text style={styles.txtp}>
          This is your PopGrade, as you complete Shopping list items or chores you will earn points.
          Your total of the both will earn you your rank. Each Rank will provide you with a new special icon.
          Ranks range from 1-7 however ranks 5,6 and 7 will earn you Letter Tags. Earn 60+ points to earn TopRankA.
        </Text>
       

        <Text style={styles.txt5}>Shopping Points:</Text>


        <Text style={styles.txts}>
2pts || 1.5pts after 10 earned || 1.0pts after 20 earned || 0.5pts after 25 earned.
        </Text>
        <Text style={styles.txt5}>Chores:</Text>
<Text style={styles.txts}>
1.5pts || 1pts after: 15 earned.
</Text>

<Text style={styles.txtm}>Milestones:</Text>

<Text style={styles.txts1}>
10pts Rank: 1 || 20pts Rank: 2 || 30pts Rank: 3  || 40pts Rank: 4 || 50pts Rank: 5 || 60pts Rank: 6 || 70pts Rank: 7.</Text>

        <TouchableOpacity style={styles.BotButton} onPress={Reset}> 
        <Text style={styles.BtnTxt2}>Reset</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.BotButton2}onPress={navigate}>
        <Text style={styles.BtnTxt}>Home</Text> 
        </TouchableOpacity>
    
      </ScrollView>
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
  flex: 1,
  backgroundColor: '#dfd2bf',
  
    },
    text:{
        width:'90%',
        left: '5%',
        borderWidth:1,
        borderColor:'#6b564e',
        height:52, 
        borderRadius:10,
        marginTop:200,
        color:'#6b564e',
        fontFamily: 'Bodoni 72 Oldstyle',
    },
    Button:{
      width:'90%',
      color:'#000',
      height:52,
      backgroundColor:'#6b564e',
      borderRadius: 10,
      marginTop:10,
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
    icon2:{
      
      width: 180,
 height: 180,
 
     },
iconDisplay:{
      width:'51%',
      color:'#000',
      height:'29%',
      backgroundColor:'#6b564e',
      borderRadius: 10,
height:200,
   
      justifyContent:'center',
      alignItems:'center',
      left: '23%',
      shadowColor: 'rgba(0, 0, 0, 0.8)',
      shadowOpacity: 1,
      elevation: 6,
      shadowRadius: 4 ,
      shadowOffset : { width: 1, height: 13},
     },
title: {
  width:'90%',
  left: '22%',
  borderColor:'#6b564e',
  height:100,
  borderRadius:10,
  marginTop:40,
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '80',
},
txt:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '25',
  fontWeight:'bold',
  alignSelf:'center',
  top:60,
},
txt1:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '20',
  fontWeight:'bold',
  top:30,
  alignSelf:'center',
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
  width:'70%',
  color:'#000',
  height:32,
  
  borderRadius: 10,
  marginTop:110,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  left: '15%',
  borderWidth:3,
  borderColor:'#6b564e',
  
    
},
BotButton2: {
  width:'70%',
  color:'#000',
  height:42,
  backgroundColor:'#6b564e',
  borderRadius: 10,
  marginTop:15,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  left: '15%',
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
  fontSize:20,
  color: '#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  },
txtp:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '15',
  fontWeight:'bold',
  alignSelf:'center',
  top:60,
  marginLeft:30,
  marginRight:30,
}, 
txts:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '15',
  fontWeight:'bold',
  alignSelf:'center',
  top:75,
  marginLeft:30,
  marginRight:30,
},
txt5:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '20',
  fontWeight:'bold',
  alignSelf:'center',
  top:70,
  marginLeft:30,
  marginRight:30,
},
txtm:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '20',
  fontWeight:'bold',
  alignSelf:'center',
  top:90,
  marginLeft:30,
  marginRight:30,
},
txts1:{
  color:'#6b564e',
  fontFamily: 'Bodoni 72 Oldstyle',
  fontSize: '15',
  fontWeight:'bold',
  alignSelf:'center',
  top:100,
  marginLeft:30,
  marginRight:30,
},
Bot:{

 
  },
});



export default GSystem


