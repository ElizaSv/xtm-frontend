import Data from "../../data.js";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const data = Data.pricePerUnit.geodesy;


const Geodesy = (props) => {
  const [costs, setCosts] = useState(0);
  const [total, setTotal] = useState(0);
  const [visibility, setVisibility] = useState(false)
  const [factor, setFactor] = useState(1) // Projekta sarežģītības koeficients. 
  const ref1 = useRef();

  useEffect(() => {
  setTotal(parseFloat(ref1.current.outerText));
});
useEffect(() => {
  props.calcSum(total)
}, [total])
  useEffect(() => {
  if(!factor) { setFactor(prev => prev + 1)}
    }, [factor]);

    const toggleVisibility = () => {
  setVisibility(prev => !prev)
};
  return (
    <>
    <div className={props.editable ? "list-container withShadows" : "list-container"}>
        <div id="item-1" className="column-2 row-1">Mängd</div>
        <div className="column-3 row-1">Enhet</div>
        <div className="column-4 row-1">Pris</div>
        <div className="column-5 row-1">Sum</div>

        <div className="column-1">Calculation</div>
        <input type="number" min={0} id="plate-formar-amount" onChange={(event) => setCosts(event.target.value)} className="column-2" />
        <div className="column-3">{data.unit}</div>
        <div className="column-4">{(data.price * factor).toFixed(2)}</div>
        <div className="column-5" ref={ref1}>{(costs * data.price * factor).toFixed(2)}</div>
    </div>
    <div id="pog-total-sum">
        <div>
            <input type="number" min={0} onChange={(event) => setFactor(event.target.value)} className={`${visibility ? "visible" : ""}`} placeholder="1"/> 
            {props.editable ? visibility ? <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibility} /> : <FontAwesomeIcon icon={faEye} onClick={toggleVisibility} /> : null}
        </div>
        <div>Sum<em> (Sek)</em>: <span> <em>{total.toFixed(2)}</em></span></div> 
    </div>
</>
  )
}

export default Geodesy