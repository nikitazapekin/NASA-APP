

import {Route, Routes, Navigate}  from "react-router-dom"
import {HOMEPAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE, PICTURES_ROUTE, 
   OBJECTS_NEAR_EARTH_ROUTE, SATTELITIES_ROUTE, SATTELITIES_ID_ROUTE, ROVER_PHOTO_ROUTE, 
ROVER_PHOTO_ITEM_ROUTE, ROVER_PHOTO_ITEM_CAMERA_ROUTE
} from "./consts"
import Homepage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import AchievementsPage from "../pages/AchievementsPage/PicturePage"
import ObjectsNearEarthPage from "../pages/ObjectsNearEarthPage"
import SattelitiesPage from "../pages/SattelitiesPage"
import SattelitiesIdPage from "../pages/SattelitiesIdPage"
import RoversPage from "../pages/roversPage"
import RoversPageItem from "../pages/roversPageItem"
import RoverPageItemComponentItemPage from "../components/roverPageItemComponentItemPage/roverPageItemComponentItemPage"
const publicRoutes=[
 {
    path: SIGN_UP_ROUTE,
    Component: RegisterPage
 },
 {
   path: HOMEPAGE_ROUTE,
   Component: Homepage
},
{
    path: SIGN_IN_ROUTE,
    Component: LoginPage
 },
 {
   path: PICTURES_ROUTE,
    Component: AchievementsPage
 },
 {
    path: OBJECTS_NEAR_EARTH_ROUTE,
     Component: ObjectsNearEarthPage
  },

  {
   path: SATTELITIES_ROUTE,
    Component: SattelitiesPage
 },
 {
   path:  SATTELITIES_ID_ROUTE,
   Component: SattelitiesIdPage

}, 
{
   path:  ROVER_PHOTO_ROUTE,
   Component: RoversPage

},
{
   path: ROVER_PHOTO_ITEM_ROUTE,
   Component: RoversPageItem

}, 
{
   path: ROVER_PHOTO_ITEM_CAMERA_ROUTE,
   Component: RoverPageItemComponentItemPage
}
]
const privateRoutes =[
    {
        path: HOMEPAGE_ROUTE,
        Component: Homepage
     },
     {
      path: SIGN_UP_ROUTE,
      Component: RegisterPage
   },
   {
    path: SIGN_IN_ROUTE,
    Component: LoginPage
 },
 {
    path: PICTURES_ROUTE,
    Component: AchievementsPage
 },
 {
    path: OBJECTS_NEAR_EARTH_ROUTE,
     Component: ObjectsNearEarthPage
  },
  {
   path: SATTELITIES_ROUTE,
    Component: SattelitiesPage
 },
 {
   path:  SATTELITIES_ID_ROUTE,
   Component: SattelitiesIdPage

},
{
   path:  ROVER_PHOTO_ROUTE,
   Component: RoversPage

},
{
   path:  ROVER_PHOTO_ROUTE,
   Component: RoversPage

},
{
   path: ROVER_PHOTO_ITEM_CAMERA_ROUTE,
   Component: RoverPageItemComponentItemPage
}
]

const AppRoutes=()=> {
    const user=false
    return user ?  
    (
        <Routes>

{privateRoutes.map(({path, Component})=>( <Route  key={path} path={path} element={<Component  />} />)

    
)}



{/*
<Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />  
    */}




        </Routes>
    )
    :
    (
        <Routes>
{publicRoutes.map(({path, Component})=> (<Route   key={path} path={path} element={<Component/>}  />)
)}




{/*
<Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} /> 
    */} 





        </Routes>
    )
};
export default AppRoutes