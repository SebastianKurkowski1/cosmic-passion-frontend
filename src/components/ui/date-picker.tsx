"use client"

import * as React from "react"
import {format} from "date-fns"
import {Calendar as CalendarIcon} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePicker({onDateChange, dateRange}) {
    const [date, setDate] = React.useState<Date>()
    const handleDateSelect = (selectedDate) => {
        setDate(selectedDate);

        // Call the callback function with the selected date
        const formattedDate = `${selectedDate.getFullYear()}-${String(
            selectedDate.getMonth() + 1
        ).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
        onDateChange(formattedDate);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4"/>
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    dateRange={dateRange}
                    selected={date}
                    onSelect={handleDateSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
