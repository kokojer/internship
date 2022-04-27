import React from "react";
import woman from '../woman.png'
export const Notification = ({title, text}) => {

    return (
        <div className='d-flex align-items-center justify-content-start pb-1 pt-1 cur-point'>
            <div className='mr-3'>
                <img src={woman} alt="" width='32'/>
            </div>
            <div>
                <h4 style={{fontSize: "16px", fontWeight: "800", marginBottom: '0px'}}>{title}</h4>
                <p style={{fontSize: "12px", fontWeight: "400", marginBottom: '0px'}}>{text}</p>
            </div>
        </div>
    )
}