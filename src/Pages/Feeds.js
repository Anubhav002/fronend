import React from 'react'
import Contacts from '../Components/Contacts'
import Header from '../Components/Header'
import Suggestions from '../Components/Suggestions'
import Feed from '../Components/Feed'
import Box from'../Components/box/Box'
import Sidebar from '../Components/sidebar/Sidebar'
import Ridebar from '../Components/ridebar/Ridebar'
import Fidebar from '../Components/fidebar/Fidebar'

const Feeds = () => {
  return (
    <div>
        <Header/>
        <div className='something_else'>
          <div>
            <Box/>
            <Sidebar/>
            <Ridebar/>
            <Fidebar/>
          </div>
        <Feed />
        <div className='something'>
        <Contacts/>
        <Suggestions/>
        </div>
        </div>
        
        
    </div>
  )
}

export default Feeds