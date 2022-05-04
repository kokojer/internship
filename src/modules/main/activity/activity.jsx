import {Row, Col} from "react-bootstrap";
import {Posts} from "./posts/posts";
import {UserInfo} from "./user-info/user-info";
export const Activity = () => {

    return (
       <Col>
           <Row className='flex-column-reverse flex-lg-row'>
               <Col xs={12} lg={9} className='pl-lg-1 pr-lg-2 pl-0 pr-0' style={{flex: '1 1 auto'}}>
                   <Posts />
               </Col>
               <Col xs={12} lg={3} className='pr-2 pl-xxl-3 pl-2 mb-sm-3 mb-2 mb-lg-0' style={{flex: '1 1 auto'}}>
                   <UserInfo />
               </Col>
           </Row>
       </Col>
)}