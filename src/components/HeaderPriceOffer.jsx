import Logo from "../logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef} from "react";
import Logout from "./Details/Logout";

const Header = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const pog = useRef();
  const foundations = useRef();
  const walls = useRef(); 
  const beams = useRef(); 
  const slab = useRef(); 
  const geodesy = useRef(); 
  const manitou = useRef(); 

  const toggleShow = () => {
    setShowOptions(prev => !prev)
  }
  return (
    <header className={props.editable ? "visibleHeader" : "hiddenHeader"}>
         <Link to="/"> <img src={Logo} alt="XTM Logo" /></Link>
        <div>
            {
              showOptions ?  <FontAwesomeIcon icon={faXmark} onClick={toggleShow} /> : <FontAwesomeIcon icon={faPen} onClick={toggleShow} style={{fontSize: "19px"}} title="Edit list"/>
            }
          <Logout />
           
        </div>
        <div className={showOptions ? "menu-container show" : "menu-container .close"} id="menu-container">
            <span>
              <em>Mark the boxes to exclude element!</em> 
            </span>      
          <div>
            <input type="checkbox" id="check-pog" name="Plate On Ground" ref={pog} onChange={() => props.pogStatus(!pog.current.checked)} />
            <label htmlFor="check-pog" className={!props.pogS ? "faded" : null}>Plate on Ground</label>
          </div>
          <div>
            <input type="checkbox" id="check-foundations" name="Foundations" ref={foundations} onChange={() => props.foundationsStatus(!foundations.current.checked)}/>
            <label htmlFor="check-foundations" className={!props.foundationsS ? "faded" : null}>Foundations</label>
          </div>
          <div>
            <input type="checkbox" id="check-walls" name="Walls" ref={walls} onChange={() => props.wallsStatus(!walls.current.checked)} />
            <label htmlFor="check-walls" className={!props.wallsS ? "faded" : null}>Walls</label>
          </div>
          <div>
            <input type="checkbox" id="check-beams" name="Beams" ref={beams} onChange={() => props.beamsStatus(!beams.current.checked)}/>
            <label htmlFor="check-beams" className={!props.beamsS ? "faded" : null}>Beams</label>
          </div>
          <div>
            <input type="checkbox" id="check-slab" name="Slab" ref={slab} onChange={() => props.slabStatus(!slab.current.checked)}/>
            <label htmlFor="check-slab" className={!props.slabS ? "faded" : null}>Slab</label>
          </div>
          <div>
            <input type="checkbox" id="check-geodesy" name="Geodesy" ref={geodesy} onChange={() => props.geodesyStatus(!geodesy.current.checked)}/>
            <label htmlFor="check-geodesy" className={!props.geodesyS ? "faded" : null}>Geodesy</label>
          </div>
          <div>
            <input type="checkbox" id="check-manitou" name="Manitou" ref={manitou} onChange={() => props.manitouStatus(!manitou.current.checked)}/>
            <label htmlFor="check-manitou" className={!props.manitouS ? "faded" : null}>Loader Manitou</label>
          </div>

        </div>

    </header>
  )
}

export default Header