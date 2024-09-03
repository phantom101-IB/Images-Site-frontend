import { useState } from "react"
const url = "http://localhost:3000/api/v1/auth/login"
const sign_url = "http://localhost:3000/api/v1/auth/register"

const Login = () => {
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [emailsValue, setEmailsValue] = useState("")
    const [passwordsValue, setPasswordsValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [data, setData] = useState({})
    const [transition, setTransition] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailValue("")
        setPasswordValue("")
        const entries = new FormData(e.target)
        const data = Object.fromEntries(entries)

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    }

    const handleSign = (e) => {
        e.preventDefault()

        const entries = new FormData(e.target)
        const data = Object.fromEntries(entries)

        fetch(sign_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
            })

    }

    const { name, token } = data
    if (name && token) {
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem("name", JSON.stringify(name))
    }

    return <div className="login-main-div">
        <div className={`login-control-div ${transition && "height"}`}>
            <form className={`login-form log1 ${transition ? "false" : "true"}`} action="" onSubmit={handleSubmit}>
                <div className="email-div">
                    <label htmlFor="email">Email:</label> <br />
                    <input required type="text" name="email" placeholder="e.g email@email.com" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password:</label><br />
                    <input required type="password" name="password" placeholder="Password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />
                </div>
                <input type="submit" value="Login" />
                <div className="sign-up-log" style={{ textAlign: "center" }}>
                    <p>Don't have an account? <a style={{ color: "rgb(255, 0, 0)", cursor: "pointer" }} onClick={() => setTransition(!transition)}>Sign Up</a></p>
                </div>
            </form>

            <form className={`login-form sign-up-form ${transition ? "true" : "false"}`} action="" onSubmit={handleSign} >
                <div className="names-div">
                    <label htmlFor="name">Name:</label> <br />
                    <input required type="text" name="name" placeholder="e.g John Doe" value={nameValue} onChange={(e) => setNameValue(e.target.value)} />
                </div>
                <div className="email-div">
                    <label htmlFor="email">Email:</label> <br />
                    <input required type="text" name="email" placeholder="e.g email@email.com" value={emailsValue} onChange={(e) => setEmailsValue(e.target.value)} />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password:</label><br />
                    <input required type="password" name="password" placeholder="Password" value={passwordsValue} onChange={(e) => setPasswordsValue(e.target.value)} />
                </div>
                <input type="submit" value="Sign up" />
                <div className="sign-up-log" style={{ textAlign: "center" }}>
                    <p>Alread have an account? <a style={{ color: "rgb(255, 0, 0)", cursor: "pointer" }} onClick={() => setTransition(!transition)} >Login</a></p>
                </div>
            </form>
        </div>
    </div>
}


export default Login