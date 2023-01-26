import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Chore = (props) => {

    /*
    This returns the tasks for both the chores and the shopping list as they will be of a similar style.
    */
    return (
<View style={styles.Task}>
<View style={styles.Bar}>
<View style={styles.Ticker}></View>
<Text style={styles.itemText}>{props.text}</Text>

</View>
</View>
    )
}
 //Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({

    Task:{
backgroundColor: '#6b564e',
       padding: 10,
       borderRadius: 10,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       marginBottom: 19,
       width:'90%',
       left: '23%',
       top: -10,
    },
    Bar: {
       flexDirection: 'row',
       flexWrap: 'wrap',
       alignItems: 'center',
    },
    Ticker:{
     width: 24,
     height: 24,
     backgroundColor: '#ffffff',
     opacity: 0.4,
     borderRadius: 5,
     marginRight: 15,
    }, 
    itemText:{
maxWidth: '100%',
color:'#ffffff',
fontFamily: 'Bodoni 72 Oldstyle',
fontSize:20,
    },


});

export default  Chore;