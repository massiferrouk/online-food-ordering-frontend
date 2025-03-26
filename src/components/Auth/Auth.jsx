import { Modal, Box } from '@mui/material'
import React from 'react'
import { style } from '../Cart/Cart'
import { useLocation, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Auth = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const handleOnClose=()=>{
        navigate('/')
    }
  return (
    <>
        <Modal onClose={handleOnClose} open={
            location.pathname === '/account/login' 
            || location.pathname === '/account/register'
        }>
            <Box sx={style} >
                {location.pathname === '/account/login' ? <LoginForm/> : <RegisterForm/>}
            </Box>
        </Modal>
    </>
  )
}

export default Auth