import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { object, string } from 'yup';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black !important',
    outline:"none",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    p: 4,
  };

const initialValues = {
    streetAddress: '',
    state: '',
    pincode: '',
    city: ''
}

const validationSchema = object({
    streetAddress: string().required('Street Address is required'),
    state: string().required('State is required'),
    pincode: string().required('Pincode is required'),
    city: string().required('City is required')
})


const items = [1,1]
const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{
        console.log('order created')
    }
    
    const handleOpenAddressModal=()=>{
        setOpen(true)
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit=(value)=>{
        console.log("form value", value)
        setOpen(false)
    }
  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {items.map(() => (
                    <CartItem />
                ))}
                <Divider/>
                <div className='billDetails px-5 text-sm'>
                    <p className='font-extralight py-5'>Bill Details</p>
                    <div className='space-y-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Item Total</p>
                            <p>$559</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Deliver Fee</p>
                            <p>$21</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>GST and Restaurant Charges</p>
                            <p>$559</p>
                        </div>
                        <Divider/>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Total pay</p>
                        <p>$2200</p>
                    </div>
                </div>
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>
                        Chose Delivery Address
                    </h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1,1,1].map((item) => (
                            <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>
                        ))}
                        <Card className="flex gap-5 w-64 p-5">
                            <AddLocationAltIcon/>
                            <div className='space-y-3 text-gray-500'>
                                <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Add</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box sx={style}>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}       
            >
                <Form>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Field  
                            as={TextField}
                            name="streetAddress"
                            label="Street Address"
                            variant="outlined"
                            fullWidth
                            error={!ErrorMessage("streetAddress")}
                            helperText={
                                <ErrorMessage name='streetAddress' >{(msg)=><span className="text-red-600" >    {msg}</span>}
                                </ErrorMessage>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Field  
                            as={TextField}
                            name="state"
                            label="state"
                            variant="outlined"
                            fullWidth
                            error={!ErrorMessage("state")}
                            helperText={
                                <ErrorMessage name='state' >{(msg)=><span className="text-red-600" >    {msg}</span>}
                                </ErrorMessage>
                            }
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Field  
                            as={TextField}
                            name="pincode"
                            label="pincode"
                            variant="outlined"
                            fullWidth
                            error={!ErrorMessage("pincode")}
                            helperText={
                                <ErrorMessage name='pincode' >{(msg)=><span className="text-red-600" >    {msg}</span>}
                                </ErrorMessage>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field  
                            as={TextField}
                            name="city"
                            label="city"
                            variant="outlined"
                            fullWidth
                            error={!ErrorMessage("city")}
                            helperText={
                                <ErrorMessage name='city' >{(msg)=><span className="text-red-600" >    {msg}</span>}
                                </ErrorMessage>
                            }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' color='primary' fullWidth type='submit'>Deliver Here</Button>
                    </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Box>
        </Modal>
    </>
  )
}

export default Cart