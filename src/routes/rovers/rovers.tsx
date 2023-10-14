import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import RoverGallery from "@/components/rover/roverGallery.tsx";
import ReactImageGallery from "react-image-gallery";
import useRoverData from "@/hooks/useRoverData.ts";

export default function Rovers() {
    const {sol, rover} = useParams();
    const [selectedSol, setSelectedSol] = useState(parseInt(sol) ?? 1);
    const [selectedRover, setSelectedRover] = useState(rover ?? 'curiosity');

    const roverData = useRoverData(selectedSol, selectedRover);

    useEffect(() => {

    }, [roverData]);

    return (
        <>
            <div>
                <ReactImageGallery items={} />
            </div>
        </>
    );
}