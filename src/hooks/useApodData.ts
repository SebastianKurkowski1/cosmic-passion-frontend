import {useEffect, useState} from "react";
import request, {Method} from "@/services/fetcher.ts";

function useApodData(date: string) {
    const [apodData, setApodData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request(Method.POST, `api/apod/${date}`);
                setApodData(response);
            } catch (error) {
                console.error(error);
            }
        };

     fetchData();
    }, [date]);

    return apodData;
}

export default useApodData;