import {useParams} from "react-router-dom";
import ApodImage from "@/components/apod/apodImage.tsx";
import DatePickerDemo from "@/components/ui/date-picker.tsx";
import {useEffect, useState} from "react";
import useCurrentDate from "@/hooks/useCurrentDate.ts";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import useApodRange from "@/hooks/useApodRange.ts";

export default function Apod() {
    const {date} = useParams();
    const yesterday = useCurrentDate(1);
    const [selectedDate, setSelectedDate] = useState();
    const dateRange = useApodRange();

    useEffect(() => {
        if (date) {
            setSelectedDate(date);
        } else {
            setSelectedDate(yesterday);
        }
    }, [yesterday]);


    const handleDateChange = (selectedDate) => {
        // Do something with the selectedDate
        setSelectedDate(selectedDate);
    };

    return (
        <>
            <div className={"flex justify-evenly flex-col md:flex-row items-center md:items-start"}>
                <DatePickerDemo onDateChange={handleDateChange} dateRange={dateRange}/>
                <div className={"flex items-center flex-col"}>
                    {selectedDate ? <ApodImage date={selectedDate}/> : <Skeleton />}
                </div>
            </div>
        </>
    );
}