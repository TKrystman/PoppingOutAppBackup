import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, ImageBackground} from 'react-native';
import {getFirestore, collection, getDocs, doc, setDoc, addDoc, orderBy, query, onSnapshot} from 'firebase/firestore';
import { db, authentication } from '../../Firebase/firebase';
import { GiftedChat, InputToolbar, Bubble } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



const Notice = ({navigation})=>{
  const [messages, setMessages] = useState([]);

 //Function to take the user home when it is called.
function navigate() {
  navigation.navigate('Home');
}


  useLayoutEffect(() => {
    const collectionRef = collection(db, 'chats');
    const q = query(collectionRef, orderBy('createdAt','desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      console.log('snapshot');
      setMessages(
        snapshot.docs.map(doc =>({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
      )
      
    });
    
    return () => unsubscribe();
  }, []); 

const onSend = useCallback((messages = []) => {
setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
const {_id, createdAt, text, user} = messages[0];
addDoc(collection(db, 'chats'), {
  _id,
  createdAt,
  text,
  user
});

}, []);

return(
<ImageBackground

 resizeMode="cover"
 source={require("../../assets/images/Backgorund.jpg")}
 style={{ flex: 1, backgroundColor:'#c9bea7',}}
>
<TouchableOpacity onPress={navigate} style={styles.CircleShapeView}>
<Image style={styles.icon2}   source={require('../../assets/images/HB.png')}/>
     </TouchableOpacity>
  <GiftedChat  
  
  messages ={messages}
  onSend={messages => onSend(messages)}
  user={{
    _id: authentication?.currentUser?.email,
   
    }}
    renderInputToolbar={props => customtInputToolbar(props)}

    renderBubble={(props) => (
      <Bubble {...props}
      textStyle={{ 
        right:{
    fontSize:20,
    color: '#6b564e',
    fontFamily: 'Bodoni 72 Oldstyle',
      },
      left:{
        fontSize:20,
        color: '#ffffff',
        fontFamily: 'Bodoni 72 Oldstyle',
      }
    }}
      wrapperStyle={{
        left:{
          left:-50,
          color:'#000',
          height:52,
          backgroundColor:'#6b564e',
          borderRadius: 10,
          marginTop:20,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         
        },
        right:{
        
          color:'#000',
          height:52,
          backgroundColor:'#dfd2bf',
          borderRadius: 10,
          marginTop:20,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         
          
        },
      }}
      
  />
  
      )}
      
  />
 
  </ImageBackground>
);


 
  }

  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: "#dfd2bf",
          borderTopColor: "#E8E8E8",
     
          padding: 3,
          borderRadius: 10,
          shadowColor: 'rgba(0, 0, 0, 0.8)',
   shadowOpacity: 1,
   elevation: 6,
   shadowRadius: 2 ,
   shadowOffset : { width: 1, height: 10},
        }}
      />
    );
  };

const styles = StyleSheet.create({
  Button:{
    width:'90%',
    color:'#000',
    height:52,
    backgroundColor:'#fff',
    borderRadius: 40,
    marginTop:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    left: '5%'
  },
  mainView: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#c9bea7',
    
  },
  Notice: {
   backgroundColor:'#6b564e',
   flex: 1,

  },
  CircleShapeView: {
    width: 80,
    height: 80,
    borderRadius: 180/2,
    backgroundColor: '#dfd2bf',

  
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 3 ,
    shadowOffset : { width: 1, height: 3},
   }, icon2: {
   alignSelf:'center',
   top:'18%',
     width: 50,
     height: 50,
   
   }

  });
export default Notice

 