import {Accordion, Card} from "react-bootstrap";
import {Arrowicon} from "../../../../icons/arrowicon";
import check from './check.svg'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from "react-bootstrap/AccordionContext";
import {useContext} from "react";
import {Comments} from "../../../../icons/comments";
import {Eye} from "../../../../icons/eye";
import s from './post.module.scss'
export const Post = ({eventKey, photo, title, time, commentName, commentSurname, timePostComment, commentText, views,comments}) => {
    function isOpen(){
        const currentEventKey = useContext(AccordionContext);
        let isCurrentEventKey = currentEventKey === eventKey;
        return isCurrentEventKey
    }
    const decoratedOnClick = useAccordionToggle(eventKey, () => console.log('ef'))
    return (
                <Card className='mb-3'>
                    <Accordion.Toggle as={Card.Header} eventKey={eventKey} className="d-flex justify-content-between cur-point align-items-center"
                                      onClick={decoratedOnClick} style={{borderBottom:'none', backgroundColor:'white'}}>
                        <div style={{fontSize: "14px"}}>
                            {title}
                        </div>
                        <div className="d-flex align-items-center">
                            <div className='mr-3'>
                                <img src={check} alt=""/>
                            </div>
                            <div className='mr-2_5' style={{fontSize: "14px", color: "#6E7178"}}>
                                {time}
                            </div>
                            <div>
                                <Arrowicon width='10' height='10' style={{transform: isOpen() ? 'rotate(180deg)' : ''}}/>
                            </div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={eventKey} style={{minHeight:'100%'}}>
                        <Card.Body className='pt-1'>
                            <div className="mb-3 d-flex justify-content-center" style={{maxHeight:'500px'}}>
                                <img src={photo} alt="" className="img-fluid w-100"/>
                            </div>
                            {commentName && (
                                <div>
                                    <div className="d-flex align-items-center mb-3">
                                        <Comments />
                                        <div className="ml-2" style={{fontSize: '14px'}}><span style={{color: '#2375E1'}} className={'cur-point ' + s.nameCommentator}>{`${commentName} ${commentSurname}`}</span> commented:</div>
                                    </div>
                                    <div style={{borderLeft:'2px solid lightgray'}} className="pl-3 mb-3">
                                        <div style={{fontSize: '14px'}} className={s.comment}>
                                            {commentText}
                                        </div>
                                        <div className="" style={{color: '#6E7178',fontSize:'14px'}}>
                                            {`— ${commentName}, ${timePostComment}`}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="d-flex justify-content-between" style={{fontSize:'14px'}}>
                                <div className="d-flex">
                                    <div className="d-flex mr-3 align-items-center cur-point">
                                        <Eye />
                                        <div className="ml-2">{views}</div>
                                    </div>
                                    <div className="d-flex align-items-center cur-point">
                                        <Comments />
                                        <div className="ml-2">{comments}</div>
                                    </div>
                                </div>
                                <div className={"d-flex align-items-center cur-point " + s.readPost}>
                                    <div className={"mr-2 " + s.textReadPost}>Read post</div>
                                    <Arrowicon width='10' height='10' style={{transform:'rotate(-90deg)'}}/>
                                </div>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
)}