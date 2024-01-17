import axios from "axios"
import { Tz, Tt } from "./Types"
export const subscribtionsActions = async (token: string, data: Tz, data1: Tt) => {
    try {
        const response = await axios.post(`/api/set/addArticleToDatabase`, { token, data, data1 })
        console.log(response)
    } catch (e) {
        console.log(e)
    }
}
export const handleRemoveArticle = async (token: string, nasa_id: string) => {
    const response = await axios.post(`/api/set/removeArticleFromDatabase`, { token, nasa_id })
    console.log(response)
}