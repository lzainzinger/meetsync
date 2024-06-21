"use client"

import { useState } from "react";
import { Calendar } from "./ui/calendar";
import React from "react";



const CalendarComponent = () => {

    const [selectedDates, setSelectedDates] = useState<Date[]>([]);
 
    return (
        <>
            <Calendar
                mode="multiple"
                selected={selectedDates}
                onSelect={(dates) => setSelectedDates(dates || [])}
                className="rounded-md border" />
            <ul>
                {selectedDates.map((date, index) => (
                    <li key={index}>
                        {new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()).toLocaleDateString("de", {day: "2-digit", year: "numeric", month: "2-digit",})}
                    </li>
                ))}
            </ul>
        </>
    );
  };
  
  export default CalendarComponent;