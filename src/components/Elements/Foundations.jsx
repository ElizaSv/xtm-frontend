import Data from "../../data.js";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

const data = Data.pricePerUnit.foundations

const Foundations = (props) => {
    const [formar, setFormar] = useState(0);
    const [armering, setArmering] = useState(0);
    const [betong, setBetong] = useState(0);
    const [cellplast, setCellplast] = useState(0);
    const [incast, setIncast] = useState(0);
    const [total, setTotal] = useState(0);
    const [visibility, setVisibility] = useState(false)
    const [factor, setFactor] = useState(1) // Projekta sarežģītības koeficients. 

    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef(); 
    const ref5 = useRef(); 

    useEffect(() => {
      setTotal(parseFloat(ref1.current.outerText) + parseFloat(ref2.current.outerText)  + parseFloat(ref3.current.outerText)  + parseFloat(ref4.current.outerText) + parseFloat(ref5.current.outerText) );
    });
    useEffect(() => {
      props.calcSum(total)
    }, [total]);
    
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

            <div className="column-1">Formar</div>
            <input type="number" min={0} id="foundations-formar-amount" onChange={(event) => setFormar(event.target.value)} className="column-2" />
            <div className="column-3">{data.veidni.unit}</div>
            <div className="column-4">{(data.veidni.price * factor).toFixed(2)}</div>
            <div className="column-5" ref={ref1}>{(formar * data.veidni.price * factor).toFixed(2)}</div>

            <div className="column-1">Armering</div>
            <input type="number" min={0} id="foundations-armering-amount" onChange={(event) => setArmering(event.target.value)} className="column-2"/>
            <div className="column-3">{data.stiegrojums.unit}</div>
            <div className="column-4">{(data.stiegrojums.price * factor).toFixed(2)}</div>
            <div className="column-5"  ref={ref2} >{(data.stiegrojums.price * armering * factor).toFixed(2)}</div>
            
            <div className="column-1">Betong</div>
            <input type="number" min={0} id="foundations-betong-amount" onChange={(event) => setBetong(event.target.value)} className="column-2"/>
            <div className="column-3">{data.betons.unit}</div>
            <div className="column-4">{(data.betons.price * factor).toFixed(2)}</div>
            <div className="column-5"  ref={ref3} >{(data.betons.price * betong * factor).toFixed(2)}</div>

            
            <div className="column-1">Cellplast</div>
            <input type="number" min={0} id="foundations-cellplast-amount" onChange={(event) => setCellplast(event.target.value)} className="column-2"/>
            <div className="column-3">{data.siltumizolacija.unit}</div>
            <div className="column-4">{(data.siltumizolacija.price * factor).toFixed(2)}</div>
            <div className="column-5"  ref={ref4} >{(data.siltumizolacija.price * cellplast * factor).toFixed(2)}</div>

            <div className="column-1">In-cast details</div>
            <input type="number" min={0} id="foundations-incast-amount" onChange={(event) => setIncast(event.target.value)} className="column-2"/>
            <div className="column-3">{data.ieliekamasDalas.unit}</div>
            <div className="column-4">{(data.ieliekamasDalas.price * factor).toFixed(2)}</div>
            <div className="column-5"  ref={ref5} >{(data.ieliekamasDalas.price * incast * factor).toFixed(2)}</div>
            
         
       </div>
        <div id="pog-total-sum">
            <div>
              <input type="number" onChange={(event) => setFactor(event.target.value)} className={`${visibility ? "visible" : ""}`} placeholder="1"/> 
              {props.editable ? visibility ? <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibility} /> : <FontAwesomeIcon icon={faEye} onClick={toggleVisibility} /> : null}
              
            </div>
            <div>Sum<em> (Sek)</em>: <span> <em>{total.toFixed(2)}</em></span></div> 
        </div>
    </>
  )
}

export default Foundations