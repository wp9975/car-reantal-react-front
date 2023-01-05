import React, { useState } from "react";
import classes from "./calculator.module.css";
import Results from "./subcomponents/Results";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calculator = (props) => {
  const [rentalDate, setRentalDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [dLicenseYear, setdLicenseYear] = useState(new Date());

  const currentDate = new Date();

  const handleCalculateRentalPrice = () => {

  }


  return (
    <div>
      <form onSubmit={handleCalculateRentalPrice}>
        <div className={`${classes.grid_container} ${classes.form_container}`}>
          <div className={classes.grid_item}>
            <label htmlFor="rental_date">Termin wypożyczenia samochodu:</label>
            <DatePicker
              selected={rentalDate}
              onChange={(date) => setRentalDate(date)}
              dateFormat="dd-MM-yyyy"
              minDate={currentDate}
              name="rental_date"
              id="rental_date"
            />
          </div>
          <div className={classes.grid_item}>
            <label htmlFor="return_date">Termin zwrotu samochodu:</label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="dd-MM-yyyy"
              minDate={rentalDate}
              name="return_date"
              id="return_date"
            />
          </div>
          <div className={classes.grid_item}>
            <label htmlFor="driving_license_year">
              Rok otrzymania prawa jazdy:
            </label>
            <DatePicker
              selected={dLicenseYear}
              onChange={(date) => setdLicenseYear(date)}
              dateFormat="yyyy"
              maxDate={currentDate}
              showYearPicker
              name="driving_license_year"
              id="driving_license_year"
            />
          </div>
          <div className={classes.grid_item}>
            <label htmlFor="range">
              Szacunkowa ilość kilometrów do przejechania:
            </label>
            <input type="number" name="range" id="range" min={20} max="10000" />
          </div>
        </div>
        <div className={classes.calculate_button}>
            <button>
            Oblicz cenę wynajmu
          </button>
          </div>
      </form>

      {/* <Results days="17" price="100" milage="1500" totalPrice="1700" /> */}
    </div>
  );
};

export default Calculator;
