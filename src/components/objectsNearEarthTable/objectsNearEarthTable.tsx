import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
const ObjectsNearEarthTable =()=> {
    const {fetchObjectsNearEarth} = useActions()
    useEffect(()=> {
fetchObjectsNearEarth()
    }, [])

    const {data, error, loading}=useTypedSelectors(state=> state.objectsNearEarthReducer)
    return (
        <>
        <button onClick={()=> console.log(data.data)}>sssss</button>
        </>
    )
}
export default ObjectsNearEarthTable