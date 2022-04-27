import s from "../post.module.scss";
import {Comments} from "../../../../../icons/comments";
import {Eye} from "../../../../../icons/eye";
import {Arrowicon} from "../../../../../icons/arrowicon";
import {ModalImg} from "../modalImg/modalImg";

export const AccordionBody = ({photo, commentName, commentText, timePostComment, commentSurname, views, comments}) => {

    return (
        <>
            <ModalImg photo={photo} />
            {commentName && (
                <div>
                    <div className="d-flex align-items-center mb-3">
                        <Comments/>
                        <div className="ml-2" style={{fontSize: '14px'}}><span style={{color: '#2375E1'}}
                                                                               className={'cur-point ' + s.nameCommentator}>{`${commentName} ${commentSurname}`}</span> commented:
                        </div>
                    </div>
                    <div style={{borderLeft: '2px solid lightgray'}} className="pl-3 mb-3">
                        <div style={{fontSize: '14px'}} className={s.comment}>
                            {commentText}
                        </div>
                        <div className="" style={{color: '#6E7178', fontSize: '14px'}}>
                            {`— ${commentName}, ${timePostComment}`}
                        </div>
                    </div>
                </div>
            )}
            <div className="d-flex justify-content-between" style={{fontSize: '14px'}}>
                <div className="d-flex">
                    <div className="d-flex mr-3 align-items-center cur-point">
                        <Eye/>
                        <div className="ml-2">{views}</div>
                    </div>
                    <div className="d-flex align-items-center cur-point">
                        <Comments/>
                        <div className="ml-2">{comments}</div>
                    </div>
                </div>
                <div className={"d-flex align-items-center cur-point " + s.readPost}>
                    <div className={"mr-2 " + s.textReadPost}>Read post</div>
                    <Arrowicon width='10' height='10' style={{transform: 'rotate(-90deg)'}}/>
                </div>
            </div>
        </>
)}