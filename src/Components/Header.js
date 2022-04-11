import React, { useContext } from 'react'
import img1 from "../images/Header_logo.jpg"
import img2 from "../images/messenger.png"
import img3 from "../images/add-friend.png"
import img4 from "../images/person.jpg"
import "../Components/Header.css"
import { AuthContext } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const  Header=() =>{
    const {user} = useContext(AuthContext)
    
    const local=async()=>{
        toast.success("Logout Sussessful")
        setTimeout(() => {
            localStorage.clear();
            window.location.href='/login'    
        },2000);
        
        
    }

  return (
    <div className='header'>
        <div className='d_flex'>
            <div id='logo'>
                <img  src={img1} alt="" width={100} />
            </div>
            
            <div className='header_right'>
                <div className='imgdiv'>
                    <img className='profile' src={img4} alt="" width={50} height={50} />
                </div>
                <p>{user.username}</p>   
                <div className='imgdiv'>
                    <img src={img2} alt=""width={20} height={20}/>
                </div>
                <div className='imgdiv'>
                    <img src={img3} alt=""width={20} height={20} />
                    
                </div>
                <div className='counter'>2</div>
                <button onClick={local}>Logout</button>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Header