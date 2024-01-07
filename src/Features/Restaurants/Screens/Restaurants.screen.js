import React, {useState} from 'react'
import { Searchbar } from 'react-native-paper'
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native'
import { RestaurantInfo } from '../Components/RestaurantInfo.component'

export const RestaurantsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleChange = (query) => setSearchQuery(query)
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
            <Searchbar
                value={searchQuery}
                onChangeText={handleChange}
                placeholder='Search'
            />
            </View>
            <View style={styles.list}>
                <RestaurantInfo/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        marginTop: StatusBar.currentHeight
    },
    search:{
        padding: 16, 
    },
    list:{
        padding: 16, 
        backgroundColor:"blue", 
        flex: 1
    }
});