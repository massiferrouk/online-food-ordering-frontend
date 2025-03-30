import { Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const demo = [
    {
        category:"Nuts & Seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Protein", "Eggs"]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange = (ingredient) => {
        console.log(ingredient)
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img
                className='w-[7rem] h-[7rem] object-cover'
                src='http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg'
                alt=''
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl' >Burger</p>
                    <p>500 DA</p>
                    <p className='text-gray-400' >nice food</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'>
            {demo.map((item)=>
                <div>
                    <p>{item.category}</p>
                    <FormGroup>
                        {item.ingredients.map((ingredient)=>
                            <FormControlLabel
                                control={<Checkbox onChange={() => handleCheckBoxChange(ingredient)} />}
                                label={ingredient}
                            />
                        )}
                    </FormGroup>
                </div>
            )}
            </div>
            <div>
                <Button variant='contained' disabled={false} type='submit' >{true?"Add To Cart":"Out Of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard