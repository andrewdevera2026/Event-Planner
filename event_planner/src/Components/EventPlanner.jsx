import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p> Plan and Organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered </p>
            </section>
            <button className='grt-started-button'>Get started</button>
            <section  className='event_catigories'>
                <ul>
                <h2>Social Events:</h2>
                <li>Birthday Partiesd</li>
                <li>Anniversary celebration</li>
                <li>Wedding Reception</li>
                <li>Baby Showers</li>
                <li>Graduation parties</li>
                <li>Family reunions</li>

                </ul> 
                 <ul> 
                    <h2>Entertainment Events:</h2>
                    <li>Conserts</li>
                     <li>Music</li>
                      <li>Film</li>
                       <li>Comedy</li>
                        <li>Art</li>
                         <li>Cultural</li>
                 </ul> 
               
                <ul> 
                    <h2>Community Events:</h2>
                    <li>Fundraising</li>
                     <li>Charity</li>
                      <li>Volunter</li>
                       <li>Neigborhood</li>
                        <li>Community</li>
                         <li>Cultural</li>
                     </ul> 
                </section>
            <section className='features'>
                <h2> Features</h2>
                    <ul>
                        <li>Easy event creation and management</li>
                        <li>Customizable event templates</li>
                        <li>Guest list management</li>
                        <li>Real time collaboration</li>
                        <li>Reminders and notifications</li>
                    </ul>
              
            </section>
            <section className='testimonial'>
                <h2>Tesrimonials</h2>
                <div className='testimonial'>
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className='author'> - Emily Johnson</p>
                </div>
            </section>
            <section className='contact'>
                <h2>Contact us</h2>
                <form>
                    <input type ="text" placeholder='Name'/>
                    <input type ="email" placeholder='Email'/>
                    <input type ="message" placeholder='Message'/>
                    <button className='Submit-button'>Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;
