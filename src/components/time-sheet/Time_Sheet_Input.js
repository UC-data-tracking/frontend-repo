import React from 'react';
import './Time_Sheet_Input.css'
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Time_Sheet_Input.css";


const Time_Sheet_Input = props => {

	return ReactDOM.createPortal(
		<CSSTransition
			in={props.show}
			unmountOnExit
			timeout={{ enter: 0, exit: 300 }}>
			<div className='modal'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h4 className='modal-title'>Time - {props.title}</h4>
						<button
							onClick={props.onClose}
							type='button'
							className='btn-close'></button>
					</div>
					<div className='modal-body d-flex align-items-center justify-content-center'>
						{props.children}
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
						<button onClick={props.onClose} className='btn btn-secondary'>
							Save
						</button>
						<button className='btn btn-primary'>
							Bee a difference &#8594;
						</button>
					</div>
				</div>
			</div>
		</CSSTransition>,
		document.getElementById('root')
	);
    };

export default Time_Sheet_Input;