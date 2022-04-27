import {Card, Accordion, Form, Button} from "react-bootstrap";
import {Arrowicon} from "../../../../icons/arrowicon";
import {useState} from "react";
export const UserThoughts = () => {
    let [show, setShow] = useState(true)
    function isOpen(){
        setShow(!show)
    }
    return (
        <Accordion defaultActiveKey="0" style={{ border: '1px solid rgb(221, 224, 230'}}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" className='d-flex justify-content-between align-items-center cur-point'
                                  onClick={isOpen} style={{background:'white'}}>
                    <div>Share your thoughts</div>
                    <Arrowicon width='10' height='10' style={{transform: show ? 'rotate(180deg)' : ''}} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} style={{minHeight:'100px'}} placeholder="Enter your message..." className='mb-2'/>
                                <Button variant="success" className='w-100'>Save</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
)}