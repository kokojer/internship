import s from "../../user-info.module.scss";
import {Manicon} from "../../../../../icons/manicon";

export const NavigationItem = ({text, notif, balance, bgcolor = 'red'}) => {

    return (
            <div className={'d-flex justify-content-between align-items-center cur-point py-2_5 px-3 px-xl-4 ' + s.navigationItem}>
                <div className='d-flex'>
                    <Manicon />
                    <div className={"ml-xl-3 ml-2_5 " + s.navText}>{text}</div>
                </div>
                {notif && (
                    <div className={s.notif} style={{backgroundColor: bgcolor}}>{notif}</div>
                )}
                {balance && (
                    <div className={s.balance}>${balance}</div>
                )}
            </div>
)}