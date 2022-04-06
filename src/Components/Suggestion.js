import React, { useState } from 'react'
import "../Components/Suggestions.css"

const Suggestion = ({data}) => {

  const [Friend, setFriend] = useState("+Friend")

  return (<>
    <div  className="Contact-button">
        <div className="Contact">
            <div className='imgdiv1'>
                <img className='profile1' src={data.image} alt="" width={40} height={40} />
            </div>
            <div>
                <p> {data.content}</p>
            </div>
       </div>
        <div className='button'>
            <button onClick={(()=>{setFriend("")})}>{Friend}</button>
        </div>
    </div>
    </>
  )
}

export default Suggestion