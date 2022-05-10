import React from "react";
import woman from '../woman.png'
export const Notification = ({title, text}) => {

    return (
        <div className='d-flex align-items-center justify-content-start pb-1 pt-1 cur-point'>
            <div className='mr-3'>
                <img src={woman} alt="woman" width='32'/>
            </div>
            <div>
                <h4 style={{fontSize: "16px"}} className='mb-0 font-weight-bold'>{title}</h4>
                <p style={{fontSize: "12px"}} className='mb-0'>{text}</p>
            </div>
        </div>
    )
}