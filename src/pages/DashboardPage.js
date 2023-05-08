import Logo from "../logo.svg";
import { Link } from "react-router-dom";
import Logout from "../components/Details/Logout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHandHoldingDollar, faPeopleGroup, faClipboardQuestion } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
  
  return (
    <>
        <header className="visibleHeader">
           <Link to="/"> <img src={Logo} alt="XTM Logo" /></Link>
           <div><Logout /></div>
        </header>
        <main id="dashboard-container">
            <div id="my-calendar">
              <h3><FontAwesomeIcon icon={faCalendarDays} /> Calendar </h3>
              
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faHandHoldingDollar} /> Price offer</h3>
              <div>
                <Link to="/price-offer" className="go-to-price-offer">Create price offer</Link>
              </div>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faPeopleGroup} /> Manage Clients</h3>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faClipboardQuestion} /> Sample</h3>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faClipboardQuestion} /> Sample</h3>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faClipboardQuestion} /> Sample</h3>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faClipboardQuestion} /> Sample</h3>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faClipboardQuestion} /> Sample</h3>
            </div>
            <div>
              <h3><FontAwesomeIcon icon={faClipboardQuestion} /> Sample</h3>
            </div>
        </main>
    </>
  )
}

export default DashboardPage