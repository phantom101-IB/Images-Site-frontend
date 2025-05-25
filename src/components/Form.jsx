const url = "http://localhost:3000/api/v1/photos"
import { FaXmark } from "react-icons/fa6"
import { useGlobalContext } from "./context"
import { OrbitProgress } from "react-loading-indicators"
import { useState } from "react"
const dpurl = "https://image-upload-backend-xigj.onrender.com"
const uri = `${dpurl}/api/v1/photos`

const Form = () => {
    const { check, setCheck } = useGlobalContext()
    const [imgLoader, setImgLoader] = useState(false)
    const [nameCheck, setNameCheck] = useState(false)
    const [fileCheck, setFileCheck] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setImgLoader(!imgLoader)
                    location.reload()
                }
            })
            .catch(err => {
                console.error('Error:', err)
                alert("No Image selected")
            })
    }

    return (
        <div className="img-upload-form-div">
            {
                nameCheck && fileCheck && imgLoader && <div className="img_submit_loader">
                    <OrbitProgress />
                </div>
            }
            <form onSubmit={handleSubmit} className="img-upload-form">
                {/* <label htmlFor="name">Name:</label> */}
                <input type="text" name="name" required placeholder="name e.g Sun set" onChange={() => setNameCheck(true)} /><br />
                <input type="file" name="image" required onChange={() => setFileCheck(!fileCheck)} /> <br />
                <input type="submit" onClick={() => setImgLoader(!imgLoader)} />
            </form>
            <button className="close_up_form" onClick={() => setCheck(!check)}> < FaXmark /> </button>
        </div>
    )
}

export default Form;
