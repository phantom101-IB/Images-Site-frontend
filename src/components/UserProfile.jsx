import { FaUpload } from "react-icons/fa"

const UserProfile = () => {
    return <section className="main_profile">
        <div className="profile_control">
            <div className="user_photos"></div>
            <div className="user_profile">
                <div className="user_profile_ctrl">
                    <div className="user_profile_pic">
                        <div className="pro_pic-div">
                            <img src="./puppie6.jpg" alt="User_profile" />
                        </div>
                        <div className="user_followers">
                            <li>Followers</li>
                            <li>Likes</li>
                            <li>Following</li>
                        </div>
                    </div>
                    <div className="upload_class">
                        <button className="upload_btn">Upload <FaUpload /> </button>

                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default UserProfile