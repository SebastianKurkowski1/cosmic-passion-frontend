import {Outlet} from "react-router-dom";
import Navbar from "@/layout/navbar.tsx";

export default function Root() {
    return (
        <>
            <Navbar />
            <div id="mainContent">
                <Outlet />
            </div>
        </>
    );
}