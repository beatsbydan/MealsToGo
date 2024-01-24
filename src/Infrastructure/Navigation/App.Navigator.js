import {Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RestaurantsNavigator } from './Restaurants.navigator';

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

export const AppNavigator = () => {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator}/>
                <Tab.Screen name="Map" component={Map}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}