import React, {createContext, useState} from 'react'
import { LocationRequest, LocationTransform } from './Location.service'

export const LocationContext = createContext({
    isLoading: false,
    error: null,
    location: null,
    search: () => null,
    searchTerm: null

})
export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("san francisco")
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
        if(!searchKeyword.length){
            return
        }
        LocationRequest(searchKeyword.toLowerCase())
        .then(LocationTransform)
        .then(result => {
            setIsLoading(false)
            setLocation(result)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err)
        })
    }

    const value = {
        searchTerm: keyword,
        location,
        isLoading,
        error,
        search: onSearch
    }

    return(
        <LocationContext.Provider value = {value}>
            {children}
        </LocationContext.Provider>
    )
}