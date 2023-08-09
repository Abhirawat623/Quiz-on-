import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Navbar=()=>{

const token = localStorage.getItem("token");

const navigate = useNavigate();
const handleAuthClick =()=>{
  if(token){
    localStorage.clear("token");
  }
  navigate("/auth/login");
}

    return(
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" >
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" ><img src="/assets/logo.png" width={"150px"}alt="logo"/></Link>
    <div  id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>

      <li className="nav-item">
          <Link to="/auth/login"  className="nav-link active" onClick={handleAuthClick}>{token? "Logout": "Login"}</Link>
        </li>
       

        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>

      </ul>
    </div>
  </div>
</nav>


    )

}
