import React from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        Pressable,
        }
        from 'react-native';




export default function ScreenB({navigation})
{
  const onPressHandler =() =>{
    navigation.navigate('Screen_A');
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={styles.Button}
        activeOpacity={0.7}
        android_ripple={{ color: 'blue' }}
      >
        <Text style={{fontSize:30,color:'white'}}>GO to Screen A</Text>
      </Pressable>
      
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
        fontSize:40,
        fontWeight:'bold',
        margin:10,
  
      },
      Button:{
        flexDirection:'row',
        backgroundColor:'green',
        borderColor:'black',
        borderWidth:1,
        marginTop:5,
        //width:150,
        height:70,
        justifyContent:'center',
        alignItems:'center',
       },
  }
  )
  
