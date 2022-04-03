import {Container, Row, Col} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import s from '../navbar.module.scss'
import mediaQuery from "react-responsive/src/mediaQuery";

export const Navbutton = ({textButton, img}) => {
    let activeStyle = {
        fill: '#2375E1',
        borderBottom: '3px solid #2375E1',
        color: '#2375E1'
    };

    let activeNotesStyle = {
        stroke: '#2375E1',
        borderBottom: '3px solid #2375E1',
        color: '#2375E1'

    };

    return (
        <NavLink to={textButton.toLowerCase()} className={'pt-3 pb-2_5 mr-3 ' + s.navbutton + (textButton === 'Notes' ? " " + s.notes : '')} style={({ isActive }) =>
            isActive && textButton !== 'Notes' ? activeStyle : isActive ? activeNotesStyle : undefined
        }>
            {img}
            <div className="ml-2">{textButton}</div>
        </NavLink>
)}