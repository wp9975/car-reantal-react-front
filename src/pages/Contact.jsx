import React, { useState } from "react";
import DatePicker from "react-datepicker";


const Contact = () => {
    const [date, setDate] = useState(new Date());

    return (
      <DatePicker selected={date} onChange={date => setDate(date)} />
    );
}

export default Contact