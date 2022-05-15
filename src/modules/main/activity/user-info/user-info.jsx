import {Userimg} from "./userImg/userImg";
import {UserNavigation} from "./userNavigation/userNavigation";
import {UserThoughts} from "./userThoughts/userThoughts";
import {Row, Col} from "react-bootstrap";
export const UserInfo = () => {

    return (
        <Row>
            <Col xs={12} sm={5} md={4} lg={12} className='px-2 px-lg-3 mb-2 mb-sm-0 mb-lg-3 mb-xxl-4 '>
                <Userimg />
            </Col>
            <Col xs={12} sm={7} md={8} lg={12} className='px-2 px-lg-3'>
                <UserNavigation />
                <UserThoughts />
            </Col>
        </Row>
)}