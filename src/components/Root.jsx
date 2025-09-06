import NavBar from "./NavBar/NabBar";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "./banner/Banner";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>,
            <Outlet></Outlet>,
            <Banner></Banner>
            <Footer></Footer>,
        </div>
    )
}

export default Root;