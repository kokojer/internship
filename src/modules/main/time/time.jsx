import {Container, Row, Col, DropdownButton, Dropdown, Accordion, Card} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {SecondsContext} from "../../../App";
import {ArrowIcon} from "../../icons/ArrowIcon";
import {GoogleMapCustom} from "../map/googleMap/googleMap";
export const Time = () => {
    let resultTime = useContext(SecondsContext);
    let minutes = 0
    let seconds = resultTime % 60
    let hours = 0

    if(resultTime / 60 < 60){
        minutes = Math.floor(resultTime / 60)
    }else if(resultTime / 60 >= 60){
        minutes = Math.floor(resultTime / 60) % 60
        hours = Math.floor(Math.floor(resultTime / 60) / 60)
    }

    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
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
                        <div>Timer</div>
                        <ArrowIcon width='10' height='10' style={{transform: show ? 'rotate(180deg)' : ''}} />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='d-flex p-lg-3_5 p-2_5' >
                            {`${hours}:${minutes}:${seconds}`}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
)}