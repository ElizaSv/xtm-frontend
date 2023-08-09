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
    const [manitouStatus, setManitouStatus] = useState(true); 
    const [managementStatus, setManagementStatus] = useState(true); 
    const [editable, setEditable] = useState(true);
 
    return (
      <>  
      <Header editable={editable} pogStatus={setPogStatus} foundationsStatus={setFoundationsStatus} wallsStatus={setWallsStatus} beamsStatus={setBeamsStatus} slabStatus={setSlabStatus} geodesyStatus={setGeodesyStatus} manitouStatus={setManitouStatus} managementStatus={setManagementStatus} pogS={pogStatus} foundationsS={foundationsStatus} wallsS={wallsStatus} beamsS={beamsStatus} slabS={slabStatus} geodesyS={geodesyStatus} manitouS={manitouStatus} managementS={managementStatus} onLogout={onLogout}/>
      <Document editableStatus={setEditable} editable={editable} pogStatus={pogStatus} foundationsStatus={foundationsStatus} wallsStatus={wallsStatus} beamsStatus={beamsStatus} slabStatus={slabStatus} geodesyStatus={geodesyStatus} manitouStatus={manitouStatus} managementStatus={managementStatus}/>
    </>
  )
}

export default PriceOffer