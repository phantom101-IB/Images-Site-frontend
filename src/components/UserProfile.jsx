import { FaUpload } from "react-icons/fa"
import Form from './Form'
import { useState, useEffect } from "react"
import { useGlobalContext } from "./context"




const UserProfile = () => {
    const dpurl = "https://image-upload-backend-xigj.onrender.com"
    const { check, setCheck } = useGlobalContext()
    const user1 = JSON.parse(localStorage.getItem("id"))

    // development url
    const url = `http://localhost:3000/api/v1/All/user/${user1}`
    const picurl = "http://localhost:3000/api/v1/All"
    // production urls
    const uri = `${dpurl}/api/v1/All/user/${user1}`
    const picuri = `${dpurl}/api/v1/All`

    const [userPhotos, setUserPhotos] = useState([])
    useEffect(() => {
        try {
            fetch(uri)
                .then(res => res.json())
                .then(data => {
                    const { photo } = data
                    console.log(photo)
                    setUserPhotos(photo)
                })
        } catch (error) {
            console.log("No Pics available")
        }
    }, [])

    return <section className="main_profile">
        <div className="profile_control">
            <div className="user_photos">
                {
                    !userPhotos && <div>
                        <p style={{ textAlign: "center", width: "100%", fontStyle: "italic", fontWeight: "bold" }}>No Pictures available</p>
                    </div>
                }
                {
                    userPhotos && userPhotos.map((item, index) => {
                        const { path, name } = item
                        const apath = path.split(" ")[1]
                        return <div className="pic-relative" key={index}>
                            <div className="pic-source">
                                <img key={index} src={`${picurl}/${path}`} alt={name} />
                            </div>
                            <div className="pic-buttons">
                                <div className="pic-name">
                                    <h4>
                                        {name}
                                    </h4>
                                </div>
                                {/* <div className="pic-controls">
                                    <article className="btn download-btn"> <AiOutlineArrowDown className="down-arrow" /> Download</article>
                                    <article className="btn like-btn"><AiFillHeart /></article>
                                    <article className="btn view-btn"><AiOutlineFullscreen /></article>
                                </div> */}
                            </div>
                        </div>
                    })
                }
            </div>
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