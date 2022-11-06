import React from 'react';

function Login(props) {
    return (
			<div>
				<h1>Ulyanna Chung State Farm Agency</h1>
				<div>
                    <div>
                        <span>Username</span>
                        <input type='text' />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type='text' />
                    </div>
                </div>
                <aside>
                    <span>Mission</span>
                    <span>Vision</span>
                </aside>
                <p>
                    Bee a Difference v1.0 by:
                    <br />
                    Daniel
                    <br />
                    Eduardo
                    <br />
                    Julian
                </p>
			</div>
		);
}

export default Login;