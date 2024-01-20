import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/Features/Restaurants/Screens/Restaurants.screen';
import { theme } from './src/Infrastructure/Theme/Index'; 
import { ThemeProvider } from 'styled-components';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/Services/Restaurants/Restaurants.context';

const Settings = () => {
  return(
    <Text>Settings</Text>
  )
}
const Map = () => {
  return(
    <Text>Map</Text>
  )
}

const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: 'settings'
}


const screenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({size, color}) => <Ionicons name={iconName} size={size} color={color}/>,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray"
  }
}

export default function App() {
  const Tab = createBottomTabNavigator();
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })
  const [latoLoaded] = useLato({
    Lato_400Regular
  })
  if( !oswaldLoaded || !latoLoaded){
    return null
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantsScreen}/>
              <Tab.Screen name="Map" component={Map}/>
              <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  );
}


