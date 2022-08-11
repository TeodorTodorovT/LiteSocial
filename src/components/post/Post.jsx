import "./post.css"
import {MoreVert} from "@mui/icons-material"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";


export default function Post({post}) {

    //const username = Users.filter(u => u.id === post.userId)[0].username
    //const profilePic = Users.filter(u => u.id === post.userId)[0].profilePicture

    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const {user:currentUser} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() =>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    
    useEffect(()=> {
        const fetchUser = async () =>{
            const res = await axios.get(`/users/?userId=${post.userId}`)
            setUser(res.data)
        };
        fetchUser();
    },[post.userId])

    const likeHandler = () =>{
        try {
            axios.put("/posts/" + post._id + "/like", {userId: currentUser._id})
            
        } catch (err) {
            
        }
        setLike(isLike ? like - 1 : like + 1)
        setIsLiked(!isLike)
    }

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`} style={{textDecoration: "none"}}>
                        <img className="postProfileImg" src={user.profilePicture ? user.profilePicture : PF+"person/noProfilePhoto.jpg"}  alt="" />
                    </Link>
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
