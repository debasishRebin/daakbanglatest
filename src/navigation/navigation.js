import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Dimensions, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CustomDrawerContent from '../../CustomDrawerContent';
import {IMG} from '../constants/Image';
import NotificationsScreen from '../Drawer/NotificationsScreen';
import Login from '../screens/Login/Login';
import SignUp from '../screens/SignUp';
import Home from '../Tab/Home/Home';
import HomeDetail from '../Tab/HomeDetail';
import SettingScreen from '../Tab/SettingScreen';
import SettingScreenDetail from '../Tab/SettingScreenDetail';
const {width, height} = Dimensions.get('screen');
// Tab Screen and custom Header
const Tab = createBottomTabNavigator();

const navOptionHandler = {
  headerShown: false,
};

const StackHome = createNativeStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={Home}
        options={navOptionHandler}></StackHome.Screen>
      <StackHome.Screen
        name="HomeDetail"
        component={HomeDetail}
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

          if (route.name === 'হোম') {
            iconName = focused ? IMG.IMAGE_HOME : IMG.IMAGE_HOME;
          } else if (route.name === 'ফেভরিট') {
            iconName = focused ? IMG.IMAGE_WHISH_LIST : IMG.IMAGE_WHISH_LIST;
          } else if (route.name === 'এক্সপ্লোর') {
            iconName = focused ? IMG.IMAGE_EXPLORE : IMG.IMAGE_EXPLORE;
          } else if (route.name === 'সার্চ') {
            iconName = focused ? IMG.IMAGE_SEARCH : IMG.IMAGE_SEARCH;
          } else if (route.name === 'নোটিফিকেশন') {
            iconName = focused
              ? IMG.IMAGE_SIDEBAR_NOTIFICATION
              : IMG.IMAGE_SIDEBAR_NOTIFICATION;
          }

          // We can return any component that we like here!
          return (
            <Image
              style={{
                width: width / 10,
                height: width / 10,
              }}
              source={iconName}
            />
          );
        },

        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          color: '#fff',
          fontFamily: 'kalpurush',
          fontSize: width / 34,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: '#4f3431',
          paddingBottom: 5,
          height: 78,
        },

        // paddingBottom: 5,
        // paddingTop: 5,
      })}>
      <Tab.Screen
        // options={{unmountOnBlur: true}}
        name="হোম"
        component={HomeStack}
      />
      <Tab.Screen name="ফেভরিট" component={SettingStack} />
      <Tab.Screen name="এক্সপ্লোর" component={HomeStack} />
      <Tab.Screen name="সার্চ" component={SettingStack} />
      <Tab.Screen name="নোটিফিকেশন" component={SettingStack} />
    </Tab.Navigator>
  );
};

// Drawer Screen

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 250,
        },
      }}
      drawerStyle={{
        width: 260,
      }}
      // initialRouteName="MenuTab"
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
    <NavigationContainer initialRouteName="DrawerNavigator">
      <StackApp.Navigator>
        {/* <StackApp.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={navOptionHandler}
        /> */}
        {/* <StackApp.Screen
          name="Login"
          component={Login}
          options={navOptionHandler}
        /> */}
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
