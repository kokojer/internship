import {Container, Row, Col} from "react-bootstrap";
import s from "./header.module.scss"
import si from './../icons/icons.module.scss'

import {ArrowIcon} from "../icons/ArrowIcon";
import {NavLink} from "react-router-dom";
import {ManIcon} from "../icons/ManIcon";
import {NotificationDropDown} from "./notification-dropdown/NotificationDropDown";

export const Header = () => {

    let activeStyle = {
        fill: '#2375E1',
        color: '#2375E1'
    };


    return (
    <header className="header py-2 py-lg-2_5 border-bottom bg-white">
        <Container>
                <Row>
                    <Col className='d-flex justify-content-start'>
                        <div role='button' className={`d-flex justify-content-between align-items-center ${si.buttonBack} ${s.buttonBack}`}>
                            <ArrowIcon width='20' height='12' style={{transform:'rotate(90deg)'}}/>
                            <span className="mt-1 ml-2">User Pages</span>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <div className="d-flex justify-content-between">
                            <NotificationDropDown />
                            <div role='button' className="p-2">
                                <NavLink to='account' className={s.navbutton} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <ManIcon />
                                </NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    </header>
)}