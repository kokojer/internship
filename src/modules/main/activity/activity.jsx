import {Container, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import {Posts} from "./posts/posts";
import {UserInfo} from "./user-info/user-info";
export const Activity = () => {

    return (
       <Col>
           <Row>
               <Col xs={9} className='pl-1 pr-2'>
                   <Posts />
               </Col>
               <Col xs={3} className='pr-1 pl-3'>
                   <UserInfo />
               </Col>
           </Row>
       </Col>
)}