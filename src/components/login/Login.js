import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import './Login.css';
import BeeImg from '../assets/bee-on-flower.avif';

function Login(props) {
	return (
		<div className='login-container container-fluid'>
			<div className='row'>
				<h1 className='trademark'>Track it</h1>
				<div className='col d-flex justify-content-center'>
					<div className='welcome-back-container flex-column d-flex justify-content-center gap-2'>
						<h2>Welcome Back</h2>
						<p>Let's get going! Please enter your login information below.</p>
						<span>Email</span>
						<input type='text' placeholder='Enter your email' />
						<span>Password</span>
						<input type='text' placeholder='Enter your password' />
						<Link to='/forgot-password'>Forgot Password?</Link>
						<butto className='btn'>Log in</butto>
						<p>
							Don't have an account? <Link to='/sign-up'>Sign up</Link>
						</p>
					</div>
				</div>
				<div className='img-container col'>
					<img
						className='bee-on-flower-img'
						src={BeeImg}
						alt='Bee on a flower'
					/>
				</div>
			</div>
		</div>
	);
}

export default Login;
