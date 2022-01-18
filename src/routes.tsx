import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

import Profile from './pages/app/Profile';
import EditProfile from './pages/app/EditProfile';

const Routing: React.FC = () => {
  const userIsLogged = false;

  return (
    <BrowserRouter>
      <Routes>
      { userIsLogged ?
        <>
          <Route path='/' element={<Profile/>} />
          <Route path='/editProfile' element={<EditProfile/>} />
        </> :
        <>
          <Route path='/login' element={<SignIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/*' element={<Navigate to='/login'/>} />
        </>
      }
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;
