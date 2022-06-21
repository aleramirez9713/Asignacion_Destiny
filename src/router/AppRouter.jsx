import { Route,  Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DestinyRoutes } from "../destiny/routes/DestinyRoutes"


export const AppRouter = () => {
  return (
    <Routes>

        <Route path="/auth/*" element={ <AuthRoutes/> }/>

        <Route path="/*" element={ <DestinyRoutes /> } />

    </Routes>
  )
}
