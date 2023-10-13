import useApodData from "@/hooks/useApodData.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {useState} from "react";
import {Dialog, DialogTrigger} from "@/components/ui/dialog.tsx";
import ImageModal from "@/components/ui/image-modal.tsx";

export default function ApodImage({date}: { date: string }) {
    const apodData = useApodData(date);

    return (
        <>
            {apodData ? (
                <div className={"flex flex-col max-w-6xl"} style={{height: '80vh'}}>
                    <h1 className={"text-center pb-2"}>Astronomical picture of the day</h1>
                    <Dialog>
                        <DialogTrigger>
                            <img
                                className={"rounded object-scale-down max-h-full drop-shadow-md rounded-md m-auto cursor-pointer"}
                                src={apodData.url}
                                alt={apodData.title}
                            />
                        </DialogTrigger>
                        <ImageModal url={apodData.hdurl ? apodData.hdurl : ""}/>
                    </Dialog>
                    <h2 className={"text-center p-2"}>{apodData.title}</h2>
                    <span className={"text-center"}>{apodData.explanation}</span>
                </div>
            ) : (
                <Skeleton className="w-[30vw] h-[80vh] "/>
            )}


        </>
    );
}