import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ToastProvider } from "expo-toast";
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DetailsScreen, HomeScreen, LoginScreen, ProfileScreen, RegisterScreen } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <ToastProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false }} />
            <Stack.Screen name="SignUp" component={RegisterScreen} options={{ headerShown:false }} />
            <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerShown:false }} />
            <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown:false }} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ToastProvider>
    </GestureHandlerRootView>
  );
}
