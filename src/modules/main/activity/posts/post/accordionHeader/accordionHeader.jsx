import {Arrowicon} from "../../../../../icons/arrowicon";
import {useContext} from "react";
import s from '../post.module.scss'
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
               <div className='mr-2 mr-sm-3 d-flex align-items-center'>
                   <img src={check} alt=""/>
               </div>
               <div className={'mr-2_5 mt-0_5 ' + s.timePost} style={{color: "#6E7178",whiteSpace:'nowrap'}}>
                   {time}
               </div>
               <div>
                   <Arrowicon width='10' height='10' style={{transform: isOpen() ? 'rotate(180deg)' : ''}}/>
               </div>
           </div>
       </>
)}