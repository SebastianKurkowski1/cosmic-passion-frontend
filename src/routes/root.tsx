import {Outlet} from "react-router-dom";
import Navbar from "@/layout/navbar.tsx";
import {useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import Particles from "react-particles";

export default function Root() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);


    return (
        <>
            <Navbar />
            <Particles id="tsparticles" url="/particles.json" init={particlesInit} loaded={particlesLoaded} />
            <div id="mainContent" className={"p-5"}>
                <Outlet />
            </div>
        </>
    );
}