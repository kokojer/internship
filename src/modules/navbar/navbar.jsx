import {Container, Row, Col} from "react-bootstrap";
import {Navbutton} from "./navbutton/navbutton";
import {Activityicon} from "../icons/activityicon";
import {Mapicon} from "../icons/mapicon";
import {Serviceicon} from "../icons/serviceicon";
import {Notesicon} from "../icons/notesicon";
import {Manicon} from "../icons/manicon";
import {Navdropdown} from "./navbutton/navdropdown";
import MediaQuery from "react-responsive";
export const Navbar = () => {

    return (
        <nav>
            <Container>
                <Row>
                    <MediaQuery minWidth={766}>
                        <Col className='d-flex justify-content-md-start justify-content-between align-items-center' >
                            <Navbutton textButton='Activity' img={<Activityicon />}/>
                            <Navbutton textButton='Map' img={<Mapicon />}/>
                            <Navbutton textButton='Time' img={<Serviceicon />}/>
                        </Col>
                        <Col className='d-flex justify-content-md-end justify-content-between align-items-center'>
                            <Navbutton textButton='Notes' img={<Notesicon />}/>
                            <Navbutton textButton='Friends' img={<Manicon />}/>
                            <Navbutton textButton='Photos' img={<Manicon />}/>
                            <Navdropdown />
                        </Col>
                    </MediaQuery>
                    <MediaQuery maxWidth={766}>
                        <Col className='d-flex justify-content-md-start justify-content-between align-items-center px-0 px-sm-3' >
                            <Navbutton textButton='Activity' img={<Activityicon />}/>
                            <Navbutton textButton='Map' img={<Mapicon />}/>
                            <Navbutton textButton='Time' img={<Serviceicon />}/>
                            <Navbutton textButton='Notes' img={<Notesicon />}/>
                            <Navbutton textButton='Friends' img={<Manicon />}/>
                            <Navbutton textButton='Photos' img={<Manicon />}/>
                            <Navdropdown />
                        </Col>
                    </MediaQuery>

                </Row>
            </Container>
        </nav>
)}