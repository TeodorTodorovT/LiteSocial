import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js"

export default function Post({post}) {

    //const username = Users.filter(u => u.id === post.userId)[0].username
    //const profilePic = Users.filter(u => u.id === post.userId)[0].profilePicture

    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false)
    const [user, setUser] = useState({})

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    
    useEffect(()=> {
        const fetchUser = async () =>{
            const res = await axios.get(`users/${post.userId}`)
            setUser(res.data)
        };
        fetchUser();
    },[post.userId])

    const likeHandler = () =>{
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={user.profilePicture || PF+"person/noProfilePhoto.jpg"}  alt="" />
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className="postImg" src={PF+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}/like.png`} alt="" onClick={likeHandler}/>
                    <img className="likeIcon" src={`${PF}/heart.png`} alt="" onClick={likeHandler}/>
                    <span className="postLikeCounter"> {like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>

            </div>
        </div>
    </div>
  )
}
