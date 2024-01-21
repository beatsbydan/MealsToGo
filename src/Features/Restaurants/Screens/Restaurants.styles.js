import { ActivityIndicator} from "react-native-paper"
import{ FlatList } from 'react-native'
import styled from 'styled-components/native'

export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle:{
        padding: 16
    }
})``

export const LoadingBar = styled(ActivityIndicator)`
    flex: 1
`