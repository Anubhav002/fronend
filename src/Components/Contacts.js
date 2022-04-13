import React, { useContext, useEffect, useState } from 'react'
import "../Components/Contacts.css"
import lens from "../images/lens.png"
import img4 from "../images/person.jpg"
// import data from "./Data"
import axios from "axios"
import { AuthContext } from '../context/AuthContext'

const Contacts = () => {
    const [Input, setInput] = useState("input-contact")
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    
  
    const { user } = useContext(AuthContext)

    useEffect(() => {
       const friends=async()=>{
           try{
            const findfriends= await axios.get(`/users/${user._id}/followings`)
            setData(findfriends.data);
           }
           catch(err){
               console.log(err)
           }
       }
    },[])
    
  return (
    <div>
        <div className='Contacts-div'>
            <div className="Title">
                <h3>Contacts</h3>
                    <input 
                    className={Input}  
                    placeholder="Search.." 
                    type="text" 
                    onChange={((e)=>{setSearch(e.target.value)})}/>
                <div onClick={(()=>{setInput(Input==="input-contact-visible"?"input-contact":"input-contact-visible")})} className='lens'>
                    <img src={lens} alt="" width={20}/>
                </div>
            </div>
            <div className='Contacts'>
            {
                data.filter((data)=>{
                    if(search===""){
                        return data; 
                    } else if(data.name.toLowerCase().includes(search.toLowerCase()))
                    {
                        return data;
                    }
                }).map((data , key)=>{
                        return(
                            <div className="Contact" key={key}>
                            <div className='imgdiv1'>
                                <img className='profile1' src={data.imageUrl} alt="" width={40} height={40} />
                            </div>
                            <div>
                                <p>{data.username}</p>
                            </div>
                        </div>  
                        )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Contacts