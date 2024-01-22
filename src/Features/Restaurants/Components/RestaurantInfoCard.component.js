import React from "react";
import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Text } from "../../../Components/Typography/Text.component";
import { Spacer } from "../../../Components/Spacer/Spacer.component";
import{
    RestaurantCard,
    RestaurantCardCover,
    Availability,
    Address,
    Rating,
    SectionEnd,
    Info,
    Icon
} from './RestaurantInfoCard.styles'

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name,
        icon,
        photos,
        address,
        isOpenNow,
        rating,
        isClosedTemporarily,
        placeId
    } = restaurant

    const RatingArray = Array.from(new Array(Math.floor(rating)))

    return(
        <RestaurantCard elevation={2}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Text variant="label">{name}</Text>
                <Availability>
                    <Rating>
                        {RatingArray.map((rating, index)=>{
                            return <SvgXml key={`${placeId}-${index}`} xml={star} width={20} height={20}/>
                        })}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily &&
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        }
                        <Spacer position = "left" size= "large">
                            {isOpenNow && <SvgXml xml={open} width={25} height={20}/>}
                        </Spacer>
                        <Spacer position = "left" size= "large">
                            <Icon source={{ uri: icon }}/>
                        </Spacer>
                    </SectionEnd>
                </Availability>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}