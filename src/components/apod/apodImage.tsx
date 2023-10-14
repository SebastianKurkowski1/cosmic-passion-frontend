import useApodData from "@/hooks/useApodData.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import ReactImageGallery from "react-image-gallery";
import ReactPlayer from "react-player/youtube";

export default function ApodImage({date}: { date: string }) {
    const apodData = useApodData(date);

    return (
        <>
            {apodData ? (
                <div className={"flex flex-col max-w-6xl"}>
                    {apodData.mediaType != 'video' ?
                        (
                        <ReactImageGallery
                            items={[{
                                original: apodData.url,
                                fullscreen: apodData.hdurl,
                                originalTitle: apodData.title,
                            }]}
                            showPlayButton={false}
                            additionalClass={"apodPicture"}/>
                        ) :
                        (
                            <ReactPlayer
                                url={apodData.url}
                                width={"unset"}
                                height={"60vh"}
                                config={{
                                    playerVars: {
                                        controls: 2
                                    }
                                }}
                            />
                        )
                    }


                    <h2 className={"text-center p-2"}>{apodData.title}</h2>
                    <span className={"text-center"}>{apodData.explanation}</span>
                </div>
            ) : (
                <Skeleton className="w-[60vw] h-[80vh] "/>
            )}


        </>
    );
}