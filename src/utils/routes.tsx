

import {Route, Routes, Navigate}  from "react-router-dom"
import {HOMEPAGE_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE, ACHIEVEMENTS_ROUTE, PICTURES_ROUTE, OBJECTS_NEAR_EARTH_ROUTE} from "./consts"
import Homepage from "../pages/Homepage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import AchievementsPage from "../pages/AchievementsPage/PicturePage"
import ObjectsNearEarthPage from "../pages/ObjectsNearEarthPage"
//import AchievementsPage from "../pages/"
//import  Homepage  from "../pages/homepage"
//import SignIn from "../pages/signin"
//import LoginComponent from "../components/loginComponent/loginComponent"
//import SignUp from "../pages/signup"
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
   // path: ACHIEVEMENTS_ROUTE,
   path: PICTURES_ROUTE,
    Component: AchievementsPage
 },
 {
    // path: ACHIEVEMENTS_ROUTE,
    path: OBJECTS_NEAR_EARTH_ROUTE,
     Component: ObjectsNearEarthPage
  },
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
  //  path: ACHIEVEMENTS_ROUTE,
    Component: AchievementsPage
 },
 {
    // path: ACHIEVEMENTS_ROUTE,
    path: OBJECTS_NEAR_EARTH_ROUTE,
     Component: ObjectsNearEarthPage
  },
 
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