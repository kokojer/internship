import {NavLink} from "react-router-dom";
import s from '../navbar.module.scss'
import si from '../../icons/icons.module.scss'

export const Navbutton = ({textButton, img}) => {

    let staticStylesTextButton = `pt-sm-3 pb-sm-2_5 pt-2 pb-2 mr-md-3 mr-0 px-2 px-md-0 ${s.navbutton} ${textButton === 'Notes' ? si.notes : ''}`;

    return (
        <NavLink to={textButton.toLowerCase()} className={({ isActive }) =>
            isActive && textButton !== 'Notes' ? `${s.activeStyle} ${staticStylesTextButton}` : isActive ? `${s.activeNotesStyle} ${staticStylesTextButton}`: staticStylesTextButton}>
            {img}
            <div className="ml-md-2 ml-0">{textButton}</div>
        </NavLink>
)}