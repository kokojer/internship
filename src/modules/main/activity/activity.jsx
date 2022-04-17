import {Container, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import {Posts} from "./posts/posts";
import {UserInfo} from "./user-info/user-info";
export const Activity = () => {

    return (
       <Col>
           <Row>
               <Col xs={8}>
                   <Posts />
               </Col>
               <Col xs={4}>
                   <UserInfo />
               </Col>
           </Row>
       </Col>
)}