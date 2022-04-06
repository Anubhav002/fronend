import React from 'react'
import Contacts from '../Components/Contacts'
import Header from '../Components/Header'
import Suggestions from '../Components/Suggestions'
import Feed from '../Components/Feed'

const Feeds = () => {
  return (
    <div>
        <Header/>
        <div className='something_else'>
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