import React, {useState, createContext, useEffect, useMemo} from 'react'
import {restaurantsRequest, restaurantsTransform} from './Restaurants.service'

export const RestaurantsContext = createContext({
    restaurants: [],
    isLoading: false,
    error: null
})

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const retrieveRestaurants = () => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest()
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
        retrieveRestaurants()
    },[])

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