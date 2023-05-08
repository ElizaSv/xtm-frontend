import Logo from "../logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Welcome from "../components/Details/Welcome";
import Login from "../components/Users/Login";
import Register from "../components/Users/Register";
import Logout from "../components/Details/Logout";
import EmployeeInfo from "../components/Users/EmployeeInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';

const Home = ({email, password, setEmail, setPassword, token, userId}) => {
    const [responseData, setResponseData] = useState();
    const [register, setRegister] = useState(false);
  return (
    <>
        <header className="visibleHeader">
           <Link to="/"> <img src={Logo} alt="XTM Logo" /></Link>
           {token ? <div><Logout /> </div> :
           register ?  <div onClick={() => setRegister(false)} title="Log in"><FontAwesomeIcon icon={faUser}/></div> :  <div onClick={() => setRegister(true)} title="Register"><FontAwesomeIcon icon={faUserPlus} /></div> }
        </header>
        <main id="main-container">
            <Welcome />
            <div id="main-right">
              {token ? 
                  <EmployeeInfo userId={userId} token={token}/>
                  :
                register ?  <Register email={email} password={password} setEmail={setEmail} setPassword={setPassword}/> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} responseData={responseData} setResponseData={setResponseData}/> 
              }
                
            </div>
        </main>
    </>
  )
}

export default Home