import {Card, Accordion, Form, Button} from "react-bootstrap";
import {Arrowicon} from "../../../../icons/arrowicon";
import {useState} from "react";
import s from '../user-info.module.scss'
import {useMediaQuery} from "react-responsive";
export const UserThoughts = () => {
    const breakPointService = useMediaQuery({ minWidth: 1023 })
    let [show, setShow] = useState(breakPointService)
    function isOpen(){
        setShow(!show)
    }

    return (
        <Accordion defaultActiveKey={breakPointService ? '0' : 'false'}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className='d-flex justify-content-between align-items-center cur-point px-xl-4 px-3'
                                  onClick={isOpen} style={{background:'white'}}>
                    <div className={s.thoughts} >Share your thoughts</div>
                    <Arrowicon width='10' height='10' style={{transform: show ? 'rotate(180deg)' : ''}} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" >
                    <Card.Body className='p-3 p-xl-4'>
                        <Form>
                            <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} style={{minHeight:'100px'}} placeholder="Enter your message..." className={'mb-2 ' + s.textArea}/>
                                <Button variant="success" className={'w-100 ' + s.saveButton}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
)}