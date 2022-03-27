import bell from './bell.svg'
import arrow from './arrow.svg'
import person from './person.svg'
import {Container, Row, Col} from "react-bootstrap";
import s from "./header.module.scss"
import {useState} from "react";

export const Header = () => {
    const [showNotifications, setShowNotifications] = useState('')

    function toggleNotifications(){
        if(showNotifications === ''){
            setShowNotifications(s.active)
        }else{
            setShowNotifications("")
        }
    }
    return (
    <header className="header py-2 py-lg-2_5 border-bottom">
        <Container>
            <Row>
                <Col className='d-flex justify-content-start'>
                    <div role='button' className={"d-flex justify-content-between align-items-center " + s.buttonBack}>
                        <img src={arrow} alt="arrow" className="mr-3"/>
                        <span className="mt-0_5">User Pages</span>
                    </div>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <div className="d-flex justify-content-between">
                        <div role='button' className={"p-2 " + s.imgContainer} title="Notifications" onClick={toggleNotifications}>
                            <img src={bell} alt="bell"/>
                            <div className={s.notifications + " " + showNotifications}>
                                <div>James wrote a comment under your post</div>
                                <div>Maria put a like on your video</div>
                                <div>Try the new feature of our app</div>
                                <div>Add more information to your profile so that your friends can find about you</div>
                            </div>
                        </div>
                        <div role='button' className={"p-2 " + s.imgContainer} title="Personal Account">
                            <img src={person} alt="person"/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    </header>
)}