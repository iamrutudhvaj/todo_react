import React from 'react'
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Signup from './auth/Signup';
import { Route, Routes } from 'react-router-dom';
import Signin from './auth/Signin';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/Signin' element={<Signin />}></Route>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
      </Routes>
      {/* <ForgotPassword /> */}
      {/* <Signup/> */}
      {/* <ResetPassword/> */}
      {/* <Signin/> */}
    </>
  );
}

export default App