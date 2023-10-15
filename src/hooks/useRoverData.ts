import {useEffect, useState} from "react";
import request, {Method} from "@/services/fetcher.ts";

function useRoverData(sol: number, roverName: string) {
    const [roverData, setRoverData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request(Method.POST, `api/rover/${roverName}/${sol}`);
                const formatedData = response.map((data) => {
                    const formatedDate = data.earthDate.slice(0, 10);

                    return {
                        'original': data.imgSrc,
                        'thumbnail': data.imgSrc,
                        'fullscreen': data.imgSrc,
                        'description': formatedDate + ' id:' + data.id,
                        'loading': 'lazy',
                    };
                })
                setRoverData(formatedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [sol]);

    return roverData;
}

export default useRoverData;