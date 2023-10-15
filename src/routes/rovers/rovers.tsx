import {useParams} from "react-router-dom";
import {useState} from "react";
import ReactImageGallery from "react-image-gallery";
import useRoverData from "@/hooks/useRoverData.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";

export default function Rovers() {
    const {sol, rover} = useParams();
    const [selectedSol, setSelectedSol] = useState(typeof sol !== 'undefined' ? parseInt(sol) : 1);
    const [selectedRover, setSelectedRover] = useState(rover ?? 'curiosity');

    const roverData = useRoverData(selectedSol, selectedRover);


    return (
        <>
            <div className={"h-screen"}>
                {roverData ? (<ReactImageGallery items={roverData} />) : ( <Skeleton className="w-full h-[80vh] "/>)}
            </div>
        </>
    );
}