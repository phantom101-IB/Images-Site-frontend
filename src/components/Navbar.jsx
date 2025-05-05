import { useTypewriter, Cursor } from "react-simple-typewriter"
import { Link } from "react-router-dom"

const Navbar = () => {
    const token = localStorage.getItem("token")
    const [text] = useTypewriter({
        words: ["PicIt", "SaveIt", "ExploreIt"],
        loop: true,
        delaySpeed: 3000,
        deleteSpeed: 150,
    })
    return <nav className="nav-bar">
        <div className="nav-bar-main">
            <div className="logo">
                <img src="./pitIT3.png" alt="Site Logo" />
            </div>
            <div className="search-bar">
                <input type="text" className="search-input" />
                <button className="search-button">Search</button>
            </div>
            <div className="nav-list">
                <ul className="nav-buttons">
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to={"/explore"}>
                            Explore
                        </Link>
                    </li>
                    {token ? <li onClick={() => {
                        localStorage.clear()
                        window.location.href = "/"
                        // location.reload()
                    }}>
                        Logout
                    </li> : <li>
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </li>}

                </ul>
                {
                    token &&
                    <Link to={"/profile"}>
                        <img src="./Site logo.png" alt="site" />
                    </Link>

                }
            </div>
        </div>
        {/* <div className="welcome">
            <div className="welcome-text">
                <h3>
                    Welcome
                </h3>
                <h4>to</h4>
                <p>
                    {text}
                    <Cursor />
                </p>
            </div>
            <p>Explore, download and upload pictures for free</p>
        </div> */}
    </nav>
}


export default Navbar