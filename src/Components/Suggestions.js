import React,{useState}from 'react'
import "../Components/Suggestions.css"
import lens from "../images/lens.png"
import Data from "./suggestiond"
import Suggestion from './Suggestion'


const Suggestions = () => {
    const [Input, setInput] = useState("input-contact")
    const [search, setSearch] = useState("")
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