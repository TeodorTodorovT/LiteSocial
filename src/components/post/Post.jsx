import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="/assets/person/1.jpg" alt="" />
                    <span className="postUsername">dwayne johnson</span>
                    <span className="postDate">5 minutes ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Yo this my first post</span>
                <img className="postImg" src="assets/post/1.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" alt="" />
                    <img className="likeIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter"> 20 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">4 comments</span>
                </div>

            </div>
        </div>
    </div>
  )
}
