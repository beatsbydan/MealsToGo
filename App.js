import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { theme } from './src/Infrastructure/Theme/Index'; 
import { ThemeProvider } from 'styled-components';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald'
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato'
import { RestaurantsContextProvider } from './src/Services/Restaurants/Restaurants.context';
import { LocationContextProvider } from './src/Services/Location/Location.context';
import { Navigation } from './src/Infrastructure/Navigation';


export default function App() {
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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation/>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  );
}


