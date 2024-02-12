import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar/Sidebar";

const Layout: React.FC = () => {
    return(
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Layout;
