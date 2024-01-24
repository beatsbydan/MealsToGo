import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { RestaurantsScreen } from "../../Features/Restaurants/Screens/Restaurants.screen";

const RestaurantStack = createNativeStackNavigator()

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen
                name="RestaurantsScreen"
                component={RestaurantsScreen}
                options={{
                    headerShown: false
                }}
            />
        </RestaurantStack.Navigator>
    )
}