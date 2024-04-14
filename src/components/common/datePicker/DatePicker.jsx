import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "../../../../node_modules/react-calendar/dist/Calendar.css";
import "./DatePicker.css";

export const DatePicker = ({ name, selectedDate, setFields, setError }) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarRef = useRef(null);

  const handleDateChange = (date) => {
    setFields((pre) => {
      return {
        ...pre,
        [name]: date,
      };
    });
    setCalendarOpen(false);
    setError((pre) => {
      return { ...pre, [name]: "" };
    });
  };

  const handleInputClick = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && calendarOpen) {
      setCalendarOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      calendarOpen &&
      calendarRef.current &&
      !calendarRef.current.contains(event.target)
    ) {
      setCalendarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarOpen]);

  // Function to format the date as 'dd/mm/yyyy'
  const formatSelectedDate = (date) => {
    if (!date) return "";
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month < 10 ? `0${month}` : month}/${year}`;
  };

  const today = new Date();

  const tileDisabled = ({ date }) => {
    // Get yesterday's date
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    return date < yesterday;
  };

  return (
    <div className="pl-2 relative inline-block">
      <input
        type="text"
        value={selectedDate ? formatSelectedDate(selectedDate) : ""}
        onClick={handleInputClick}
        placeholder="Select"
        name=" schedule_date"
        className="outline-none focus:ring-0 w-full"
      />
      {calendarOpen && (
        <div
          ref={calendarRef}
          className="absolute top-[-300px] left-0 bg-white z-50"
        >
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            tileDisabled={tileDisabled}
          />
        </div>
      )}
    </div>
  );
};
