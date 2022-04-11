import {Dropdown} from "react-bootstrap";
import s from './../../icons/icons.module.scss'
import React, {useState} from "react";

import {Serviceicon} from "../../icons/serviceicon";
import {Arrowicon} from "../../icons/arrowicon";
import { useMediaQuery } from 'react-responsive'
export const Navdropdown = () => {
    const breakPointService = useMediaQuery({ minWidth: 766 })


    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            className={s.serviceDropdown + ' d-flex align-items-center h-100 flex-column-reverse flex-sm-row justify-content-center'}
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');
            let translate = breakPointService ? { transform: 'translate(0px, 53px)'} : { transform: 'translate(0px, -66px)'}
            return (
                <div
                    ref={ref}
                    style={Object.assign(style, translate)}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled mb-0">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );
    let upOrDown = breakPointService ? 'down' : 'up';
    function classToggle(isOpen){
        let nav = document.querySelector('nav')
        let drop = nav.querySelector(`.drop${upOrDown}`);
        if(isOpen === true){
            setTimeout(() => {
                drop.classList.add(s.show)
            },0)

        }
        if(isOpen === false){
            drop.classList.remove(s.show)
        }

    }

    return (
        <Dropdown onToggle={classToggle} className='h-100 d-flex align-items-center mr-1 mr-sm-0' drop={upOrDown}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                <Serviceicon />
                <Arrowicon width='11' height='8'/>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                <div className='p-3 d-flex justify-content-center align-items-start flex-column'>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" style={{cursor:"pointer"}}/>
                        <label className={"custom-control-label " + s.label} htmlFor="customSwitch1" style={{cursor:"pointer"}}> Lorem ipsum dolor sit amet</label>
                    </div>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch2" style={{cursor:"pointer"}}/>
                        <label className="custom-control-label" htmlFor="customSwitch2" style={{cursor:"pointer",fontSize:'15px'}}> Text</label>
                    </div>
                    <div className="custom-control custom-switch d-flex align-items-center">
                        <input type="checkbox" className="custom-control-input" id="customSwitch3" style={{cursor:"pointer"}}/>
                        <label className="custom-control-label" htmlFor="customSwitch3" style={{cursor:"pointer"}}> Text Text</label>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>
)}