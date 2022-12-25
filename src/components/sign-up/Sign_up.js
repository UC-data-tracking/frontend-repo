import React from 'react';
import { Link } from 'react-router-dom'

function Sign_up(props) {
    return (
		<div className='container-fluid d-flex justify-content-center align-items-center'>
			<div className='w-100 d-flex flex-column justify-content-center align-items-center'>
				<h1 className='trademark fs-4'>Track It</h1>
				<div className='login-container d-flex flex-column justify-content-center'>
					<div className='welcome-back-container flex-column d-flex justify-content-center align-items-center'>
						<div className='w-100 title-text-container d-flex flex-column gap-2'>
							<h2 className='fs-2'>Sign up!</h2>
							<p className='get-started-text'>
								Please enter your information below!
							</p>
						</div>
						<div className='flex-column d-flex justify-content-center gap-2 w-100 mb-3'>
							<span>Email</span>
							<input
								type='text'
								placeholder='Enter your email'
								className='form-control'
							/>
							<span>Password</span>
							<input
								type='password'
								placeholder='Enter your password'
								className='form-control'
							/>
							<span>Confirm Password</span>
							<input
								type='password'
								placeholder='Enter your password again'
								className='form-control'
							/>
							<span>Agent Pin</span>
							<input
								type='text'
								placeholder="Enter your agent's pin"
								className='form-control'
							/>
						</div>
						<div className='w-100 d-flex flex-column justify-content-center gap-3'>
							<Link to='/dashboard'>
								<button className='btn login-btn w-100'>Sign up</button>
							</Link>
							<p className='no-acct-text text-center'>
								Already have an account?{' '}
								<Link to='/' className='sign-up-text'>
									Login
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sign_up;