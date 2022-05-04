import {Container, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import React, { useContext } from "react";
import {SecondsContext} from "../../../App";
export const Time = () => {
    let seconds = useContext(SecondsContext);


    return (
            <Col>
                <div className="App">
                    <h1>Number of seconds is {seconds}</h1>
                </div>
            </Col>
)}