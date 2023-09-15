import React from "react"
import { useSelector, useDispatch } from "react-redux"
import "./achievementsBlock.scss"
import { useEffect } from "react"
interface AchievementsBlockProps {
    users: {
        collection: {
          href: string,
          items: any[],
          links: any[]
        }
      }
}
  const AchievementsBlock=({users}: AchievementsBlockProps)=> {
    console.log("COL"+JSON.stringify(users.collection.items))
    return (
        <>
        <div className="achievementsLine">
    <h1 className="achievementsTitle">Achivements of year </h1> 
  
</div>
        </>
    )
}
export default AchievementsBlock 

