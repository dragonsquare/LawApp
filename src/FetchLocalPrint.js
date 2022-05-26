//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Button,
} from 'react-native';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'MainDB',
        location: 'default',
    },
    () => { },
    error => { console.log(error) }
);

export default function Home({ navigation, route }) {

    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email,setEmail] = useState('');
    
    useEffect(() => {
        getData();
        console.log("in use effect -------------------")
    }, []);

    const getData = () => {
        try {

            console.log("IN try of getData")
            
            db.transaction((tx) => {
                tx.executeSql(
                    "SELECT * FROM Users2",
                    [],
                    (tx, results) => {

                      console.log("Executed sql")

                        console.log("record length is ="+results.rows.length)
                        var len = results.rows.length;
                        //

                       for (i=0;i<results.rows.length;i++)

                          {  console.log("--"+"UserNo.="+i+" First_NAME="+results.rows.item(i).F_Name+" & Last_Name= "+results.rows.item(i).L_Name)
                            
                          }
                          
                         


                        //
                        if (len > 0) {
                            var fnamee = results.rows.item(len-1).F_Name;
                            var lnamee = results.rows.item(len-1).L_Name;
                            var emaill = results.rows.item(len-1).Email;
                           
                            setFName(fnamee)
                            setLName(lnamee)
                            setEmail(emaill)

                            
                        }
                    }
                )
            })
        } catch (error) {
            console.log(error);
        }
    }

    // const updateData = async () => {
    //     if (name.length == 0) {
    //         Alert.alert('Warning!', 'Please write your data.')
    //     } else {
    //         try {
    //             // var user = {
    //             //     Name: name
    //             // }
    //             // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
    //             db.transaction((tx) => {
    //                 tx.executeSql(
    //                     "UPDATE Users SET Name=?",
    //                     [name],
    //                     () => { Alert.alert('Success!', 'Your data has been updated.') },
    //                     error => { console.log(error) }
    //                 )
    //             })
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    // const removeData = async () => {
    //     try {
    //         // await AsyncStorage.clear();
    //         db.transaction((tx) => {
    //             tx.executeSql(
    //                 "DELETE FROM Users",
    //                 [],
    //                 () => { navigation.navigate('Login') },
    //                 error => { console.log(error) }
    //             )
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <View style={styles.body}>
            <Text style={[
                
                styles.text
            ]}>
                SAVED IN LOCAL DB{'\n'}
            </Text>
         
            <Text style={[
                
                styles.text
            ]}>
                Your Name is {fname} { }
                      {lname} {'\n'}
                Your Email is {'\n'}
                {email}
                      
            </Text>
            {/* <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <CustomButton
                title='Update'
                color='#ff7f00'
                onPressFunction={updateData}
            /> */}
            {/* <CustomButton
                title='Remove'
                color='#f40100'
                onPressFunction={removeData}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
        color:'black',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})