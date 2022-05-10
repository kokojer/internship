import {Dropdown} from "react-bootstrap";
import s from '../header.module.scss'
import si from '../../icons/icons.module.scss'
import React, {useRef, useState} from "react";

import {BellIcon} from "../../icons/BellIcon";
import {Notification} from "./Notification";

export const NotificationDropDown = () => {
    let [show,setShow] = useState(false)
    const dropdown = useRef(null);
    function classToggle(isOpen){
        setTimeout(() => {
            setShow(!show)
        },0)
        if(isOpen === true){
            setTimeout(() => {
                dropdown.current.classList.add(si.show)
            },0)
        }
        if(isOpen === false){
            dropdown.current.classList.remove(si.show)
        }
    }

    return (
        <Dropdown onToggle={classToggle} alignRight={true} ref={dropdown} show={show}>
            <Dropdown.Toggle className={`p-2 align-self-center ${s.notif} ${si.notif}`} variant={null}>
                <BellIcon />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <div className='p-3 d-flex justify-content-start align-items-start flex-column' style={{minWidth:'15rem'}}>
                    <Notification title='Hello man!' text="You go to school?" />
                    <Notification title='Hello man!' text="You go to school?" />
                    <Notification title='Hello man!' text="You go to school?" />
                </div>
            </Dropdown.Menu>
        </Dropdown>
)}