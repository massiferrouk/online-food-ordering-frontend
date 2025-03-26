import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues ={
    email:"",
    password:""
}
const LoginForm = () => {
    const navigate = useNavigate()

    const handleSubmit=()=>{
        console.log('login')
    }

  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Login 
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field name='email' as={TextField} label='Email' variant='outlined' fullWidth margin="normal" />
                <Field name='password' as={TextField} label='Password' variant='outlined' fullWidth margin="normal"/>
                <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained' color='primary'>Login</Button>
            </Form>

        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Don't have an account?
            <Button size='small' onClick={()=>navigate("/account/register")}>Register</Button>
        </Typography>
    </div>
  )
}

export default LoginForm