import {Col, Card, Accordion} from "react-bootstrap";
import {Arrowicon} from "../../icons/arrowicon";
import {useState} from "react";
import {GoogleMapCustom} from "./googleMap/googleMap";

export const Map = () => {
    let [show, setShow] = useState(true)
    function isOpen(){
        setShow(!show)
    }
    return (
        <Col className='p-0'>
            <Accordion defaultActiveKey="0" style={{ border: '1px solid rgb(221, 224, 230'}}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className='d-flex justify-content-between align-items-center cur-point'
                                      onClick={isOpen} style={{background:'white'}}>
                        <div>Basic map</div>
                        <Arrowicon width='10' height='10' style={{transform: show ? 'rotate(180deg)' : ''}} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='d-flex justify-content-center' >
                            <GoogleMapCustom />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
)}