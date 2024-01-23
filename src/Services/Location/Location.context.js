import React, {createContext, useState} from 'react'
import { LocationRequest, LocationTransform } from './Location.service'
import { useEffect } from 'react'

export const LocationContext = createContext({
    isLoading: false,
    error: null,
    location: null,
    search: () => null,
    searchTerm: null

})
export const LocationContextProvider = ({children}) => {
    const [keyword, setKeyword] = useState("San Francisco")
    const [location, setLocation] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true)
        setKeyword(searchKeyword)
    }
    useEffect(()=>{
        if(!keyword.length){
            return
        }
        LocationRequest(keyword.toLowerCase())
        .then(LocationTransform)
        .then(result => {
            setIsLoading(false)
            setLocation(result)
        })
        .catch(err => {
            setIsLoading(false)
            setError(err)
        })
    },[keyword])

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