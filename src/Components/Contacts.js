import React, { useState } from 'react'
import "../Components/Contacts.css"
import lens from "../images/lens.png"
import img4 from "../images/person.jpg"
import data from "./contactdata"

const Contacts = () => {
    const [Input, setInput] = useState("input-contact")
    const [search, setSearch] = useState("")
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
                                <img className='profile1' src={img4} alt="" width={40} height={40} />
                            </div>
                            <div>
                                <p>{data.name}</p>
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