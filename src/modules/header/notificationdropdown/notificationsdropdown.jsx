import {Container, Row, Col, DropdownButton, Dropdown,FormControl} from "react-bootstrap";
import s from '../../icons/icons.module.scss'
import React, {useState} from "react";

import {Bellicon} from "../../icons/bellicon";
import {Notification} from "./notification";
export const Notificationsdropdown = () => {


    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            className={'p-2 align-self-center ' + s.notif}
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
                    style={Object.assign(style, { transform: 'translate3d(0px, 38px, 0px)'})}
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
    function classToggle(isOpen){
        let header = document.querySelector('header')
        let dropdown = header.querySelector('.dropdown');
        if(isOpen === true){
            setTimeout(() => {
                dropdown.classList.add(s.show)
            },0)

        }
        if(isOpen === false){
            dropdown.classList.remove(s.show)
        }

    }

    return (
        <Dropdown onToggle={classToggle} alignRight={true} className='d-flex'>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                <Bellicon />
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                <div className='p-3 d-flex justify-content-start align-items-start flex-column' style={{minWidth:'15rem'}}>
                    <Notification title='Hello man!' text="You go to school?" />
                    <Notification title='Hello man!' text="You go to school?" />
                    <Notification title='Hello man!' text="You go to school?" />
                </div>
            </Dropdown.Menu>
        </Dropdown>
)}