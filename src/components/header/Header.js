import React from 'react';
import '../header/Header.css'
import Navbar from '../navbar/Navbar';
import Icon from '../assets/profile-icon.png'

function header(props) {
    return (
			<header className='shadow '>
				<Navbar />
				<a href='#'>
					<img className="profile-icon" src={Icon} alt='Profile-icon'/>
				</a>
			</header>
		);
}

export default header;