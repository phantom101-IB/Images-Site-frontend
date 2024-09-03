const url = "http://localhost:3000/api/v1/photos"

const Form = () => {

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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required /><br />
                <input type="file" name="image" required />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;
