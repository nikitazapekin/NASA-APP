//   addPhotoToFavourite({userData: userData?.token, title: item.title, url: item.url, date: item.date, explanation: item.explanation})
import axios from "axios"
interface InternalProps {
token: string, 
title: string, 
url: string,
date: string, 
explanation: string
}
export const addPhotoToFavourite =async ({token, title, url, date, explanation }: InternalProps) => {
console.log( "is work")
try{
    const response = await axios.post(`/api/set/addToFavPhoto`, {token, title, url, date, explanation } )
    console.log(response)
} catch(e) {
    console.log(e)
}
}
interface InternalPropsToRemove {
    token: string, 
    url: string,
    }
export const removePhotoFromFavourite =async ({token,  url }: InternalPropsToRemove) => {
    console.log( "is work")
    try{
        const response = await axios.post(`/api/set/removeFromFavPhoto`, {token, url } )
        console.log(response)
    } catch(e) {
        console.log(e)
    }
    }
///api/set/EmailAndPassword