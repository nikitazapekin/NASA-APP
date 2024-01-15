import axios from "axios"
interface InternalProps {
    token: string,
   id: string,
   idd: string
}
export interface Tt {
        collection: {
            version: string ,
            href: string,
            items: Array<
                {
                    href: string ,
                }>
       }
      }
      export interface Tz {
            collection: {
                version: string ,
                href: string,
                items: Array<
                    {
                        href: string ,
                          data: Array<{
                                center:  string,
                                title: string ,
                                keywords: Array<string>
                               
                                location:string ,
                                nasa_id: string ,
                                date_created: string ,
                                media_type: string ,
                                description: string
                            }>
                        links: Array<{  
                            href: string ,
                            rel:  string,
                            render:  string
                        }>
                    }>
           }
            
      }
    export const subscribtionsActions =async (token: string, data: Tz, data1: Tt) => {
try{
    const response = await axios.post(`/api/set/addArticleToDatabase`, {token, data, data1 } )
    console.log(response)
} catch(e) {
    console.log(e)
}
}
export const handleRemoveArticle =async ( token: string , nasa_id: string  ) => {
    const response = await axios.post(`/api/set/removeArticleFromDatabase`, {token, nasa_id } )
    console.log(response)
}