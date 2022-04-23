// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../img/large.png"


const Navbar = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    return ( 
        <div className="navBar">
            <nav className="container">
                <img src={Logo} width="60px" alt="" />
                <ul><li><a href="SignUp">Sigin Up</a></li>
                    {user? <Link to="/dashboard"> Dashboard </Link> :
                    <li><a href="Login">Login</a></li>
                    }
                </ul>
            </nav>
        </div>
     );
}
export default Navbar;