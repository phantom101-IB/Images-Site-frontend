import { useEffect } from "react"
import { useState } from "react"
import { AiOutlineArrowDown, AiFillHeart, AiOutlineFullscreen } from "react-icons/ai"
const url = "http://localhost:3000/api/v1/All"
const dpurl = "https://image-upload-backend-xigj.onrender.com"
const uri = `${dpurl}/api/v1/All`
const Pictures = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        try {
            fetch(uri)
                .then(res => res.json())
                .then(data => {
                    const { photo } = data
                    console.log(photo)
                    setInfo(photo)
                })
        } catch (error) {
            console.log("No Pics available")
        }
    }, [])

    return <div className="Pictures-main">
        <div className="pic-text-div">
            <h4 className="gH4">Gallery</h4>
            <div className="Sorted">
                <h4>Sorted By:</h4>
                <select className="selected">
                    <option value="latest">Latest</option>
                    <option value="Trending">Trending</option>
                    <option value="old">Old</option>
                    <option value="Categories">Categories</option>
                </select>
            </div>
        </div>
        <div className="pic-container">
            {
                info && info.map((item, index) => {
                    const { path, name } = item
                    return <div className="pic-relative" key={index}>
                        <div className="pic-source">
                            <img key={index} src={`${url}/${path}`} alt={name} />
                        </div>
                        <div className="pic-buttons">
                            <div className="pic-name">
                                <h4>
                                    {name}
                                </h4>
                            </div>
                            <div className="pic-controls">
                                <article className="btn download-btn"> <AiOutlineArrowDown className="down-arrow" /> Download</article>
                                <article className="btn like-btn"><AiFillHeart /></article>
                                <article className="btn view-btn"><AiOutlineFullscreen /></article>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>

    </div>

}

export default Pictures