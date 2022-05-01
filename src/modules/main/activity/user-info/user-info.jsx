import {Userimg} from "./userImg/userImg";
import {UserNavigation} from "./userNavigation/userNavigation";
import {UserThoughts} from "./userThoughts/userThoughts";
import {Row, Col} from "react-bootstrap";
export const UserInfo = () => {

    return (
        <Row>
            <Col xs={5} md={4} lg={12} className='px-2 px-lg-3'>
                <Userimg />
            </Col>
            <Col xs={7} md={8} lg={12} className='px-2 px-lg-3'>
                <UserNavigation />
                <UserThoughts />
            </Col>
        </Row>
)}