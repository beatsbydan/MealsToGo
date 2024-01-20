import { Searchbar } from "react-native-paper"
import{ FlatList } from 'react-native'
import styled from 'styled-components/native'

export const StyledSearchBar = styled.View`
    padding: ${(props) => props.theme.space[3]};
`
export const CustomSearchbar = styled(Searchbar)`
    background-color: white;
    border-radius: 10px;
`
export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding: 16
    }
})``