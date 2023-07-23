import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Chat from '../app/Chat';
import Profile from '../app/Profile';
import Register from '../app/Register';
import Search from '../app/Search';
import TabNavRoutes from './tab.routes';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => {

    return (
        <stackRoutes.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
            }}
        >
            <stackRoutes.Screen
                name="Home"
                component={TabNavRoutes}
            />

            <stackRoutes.Screen
                name="Search"
                component={Search}
            />

            <stackRoutes.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerBackButtonMenuEnabled: true,
                    headerLeft: () => (
                        <AntDesign name="back" size={14} color="black" />
                    ),
                    contentStyle: {
                        paddingHorizontal: 15,
                        backgroundColor: '#FFF'
                    },
                }}
            />

            <stackRoutes.Screen
                name="Chat"
                component={Chat}
                options={{
                    contentStyle: {
                        paddingHorizontal: 15,
                        backgroundColor: '#FFF'
                    },
                    headerShown: true,
                    headerTitle: "Chats",
                    headerTitleAlign: 'center',
                    headerBackVisible: false
                }}
            />

            <stackRoutes.Screen
                name="Profile"
                component={Profile}
            />

        </stackRoutes.Navigator>
    )
}


export default AppRoutes;