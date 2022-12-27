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
				<div className=''>
					<div className='calendar-container d-flex justify-content-center mt-5 mb-3'>
						<Calendar
							onChange={setDate}
							value={date}
							showNeighboringMonth={false}
                            onClickDay={null}
						/>
					</div>
					<div className='text-center'>
						Selected date: {date.toDateString()}
					</div>
				</div>
                
				<div
					class='modal fade'
					id='exampleModalToggle'
					aria-hidden='true'
					aria-labelledby='exampleModalToggleLabel'
					tabindex='-1'>
					<div class='modal-dialog modal-dialog-centered'>
						<div class='modal-content'>
							<div class='modal-header'>
								<h5 class='modal-title' id='exampleModalToggleLabel'>
									Bee a Difference
								</h5>
								<button
									type='button'
									class='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'></button>
							</div>
							<div class='modal-body'>
								Show a second modal and hide this one with the button below.
							</div>
							<div class='modal-footer'>
								<button
									class='btn btn-primary'
									data-bs-target='#exampleModalToggle2'
									data-bs-toggle='modal'
									data-bs-dismiss='modal'>
									Open second modal
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					class='modal fade'
					id='exampleModalToggle2'
					aria-hidden='true'
					aria-labelledby='exampleModalToggleLabel2'
					tabindex='-1'>
					<div class='modal-dialog modal-dialog-centered'>
						<div class='modal-content'>
							<div class='modal-header'>
								<h5 class='modal-title' id='exampleModalToggleLabel2'>
									Modal 2
								</h5>
								<button
									type='button'
									class='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'></button>
							</div>
							<div class='modal-body'>
								Hide this modal and show the first with the button below.
							</div>
							<div class='modal-footer'>
								<button
									class='btn btn-primary'
									data-bs-target='#exampleModalToggle'
									data-bs-toggle='modal'
									data-bs-dismiss='modal'>
									Back to first
								</button>
							</div>
						</div>
					</div>
				</div>
				<a
					class='btn btn-primary'
					data-bs-toggle='modal'
					href='#exampleModalToggle'
					role='button'>
					Open first modal
				</a>
				<Footer />
			</div>
		);
}

export default Dashboard;