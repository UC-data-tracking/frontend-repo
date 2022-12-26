import React from 'react';
import {useState} from 'react'
import Calendar from 'react-calendar'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import '../dashboard/Dashboard.css'

function Dashboard(props) {
    const [date, setDate] = useState(new Date())


    return (
			<div>
				<Header />
				<div className='calendar-container d-flex justify-content-center mt-5 mb-3'>
					<Calendar onChange={setDate} value={date}/>
				</div>
                <div className='text-center'>Selected date: {date.toDateString()}</div>
				<Footer />
			</div>
		);
}

export default Dashboard;