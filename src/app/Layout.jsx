import { Outlet } from "react-router-dom"
import { Header } from "../widgets/Header"
import { Footer } from "../widgets/Footer/Footer"
 
export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
