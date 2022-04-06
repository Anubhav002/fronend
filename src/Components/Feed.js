import React from 'react'
import "./feed.css"
import Share from './Share'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
        <div className='feedWrap'>
            < Share />
            < Post />
            < Post />
            < Post />
            < Post />
            < Post />
        </div>
    </div>
  )
}

export default Feed