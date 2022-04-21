import {Arrowicon} from "../../../../../icons/arrowicon";
import {useContext} from "react";
import AccordionContext from "react-bootstrap/AccordionContext";
export const AccordionHeader = ({title, check, time, eventKey}) => {
    function isOpen(){
        const currentEventKey = useContext(AccordionContext);
        let isCurrentEventKey = currentEventKey === eventKey;
        return isCurrentEventKey
    }

    return (
       <>
           <div style={{fontSize: "14px"}}>
               {title}
           </div>
           <div className="d-flex align-items-center">
               <div className='mr-3'>
                   <img src={check} alt=""/>
               </div>
               <div className='mr-2_5' style={{fontSize: "14px", color: "#6E7178"}}>
                   {time}
               </div>
               <div>
                   <Arrowicon width='10' height='10' style={{transform: isOpen() ? 'rotate(180deg)' : ''}}/>
               </div>
           </div>
       </>
)}