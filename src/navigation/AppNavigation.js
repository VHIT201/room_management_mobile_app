import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import Config from '../configuration';
import RootNavigation from './RootNavigation';
import LoginScreen from '../features/authentication/login/index'
import SignUpScreen from '../features/authentication/sign_up'
import BottomNavigation from './BottomNavigation';
import HomeScreen from '../features/home';
import BuildingScreen from '../features/building';
import ChatListScreen from '../features/message';
import CashFlowScreen from '../features/cashflow';
import ManagementScreen from '../features/management';


const {LOGIN, SIGN_UP, MAIN} = Config.APP_NAVIGATE_SCREEN;

const AppScreen = {
    [LOGIN] : LoginScreen,
    [SIGN_UP] : SignUpScreen,
    [MAIN] : BottomNavigation,

}

const Stack = createNativeStackNavigator()

function AppNavigation() {
    return (
        <NavigationContainer
            ref={navigatorRef => {
                RootNavigation.setTopLevelNavigator(navigatorRef)
            }}>
            <Stack.Navigator
            initialRouteName={LOGIN}
            screenOptions={{headerShown: false}}>
                {
                    Object.keys(AppScreen).map((item, index) => (
                        <Stack.Screen key={index} name={item} component={AppScreen[item]} />
                    ))
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;