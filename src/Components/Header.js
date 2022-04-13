import React, { useContext } from 'react'
import img1 from "../images/Header_logo.jpg"
import img2 from "../images/messenger.png"
import img3 from "../images/add-friend.png"
import img4 from "../images/person.jpg"
import "../Components/Header.css"
import { AuthContext } from '../context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { user } = useContext(AuthContext)

    const local = async () => {
        toast.success("Logout Sussessful")
        setTimeout(() => {
            localStorage.clear();
            window.location.href = '/login'
        }, 2000);
    }

    return (
        <div className='header'>
            <div className='d_flex'>
                <div id='logo'>
                    <img src={img1} alt="" width={100} />
                </div>

                <div className='header_right'>
                    <div className='imgdiv'>
                        <img className='profile' src={user.imageUrl} alt="" width={50} height={50} />
                    </div>
                    <p style={{ marginTop: "12px" }}>{user.givenName+' '+user.familyName}</p>
                    <div className='imgdiv'>
                        <img src={img2} alt="" width={20} height={20} />
                    </div>
                    
                    <button style={{ border: "none", outline: "none", marginTop: "-3px",backgroundColor:"white" }} data-toggle="modal" data-target="#exampleModalCenter">
                        <div className='imgdiv'>
                            <img src={img3} alt="" width={20} height={20} />
                        </div>
                    </button>

                    <button onClick={local}>Logout</button>
                    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Header