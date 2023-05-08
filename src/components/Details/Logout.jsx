import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff} from '@fortawesome/free-solid-svg-icons';


const Logout = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "/"
    }
    
  return (
    <FontAwesomeIcon icon={faPowerOff} title="Log out" onClick={handleLogout}/>
  )
}

export default Logout