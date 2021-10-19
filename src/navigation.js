import * as React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './Tab/HomeScreen';
import HomeScreenDetail from './Tab/HomeScreenDetail';
import SettingScreen from './Tab/SettingScreen';
import SettingScreenDetail from './Tab/SettingScreenDetail';
import NotificationsScreen from './Drawer/NotificationsScreen';
import LoginScreen from './screens/Login';
import SignUp from './screens/SignUp';
import CustomDrawerContent from '../CustomDrawerContent';
import Feather from 'react-native-vector-icons/Feather';
import {IMG} from './Constants/Image';
import SplashScreen from './screens/SplashScreen';

// Tab Screen and custom Header
const Tab = createBottomTabNavigator();

const navOptionHandler = {
  headerShown: false,
};

const StackHome = createNativeStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="HomeScreen">
      <StackHome.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={navOptionHandler}></StackHome.Screen>
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}></StackHome.Screen>
    </StackHome.Navigator>
  );
}

const StackSetting = createNativeStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="SettingScreen">
      <StackSetting.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={navOptionHandler}></StackSetting.Screen>
      <StackSetting.Screen
        name="SettingDetail"
        component={SettingScreenDetail}
        options={navOptionHandler}></StackSetting.Screen>
    </StackSetting.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMG.IMAGE_HOME_BLACK : IMG.IMAGE_HOME;
          } else if (route.name === 'Settings') {
            iconName = focused ? IMG.IMAGE_SETTING_BLACK : IMG.IMAGE_SETTING;
          }

          // We can return any component that we like here!
          return (
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={iconName}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  );
};

// Drawer Screen

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      // initialRouteName="MenuTab"
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen
        name="MenuTab"
        component={TabNavigator}
        options={{
          drawerIcon: ({color, size}) => <Feather name="home" color="red" />,
          drawerActiveTintColor: 'blue',
        }}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const StackApp = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer initialRouteName="SplashScreen">
      <StackApp.Navigator>
        <StackApp.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={navOptionHandler}
        />

        <StackApp.Screen
          name="SignUp"
          component={SignUp}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
