import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Chat from '../app/Chat';
import Home from '../app/Home';
import Profile from "../app/Profile";
import Register from '../app/Register';
import Search from "../app/Search";
import UploadButton from '../components/UploadButton';

const Tab = createBottomTabNavigator();

const TabNavRoutes = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <Tab.Navigator
            sceneContainerStyle={styles.screensConfig}
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 55,
                    justifyContent: 'space-between',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={styles.iconSize}
                            source={require('../../assets/icons/Home.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={styles.iconSize}
                            source={require('../../assets/icons/Search.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Upload"
                component={Register}
                options={{
                    tabBarIcon: () => (
                        <UploadButton
                            onPress={() => navigation.navigate('Register')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Chats"
                component={Chat}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    tabBarIcon: () => (
                        <Image
                            style={styles.iconSize}
                            source={require('../../assets/icons/Chat.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => (
                        <Image
                            style={styles.iconSize}
                            source={require('../../assets/icons/Profile.png')}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    screensConfig: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#FFF'
    },

    iconSize: {
        height: 42,
        width: 42,
        resizeMode: 'cover',
        color: '#000'
    }

})

export default TabNavRoutes;