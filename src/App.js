import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//SCREENS START
import ScreenLanding from './ScreenLanding';
import ScreenReg from './ScreenReg';
import ScreenLogin from './ScreenLogin';
import FetchLocalPrintDetails from './FetchLocalPrint';
// import ScreenLanding from './ScreenLanding';
// import ScreenReg from './ScreenReg';
// import ScreenLogin from './ScreenLogin';
// import PrintEnteredDetails from './PrintEnteredDetails';
// import FetchLocalPrintDetails from './FetchLocalPrint';

//SCREENS END


//import { SQLiteFactory } from 'react-native-sqlite-storage/lib/sqlite.core';

const Stack = createNativeStackNavigator();




function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_Landing"
          component={ScreenLanding}
          options={{headerShown:false}}
          
        />
        <Stack.Screen
          name="Screen_Reg"
          component={ScreenReg}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Screen_Login"
          component={ScreenLogin}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="Print_EnteredDetails"
          component={PrintEnteredDetails}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="FetchLocal_Print"
          component={FetchLocalPrintDetails}
          options={{headerShown:false}}
        />

        </Stack.Navigator>

    </NavigationContainer>
  )  
}

export default App;