import {useParams} from "react-router-dom";
import ApodImage from "@/components/apod/apodImage.tsx";
import DatePickerDemo from "@/components/ui/date-picker.tsx";
import {useEffect, useState} from "react";
import useCurrentDate from "@/hooks/useCurrentDate.ts";

export default function Apod() {
    const {date} = useParams();
    const yesterday = useCurrentDate(1);
    const [selectedDate, setSelectedDate] = useState();

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
            <div className={"flex"}>
                <DatePickerDemo onDateChange={handleDateChange}/>
                <div className={"flex items-center flex-col"}>
                    <span>arrow left</span>
                    {selectedDate ? <ApodImage date={selectedDate}/> : ""}
                    <span>arrow right</span>
                </div>
            </div>
        </>
    );
}