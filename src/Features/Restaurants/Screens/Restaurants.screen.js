import React, {useState} from 'react'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { StatusBar, SafeAreaView } from 'react-native'
import { RestaurantInfoCard } from '../Components/RestaurantInfoCard.component'

const RestaurantList = styled.View`
    padding: 16px;
    background-color:blue; 
    flex: 1;
`
const StyledAreaView = styled(SafeAreaView)`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px
`
const StyledSearchBar = styled.View`
    padding: 16px
`

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleChange = (query) => setSearchQuery(query)
    
    return(
        <StyledAreaView>
            <StyledSearchBar>
                <Searchbar
                    value={searchQuery}
                    onChangeText={handleChange}
                    placeholder='Search'
                />
            </StyledSearchBar>
            <RestaurantList>
                <RestaurantInfoCard/>
            </RestaurantList>
        </StyledAreaView>
    )
}