
import s from '../user-info.module.scss'
import {Vkicon} from "../../../../icons/VKicon";
export const Userimg = () => {

    return (
        <div className='d-flex flex-column align-items-center py-4 mb-4' style={{background:'white', border: '1px solid #DDE0E6', borderRadius:'3px'}}>
            <div className={'d-flex align-items-center justify-content-center mb-3 ' + s.imgContainer}></div>
            <h3 style={{fontSize:'18px'}} className='mb-2'>Harold Pain</h3>
            <p style={{fontSize:'14px', color: "#A1A5AE"}} className='pb-3 m-0'>UX/UI designer</p>
            <div className='d-flex justify-content-around'>
                <a href="" className={s.link}><Vkicon className='mr-2'/></a>
                <a href="" className={s.link}><Vkicon className='mr-2'/></a>
                <a href="" className={s.link}><Vkicon /></a>
            </div>
        </div>
)}