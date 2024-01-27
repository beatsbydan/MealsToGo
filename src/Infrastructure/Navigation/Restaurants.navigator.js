import React from "react";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantsScreen } from "../../Features/Restaurants/Screens/Restaurants.screen";
import { RestaurantDetailsScreen } from "../../Features/Restaurants/Screens/RestaurantsDetails.screen";

const RestaurantStack = createStackNavigator()

export const RestaurantsNavigator = () => {
    return(
        <RestaurantStack.Navigator headerMode ="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestaurantStack.Screen
                name="RestaurantsScreen"
                component={RestaurantsScreen}
                options={{
                    headerShown: false
                }}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailsScreen}
                options={{
                    headerShown: false
                }}
            />
        </RestaurantStack.Navigator>
    )
}