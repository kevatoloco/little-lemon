import React, { useState } from "react";
import "./BookingForm.css";
function BookingForm() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [NumOfGuest, setNumOfGuest] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    occasion: "",
    guests: "",
    date: "",
    time: "",
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};
    if (formData.name === "") {
      err.name = "* Full name required!";
    }
    if (formData.email === "") {
      err.email = "* Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email not valid!";
      }
    }

    if (formData.telephone === "") {
      err.telephone = "* Phone number required!";
    } else {
      let phoneRegex =
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
      if (!phoneRegex.test(formData.telephone)) {
        err.telephone = "Telephone number not valid!";
      }
    }

    if (!NumOfGuest) {
      err.guests = "* Please specify number of guests!";
    }
    if (!selectedDate) {
      err.date = "* Please specify date!";
    }

    if (!selectedTime) {
      err.time = "* Please specify time!";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);

    let isValid = validateForm();
    if (isValid) {
      alert("Submitted");
    }
  };

  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>

          <form
            onSubmit={onSubmitHandler}
            style={{ display: "grid", maxWidth: "400px", gap: "10px" }}
          >
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Kevin Nguyen"
              name="name"
              onChange={onChangeHandler}
            />
            <span className="non-valid">{formError.name}</span>

            <div className="form-group">
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="text@email.com"
                  name="email"
                  onChange={onChangeHandler}
                />

                <span className="non-valid">{formError.email}</span>
              </div>

              <div className="field-group">
                <label htmlFor="telephone">Telephone</label>
                <input
                  type="tel"
                  placeholder="+233000000000"
                  name="telephone"
                  onChange={onChangeHandler}
                />

                <span className="non-valid">{formError.telephone}</span>
              </div>
            </div>

            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <span className="non-valid">{formError.date}</span>

            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select a time</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
            <span className="non-valid">{formError.time}</span>

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              onChange={(e) => setNumOfGuest(e.target.value)}
            />
            <span className="non-valid">{formError.guests}</span>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={onChangeHandler}>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
            </select>

            <button className="reserve-btn" type="submit">
              Make Your Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
