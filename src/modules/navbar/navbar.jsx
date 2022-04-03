import {Container, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import s from './navbar.module.scss'
import {Navbutton} from "./navbutton/navbutton";
import {Activityicon} from "./navbutton/navbuttonicons/activityicon";
import {Mapicon} from "./navbutton/navbuttonicons/mapicon";
import {Serviceicon} from "./navbutton/navbuttonicons/serviceicon";
import {Notesicon} from "./navbutton/navbuttonicons/notesicon";
import {Manicon} from "./navbutton/navbuttonicons/manicon";
import {Navdropdown} from "./navbutton/navdropdown";
export const Navbar = () => {

    return (
        <nav>
            <Container>
                <Row>
                    <Col className='d-flex justify-content-start align-items-center' >
                        <Navbutton textButton='Activity' img={<Activityicon />}/>
                        <Navbutton textButton='Map' img={<Mapicon />}/>
                        <Navbutton textButton='Time' img={<Serviceicon />}/>
                    </Col>
                    <Col className='d-flex justify-content-end align-items-center'>
                        <Navbutton textButton='Notes' img={<Notesicon />}/>
                        <Navbutton textButton='Friends' img={<Manicon />}/>
                        <Navbutton textButton='Photos' img={<Manicon />}/>
                        <Navdropdown />
                    </Col>
                </Row>
            </Container>
        </nav>
)}