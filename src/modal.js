import React, {useState,useRef} from 'react';
import {Text,
        View,
        ScrollView,
        StyleSheet,
        RefreshControl,
        FlatList,
        SectionList, 
        TextInput,
        Button,
        TouchableOpacity,
        Modal,
        Pressable,
        }
         from 'react-native';
import { step0 } from 'react-native/Libraries/Animated/Easing';
import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { PressabilityDebugView } from 'react-native/Libraries/Pressability/PressabilityDebug';

const App = () => {
const lastnameref = useRef();
const greenbutton= useRef();
const [enteredValue1,setEnteredValue1]= useState('');
const [enteredValue2,setEnteredValue2]= useState('');

const [submitState,setSubmitState]=useState(false);
const [showErrorModal,setErrorModal]=useState(false);

const [entered1,setEntered1]=useState();

const onPressSubmit=()=>{
  setSubmitState(!submitState);   
  if(submitState==true)
  {
    setEnteredValue1('');
    setEnteredValue2('');
  }
  if(enteredValue1.length<3 || enteredValue2.length<3 )
  {
    setErrorModal(true);  
    setSubmitState(false);
    setEnteredValue1('');
    setEnteredValue2('');
  
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
                enteredValue1.length<3?<Text style={{color:'black',fontSize:20}}>First Name Shouldn't be Less than 3 Characters.</Text>:<Text></Text>
              }
              {
                enteredValue2.length<3?<Text style={{color:'black',fontSize:20}}>Last Name Shouldn't be Less than 3 Characters.</Text>:<Text></Text>
              } 
              </View>
            <View style={styles.modalButton}>
              <Pressable
                onPress={()=> setErrorModal(false)}
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

      <View style={styles.item}>
        <Text style={styles.text}>{'\n'}Hello, My name is :{'\n'}</Text>
        <TextInput style={styles.textIp}
          placeholder='Enter First Name'
          value={enteredValue1}
          onChangeText={(value)=>setEnteredValue1(value)}
          returnKeyType='next'
         
          onSubmitEditing={()=>{
            lastnameref.current.focus();
          }}
        />

       
          <TextInput style={styles.textIp}
          placeholder='Enter Last Name'
          value={enteredValue2}
          onChangeText={(value)=>setEnteredValue2(value)}
          returnKeyType='done'
          ref={lastnameref}

          onSubmitEditing={()=>{
            greenbutton.current.focus();
          }}
        />
        
        

        
        {/* <Button
          title={submitState?'clear':'submit'}
          onPress={onPressSubmit}
        /> */}

           <Pressable
            onPress={onPressSubmit}
            style={styles.touchableButton}
            activeOpacity={0.7}
            android_ripple={{color:'blue'}}
            ref={greenbutton}
          >
             <Text style={styles.text}>{submitState?'clear':'submit'}</Text>              
          </Pressable>
        


         


      </View>
      
        <View style={styles.item}>
          { submitState ?
            <View>
                      <Text style={styles.text}>First Name: {enteredValue1}</Text>
                      <Text style={styles.text}>Last Name: {enteredValue2}</Text>
                  
            </View>
          :null}        
        </View>

    </View>
  );
  };

 const styles = StyleSheet.create({
   body:{
    flex:1,
    backgroundColor:'orange',
   
   },
   item:{
     marginTop:10, 
    alignItems:'center',
    flex:1,
    
   },
   text:{
     fontSize:30,
     borderColor:'black',
    color:'black',
    //borderWidth:1,
   },
   textIp:{
     width:200,
     borderWidth:1,
     margin:10,
     borderColor:'black',
     color:'green',
     fontSize:20,
     backgroundColor:'white',
     borderRadius:5,
     textAlign:'center',
   },
   touchableButton:{
     backgroundColor:'green',
     borderColor:'black',
     borderWidth:1,
     marginTop:5,
     width:150,
     height:70,
     justifyContent:'center',
     alignItems:'center',
   },
   
   touchableButtonModal:{
    //backgroundColor:'#CF3535',
    //borderColor:'black',
    //borderWidth:1,
    height:50,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20, 
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

    }
   

 })


export default App;