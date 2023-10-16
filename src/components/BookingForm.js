import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date,setDate] = useState("");
    const [times,setTime] = useState("");
    const [guests,setGuest] = useState("");
    const [occasion,setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);

    }
    
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className='formField'>
                        {/* date selection */}
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)}  
                            type='date' required></input>
                        </div>

                        {/* time selection */}
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>} )
                                }
                            </select>
                        </div>

                        {/* number of guests */}
                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)} type='number' placeholder='0' max={10} required></input>
                        </div>

                        {/* Occastion field  */}
                        <div>
                            <label htmlFor='book-occasion'>Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option>Birthday</option>   
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* submit button */}
                        <div className='btnReceive'>
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;