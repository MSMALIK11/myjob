import React from 'react'
import { Outlet } from 'react-router-dom'
import BreadCrumb from '../components/Breadcrumb'
import Discovery from '../components/Discovery'
import NavBar from '../components/NavBar'
import SideBar from '../components/sidebar/SideBar'

const Home = () => {
  return (
    <div className='outletHome'>
        {/* <NavBar /> */}

        {/* <SideBar/> */}
        {/* <Discovery /> */}
        
       <BreadCrumb/>
     
       <div className="children">
        <Outlet/>

       </div>

      
    </div>
  )
}

export default Home