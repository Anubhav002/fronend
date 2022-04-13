import React, { useContext } from 'react'
import "./post.css"
import img2 from '../images/Dislike.png'
import img3 from '../images/Like.png'
import img6 from '../images/option.png'
import {useState} from 'react'
import {Users} from "./Data.js"
import { AuthContext } from '../context/AuthContext'


function Post({post}) {
  const {user} = useContext(AuthContext)
  const [like, setLike] = useState(post.like);
  const [liked, setLiked] = useState(false);
  const likeHandler = ()=>{
    setLike(liked ? like-1:like+1);
    setLiked(!liked);
  }
  const [dislike, setDislike] = useState(post.dislike);
  const [disliked, setDisliked] = useState(false);
  const dislikeHandler = ()=>{
    setDislike(disliked ? dislike-1:dislike+1);
    setDisliked(!disliked);
  }

    const [report, setReport] = useState('options')

  return (
    <div className='post'>
        <div className='postWrap'>
            <div className='postTop'>
              <div className="postTopLeft">
              <img className='postProfileImage' src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt=''/>
              <div>
              <p className='postUser'>{Users.filter(u=>u.id === post.userId)[0].username}</p>
              <p className='postDate'>{post.date}</p>
              </div>
              </div>
              <div onClick={(()=>{setReport(report==="options"?"options-Show":"options")})} className="postTopRight">
              <img className='postOptions' src={img6} alt=''/>
              <button className={report} >
                <h3>Report</h3>
              </button>
              </div>
            </div>

            <span className='postText'>{post?.desc}</span>
            <div className='postMid'>
              
              <img className='postImage' src={post.photo} alt=''/>
            </div>
            <div className='postMidBottom'>
            <div className='postMidBottomLeft'>
                <img className='like' src={img3} onClick={likeHandler} alt='' width={40} height={20}/>
                <span className='postLikeCounter'>{like}</span>
                <img className='dislike' src={img2} onClick={dislikeHandler} alt='' width={40} height={20} />
                <span className='postDislike'>{dislike}</span>
              </div>
              <div className='postMidBottomRight'>
                <span className='postComment'>{post.comment} comments</span>
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
                <img className='postProfileImage' src={user.imageUrl} alt=''/>
                <input type='text' className='postCommentText' placeholder='Write a comment...'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Post