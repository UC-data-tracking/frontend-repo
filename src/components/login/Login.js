import React from 'react';
import './Login.css';

function Login(props) {
	return (
		<div className='login-container d-flex flex-column align-items-center justify-content-center'>
			<h1 className='page-title fs-1 mb-5 p-3 border border-dark border-3'>
				Ulyanna Chung State Farm Agency
			</h1>
			<div className='body-content d-flex flex-row justify-content-center mb-3'>
				<div className='user-and-pw-container d-flex flex-column mt-5'>
					<div className='d-flex mb-3 align-items-center'>
						<span className='fw-bold me-2'>Username</span>
						<input type='text' />
					</div>
					<div className='d-flex flex-row align-items-center mb-3'>
						<span className='fw-bold me-2'>Password</span>
						<input type='text' />
					</div>
                    <button className='btn bg-light'>Submit</button>
				</div>
				<aside className='d-flex flex-column ms-5 fs-4'>
					<span className='mission-title'>Mission</span>

					<span className='vision-title'>Vision</span>
				</aside>
			</div>
			<div className='credits-container d-flex flex-row'>
				<p className='d-flex justify-content-start credits fs-5 border border-3 border-dark p-3'>
					Bee a Difference v1.0 by:
					<br />
					Daniel
					<br />
					Eduardo
					<br />
					Julian
				</p>
			</div>
		</div>
	);
}

export default Login;
