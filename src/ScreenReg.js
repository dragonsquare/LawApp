import React, {useState,useRef,useEffect} from 'react';
import {Text,
        View,
        StyleSheet,
        TextInput,
        Pressable,
        Modal,
        Platform,
        Button
        }
        from 'react-native';

    //    import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';




import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);











export default function ScreenReg({navigation})
{
  const onPressHandler =() =>{
    navigation.navigate('Screen_Landing');
  }

const lastnameref = useRef();
const DOBref= useRef();
const Emailref = useRef();
const MobNoref = useRef();
const Passwordref = useRef();

const [enteredFirstName,setFirstName]= useState('');
const [enteredLastName,setLastName]= useState('');
const [enteredDOB,setDOB]= useState('');
const [enteredMobileNo,setMobileNo] = useState('');
const [enteredEmail,setEmail]= useState('');
const [enteredPassword,setPassword] = useState('');

const [userSelectedDay, setUserSelectedDay]=useState('');
const [userSelectedMonth, setUserSelectedMonth]=useState('');
const [userSelectedYear,setUserSelectedYear]=useState('');




const [submitState,setSubmitState]=useState(false);
const [showErrorModal,setErrorModal]=useState(false);

const [entered1,setEntered1]=useState();

const onPressSubmit=()=>{
  //setSubmitState(!submitState);   
  
  if(enteredFirstName.length<3 || enteredLastName.length<3 || enteredMobileNo!=10||enteredPassword.length<5 )
  {
    setErrorModal(true);  
    setSubmitState(false);
  }
  
  navigation.navigate('Print_EnteredDetails',{fn:enteredFirstName,
                                        ln:enteredLastName,
                                        dob:text,
                                        email:enteredEmail,
                                      mob:enteredMobileNo})
      
  }

    const [date,setDate]=useState(new Date());
    const [mode,setMode]=useState('date');
    const [show,setShow]=useState(false);
    const [text,setText]=useState('Empty');

    const onChange =(eevent,selectedDate) =>{
      const currentDate = selectedDate || date;
      setShow(Platform.OS==='ios')
      setDate(currentDate)

      let tempDate = new Date(currentDate);
      let ddate=tempDate.getDate()
      let mmonth=(tempDate.getMonth()+1)
      let yyear=tempDate.getFullYear();
      let fDate = ddate+'/'+mmonth+'/'+yyear
      setText(fDate)
      console.log(fDate)
      //setUserSelectedDay(dday)
      //setUserSelectedMonth(mmonth)
      setUserSelectedYear(yyear)

      //setUserSelectedDay((userSelectedDay)=>{console.log('callback_day='+userSelectedDay); return userSelectedDay})
      //setUserSelectedMonth((userSelectedMonth)=>{console.log('callback_month='+userSelectedMonth); return userSelectedMonth})
      setUserSelectedYear((userSelectedYear)=>{console.log('callback_year='+userSelectedYear); return userSelectedYear})
    }

    const showMode = (currentMode) =>{
      setShow(true)
      setMode(currentMode)
    }
      
    //SQLLLLLLLLL





    useEffect(() => {
        createTable();
        getData();
    }, []);

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS "
                + "Users2 "
                + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, F_Name TEXT, L_Name TEXT, Email TEXT);"
            )
            console.log("Created Table")
        })
    }

    const getData = () => {
        try {
            // AsyncStorage.getItem('UserData')
            //     .then(value => {
            //         if (value != null) {
            //             navigation.navigate('Home');
            //         }
            //     })
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT F_NAME, L_NAME, Email FROM Users1",
                    [],
                    (tx, results) => {
                        var len = results.rows.length;
                        if (len > 0) {
                            navigation.navigate('FetchLocal_Print');
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        console.log("eFN_Length="+enteredFirstName.length)
        if (enteredFirstName.length == 0 || enteredLastName.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                
                await db.transaction(async (tx) => {
                    console.log('transaction')
                    await tx.executeSql(
                        "INSERT INTO Users2 (F_Name, L_Name, Email) VALUES (?,?,?)",
                        [enteredFirstName.toString(),enteredLastName.toString(),enteredEmail.toString()]
                    );
                    
                  
                    console.log("INSTERTED="+enteredFirstName+" "+enteredLastName+" "+enteredEmail)
                })
                navigation.navigate('FetchLocal_Print');
            } catch (error) {
                console.log(error);
            }
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
            enteredFirstName.length<1?<Text style={{color:'black',fontSize:20}}>First Name Shouldn't be Less than 1 Characters.</Text>:<Text></Text>
          }
          {
            enteredLastName.length<1?<Text style={{color:'black',fontSize:20}}>Last Name Shouldn't be Less than 1 Characters.</Text>:<Text></Text>
          }
          {
            enteredMobileNo.length!=10?<Text style={{color:'black',fontSize:20}}>Mobile No. Must be of 10 digits.</Text>:<Text></Text>
          } 
          {
            enteredPassword.length<5?<Text style={{color:'black',fontSize:20}}>Password Shouldn't be Less than 5 Characters.</Text>:<Text></Text>
          }  
          {
            enteredEmail.length<5?<Text style={{color:'black',fontSize:20}}>Password Shouldn't be Less than 3 Characters.</Text>:<Text></Text>
          } 
          {/* {
            userSelectedYear<2000?<Text style={{color:'black',fontSize:20}}>Year cant be less than 2000.</Text>:<Text></Text>
          }  */}
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


  <Text style={styles.text}>Enter Details for Reg.</Text>
  <TextInput style={styles.textIp}
      placeholder='First Name'
      placeholderTextColor={'grey'}
      //value={enteredValue1}
      onChangeText={(value)=>setFirstName(value)}
      returnKeyType='next'
     
      onSubmitEditing={()=>{
        lastnameref.current.focus();
      }}
    />

   
      <TextInput style={styles.textIp}
      placeholder='Last Name'
      placeholderTextColor={'grey'}
      onChangeText={(value)=>setLastName(value)}
      returnKeyType='done'
      ref={lastnameref}

      onSubmitEditing={()=>{
        DOBref.current.focus();
      }}
    />
      <View style={{flexDirection:'column'}}>
        <Text style={{color:'white',fontSize:20,marginBottom:10}}>{text=='Empty'?'select DoB':text}{/*console.log('UPDATED_DAY=='+userSelectedDay)}{console.log('UPDATED_MONTH=='+userSelectedMonth)*/}{console.log('UPDATED_YEAR=='+userSelectedYear)}</Text>
        <Button title='Select DoB' onPress={()=>showMode('date')}></Button>
        {
          show && (<DateTimePicker
                    testID='dateTimePicker' 
                    value={date}
                    mode={mode}
                    display='default'
                    onChange={onChange}
            />)
        }
        
    </View>
    {/* <TextInput style={styles.textIp}
      placeholder='Date of Birth'
      placeholderTextColor={'grey'}
      //value={enteredValue1}
      onChangeText={(value)=>setDOB(value)}
      returnKeyType='next'
      ref={DOBref}
      onSubmitEditing={()=>{
        MobNoref.current.focus();
      }} */}
    {/* /> */}
    <TextInput style={styles.textIp}
      placeholder='Mobile Number'
      placeholderTextColor={'grey'}
      //value={enteredValue1}
      onChangeText={(value)=>setMobileNo(value)}
      returnKeyType='next'
      ref={MobNoref}
      onSubmitEditing={()=>{
        Emailref.current.focus();
      }}
    />
    <TextInput style={styles.textIp}
      placeholder='E-mail'
      placeholderTextColor={'grey'}
      //value={enteredValue1}
      onChangeText={(value)=>setEmail(value)}
      returnKeyType='next'
      ref={Emailref}
      onSubmitEditing={()=>{
        Passwordref.current.focus();
      }}
    />

<TextInput style={styles.textIp}
      placeholder='Password'
      placeholderTextColor={'grey'}
    //   clearButtonMode='unless-editing'
      //keyboardType='visible-password'
      secureTextEntry={true}
      onChangeText={(value)=>setPassword(value)}
      returnKeyType='done'
      ref={Passwordref}

      onSubmitEditing={()=>{
        greenbutton.current.focus();
      }}
    />
    <Text> </Text>
    <Pressable
        onPress={onPressSubmit}
        style={styles.touchableButton}
        activeOpacity={0.7}
        android_ripple={{color:'blue'}}
        
      >
         <Text style={styles.text}>Submit</Text>              
      </Pressable>



      <Button title='setData'
        onPress={setData}
      />

    <Pressable
        onPress={onPressHandler}
        style={styles.Button}
        activeOpacity={0.7}
        android_ripple={{ color: 'blue' }}
    >
        <Text style={{fontSize:30,color:'white'}}>GO to Landing</Text>
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
   touchableButton:{
    backgroundColor:'green',
    borderColor:'black',
    borderWidth:1,
    margin:15,
    width:150,
    height:70,
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