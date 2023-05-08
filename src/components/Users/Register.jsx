import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faAt, faLock} from '@fortawesome/free-solid-svg-icons';

const Register = ({email, password, setEmail, setPassword}) => {
  
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://xtm-api.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((response) => {
            if (response.ok) {
              console.log('Registration successful. You can Log in to your account.');
            } else {
              console.error('Registration failed');
            }
          })
          .catch((error) => {
            console.error(error);
          });
    }
  return (
<>
    <FontAwesomeIcon icon={faUserPlus} />
    <form onSubmit={handleSubmit} id="login-form" autoComplete="none">
        <div className="user-info">
            <span><FontAwesomeIcon icon={faAt} /></span>
            <input type="email" value={email} id="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="user-info">
            <span><FontAwesomeIcon icon={faLock} /></span>
            <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Register" id="submit-user"/>
    </form>
</>
  )
}

export default Register