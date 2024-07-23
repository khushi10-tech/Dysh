import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Welcome from './screen/Welcome'
import Login from './screen/Login';
import Splash from './screen/Splash';
/*import Signup from './screen/Signup';
import Home from './screen/Home';*/

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name="Welcome" component={Welcome} />*/}
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
                {/*<Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Home" component={Home} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
