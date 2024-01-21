import React, {useState, createContext, useContext, useEffect, useMemo} from 'react'
import {restaurantsRequest, restaurantsTransform} from './Restaurants.service'
import { LocationContext } from '../Location/Location.context'

export const RestaurantsContext = createContext({
    restaurants: [],
    isLoading: false,
    error: null
})

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const {location} = useContext(LocationContext)

    const retrieveRestaurants = (location) => {
        setRestaurants([])
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest(location)
            .then(restaurantsTransform)
            .then(results => {
                setRestaurants(results)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
        }, 2000)
    }

    useEffect(() => {
        if(location){
            const locationString = `${location.lat},${location.lng}`
            retrieveRestaurants(locationString)
        }
    },[location])

    const value = {
        restaurants: restaurants,
        error: error,
        isLoading: isLoading
    }
    return (
        <RestaurantsContext.Provider value={value}>
            {children}
        </RestaurantsContext.Provider>
    )
}