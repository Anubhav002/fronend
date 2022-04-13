import React, { useContext } from 'react'
import "../Components/Self_prof.css"
import { AuthContext } from '../context/AuthContext'


import  img1 from"../images/pics.jpg"
import  img2 from"../images/water.jpg"
import "../Components/profilee/profilee.css"
const States=["UP", "Uttrakhand","Delhi", "Himachal Pradesh"]

const Self_prof = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="mainly">
    <div className= "prime">
              <img className="back" src={img2} alt="" /> 
              <img className="primef"src={img1} alt=" "/>
    </div>
   
    <form >
            <div className='form'>
            
            <div className='Left'>
                <label>First Name</label>
                <input type="text" placeholder='First Name' value={user.givenName}/>
                <label>Designation</label>
                <select>{
                    States.map((state, index)=>{
                        return <option value="" selected>{state}</option>
                    })}
                </select>
                <label>Gender</label>
                <input type="radio button"/>
                <label>City</label>
                <input type="text" placeholder='City'/>
            </div>
            <div className='Left'>
                <label>Last Name</label>
                <input type="text" placeholder='Last Name' value={user.familyName}/>
                <label >My Website</label>
                <input type="text" placeholder='My Website'/>
                <label>Birthday</label>
                <input id='birthday' type="text" placeholder='Birthday'/>
                <div className='Address'>
                    <div id='state_select'>
                     <label>State</label>
                     <select>{
                    States.map((state, index)=>{
                        return <option value="" select>{state}</option>
                    })}
                </select>
                   </div>
                   <div className='State'>
                     <label>Zip</label>
                     <input id='state_input' type="text" placeholder='Zip'/>
                    </div>
                </div>
            </div>
           </div>
        <div>
               <button>Save</button>
               <button>Reset All</button>
           </div>
        </form>

</div>

  )
    
}

export default Self_prof