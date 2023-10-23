import React from 'react'
import SignIn from '../../components/auth/SignIn'
import SignUp from '../../components/auth/SignUp'
import AuthDetails from '../../components/AuthDetails'
import './Authentification.css'


export default function Authentification() {
  return (
    <div className='auth'>
        <SignIn/>
        <p>OR</p>
        <SignUp/>
        <AuthDetails/>
    </div>
  )
}
