import s from "../post.module.scss";
import {Modal} from "react-bootstrap";
import {useState} from "react";

export const ModalImg = ({photo}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={`mb-3 ${s.imgContainer}`}>
                <img src={photo} alt="" className='img-fluid cur-point' onClick={() => setShow(true)}/>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName={s.dialog}
                contentClassName={s.modalContent}
                centered
            >
                <Modal.Body className='p-1 p-sm-2 h-100'>
                    <div className="d-flex justify-content-center">
                        <img src={photo} alt="" className="img-fluid w-100" style={{maxHeight:'90vh'}}/>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

