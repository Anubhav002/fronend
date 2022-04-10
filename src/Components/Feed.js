import React from 'react'
import "./feed.css"
import Share from './Share'
import Post from './Post'
import {Posts} from "./Data.js"

function Feed() {
  return (
    <div className='feed'>
        <div className='feedWrap'>
            < Share />
            {Posts.map(p=>(< Post key={p.id} post={p}/>))}
            
            
        </div>
    </div>
  )
}

export default Feed