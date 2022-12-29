import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar'
import Time_Sheet_Input from '../time-sheet/Time_Sheet_Input';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import '../dashboard/Dashboard.css'

function Dashboard(props) {
    const [date, setDate] = useState(new Date());
	const [show, setShowTime] = useState(false);

    return (
			<div>
				<Header />
				<div className=''>
					<div className='calendar-container d-flex justify-content-center mt-5 mb-3'>
						<Calendar
							onChange={setDate}
							value={date}
							showNeighboringMonth={false}
							onClickDay={() => setShowTime(true)}
						/>
					</div>
					<div className='text-center'>
						Selected date: {date.toDateString()}
					</div>
				</div>

				<Time_Sheet_Input onClose={()=> setShowTime(false)} title={date.toDateString()} show={show} date={date}/>

				{/* <div
					show={show}
					onHide={handleClose}
					className='modal fade'
					id='exampleModalToggle'
					aria-hidden='true'
					aria-labelledby='exampleModalToggleLabel'
					tabindex='-1'>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='exampleModalToggleLabel'>
									Time - {date.toDateString()}
								</h5>
								<button
									onClick={handleClose}
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'></button>
							</div>
							<div className='modal-body'>
								<form className='d-flex justify-content-center align-items-center gap-3'>
									<label htmlFor='hours-worked'>Hours worked</label>
									<input
										type='text'
										id='hours-worked'
										className='form-control hours-worked-input'
									/>
								</form>
							</div>
							<div className='modal-footer'>
								<button className='btn btn-secondary'>Save</button>
								<button
									className='btn btn-primary'
									data-bs-target='#exampleModalToggle2'
									data-bs-toggle='modal'
									data-bs-dismiss='modal'>
									Bee a difference &#8594;
								</button>
							</div>
						</div>
					</div>
				</div> */}
				{/* <div
					show={show}
					onHide={handleClose}
					class='modal fade'
					id='exampleModalToggle2'
					aria-hidden='true'
					aria-labelledby='exampleModalToggleLabel2'
					tabindex='-1'>
					<div class='modal-dialog modal-dialog-centered'>
						<div class='modal-content'>
							<div class='modal-header'>
								<h5 class='modal-title' id='exampleModalToggleLabel2'>
									Bee a Difference - {date.toDateString()}
								</h5>
								<button
									onClick={handleClose}
									type='button'
									class='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'></button>
							</div>
							<div class='modal-body'>
								<form className='d-flex flex-column justify-content-center align-items-center gap-3'>
									<div className='d-flex flex-row align-items-center gap-3'>
										<label htmlFor='hours-worked'>Number of Pivots</label>
										<input
											type='text'
											id='hours-worked'
											className='form-control hours-worked-input'
										/>
									</div>
									<div className='d-flex flex-row align-items-center gap-3'>
										<label htmlFor='hours-worked'>
											Number of Referral Asks
										</label>
										<input
											type='text'
											id='hours-worked'
											className='form-control hours-worked-input'
										/>
									</div>
									<div className='d-flex flex-row align-items-center gap-3'>
										<label htmlFor='hours-worked'>Number of Review Asks</label>
										<input
											type='text'
											id='hours-worked'
											className='form-control hours-worked-input'
										/>
									</div>
									<div className='d-flex flex-row align-items-center gap-3'>
										<label htmlFor='hours-worked'>
											Number of Appointments Conducted
										</label>
										<input
											type='text'
											id='hours-worked'
											className='form-control hours-worked-input'
										/>
									</div>
									<div className='d-flex flex-row align-items-center gap-3'>
										<label htmlFor='hours-worked'>
											Number of Marketing Calls
										</label>
										<input
											type='text'
											id='hours-worked'
											className='form-control hours-worked-input'
										/>
									</div>
								</form>
							</div>
							<div class='modal-footer'>
								<button className='btn btn-secondary'>Save</button>
								<button
									class='btn btn-primary'
									data-bs-target='#exampleModalToggle'
									data-bs-toggle='modal'
									data-bs-dismiss='modal'>
									Time &#8594;
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
					Open Time for Day Selected
				</a>
				<Footer /> */}
			</div>
		);
}

export default Dashboard;