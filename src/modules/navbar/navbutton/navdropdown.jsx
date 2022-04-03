import {Container, Row, Col, DropdownButton, Dropdown,FormControl} from "react-bootstrap";
import s from './../navbar.module.scss'
import React, {useState} from "react";

import {Serviceicon} from "./navbuttonicons/serviceicon";
import {Arrowicon} from "./navbuttonicons/arrowicon";

export const Navdropdown = () => {
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
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

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <Serviceicon />
                <Arrowicon />
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu} className='p-3 d-flex justify-content-center align-items-center'>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" style={{cursor:"pointer"}}/>
                        <label className="custom-control-label" htmlFor="customSwitch1" style={{cursor:"pointer"}}> Turbo</label>
                    </div>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" style={{cursor:"pointer"}}/>
                        <label className="custom-control-label" htmlFor="customSwitch2" style={{cursor:"pointer",fontSize:'15px'}}> Black Theme</label>
                    </div>
                    <div className="custom-control custom-switch d-flex align-items-center">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" style={{cursor:"pointer"}}/>
                        <label className="custom-control-label" htmlFor="customSwitch1" style={{cursor:"pointer"}}> Do not disturb</label>
                    </div>
            </Dropdown.Menu>
        </Dropdown>
)}