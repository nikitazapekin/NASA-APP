import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import { useTypedSelectors } from "../../hooks/useTypedSelectors"
import Spinner from "../spinner/spinner"
import "./objectsNearEarthTable.scss"
const ObjectsNearEarthTable = () => {
  const { fetchObjectsNearEarth } = useActions()
  const { data, error, loading, page, limit } = useTypedSelectors(state => state.objectsNearEarthReducer)
  useEffect(() => {
    fetchObjectsNearEarth(page, limit)
  }, [page])
  if (loading) {
    return <Spinner />
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div className="tableWrapper">
      <h4 className="objectsNearEarthCount">
        Total count of objects near Earth: {data.count}
      </h4>
      <table className="borderForTable tableWithData">
        <thead>
          <tr>
            <th className="borderForTable">h</th>
            <th className="borderForTable">last_obs</th>
            <th className="borderForTable">ps_max</th>
            <th className="borderForTable">ip</th>
            <th className="borderForTable">id</th>
            <th className="borderForTable">n_imp</th>
            <th className="borderForTable">des</th>
            <th className="borderForTable">v_inf</th>
            <th className="borderForTable">fullname</th>
            <th className="borderForTable">last_obs_jd</th>
            <th className="borderForTable">ts_max</th>
            <th className="borderForTable">ps_cum</th>
            <th className="borderForTable">diameter</th>
            <th className="borderForTable">range</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((item, index) => (
            <tr key={index}>
              <td className="borderForTable">{item.h}</td>
              <td className="borderForTable">{item.last_obs}</td>
              <td className="borderForTable">{item.ps_max}</td>
              <td className="borderForTable">{item.ip}</td>
              <td className="borderForTable">{item.id}</td>
              <td className="borderForTable">{item.n_imp}</td>
              <td className="borderForTable">{item.des}</td>
              <td className="borderForTable">{item.v_inf}</td>
              <td className="borderForTable">{item.fullname}</td>
              <td className="borderForTable">{item.last_obs_jd}</td>
              <td className="borderForTable">{item.ts_max}</td>
              <td className="borderForTable">{item.ps_cum}</td>
              <td className="borderForTable">{item.diameter}</td>
              <td className="borderForTable">{item.range}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default ObjectsNearEarthTable
