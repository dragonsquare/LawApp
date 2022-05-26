import React from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        Pressable,
        Modal,
        
        }
        from 'react-native';

import  {useState,useRef} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




export default function ScreenLogin({navigation})
{
  const onPressHandler =() =>{
    navigation.navigate('Screen_Landing');
  }

  const lastnameref = useRef();
const greenbutton= useRef();
const [enteredValue1,setEnteredValue1]= useState('');
const [enteredValue2,setEnteredValue2]= useState('');

const [submitState,setSubmitState]=useState(false);
const [showErrorModal,setErrorModal]=useState(false);

const [entered1,setEntered1]=useState();

const onPressSubmit=()=>{
  //setSubmitState(!submitState);   
  console.log("enteredVal1="+enteredValue1+"_____length="+enteredValue2.length);
  console.log("enteredVal2="+enteredValue2+"_____length="+enteredValue2.length);
  if(enteredValue1.length<3 || enteredValue2.length<3 )
  {
    setErrorModal(true);  
    setSubmitState(false);

  
  }
  
      
  }


  return(
      
    <View style={styles.body}>

        <Modal
            visible={showErrorModal}
            onRequestClose={()=>
            setErrorModal(false)
            }
            transparent
            animationType='slide'
            hardwareAccelerated
        >
        <View style={styles.centered_view}>
          <View style={styles.warningModal}>
            <View style={styles.warningTitle}>
              <Text style={styles.text}>Error!</Text>
            </View>
            <View style={styles.warningBody}>
              {
                enteredValue1.length<3?<Text style={{color:'black',fontSize:20}}>UserName Shouldn't be Less than 3 Characters.</Text>:<Text></Text>
              }
              {
                enteredValue2.length<3?<Text style={{color:'black',fontSize:20}}>Password Shouldn't be Less than 3 Characters.</Text>:<Text></Text>
              } 
              </View>
            <View style={styles.modalButton}>
              <Pressable
                onPress={()=>{setErrorModal(false)}}
                style={styles.touchableButtonModal}
                activeOpacity={0.7}
                android_ripple={{color:'blue'}}
              >
            
              <Text style={styles.text} >OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>


      <Text style={{
        fontSize:40,
        fontWeight:'bold',
        borderColor:'black',
       color:'black',
       justifyContent:'center',
       alignItems:'center',
       //backgroundColor:'orange',
       marginTop:140,
       marginBottom:50,
       }}>
         
         Login Screen</Text>
      <View style={{flexDirection:'row'}}>

      <FontAwesome5
                name='user'
                size={30}
                color='white'
                style={{marginTop:17}}
              />
      <TextInput style={styles.textIp}
          placeholder='User Name'
          placeholderTextColor={'grey'}
          //value={enteredValue1}
          onChangeText={(value)=>setEnteredValue1(value)}
          returnKeyType='next'
         
          onSubmitEditing={()=>{
            lastnameref.current.focus();
          }}
        />
        </View>
        <View style={{flexDirection:'row'}}>
        <FontAwesome5
                
          name='key'
          size={30}
          color='white'
          style={{marginTop:17}}
          />
          <TextInput style={styles.textIp}
          placeholder='Password'
          placeholderTextColor={'grey'}
        //   clearButtonMode='unless-editing'
          //keyboardType='visible-password'
          secureTextEntry={true}
          onChangeText={(value)=>setEnteredValue2(value)}
          returnKeyType='done'
          ref={lastnameref}

          onSubmitEditing={()=>{
            greenbutton.current.focus();
          }}
        />
        </View>
        <Text> </Text>
        <Pressable
            onPress={onPressSubmit}
            style={styles.touchableButton}
            activeOpacity={0.7}
            android_ripple={{color:'blue'}}
            ref={greenbutton}
          >
             <Text style={styles.text}>Submit</Text>              
          </Pressable>
          




        <Pressable
            onPress={onPressHandler}
            style={styles.Button}
            activeOpacity={0.7}
            android_ripple={{ color: 'blue' }}
        >
            <Text style={{fontSize:20,color:'white'}}>GO back to Landing</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create(
    {
      body:{
        flex:1,
        color:'black',
        backgroundColor:'#EC4021',
        //justifyContent:'center',
        alignItems:'center',
        fontSize:60
      },
      text:{
        
        fontSize:20,
        borderColor:'black',
       color:'black',
       justifyContent:'center',
       alignItems:'center',
       //borderWidth:1,
      },
      textIp:{
        flexDirection:'row',
        width:250,
        borderWidth:2,
        margin:10,
        borderColor:'#3D100D',
        color:'green',
        fontSize:20,
        backgroundColor:'white',
        borderRadius:5,
        textAlign:'center',
      },
      Button:{
        flexDirection:'row',
        backgroundColor:'green',
        borderColor:'black',
        borderWidth:1,
        marginTop:5,
        //width:150,
        height:60,
        justifyContent:'center',
        alignItems:'center',
       },
       touchableButton:{
        backgroundColor:'green',
        borderColor:'black',
        borderWidth:3,
        margin:15,
        width:150,
        height:50,
        justifyContent:'center',
        alignItems:'center',
      },
       centered_view:{
        flex:1,
        justifyContent:'center',
         alignItems:'center',
        backgroundColor:'#312F2299',
        borderRadius:20,
       },
       warningModal:{
        width:300, 
        backgroundColor:'#ffffff',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:20,
        textAlign:'center',
        
      },
      warningBody:{
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'#DDDAE6'
      },
      warningTitle:{
        height:50,
        //marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFEE00FA',
        color:'black',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
      modalButton:{
      
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E91D1D',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20, 
  
      },
  }
  )
  
