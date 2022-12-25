import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
	return (
		<nav className='d-flex gap-5'>
			<a className='dashboard-trademark'>Track It</a>
			<ul className='d-flex gap-5'>
				<li>
					<a href='#'>Dashboard</a>
					<ul className='shadow'>
						<li>
							<a href='#'>Individual view</a>
						</li>
						<li>
							<a href='#'>Team view</a>
						</li>
					</ul>
				</li>
				<li>
					<a href='#'>Analytics</a>
					<ul className='shadow'>
						<li>
							<a href='#'>Bee a Difference</a>
						</li>
						<li>
							<a href='#'>Time Tracking</a>
						</li>
						<li>
							<a href='#'>Agency Goals</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
