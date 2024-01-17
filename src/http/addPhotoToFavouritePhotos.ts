
import axios from "axios"
import { InternalProps } from "./Types"
export const addPhotoToFavourite = async ({ token, title, url, date, explanation }: InternalProps) => {
    console.log("is work")
    try {
        const response = await axios.post(`/api/set/addToFavPhoto`, { token, title, url, date, explanation })
    } catch (e) {
        console.log(e)
    }
}
interface InternalPropsToRemove {
    token: string,
    url: string,
}
export const removePhotoFromFavourite = async ({ token, url }: InternalPropsToRemove) => {
    try {
        const response = await axios.post(`/api/set/removeFromFavPhoto`, { token, url })
    } catch (e) {
        console.log(e)
    }
}
