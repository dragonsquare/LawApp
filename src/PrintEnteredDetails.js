import React from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        Pressable,
        }
        from 'react-native';




export default function PrintEnteredDetails({ route, navigation})
{
  const onPressHandler =() =>{
    navigation.navigate('Screen_Reg');
  }
  const onPressHandlerLocalPrint =() =>{
    navigation.navigate('FetchLocal_Print');
  }

  const {fn} = route.params;
  const {ln} = route.params;
  const {dob} = route.params;
  const {email} = route.params;
  const {mob} = route.params;


  const mobile=JSON.stringify(mob)
  return(
    <View style={styles.body}>
      <Text style={{fontSize:40,fontWeight:'bold',color:'yellow',marginTop:100,marginBottom:100,
        margin:10}}>Details Entered</Text>
      
      <Text style={styles.text}>Name: {JSON.stringify(fn)} {JSON.stringify(ln)}</Text>
      <Text style={styles.text}>DOB: {JSON.stringify(dob)}</Text>
      <Text style={styles.text}>Email: {JSON.stringify(email)}</Text>
      <Text style={styles.text}>Mobile: {mobile}</Text>
      <Pressable
        onPress={onPressHandler}
        style={styles.Button}
        activeOpacity={0.7}
        android_ripple={{ color: 'blue' }}
      >
        <Text style={{fontSize:30,color:'white'}}>GO to Registration</Text>
      </Pressable>

      <Pressable
        onPress={onPressHandlerLocalPrint}
        style={styles.Button}
        activeOpacity={0.7}
        android_ripple={{ color: 'blue' }}
      >
        <Text style={{fontSize:30,color:'white'}}>FETCH LOCAL USER DATA FROM SQLite</Text>
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
        //justifyContent:'center',
        alignItems:'center',
        fontSize:60
      },
      text:{
        fontSize:30,
        color:'white'
  
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
  
