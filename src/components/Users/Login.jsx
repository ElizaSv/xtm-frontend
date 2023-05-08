import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAt, faLock} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const Login = ({email, password, setEmail, setPassword, responseData, setResponseData}) => {

  const [serverMessage, setServerMessage] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("https://xtm-api.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response =>
        response.ok ?  response.json() :response.json().then(data =>  setServerMessage(data.message)))
      .then(data => {
         setResponseData(data);
        if(data.token) localStorage.setItem("token", data.token);
        if(data.userId) localStorage.setItem("userId", data.userId);
      })
      .then(() => window.location.href = "/")
      .catch((error) => {
        console.error(error);
      });
  };

return (
   <>
                <FontAwesomeIcon icon={faUser} />
                 <form onSubmit={handleLogin} id="login-form">
                    <div className="user-info">
                        <span><FontAwesomeIcon icon={faAt} /></span>
                        <input type="email" value={email} id="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="user-info">
                        <span><FontAwesomeIcon icon={faLock} /></span>
                        <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="Log in" id="submit-user"/>
                    {serverMessage && <div id='server-message'>{serverMessage}</div> }
                </form>
   </>
  )
}

export default Login
