import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/2.jpg" alt="" className="profileCoverImg"/>   
                    <img src="assets/person/1.jpg" alt="" className="profileUserImg"/>  
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Dwayne Johnson</h4>
                    <span className="profileInfoDesc">Im the rock</span>

                </div>
            </div>
            <div className="profileRightBottom">
                <Feed/>
                <Rightbar/>
            </div>
            
        </div>
        
    </div>            
</>
  )
}