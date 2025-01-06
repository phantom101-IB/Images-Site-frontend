const url = "http://localhost:3000/api/v1/photos"
import { FaXmark } from "react-icons/fa6"
import { useGlobalContext } from "./context"

const Form = () => {
    const { check, setCheck } = useGlobalContext()
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
            })
            .catch(err => {
                console.error('Error:', err)
            })
    }

    return (
        <div className="img-upload-form-div">
            <form onSubmit={handleSubmit} className="img-upload-form">
                {/* <label htmlFor="name">Name:</label> */}
                <input type="text" name="name" required placeholder="name e.g Sun set" /><br />
                <input type="file" name="image" required /> <br />
                <input type="submit" />
            </form>
            <button className="close_up_form" onClick={() => setCheck(!check)}> < FaXmark /> </button>
        </div>
    )
}

export default Form;
