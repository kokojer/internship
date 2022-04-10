import {Container, Row, Col} from "react-bootstrap";
import s from "./header.module.scss"
import si from './../icons/icons.module.scss'

import {Arrowicon} from "../icons/arrowicon";

import {NavLink, Router} from "react-router-dom";
import {Manicon} from "../icons/manicon";
import {Notificationsdropdown} from "./notificationdropdown/notificationsdropdown";

export const Header = () => {

    let activeStyle = {
        fill: '#2375E1',
        color: '#2375E1'
    };


    return (
    <header className="header py-2 py-lg-2_5 border-bottom">
        <Container>

                <Row>
                    <Col className='d-flex justify-content-start'>
                        <div role='button' className={"d-flex justify-content-between align-items-center " + si.buttonBack + ' ' + s.buttonBack}>
                            <Arrowicon width='20' height='12' style={{transform:'rotate(90deg)'}}/>
                            <span className="mt-0_5 ml-2">User Pages</span>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <div className="d-flex justify-content-between">
                            <Notificationsdropdown />
                            <div role='button' className={"p-2"}>
                                <NavLink to='account' className={s.navbutton} style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }>
                                    <Manicon />
                                </NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>

        </Container>

    </header>
)}