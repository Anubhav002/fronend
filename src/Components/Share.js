import React, { useContext } from 'react'
import './share.css'
import img5 from '../images/gallery.png'
import img7 from '../images/send.png'
import { AuthContext } from '../context/AuthContext'

function Share() {

  const {user}= useContext(AuthContext);

  return (
    <div className='share'>
        <div className='shareWrap'>
                <div className='shareStatus'>
                <img className='shareProfileImage' src={user.imageUrl} alt=''/>
                <input type='text' className='shareInput' placeholder='Share a post...'/>
                </div>
                <div className='shareBottom'>
                <img className='shareImage' src={img5} alt=''/>
                <span className='shareOptText'>Photo/Video</span>
                <img className='shareButtonIcon' src={img7} alt=''/>
                <span className='shareButton'>Share</span>
                </div>
        </div>
    </div>
  )
}

export default Share