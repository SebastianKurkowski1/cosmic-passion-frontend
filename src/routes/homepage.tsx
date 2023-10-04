import {Method} from "@/services/fetcher.ts";
import request from "@/services/fetcher.ts";
import {useEffect} from "react";

export default function HomePage() {

    useEffect(() => {
        const fetchData = async () => {
            try {
                await request(Method.POST, 'api/apod/2023-09-15');
            } catch (error) {
                console.error(error);
            }
        };

        fetchData().then(r => console.log(r));
    }, []);

    return (
        <>
            <div className={"flex items-center flex-col"}>
                Homepage
            </div>
        </>
    );
}