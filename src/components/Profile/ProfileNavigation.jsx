import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../State/Authentication/Action';

const menu = [
    {title:"Orders", icon:<ShoppingBagIcon/>},
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Addresses", icon:<AccountBalanceWalletIcon/>},
    {title:"Payments", icon:<AccountBalanceWalletIcon/>},
    {title:"Notifications", icon:<NotificationsActiveIcon/>},
    {title:"Events", icon:<EventIcon/>},
    {title:"Logout", icon:<LogoutIcon/>},
]
const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleNavigate=(item)=>{
        if(item.title === "Logout"){
            dispatch(logout())
            navigate("/")
        }
        else
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
  return (
    <div>
        <Drawer 
            onClose={handleClose} 
            open={isSmallScreen ? open : true} 
            sx={{zIndex: 1, position: 'sticky'}} 
            variant= {isSmallScreen ? "temporary" : 'permanent'} 
            anchor='left'
        >
            <div className='w-[50vm] lg:w-[20vw] flex flex-col text-xl gap-8 pt-16 justify-center h-[100vh]'>
                {menu.map((item, index) => (
                    <>
                        <div onClick={() => handleNavigate(item)} key={index} className='px-5 flex items-center space-x-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                        </div>
                        {index !== menu.length - 1 && <Divider/>}
                    </>))}
            </div>

        </Drawer>
    </div>
  )
}

export default ProfileNavigation