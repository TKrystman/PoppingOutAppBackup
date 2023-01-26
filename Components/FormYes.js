import React from 'react';
import {Text ,View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import { Overlay } from '@rneui/base';

const FormYes =(props)=>{

    return(
        props.successMessage?
            <Overlay overlayStyle={styles.Overlay} isVisivle={true} onBackdropPress={()=>props.close('')}>
                 <Image style={styles.errorIcon} source={require('../assets/images/Y.png')}/>
            <Text style={styles.errMSG}>
                {props.successMessage}
            </Text>
            
            </Overlay>
            :
            <Overlay overlayStyle={styles.Overlay} isVisivle={true}>
            <ActivityIndicator size={'large'} color={'blue'}/>
            </Overlay>
        
    )
}

export default FormYes;

const styles = StyleSheet.create({
    Overlay:{
        width:'80%',
        height:320,
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
        fontSize:20,
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
})