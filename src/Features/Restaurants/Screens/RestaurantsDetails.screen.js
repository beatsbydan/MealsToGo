import React from 'react'
import { Text } from 'react-native'
import { StyledAreaView } from '../../../Components/Utility/SafeArea.component'
import { RestaurantInfoCard } from '../Components/RestaurantInfoCard.component'

export const RestaurantDetailsScreen = ({route}) => {
    const {restaurant} = route.params
    return(
        <StyledAreaView>
            <RestaurantInfoCard restaurant={restaurant}/>
        </StyledAreaView>
    )
}