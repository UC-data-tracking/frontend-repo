import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar(props) {
    return (
			<nav className='nav d-flex justify-content-between'>
				<ul className='nav-items'>
					<Link to='/bee-a-difference'>
						<li className='links'>Bee a Difference</li>
					</Link>
					<Link to=''>
						<li className='links'>Monthly Tracker</li>
					</Link>
					<Link to=''>
						<li className='links'>Daily Time Record</li>
					</Link>
					<Link to=''>
						<li className='links'>Reports</li>
					</Link>
				</ul>
				<Link to='/'>
					<li className='logout-link'>Log Out</li>
				</Link>
			</nav>
		);
}

export default Navbar;