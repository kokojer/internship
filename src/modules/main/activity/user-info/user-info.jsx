import {Container, Row, Col, DropdownButton, Dropdown} from "react-bootstrap";
import {Userimg} from "./userImg/userImg";
import {UserNavigation} from "./userNavigation/userNavigation";
export const UserInfo = () => {

    return (
        <aside>
            <Userimg />
            <UserNavigation />
        </aside>
)}