import {Outlet} from "react-router-dom";
import Navbar from "@/layout/navbar.tsx";
import {useCallback} from "react";
import {Container, Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import Particles from "react-particles";

export default function Root() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
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