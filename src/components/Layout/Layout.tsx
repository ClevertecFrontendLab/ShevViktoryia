import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import MobileSidebar from "@components/MobileSidabar/MobileSidebar";

const Layout: React.FC = () => {

    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        const setResponsiveWarranty = () => window.innerWidth < 830 ? setMobile(!mobile) : setMobile(!mobile);
        setResponsiveWarranty();
        window.addEventListener("resize", () => setResponsiveWarranty());
        return () => {
            window.removeEventListener("resize", () => setResponsiveWarranty());
        }
    }, [])

    return(
        <>
            {!mobile ? <Sidebar /> : <MobileSidebar />}
            <Outlet />
        </>
    )
}

export default Layout;
