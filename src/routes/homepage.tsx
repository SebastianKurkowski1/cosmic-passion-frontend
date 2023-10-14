import ApodImage from "@/components/apod/apodImage.tsx";
import useCurrentDate from "@/hooks/useCurrentDate.ts";

export default function HomePage() {
    const date = useCurrentDate(1);

    return (
        <>
            <div className={"flex items-center flex-col"}>
                <h1 className={"text-center pb-2"}>Astronomy picture of the day {date}</h1>
                {date ? <ApodImage date={date}/> : ""}
            </div>
        </>
    );
}