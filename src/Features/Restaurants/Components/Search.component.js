import React, {useContext, useState, useEffect} from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../Services/Location/Location.context";

const StyledSearchBar = styled.View`
    padding: ${(props) => props.theme.space[3]};
`
const CustomSearchbar = styled(Searchbar)`
    background-color: white;
    border-radius: 10px;
`

export const Search = () => {
    const {searchTerm, search} = useContext(LocationContext)
    const [searchQuery, setSearchQuery] = useState(searchTerm)

    useEffect(()=>{
        search(searchQuery)
    },[])

    return (
        <StyledSearchBar>
            <CustomSearchbar
                value={searchQuery}
                onChangeText={(text) => {
                    setSearchQuery(text)
                }}
                placeholder='Search for a location'
                onSubmitEditing={() => {
                    search(searchQuery)
                }}
                elevation={2}
            />
        </StyledSearchBar>
    )
}