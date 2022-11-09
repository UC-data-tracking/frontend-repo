import { Routes, Route } from 'react-router-dom';
import Bee_a_Difference_Input from './components/bee-a-difference-input/Bee_a_Difference_Input';
import Dashboard from "./components/dashboard/Dashboard";
import Login from './components/login/Login';
import Monthly_Tracker_Input from './components/monthly-tracker-input/Monthly_Tracker_Input';
import Sign_up from './components/sign-up/Sign_up';


function App() {
  return (
		<div>
			<header></header>
			<main>
				<Routes>
					<Route path='/dashboard' element={<Dashboard/>}></Route>
					<Route path='/' element={<Login/>}></Route>
					<Route path='/sign-up' element={<Sign_up/>}></Route>
					<Route path='/bad-input' element={<Bee_a_Difference_Input/>}></Route>
					<Route path='/monthly-tracking-input' element={<Monthly_Tracker_Input/>}></Route>
				</Routes>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
