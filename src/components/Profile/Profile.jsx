import React, { useState } from 'react'
import ProfileNavigation from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Orders from './Orders'
import Favorites from './Favorites'
import Addresses from './Addresses'
import Payments from './Payments'
import Notifications from './Notifications'
import Events from './Events'
import Logout from './Logout'

const Profile = () => {
    const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation open={openSideBar} />
        </div>
        <div className='lg:w-[80%]'>
            <Routes>
                <Route path='/' element={<UserProfile/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/addresses' element={<Addresses/>}/>
                <Route path='/payments' element={<Payments/>}/>
                <Route path='/notifications' element={<Notifications/>}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/logout' element={<Logout/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Profile