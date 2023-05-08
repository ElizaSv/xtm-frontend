import { Link } from "react-router-dom"
import Logo from "../logo-dark.svg";
import {useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint} from '@fortawesome/free-solid-svg-icons';
import Select from "./Details/Select";
import Data from "../data.js";
import PlateOnGround from "./Elements/PlateOnGround";
import Foundations from "./Elements/Foundations";
import Walls from "./Elements/Walls";
import Beams from "./Elements/Beams";
import Slab from "./Elements/Slab";
import Management from "./Elements/Management";
import LoaderManitou from "./Elements/LoaderManitou";
import Geodesy from "./Elements/Geodesy";

const Document = (props) => {
const [data, setData] = useState(null);
const [clientData, setClientData] = useState("");
const [projectName, setProjectName] = useState("");
const [projectID, setProjectID] = useState("");
const [projectAddress, setProjectAddress] = useState("");
const [client, setClient] = useState("");
const [sumBeams, setSumBeams] = useState(0);
const [sumWalls, setSumWalls] = useState(0);
const [sumFoundations, setSumFoundations] = useState(0);
const [sumSlab, setSumSlab] = useState(0);
const [sumPOG, setSumPOG] = useState(0);
const [sumGeodezy, setSumGeodezy] = useState(0);
const [sumLoader, setSumLoader] = useState(0);
const [sumManagement, setSumManagement] = useState(0);

const finalPrice = parseFloat((sumBeams + sumFoundations + sumGeodezy + sumLoader + sumManagement + sumPOG + sumSlab + sumWalls).toFixed(2));

const printableDocument = useRef();

useEffect(()=> {
    fetch(`https://xtm-api.onrender.com/users/${localStorage.userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  })
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}, [])

const Printing = () => {
    window.print();
};

 return (
    <> {data && 
        <div>
            <div id="document" ref={printableDocument}>
            <section id='xtm-info'>
                <div>
                    <h2>XTM Bygg AB</h2>
                    <p>Org.nr. 556898-0980</p>
                    <address>Torsgatan 8, 3 TR, 111 23 Stockholm</address>
                    <p>Tel. +46 (0)7 07 1331 01</p>
                    <Link to="https://xtmbygg.com/" target="_blank">www.xtmbygg.se</Link>
                </div>
                <div>
                    <img src={Logo} alt="XTM Logo" onClick={() => props.editableStatus(prev => !prev)} title={props.editable ? "Hide Top Header" : "Show Top Header"}/>
                </div>           
            </section>
            <section id="client-info">
                <div id="select-client">
                    <Select options={data.user.clients} onOptionChange={(value) => setClient(value)}></Select>
                </div>
                <div id="project-info"> 
                    <input id="project-name" type="text" placeholder="Project name" onChange={e => setProjectName(e.target.value)} value={projectName} title="Project name" />
                    <input id="project-id" type="text" placeholder="Project ID" onChange={e => setProjectID(e.target.value)} value={projectID} title="Project ID"/>
                    <input id="project-address" type="text" placeholder="Project address" onChange={e => setProjectAddress(e.target.value)} value={projectAddress} title="Project address" />
                </div>
            </section>
            {props.pogStatus && 
                    <section id="plateOnGround">
                        <h2>{Data.constructionElements[0]}</h2>
                        <PlateOnGround calcSum={setSumPOG} editable={props.editable}/>
                    </section>
            }
            {props.foundationsStatus &&
                    <section id="foundations">
                        <h2>{Data.constructionElements[1]}</h2>
                        <Foundations calcSum={setSumFoundations} editable={props.editable} />
                    </section>
            }
            {props.wallsStatus &&
                <section id="walls">
                    <h2>{Data.constructionElements[2]}</h2>
                    <Walls  calcSum={setSumWalls} editable={props.editable}/>
                </section>
            }
            {props.beamsStatus &&
                <section id="beams">
                    <h2>{Data.constructionElements[3]}</h2>
                    <Beams calcSum={setSumBeams} editable={props.editable}/>
                    </section>
            }
            {props.slabStatus &&
                <section id="slab">
                    <h2>{Data.constructionElements[4]}</h2>
                    <Slab  calcSum={setSumSlab} editable={props.editable} />
                </section>
            }        
            <section id="management-costs">
                <h2>Management, accommodation costs</h2>
                <Management calcSum={setSumManagement} editable={props.editable} />
            </section>
            <section id="loader-costs">
                <h2>Loader Manitou</h2>
                <LoaderManitou calcSum={setSumLoader} editable={props.editable}/>
            </section>
            {props.geodesyStatus &&
                <section id="geodesy-costs">
                    <h2>Geodesy works</h2>
                    <Geodesy  calcSum={setSumGeodezy} editable={props.editable}/>
                </section>
            }
            <section id="final-price">
            <h2>Total: <span>{finalPrice.toLocaleString()} <em>(sek)</em></span> </h2>
            </section>
            <section id="additional-notes">
                <div>
                    <h2>Addendum</h2>
                    <ul>
                        <li className="addendum-notes">If there is a change in volumes, the price must be adjusted.</li>
                        <li className="addendum-notes">Tolerance for betong casting according SS-EN-13670 tolerance class 1, surface not moulded.</li>
                        <li className="addendum-notes">The work is estimated to be 55 working hours/week from Mon-Fri 7:00-18:00, Sat 8:00-14:00, Sun-off.</li>
                        <li className="addendum-notes">It is assumed that the assembly area will be accessible from all sides. Manitou is intended to be used for the assembly of moulds and mesh. The reach of the concrete pump up to 25m is included.</li>
                        <li className="addendum-notes">Contract AB04</li>
                        <li className="addendum-notes">The start of work depends on the customers' acceptance of the offer and the available resources and opportunities to obtain the material on site at that time.</li>
                    </ul>
                </div>
            </section>
            <section id="customer-supply">
                <div>
                    <h2>Supplied by customer</h2>
                    <ul>
                        <li className="customer-notes">The customer provides general site conditions.</li>
                        <li className="customer-notes">Work areas prepared and handed over according to XTM casting timeline.</li>
                        <li className="customer-notes">Water, parking space for the mixer and pump on site and a place to flush the pump must be provided by the customer.</li>
                        <li className="customer-notes">Geodetic observation on site - elevation levels and main module lines.</li>
                        <li className="customer-notes">Security fence around the Site and expenses for the use of electricity and water.</li>
                        <li className="customer-notes">It is necessary to plug-in 380V and connection to water-pipe (close to assembly area)</li>
                        <li className="customer-notes">Storage space for construction materials in the territory and waste containers.</li>
                        <li className="customer-notes">Wardrobe, shower and dining room for 8-10 people for the entire assembly period.</li>
                        <li className="customer-notes">Office space with accessible internet.</li>
                        <li className="customer-notes">Free of charge parking place for 3 cars for whole assembly period.</li>
                        <li className="customer-notes">Radon protection materials and assembly are not included, can be negotiated separately.</li>
                        <li className="customer-notes">Waterproofing materials and/or assembly not included.</li>
                    </ul>
                </div>
            </section>
            <section id="signature">
                <div>
                    <h3>{data.user.firstName + " " + data.user.lastName}</h3>
                    <p>{data.user.position}</p>
                    <address>
                        {data.user.email} <br />
                        (0) 703-52 19 19
                    </address>
                    <Link to="https://xtmbygg.com/" target="_blank">www.xtmbygg.se</Link>
                </div>
            </section>
            </div>
            <div className="export-document">
                <button onClick={Printing}><FontAwesomeIcon icon={faPrint} title="Print or Download as PDF" /></button>
            </div>
        </div>
    } </>
  )
}

export default Document

