import React from 'react'
import Header from '../Components/Header'
import Self_prof from '../Components/Self_prof'
import Suggestions from '../Components/Suggestions'
import "./self_profile.css"

const Self_profile = () => {
  return (
    <div>
    <div className="headh"><Header/></div>
    <div className="head">
   <div className="prof">
     <Self_prof/>
     </div>
   <div className="sugg"> <Suggestions/></div>
    </div>
    </div>
  )
}

export default Self_profile