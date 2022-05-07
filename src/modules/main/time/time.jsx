import {Container, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import React, { useContext } from "react";
import {SecondsContext} from "../../../App";
export const Time = () => {
    let resultTime = useContext(SecondsContext);
    let minutes = 0
    let seconds = 0
    let hours = 0

    if(resultTime / 59 <= 1){
        seconds = resultTime
    }else if(resultTime / 60 >= 1 && resultTime / 60 <= 60){
        seconds = resultTime % 60
        minutes = Math.floor(resultTime / 60)
    }


    return (
            <Col>
                <div className="App">
                    <h1>{`${hours}:${minutes}:${seconds}`}</h1>
                </div>
            </Col>
)}