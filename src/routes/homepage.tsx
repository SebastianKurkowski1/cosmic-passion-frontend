import ApodImage from "@/components/apod/apodImage.tsx";
import useCurrentDate from "@/hooks/useCurrentDate.ts";

export default function HomePage() {
    const date = useCurrentDate();

    return (
        <>
            <div className={"flex items-center flex-col"}>
                {date ? <ApodImage date={date}/> : ""}
            </div>
        </>
    );
}