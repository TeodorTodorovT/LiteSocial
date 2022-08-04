import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

const Rightbar = ({ user }) =>{
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
                    <span className="birthdayText">
                        <b>Mark</b> and <b>Elon</b> and 3 others have birthday today.
                    </span>
                </div>
                <img src={`${PF}ad.jpg`} alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friend</h4>
                    <ul className="rightbarFriendList">
                        {Users.map(u => (
                            <Online key={u.id} user={u}/>
                        ))}
                    </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">{user.city}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">{user.from}</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship status:</span>
                    <span className="rightbarInfoValue">
                        {user.relationship === 1 
                            ? "Single" 
                            : user.relationship ===2 
                            ? "Married"
                            : "-"
                        }</span>
                </div>
            </div>

            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src={`${PF}person/2.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Bill Gates</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/3.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Bill Gates</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/4.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Bill Gates</span>
                </div>
                <div className="rightbarFollowing">
                    <img src={`${PF}person/5.jpg`} alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Bill Gates</span>
                </div>
            </div>
            </>
            )
    }    
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
}

export default Rightbar;