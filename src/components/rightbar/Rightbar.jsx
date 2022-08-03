import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

const Rightbar = () =>{
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Mark</b> and <b>Elon</b> and 3 others have birthday today.
                    </span>
                </div>
                <img src="assets/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friend</h4>
                    <ul className="rightbarFriendList">
                        {Users.map(u => (
                            <Online key={u.id} user={u}/>
                        ))}
                    </ul>
            </div>
        </div>
    );
}

export default Rightbar;