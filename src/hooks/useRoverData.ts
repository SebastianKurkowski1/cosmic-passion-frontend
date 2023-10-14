import {useEffect, useState} from "react";
import request, {Method} from "@/services/fetcher.ts";

function useRoverData(sol: number, roverName: string) {
    const [roverData, setRoverData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request(Method.POST, `api/rover/${roverName}/${sol}`);
                setRoverData(response);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };

     fetchData();
    }, [sol]);

    return roverData;
}

export default useRoverData;