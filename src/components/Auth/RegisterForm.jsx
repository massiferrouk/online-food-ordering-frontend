import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../State/Authentication/Action'
import { useDispatch } from 'react-redux'

const initialValues ={
    fullName:"",
    email:"",
    password:"",
    role:""
}
const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit=(values)=>{
        dispatch(registerUser({userData:values, navigate}))
    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
           Register 
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <Field name='fullName' as={TextField} label='Full Name' variant='outlined' fullWidth margin="normal" />
                <Field name='email' as={TextField} label='Email' variant='outlined' fullWidth margin="normal" />
                <Field name='password' as={TextField} label='Password' variant='outlined' fullWidth margin="normal" type="password"/>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="role-simple-select-label">Role</InputLabel>
                    <Field
                        as={Select}
                        labelId="role-simple-select-label"
                        id="demo-simple-select"
                        label="Role"
                        name="role"
                    >
                        <MenuItem sx={{backgroundColor : "gray !important"}} value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                        <MenuItem sx={{backgroundColor : "gray !important"}} value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
                    </Field>
                </FormControl>
                <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' variant='contained' color='primary'>Register</Button>
            </Form>
    
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            ih have an account already?
            <Button size='small' onClick={()=>navigate("/account/login")}>login</Button>
        </Typography>
    </div>
  )
}

export default RegisterForm