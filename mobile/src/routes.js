import React from "react"

import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const AppStack = createStackNavigator()
import incidents from './pages/incidents'
import detail from './pages/detail'
import homePage from './pages/homePage'

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name="homePage" component = {homePage}/>
                <AppStack.Screen name="incidents" component={incidents}/>
                <AppStack.Screen name="detail" component={detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}