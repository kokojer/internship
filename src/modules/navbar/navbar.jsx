import {Container, Row, Col} from "react-bootstrap";
import {Navbutton} from "./navbutton/navbutton";
import {ActivityIcon} from "../icons/ActivityIcon";
import {MapIcon} from "../icons/MapIcon";
import {ServiceIcon} from "../icons/ServiceIcon";
import {NotesIcon} from "../icons/NotesIcon";
import {ManIcon} from "../icons/ManIcon";
import {Navdropdown} from "./navbutton/navdropdown";
import MediaQuery from "react-responsive";
export const Navbar = () => {

    return (
        <nav className='bg-white'>
            <Container>
                <Row>
                    <MediaQuery minWidth={766}>
                        <Col className='d-flex justify-content-md-start justify-content-between align-items-center' >
                            <Navbutton textButton='Activity' img={<ActivityIcon />}/>
                            <Navbutton textButton='Map' img={<MapIcon />}/>
                            <Navbutton textButton='Time' img={<ServiceIcon />}/>
                        </Col>
                        <Col className='d-flex justify-content-md-end justify-content-between align-items-center'>
                            <Navbutton textButton='Notes' img={<NotesIcon />}/>
                            <Navbutton textButton='Friends' img={<ManIcon />}/>
                            <Navbutton textButton='Photos' img={<ManIcon />}/>
                            <Navdropdown />
                        </Col>
                    </MediaQuery>
                    <MediaQuery maxWidth={766}>
                        <Col className='d-flex justify-content-md-start justify-content-between align-items-center px-0 px-sm-3' >
                            <Navbutton textButton='Activity' img={<ActivityIcon />}/>
                            <Navbutton textButton='Map' img={<MapIcon />}/>
                            <Navbutton textButton='Time' img={<ServiceIcon />}/>
                            <Navbutton textButton='Notes' img={<NotesIcon />}/>
                            <Navbutton textButton='Friends' img={<ManIcon />}/>
                            <Navbutton textButton='Photos' img={<ManIcon />}/>
                            <Navdropdown />
                        </Col>
                    </MediaQuery>
                </Row>
            </Container>
        </nav>
)}