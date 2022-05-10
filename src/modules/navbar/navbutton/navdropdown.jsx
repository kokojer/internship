import {Dropdown} from "react-bootstrap";
import s from './../navbar.module.scss'
import si from '../../icons/icons.module.scss'
import React, {useState, useRef} from "react";
import {ServiceIcon} from "../../icons/ServiceIcon";
import {ArrowIcon} from "../../icons/ArrowIcon";
import { useMediaQuery } from 'react-responsive'
export const Navdropdown = () => {
    const breakPointService = useMediaQuery({ minWidth: 766 })
    let translate = breakPointService ? { transform: 'translate(0px, 53px)'} : { transform: 'translate(0px, -66px)'}
    let [show,setShow] = useState(false)
    let upOrDown = breakPointService ? 'down' : 'up';
    const drop = useRef(null);
    function classToggle(isOpen){
        setTimeout(() => {
            setShow(!show)
        },0)
        if(isOpen === true ){
            setTimeout(() => {
                drop.current.classList.add(si.show)
            },0)
        }
        if(isOpen === false){
            drop.current.classList.remove(si.show)
        }
    }

    return (
        <Dropdown onToggle={classToggle} className='h-100 d-flex align-items-center mr-1 mr-sm-0' drop={upOrDown} ref={drop} show={show}>
            <Dropdown.Toggle variant={null} className={`${s.serviceDropdown} ${si.serviceDropdown} d-flex align-items-center h-100 flex-column-reverse flex-sm-row justify-content-center`}>
                <ServiceIcon />
                <ArrowIcon width='11' height='8' className='ml-0 ml-sm-1 mb-1 mb-sm-0'/>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{maxWidth:'12rem', ...translate}}>
                <div className='p-3 d-flex justify-content-center align-items-start flex-column' >
                    <div className={`custom-control custom-switch ${s.navDropdownItem}`}>
                        <input type="checkbox" className="custom-control-input cur-point" id="customSwitch1"/>
                        <label className="custom-control-label cur-point" htmlFor="customSwitch1">Lorem ipsum dolor sit amet</label>
                    </div>
                    <div className={`custom-control custom-switch cur-point ${s.navDropdownItem}`}>
                        <input type="checkbox" className="custom-control-input cur-point" id="customSwitch2"/>
                        <label className="custom-control-label cur-point" htmlFor="customSwitch2">Text</label>
                    </div>
                    <div className={`custom-control custom-switch d-flex align-items-center ${s.navDropdownItem}`}>
                        <input type="checkbox" className="custom-control-input cur-point" id="customSwitch3"/>
                        <label className="custom-control-label cur-point" htmlFor="customSwitch3">Text Text</label>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
)}