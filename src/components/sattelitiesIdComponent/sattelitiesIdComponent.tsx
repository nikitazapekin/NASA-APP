import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
interface SattelitiesIdComponnentProps {
    id: string | undefined
}
const SattelitiesIdComponent =({id}: SattelitiesIdComponnentProps)=> {
    const {fetchSattelitiesId} =useActions()
    useEffect(()=> {
fetchSattelitiesId()
    }, [])
    return  (
<div className="sattelitiesIdComponent">
    {id}
</div>
    )
}
export default SattelitiesIdComponent