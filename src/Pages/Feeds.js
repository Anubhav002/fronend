import React, { useContext, useEffect, useState } from 'react'
import Contacts from '../Components/Contacts'
import Header from '../Components/Header'
import Suggestions from '../Components/Suggestions'
import Feed from '../Components/Feed'
import Box from '../Components/box/Box'
import Sidebar from '../Components/sidebar/Sidebar'
import Ridebar from '../Components/ridebar/Ridebar'
import Fidebar from '../Components/fidebar/Fidebar'
import "../styles.css"
import {Link} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const Feeds = () => {
  const [password, setpassword] = useState("")
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user.password === '') {
      // while(password!==null&&password==="")
      {
        const password = prompt("Set your Password First", "")
        setpassword(password);
      }
    }
    const setassword = (async () => {
      const res = await axios.post(`/auth/password/${user._id}`, password)
      // const user1 = await axios.get(`/users/${user.googleId}`)
      // localStorage.setItem("user", JSON.stringify(user1.data))
      console.log(res);
    })
    setassword();
  }, [])
  console.log(password)
  return (
    <div>
      <Header />
      <div className='something_else'>

        <div className='styling'>
          <div>
            <div className="single">
           <Link className="change" to="/self_profile">  <Box /></Link>
            </div>
            <div className='stylee'>
            
            <Ridebar/>
            <Fidebar/>
            </div>
          </div>
        </div>

        <Feed />
        <div className='something'>
          <Contacts />
          <Suggestions />
        </div>
      </div>
    </div>
  )
}

export default Feeds