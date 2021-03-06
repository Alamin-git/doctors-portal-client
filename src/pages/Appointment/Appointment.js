import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}/>
            <AvailableAppointment date={selected}/>
            <Footer/>
        </div>
    );
};

export default Appointment;