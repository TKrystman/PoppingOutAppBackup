import React from 'react';
import {Text ,View,StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Overlay } from '@rneui/themed';


const FormNo =(props)=>{

    /*
This will run if there is any errors with the creation of an account and will show an asset i have created along side
whatever error message is provided.
*/
  return(
    <Overlay overlayStyle={styles.Overlay} isVisible={true} onBackdropPress={()=>props.hideErrorOverlay(false)}>
    <Image style={styles.errorIcon} source={require('../assets/images/x.png')}/>
    <Text style={styles.errMSG}>
{props.err}
</Text>
<TouchableOpacity style={styles.OKBTN} onPress={()=>props.hideErrorOverlay(false)} >
<Text style={styles.btntxt}>
    Okay
</Text>
</TouchableOpacity>
  </Overlay>
)
}






//Stylesheet that styles all the components within this screen.
const styles = StyleSheet.create({




Overlay:{
    width:'80%',
    height:370,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#6b564e',
},
errorIcon:{
    width:152,
    height:152,
},
errMSG: {
    fontWeight:'',
    fontSize:30,
    color: '#ffffff',
    fontFamily: 'Bodoni 72 Oldstyle',
    marginTop:20,
  },
  OKBTN:{
    width:'90%',
    color:'#000',
    height:52,
    backgroundColor:'#6b564e',
    borderRadius: 10,
    marginTop:20,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  
    borderColor:'#ffffff',
    borderWidth:'5',




  },
  btntxt:{
    fontWeight:'bold',
    fontSize:30,
    color:'#ffffff',
  }

    
});

export default FormNo;
