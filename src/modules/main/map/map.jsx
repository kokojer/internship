import {Col, Card, Accordion} from "react-bootstrap";
import {ArrowIcon} from "../../icons/ArrowIcon";
import {useState} from "react";
import {GoogleMapCustom} from "./googleMap/googleMap";
import s from './map.module.scss'
export const Map = () => {
    let [show, setShow] = useState(true)
    function isOpen(){
        setShow(!show)
    }
    return (
        <Col className='p-0'>
            <Accordion defaultActiveKey="0" style={{ border: '1px solid rgb(221, 224, 230'}}>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className='d-flex justify-content-between align-items-center cur-point py-lg-2_5 px-lg-3_5 py-2 px-3'
                                      onClick={isOpen} style={{background:'white'}}>
                        <div>Basic map</div>
                        <ArrowIcon width='10' height='10' style={{transform: show ? 'rotate(180deg)' : ''}} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='d-flex justify-content-center p-lg-3_5 p-2_5' >
                            <GoogleMapCustom />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
)}