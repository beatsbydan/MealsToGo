import camelize from "camelize";
import { locations } from "./Location.mock";

export const LocationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const mock = locations[searchTerm]
        console.log(mock)
        if(!mock){
            reject("Not Found!")
        }
        resolve(mock)
    })
}

export const LocationTransform = (result) => {
    const formattedResponse = camelize(result)
    const {geometry = {}} = formattedResponse.results[0]
    const {lat, lng} = geometry.location

    return {lat, lng}
}