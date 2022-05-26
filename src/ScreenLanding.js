import React from 'react';
import {Text,
        View,
        StyleSheet,
        Pressable,
        }
        from 'react-native';




export default function Landing({navigation})
{

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Welcome!</Text>
      <Pressable
          onPress={()=>navigation.navigate('FetchLocal_Print')}
          style={styles.Button}
          activeOpacity={0.7}
          android_ripple={{ color: 'blue' }}
        >
        <Text style={{fontSize:30,color:'white'}}>print db</Text>
      </Pressable>

      <Text style={styles.text}>Are you already registered ?</Text>
      <View style={{flex:1,flexDirection:'row',backgroundColor:'yellow'}}>
        <Pressable
          onPress={()=>navigation.navigate('Screen_Login')}
          style={styles.Button}
          activeOpacity={0.7}
          android_ripple={{ color: 'blue' }}
        >
        <Text style={{fontSize:30,color:'white'}}>Yes</Text>
      </Pressable>
      <Pressable
          onPress={()=>navigation.navigate('Screen_Reg')}
          style={styles.Button}
          activeOpacity={0.7}
          android_ripple={{ color: 'blue' }}
        >
        <Text style={{fontSize:30,color:'white'}}>NO</Text>
      </Pressable>

      </View>
    </View>
  )
}
const styles = StyleSheet.create(
  {
    body:{
      flex:1,
      color:'black',
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      fontSize:60
    },
    text:{
      flex:4,
      fontSize:40,
      fontWeight:'bold',
      //margin:10,

    },
    Button:{
      flex:1,
      //flexDirection:'row',
      backgroundColor:'green',
      borderColor:'black',
      borderWidth:1,
      margin:10,
      //width:150,
      //height:70,
      justifyContent:'center',
      alignItems:'center',
     },
}
)
