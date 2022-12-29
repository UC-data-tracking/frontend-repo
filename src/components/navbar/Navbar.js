import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
	return (
		<nav className='navbar'>
			<a className='dashboard-trademark'>Track It</a>
			<ul className='d-flex gap-4'>
				<li>
					<a className='btn' href='#'>
						Dashboard
					</a>
				</li>
				<li>
					<a className='btn' href='#'>
						Analytics
					</a>
					<ul className='shadow'>
						<li>
							<a className='btn' href='#'>
								Bee a Difference
							</a>
						</li>
						<li>
							<a className='btn' href='#'>
								Time Tracking
							</a>
						</li>
						<li>
							<a className='btn' href='#'>
								Agency Goals
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
