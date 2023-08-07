import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"



export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginPage/>
                    </PublicRoutes>}
                />
                {/* <Route path="/Login" element={<LoginPage/>}/> */}


                <Route path="/*" element={
                    <PrivateRoutes>
                        <HeroesRoutes/>
                    </PrivateRoutes>}
                />

                {/*<Route path="/*" element={<HeroesRoutes/>}/>*/}
            </Routes>
        </>
    )
}
