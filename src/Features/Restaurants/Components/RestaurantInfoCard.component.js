import React from "react";
import styled  from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`
const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "Some Restaurant",
        icon,
        photos = [
            "https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=612x612&w=0&k=20&c=3HWrUVnS-FsJETFlCWnDH2-1ekJ0ic3T3XPrhLjpo98="
        ],
        address,
        isOpenNow,
        rating,
        isClosedTemporarily
    } = restaurant

    return(
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Title>{name}</Title>
        </RestaurantCard>
    )
}
