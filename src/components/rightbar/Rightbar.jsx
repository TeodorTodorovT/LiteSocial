import "./rightbar.css"

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
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                        <li className="rightbarFriend">
                            <div className="rightbarProfileImgContainer">
                                <img src="assets/person/4.jpg" alt="" className="rightbarProfileImg" />
                                <span className="rightbarOnline"></span>
                            </div>
                            <span className="rightbarUserName">Will Smith</span>
                        </li>
                    </ul>
            </div>
        </div>
    );
}

export default Rightbar;