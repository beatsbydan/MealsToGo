import React from "react";
import styled  from "styled-components/native";
import { Card } from "react-native-paper";
import {SvgXml} from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import {Image, Text} from 'react-native'

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size:${(props) => props.theme.fontSizes.body};
    color: ${(props) => props.theme.colors.ui.primary};
`
const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`
const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`
const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`
const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`
const Rating = styled.View`
    flex-direction: row;
`
const Availability = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]}
`
const SectionEnd = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
`
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
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{uri: photos[0]}}/>
            <Info>
                <Title>{name}</Title>
                <Availability>
                    <Rating>
                        {RatingArray.map((rating, index)=>{
                            return <SvgXml key={index} xml={star} width={20} height={20}/>
                        })}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily &&
                            <Text variant="label" style={{color: "red"}}>
                                CLOSED TEMPORARILY
                            </Text>
                        }
                        {isOpenNow && <SvgXml xml={open} width={25} height={20}/>}
                        <Image style={{ width: 15, height: 15 }} source={{ uri: icon }}/>
                    </SectionEnd>
                </Availability>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
