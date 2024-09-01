import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Header from "../components/Header";
import Config from "../configuration";

import HomeScreen from "../features/home"
import BuildingScreen from "../features/building"
import ChatListScreen from "../features/message";
import CashFlowScreen from "../features/cashflow";
import ManagementScreen from "../features/management";

import { Icons } from "../assets/icons";
import { Image } from "react-native";
import colors from "../values/colors";
import {BottomBarIcons} from '../assets/icons';
const {HOME, BUILDING, MESSAGE, CASHFLOW, MANAGEMENT} = Config.APP_NAVIGATE_SCREEN;

const AppScreen = {
    [HOME] : HomeScreen,
    [BUILDING] : BuildingScreen,
    [MESSAGE] : ChatListScreen,
    [CASHFLOW] : CashFlowScreen,
    [MANAGEMENT] : ManagementScreen
}

const AppIcon = {
    [HOME] : {
        inactive: (
            <Image
              source={BottomBarIcons.HomeNotActive}
              style={{width: 20, height: 20}}
            />
          ),
          active: (
            <Image
              source={BottomBarIcons.HomeActive}
              style={{width: 20, height: 20}}
            />
          ),
    },
    [BUILDING] : {
        inactive: (
            <Image
              source={BottomBarIcons.BuildingNonActive}
              style={{width: 20, height: 20}}
            />
          ),
          active: (
            <Image
              source={BottomBarIcons.BuildingActive}
              style={{width: 20, height: 20}}
            />
          ),
    },
    [MESSAGE] : {
        inactive: (
            <Image
              source={BottomBarIcons.ChatNonActive}
              style={{width: 20, height: 20}}
            />
          ),
          active: (
            <Image
              source={BottomBarIcons.ChatActive}
              style={{width: 20, height: 20}}
            />
          ),
    },
    [CASHFLOW] : {
        inactive: (
            <Image
              source={BottomBarIcons.WalletNoActive}
              style={{width: 20, height: 20}}
            />
          ),
          active: (
            <Image
              source={BottomBarIcons.WalletActive}
              style={{width: 20, height: 20}}
            />
          ),
    },
    [MANAGEMENT] : {
        inactive: (
            <Image
              source={BottomBarIcons.ManagementNoAct}
              style={{width: 20, height: 20}}
            />
          ),
          active: (
            <Image
              source={BottomBarIcons.ManagementAct}
              style={{width: 20, height: 20}}
            />
          ),
    },
}


const Tab = createBottomTabNavigator() 

export default function BottomNavigation() {
    return (
        <Tab.Navigator screenOptions={{scrollEnabled: true}}>
             {Object.keys(AppScreen).map((item, index) => (
        <Tab.Screen
          key={index}
          name={item}
          component={AppScreen[item]}
          options={{
            header: props => <Header {...props} />,
            // ...(item !== SETTING && {header: props => <Header {...props} />}),
            // tabBarActiveTintColor: '#3947e9', // tab text color
            // ...(item == SETTING && { headerShown:false,}),
            tabBarLabelPosition: 'below-icon',
            tabBarShowLabel: false,
            tabBarIcon: ({focused, size}) =>
              focused ? AppIcon[item].active : AppIcon[item].inactive,
          }}
        />
      ))}
        </Tab.Navigator>
    )

}
