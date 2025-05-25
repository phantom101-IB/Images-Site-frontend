import { useState } from "react"
import { useNavigate } from "react-router-dom"
const url = "http://localhost:3000/api/v1/auth/login"
const sign_url = "http://localhost:3000/api/v1/auth/register"
const dpurl = "https://image-upload-backend-xigj.onrender.com"
// production urls
const uri = `${dpurl}/api/v1/auth/login`
const sing_uri = `${dpurl}/api/v1/auth/register`

import { Riple } from "react-loading-indicators"


const Login = () => {
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [emailsValue, setEmailsValue] = useState("")
    const [passwordsValue, setPasswordsValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [data, setData] = useState({})
    const [transition, setTransition] = useState(false)
    const [loginLoader, setLoginLoader] = useState(false)

    // check states for Loading
    const [emailBool, setEmailBool] = useState(false)
    const [passwordBool, setPasswordBool] = useState(false)
    const [emailsBool, setEmailsBool] = useState(false)
    const [passwordsBool, setPasswordsBool] = useState(false)
    const [nameBool, setNameBool] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmailValue("")
        setPasswordValue("")
        const entries = new FormData(e.target)
        const data = Object.fromEntries(entries)

        fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
                setLoginLoader(!loginLoader)
                if (!data.msg) {
                    location.href = "/"
                }

            })

    }

    const handleSign = (e) => {
        e.preventDefault()
        setEmailsValue("")
        setPasswordsValue("")
        setNameValue("")
        const entries = new FormData(e.target)
        const data = Object.fromEntries(entries)

        fetch(sing_uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
                setLoginLoader(!loginLoader)

                if (!data.msgS) {
                    location.href = "/"
                }

            })

    }

    const { name, token, id } = data
    if (name && token) {
        localStorage.setItem("token", JSON.stringify(token))
        localStorage.setItem("name", JSON.stringify(name))
        localStorage.setItem("id", JSON.stringify(id))
    }

    return <div className="login-main-div">
        <div className={`login-control-div ${transition && "height"}`}>
            {
                emailBool && passwordBool && loginLoader && <div className="login_loader_div">
                    <Riple color={["#595959", "#ff6f61", "#b23895", "#050036"]} />
                </div>
            }
            {
                nameBool && emailsBool && passwordsBool && loginLoader && <div className="login_loader_div">
                    <Riple color={["#595959", "#ff6f61", "#b23895", "#050036"]} />
                </div>
            }
            <form className={`login-form log1 ${transition ? "false" : "true"}`} action="" onSubmit={handleSubmit}>
                <div className="email-div">
                    <label htmlFor="email">Email:</label> <br />
                    <input required type="text" name="email" placeholder="e.g email@email.com" value={emailValue} onChange={(e) => {
                        setEmailValue(e.target.value)
                        setEmailBool(true)
                    }} />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password:</label><br />
                    <input required type="password" name="password" placeholder="Password" value={passwordValue} onChange={(e) => {
                        setPasswordValue(e.target.value)
                        setPasswordBool(true)
                    }} />
                </div>
                {
                    data.msg && <p style={{ fontSize: "13px", color: "rgb(255, 0, 0)", padding: "5px", textAlign: "center" }}>{data.msg}</p>
                }
                <input type="submit" value="Login" onClick={() => setLoginLoader(!loginLoader)} />
                <div className="sign-up-log" style={{ textAlign: "center" }}>
                    <p>Don't have an account? <a style={{ color: "rgb(255, 0, 0)", cursor: "pointer" }} onClick={() => setTransition(!transition)}>Sign Up</a></p>
                </div>
            </form>

            <form className={`login-form sign-up-form ${transition ? "true" : "false"}`} action="" onSubmit={handleSign} >
                <div className="names-div">
                    <label htmlFor="name">Name:</label> <br />
                    <input required type="text" name="name" placeholder="e.g John Doe" value={nameValue} onChange={(e) => {
                        setNameValue(e.target.value)
                        setNameBool(true)
                    }} />
                </div>
                <div className="email-div">
                    <label htmlFor="email">Email:</label> <br />
                    <input required type="text" name="email" placeholder="e.g email@email.com" value={emailsValue} onChange={(e) => {
                        setEmailsValue(e.target.value)
                        setEmailsBool(true)
                    }} />
                </div>
                <div className="password-div">
                    <label htmlFor="password">Password:</label><br />
                    <input required type="password" name="password" placeholder="Password" value={passwordsValue} onChange={(e) => {
                        setPasswordsValue(e.target.value)
                        setPasswordsBool(true)
                    }} />
                </div>
                {
                    data.msgS && <p style={{ fontSize: "13px", color: "rgb(255, 0, 0)", padding: "5px", textAlign: "center" }}>{data.msgS}</p>
                }
                <input type="submit" value="Sign up" onClick={() => setLoginLoader(!loginLoader)} />
                <div className="sign-up-log" style={{ textAlign: "center" }}>
                    <p>Alread have an account? <a style={{ color: "rgb(255, 0, 0)", cursor: "pointer" }} onClick={() => setTransition(!transition)} >Login</a></p>
                </div>
            </form>
        </div>
    </div>
}


export default Login