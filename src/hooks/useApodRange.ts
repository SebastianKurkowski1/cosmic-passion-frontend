import {useEffect, useState} from "react";
import request, {Method} from "@/services/fetcher.ts";

function useApodRange() {
    const [apodRange, setApodRange] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request(Method.POST, `api/apod-range`);
                setApodRange(response);
            } catch (error) {
                console.error(error);
            }
        };

     fetchData();
    }, []);

    return apodRange;
}

export default useApodRange;