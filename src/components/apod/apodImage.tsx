import useApodData from "@/hooks/useApodUrl.ts";

export default function ApodImage({ date }: { date: string }) {
    console.log('ApodImage component is rendered'); // Add this line for debugging
    const apodData = useApodData(date);

    return (
        <>
            {apodData ? (
                <img src={apodData.url} alt={apodData.title} />
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}