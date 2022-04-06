import React from 'react'
import Header from '../Components/Header'
import Self_prof from '../Components/Self_prof'
import Suggestions from '../Components/Suggestions'
import "../Pages/self_profile.css"

const Self_profile = () => {
  return (
    <div>
        <Header/>
        <div className='Self_profile'>
        <Self_prof/>
        <Suggestions/>
        </div>
    </div>
  )
}

export default Self_profile