import {useParams} from "react-router-dom";

export default function Curiosity() {
    const { sol } = useParams();
    return (
        <>
           <div>
               {sol}
           </div>
        </>
    );
}