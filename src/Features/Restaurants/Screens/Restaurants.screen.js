import React, {useState} from 'react'
import styled from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { FlatList } from 'react-native'
import { RestaurantInfoCard } from '../Components/RestaurantInfoCard.component'
import { Spacer } from '../../../Components/Spacer/Spacer.component'
import {StyledAreaView} from '../../../Components/Utility/SafeArea.component'

const StyledSearchBar = styled.View`
    padding: ${(props) => props.theme.space[3]};
`
const CustomSearchbar = styled(Searchbar)`
    background-color: white;
    border-radius: 10px;
`
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding: 16
    }
})``

export const RestaurantsScreen = () => {
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
                data={[{name: 1}, {name: 2}, {name: 3}]}
                renderItem={() => 
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard/>
                    </Spacer>
                }
                keyExtractor={(item) => item.name}
            />
        </StyledAreaView>
    )
}