import useApodData from "@/hooks/useDateInSql.ts";

export default function ApodImage({date}: { date: string }) {
    const apodData = useApodData(date);

    return (
        <>
            {apodData ? (
                <div className={"flex flex-col max-w-6xl"} style={{height: '80vh'}}>
                    <h1 className={"text-center pb-2"}>Astronomical picture of the day</h1>
                    <img
                        className={"rounded object-scale-down max-h-full drop-shadow-md rounded-md m-auto cursor-pointer"}
                        src={apodData.url}
                        alt={apodData.title}/>
                    <h2 className={"text-center p-2"}>{apodData.title}</h2>
                    <span className={"text-center"}>{apodData.explanation}</span>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}