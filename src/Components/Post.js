import React from 'react'
import "./post.css"
// import {MoreHoriz} from '@material-ui/core'
import img1 from '../images/1.jpg'
import img2 from '../images/Dislike.png'
import img3 from '../images/Like.png'
import img4 from '../images/person.jpg'
import img6 from '../images/option.png'

function Post() {
  return (
    <div className='post'>
        <div className='postWrap'>
            <div className='postTop'>
              <div className="postTopLeft">
              <img className='postProfileImage' src={img4} alt=''/>
              <div>
              <p className='postUser'>Aryan Goyal</p>
              <p className='postDate'>Date</p>
              </div>
              </div>
              <div className="postTopRight">
              <img className='postOptions' src={img6} alt=''/>
              </div>
            </div>

            <span className='postText'>Hello this is my post</span>
            <div className='postMid'>
              
              <img className='postImage' src={img1} alt=''/>
            </div>
            <div className='postMidBottom'>
            <div className='postMidBottomLeft'>
                <img className='like' src={img3} alt='' />
                <span className='postLike'>18</span>
                <img className='dislike' src={img2} alt='' />
                <span className='postDislike'>12</span>
              </div>
              <div className='postMidBottomRight'>
                <span className='postComment'>2 comments</span>
              </div>
            </div>
            
          
            <div className='postBottom'>
            <hr className='postHr' />
              <div className='postBottomTop'>
                  <button className='likeButton'>Like</button>
                  <button className='dislikeButton'>Dislike</button>
                  <button className='commenteButton'>Comment</button>
              </div>
            <hr className='postHr' />
              <div className='postBottomBottom'>
                <img className='postProfileImage' src={img4} alt=''/>
                <input type='text' className='postCommentText' placeholder='Write a comment...'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Post