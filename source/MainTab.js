import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import HomeScreen from './TabComponents/HomeScreen';
import SettingsScreen from './TabComponents/SettingsScreen';
import AccountScreen from './TabComponents/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#ffffff',
            inactiveTintColor: '#ffffff',
            activeBackgroundColor: '#202020',
            inactiveBackgroundColor: '#272727',
        }}>
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'HOME',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="SETTING"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'SETTINGS',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-sharp" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="MY ACCOUNT"
                component={AccountScreen}
                options={{
                    tabBarLabel: 'MY ACCOUNT',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default MainTab;