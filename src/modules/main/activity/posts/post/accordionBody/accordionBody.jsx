import s from "../post.module.scss";
import {CommentsIcon} from "../../../../../icons/CommentsIcon";
import {EyeIcon} from "../../../../../icons/EyeIcon";
import {ArrowIcon} from "../../../../../icons/ArrowIcon";
import {ModalImg} from "../modalImg/modalImg";

export const AccordionBody = ({photo, commentName, commentText, timePostComment, commentSurname, views, comments}) => {

    return (
        <>
            <ModalImg photo={photo} />
            {commentName && (
                <div>
                    <div className="d-flex align-items-center mb-2 mb-sm-3">
                        <CommentsIcon/>
                        <div className="ml-2">
                            <span style={{color: '#2375E1'}}
                             className={`cur-point ${s.nameCommentator}`}>{`${commentName} ${commentSurname}`}</span> commented:
                        </div>
                    </div>
                    <div style={{borderLeft: '2px solid lightgray'}} className="pl-3 mb-3">
                        <div className={s.comment}>
                            {commentText}
                        </div>
                        <div className="" style={{color: '#6E7178'}}>
                            {`— ${commentName}, ${timePostComment}`}
                        </div>
                    </div>
                </div>
            )}
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <div className="d-flex mr-3 align-items-center cur-point">
                        <EyeIcon/>
                        <div className="ml-2">{views}</div>
                    </div>
                    <div className="d-flex align-items-center cur-point">
                        <CommentsIcon/>
                        <div className="ml-2">{comments}</div>
                    </div>
                </div>
                <div className={`d-flex align-items-center cur-point ${s.readPost}`}>
                    <div className={`mr-2 ${s.textReadPost}`}>Read post</div>
                    <ArrowIcon width='10' height='10' style={{transform: 'rotate(-90deg)'}}/>
                </div>
            </div>
        </>
)}