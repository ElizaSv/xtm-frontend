import Header from "../components/HeaderPriceOffer";
import Document from "../components/Document";
import {  useState } from "react";




const PriceOffer = ({onLogout}) => {
    const [pogStatus, setPogStatus] = useState(true);
    const [foundationsStatus, setFoundationsStatus] = useState(true);
    const [wallsStatus, setWallsStatus] = useState(true);
    const [beamsStatus, setBeamsStatus] = useState(true);
    const [slabStatus, setSlabStatus] = useState(true);
    const [geodesyStatus, setGeodesyStatus] = useState(true);
    const [editable, setEditable] = useState(true);
 
    return (
    <>  
      <Header editable={editable} pogStatus={setPogStatus} foundationsStatus={setFoundationsStatus} wallsStatus={setWallsStatus} beamsStatus={setBeamsStatus} slabStatus={setSlabStatus} geodesyStatus={setGeodesyStatus} pogS={pogStatus} foundationsS={foundationsStatus} wallsS={wallsStatus} beamsS={beamsStatus} slabS={slabStatus} geodesyS={geodesyStatus} onLogout={onLogout}/>
      <Document editableStatus={setEditable} editable={editable} pogStatus={pogStatus} foundationsStatus={foundationsStatus} wallsStatus={wallsStatus} beamsStatus={beamsStatus} slabStatus={slabStatus} geodesyStatus={geodesyStatus}/>
    </>
  )
}

export default PriceOffer