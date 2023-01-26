import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import Task from '../../Components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';









const Chores = ({ navigation }) => {
//Variables that can be used throughout the code.
const [Points, setPoints] = useState(0);
const [task,setTask] = useState();
const [Items, setItems] = useState(null);


//Function to take the user home when it is called.
function navigate() {
    navigation.navigate('Home');
}

//Loads the points system from async storage.
useEffect (() => {
    async function loadPoints() {
        const Points = await AsyncStorage.getItem('count2');
        
        if (Points !== null) {
            setPoints(parseInt(Points)); //parseInt allows us to return the points stored as a string as an intager.
        }
    }
    loadPoints();
} , []);

useEffect(() => {

    const fetchTasks = async () => {
        try {
            const Items = await AsyncStorage.getItem('Chores'); //Fetches the tasks stored within the async storage 
      if (Items !==null) {
          setItems (JSON.parse(Items));
      } else {
          setItems([]);
      }
          } catch (error) {
              console.log(error); //allows us to see if anything is wrong in the console when retrieving the tasks
          }
      };
    fetchTasks();
        }, []);
    
//handles the addition of tasks 
const AddItem = async () => {
      try {
    setItems([...Items, { task }]);
      await AsyncStorage.setItem('Chores', JSON.stringify(Items));
      setTask('');
    } catch (error) {
        console.log(error); //allows us to see if anything is wrong in the console when retrieving the tasks
    }
};

//saves the tasks and indexes the array by 1
const saveItem = (index) => {
        let itemsCopy =[...Items];
        itemsCopy.splice(index, 1);
        setItems(itemsCopy);
        AsyncStorage.setItem('Chores',JSON.stringify(itemsCopy));
};

const Complete = (index) => {
    let itemsCopy = [...Items]; //Indexes the todo list and adds on the next item. 
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
    saveItem(itemsCopy);
//This part of the function is responsible for adding the correct number onto the grade total.
    let amountToAdd = 1.5;
    if(Points >= 15) {
        amountToAdd=1;
    }
setPoints (Points + amountToAdd);
AsyncStorage.setItem('count2', (Points + amountToAdd).toString()); //Adds the points to the total using async
}

return (

<View style={styles.container}>
     <View style={styles.tasksWrapper}>
       <Text style={styles.sectionTitle}>Chores</Text>
     </View>
     <View>
       <View style={styles.items}>
       {Items && Items.map((item, index) => {
           return (
             <TouchableOpacity key={index} onPress={() => Complete(index)}>
               <Task style={styles.part} text={item.task} />
             </TouchableOpacity>
           )
         })}
       </View>
     </View>


     <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.writeTaskWrapper}>
       <TextInput style={styles.input} placeholder={'Add to chores...'} value={task} onChangeText={text => setTask(text)}/>
       <TouchableOpacity onPress={() => AddItem()} >
         <View style={styles.addWrapper}>
           <Text style={styles.addText}> + </Text>
         </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={navigate} style={styles.CircleShapeView}>
<Image style={styles.icon2}   source={require('../../assets/images/HB.png')}/>
     </TouchableOpacity>
     </KeyboardAvoidingView>
 
   </View>
);
}




const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#c9bea7',




},
tasksWrapper: {
paddingTop: 80,
paddingHorizontal: 20,


},
sectionTitle: {
  color:'#6b564e',
  fontSize:40,
  fontWeight:'',
  marginLeft:'33%',

  fontFamily: 'Bodoni 72 Oldstyle',
},
items: {
marginTop: 30,
},
writeTaskWrapper: {
position: 'absolute',
bottom: 60,
width: '100%',
flexDirection: 'row',
justifyContent: 'space-around',
alignItems: 'center',
},
input :{
paddingVertical: 15,
paddingHorizontal: 15,
backgroundColor: 'white',
borderRadius: 60,
borderColor: 'blue',
width: 250,
},
addWrapper: {
width: 60,
height: 60,
backgroundColor:'white',
borderRadius: 60,
justifyContent: 'center',
alignItems: 'center',
},
addText: {


},
list: {

  top:40,
  width:'90%',
  height:'60%',
  backgroundColor:'white',
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  left:'5%'
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






export default Chores