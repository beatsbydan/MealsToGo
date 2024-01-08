import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/Features/Restaurants/Screens/Restaurants.screen';
import { theme } from './src/Infrastructure/Theme/Index'; 
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen/>
      <ExpoStatusBar style='auto'/>
    </ThemeProvider>
  );
}


