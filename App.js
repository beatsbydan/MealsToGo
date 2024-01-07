import React, {useState} from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/Features/Restaurants/Screens/Restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen/>
      <ExpoStatusBar style='auto'/>
    </>
  );
}


