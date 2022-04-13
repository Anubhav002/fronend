import React from 'react'
import Header from '../Components/Header'
import Suggestions from '../Components/Suggestions'
import Profilee from '../Components/profilee/Profilee'
import "./profile.css"
const Profile = () => {
  return (
    
       <div>
        <div className="headh"><Header/></div>
        <div className="head">
       <div className="prof">
         <Profilee/>
         </div>
       <div className="sugg"> <Suggestions/></div>
        </div>
        </div>
  )
}

export default Profile