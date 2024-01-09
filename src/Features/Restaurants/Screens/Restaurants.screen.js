import React, {useState} from 'react'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { StatusBar, SafeAreaView } from 'react-native'
import { RestaurantInfoCard } from '../Components/RestaurantInfoCard.component'

const RestaurantList = styled.View`
    padding: {(props) => props.theme.space[2]};
    background-color:{(props) => props.theme.colors.bg.primary}; 
    flex: 1;
`
const StyledAreaView = styled(SafeAreaView)`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px
`
const StyledSearchBar = styled.View`
    padding: {(props) => props.theme.space[2]};
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