import React, {useState, useContext} from 'react'
import { RestaurantInfoCard } from '../Components/RestaurantInfoCard.component'
import { Spacer } from '../../../Components/Spacer/Spacer.component'
import {StyledAreaView} from '../../../Components/Utility/SafeArea.component'
import { RestaurantsContext } from '../../../Services/Restaurants/Restaurants.context'
import {StyledSearchBar, CustomSearchbar, RestaurantList} from './Restaurants.styles'

export const RestaurantsScreen = () => {
    const {isLoading, error, restaurants} = useContext(RestaurantsContext)
    const [searchQuery, setSearchQuery] = useState('')
    const handleChange = (query) => setSearchQuery(query)
    
    return(
        <StyledAreaView>
            <StyledSearchBar>
                <CustomSearchbar
                    value={searchQuery}
                    onChangeText={handleChange}
                    placeholder='Search'
                    elevation={2}
                />
            </StyledSearchBar>
            <RestaurantList
                data={restaurants}
                renderItem={(item) => {
                        return (
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item}/>
                            </Spacer>
                        )
                    }
                }
                keyExtractor={(item) => item.name}
            />
        </StyledAreaView>
    )
}