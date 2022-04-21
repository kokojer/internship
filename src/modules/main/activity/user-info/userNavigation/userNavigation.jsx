import {Accordion, Card, Dropdown} from "react-bootstrap";
import {Arrowicon} from "../../../../icons/arrowicon";
import {useState} from "react";
import {Manicon} from "../../../../icons/manicon";
import s from '../user-info.module.scss'
import {NavigationItem} from "./navigationItem/navigationItem";
export const UserNavigation = () => {
    let [show, setShow] = useState(true)
    function isOpen(){
        setShow(!show)
    }
    return (
        <Accordion defaultActiveKey="0" style={{ border: '1px solid rgb(221, 224, 230'}}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className='d-flex justify-content-between align-items-center cur-point'
                                  onClick={isOpen} style={{background:'white'}}>
                    <div>Navigation</div>
                    <Arrowicon width='10' height='10' style={{transform: show ? 'rotate(180deg)' : ''}} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className='p-0'>
                        <NavigationItem text='My profile'/>
                        <NavigationItem text='Balance' balance="1,456"/>
                        <NavigationItem text='Connections' notif='47'/>
                        <NavigationItem text='Friends'/>
                        <Dropdown.Divider style={{margin:'0'}}/>
                        <NavigationItem text='Connections' notif='47' bgcolor='#26A69A'/>
                        <NavigationItem text='Account settings'/>



                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
)}