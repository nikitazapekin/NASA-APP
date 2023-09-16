import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
const ObjectsNearEarthTable =()=> {
    const {fetchObjectsNearEarth} = useActions()
    useEffect(()=> {
fetchObjectsNearEarth()
    }, [])
    return (
        <>
        </>
    )
}
export default ObjectsNearEarthTable