import React, {useState, useContext} from 'react'
import { RestaurantInfoCard } from '../Components/RestaurantInfoCard.component'
import { Spacer } from '../../../Components/Spacer/Spacer.component'
import {StyledAreaView} from '../../../Components/Utility/SafeArea.component'
import { RestaurantsContext } from '../../../Services/Restaurants/Restaurants.context'
import {RestaurantList, LoadingBar} from './Restaurants.styles'
import { MD2Colors } from 'react-native-paper';
import { TouchableOpacity } from 'react-native'
import { Search } from '../Components/Search.component'

export const RestaurantsScreen = ({navigation}) => {
    const {isLoading, error, restaurants} = useContext(RestaurantsContext)
    
    return(
        <StyledAreaView>
            <Search/>
            {isLoading 
                ?
                <LoadingBar size="large" animating={true} color={MD2Colors.blue300} /> 
                :
                <RestaurantList
                    data={restaurants}
                    renderItem={({item}) => {
                            return (
                                <TouchableOpacity 
                                    onPress={()=>navigation.navigate('RestaurantDetail', {restaurant: item})}>
                                    <Spacer position="bottom" size="large">
                                        <RestaurantInfoCard restaurant={item}/>
                                    </Spacer>
                                </TouchableOpacity>
                                
                            )
                        }
                    }
                    keyExtractor={(item) => item.name}
                />
            }
        </StyledAreaView>
    )
}