import {useParams} from "react-router-dom";
import {useState} from "react";

export default function Curiosity() {
    const {sol} = useParams();
    const [selectedSol, setSelectedSol] = useState(sol ?? 1);


    return (
        <>
            <div>
                {sol}
            </div>
        </>
    );
}