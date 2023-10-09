import {useParams} from "react-router-dom";

export default function Apod() {
    const { date } = useParams();
    return (
        <>
            <div>
                {date}
            </div>
        </>
    );
}