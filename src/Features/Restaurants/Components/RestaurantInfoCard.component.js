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
        name = "Just 4 you",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=612x612&w=0&k=20&c=3HWrUVnS-FsJETFlCWnDH2-1ekJ0ic3T3XPrhLjpo98="
        ],
        address = "Ikorodu, Lagos",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true
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
                            return <SvgXml key={index} xml={star} width={20} height={20}/>
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