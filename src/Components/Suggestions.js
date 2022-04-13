import axios from 'axios'
import React,{useContext, useState}from 'react'
import "../Components/Suggestions.css"
import { AuthContext } from '../context/AuthContext'
import lens from "../images/lens.png"
import Data from "./Data"
import Suggestion from './Suggestion'

const Suggestions = () => {
    const [Input, setInput] = useState("input-contact")
    const [search, setSearch] = useState("")

    const {user} = useContext(AuthContext)
    console.log(user)
    // useEffect(async() => {
    //   try{
    //         const Data= axios.get(/suggestions)
    //         return Data;
    //   }
    //   catch(err){

    //   }
    
    // })
    

  return (
    <div>
        <div className='Contacts-div'>
            <div className="Title">
                <h3>Suggestions</h3>
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
                    Data.filter((data, index)=>{
                        if(search===""){
                            return data; 
                        } else if(data.name.toLowerCase().includes(search.toLowerCase()))
                        {
                            return data;
                        }
                    }).map((data, index)=>{
                       return(
                       <Suggestion data={data} key={index}/>
                       ) 
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Suggestions