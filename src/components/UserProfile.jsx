import { FaUpload } from "react-icons/fa"
import Form from './Form'
import { useState } from "react"
import { useGlobalContext } from "./context"

const UserProfile = () => {
    const { check, setCheck } = useGlobalContext()
    const [userPhotos, setUserPhotos] = useState([])

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
                        <button className="upload_btn" onClick={() => setCheck(!check)}>Upload <FaUpload /> </button>
                        {
                            check && <input type="checkbox" className="up_check" checked />
                        }
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default UserProfile