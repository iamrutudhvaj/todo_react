import React from 'react'
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Signup from './auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Signin from './auth/Signin';
import Dashboard from './auth/Dashboard';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Dashboard />}></Route>
				<Route path='/Signin' element={<Signin />}></Route>
				<Route path='/Signup' element={<Signup />} />
				<Route path='/ForgotPassword' element={<ForgotPassword />} />
				<Route path='/ResetPassword' element={<ResetPassword />} />

			</Routes>




			{/* <Dashboard></Dashboard> */}

		</>
	);
}

export default App