import {Accordion, Card} from "react-bootstrap";
import check from './check.svg'
import {AccordionHeader} from "./accordionHeader/accordionHeader";
import {AccordionBody} from "./accordionBody/accordionBody";
import s from './post.module.scss'
export const Post = ({
                         eventKey,
                         photo,
                         title,
                         time,
                         commentName,
                         commentSurname,
                         timePostComment,
                         commentText,
                         views,
                         comments
                     }) => {

    return (
        <Card className='mb-2 mb-sm-3'>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}
                              className="d-flex justify-content-between cur-point align-items-center px-2_5 px-md-3 bg-white"
                              style={{borderBottom: 'none'}}>
                <AccordionHeader title={title} check={check} time={time} eventKey={eventKey}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey} style={{minHeight: '100%'}}>
                <Card.Body className={`pt-1 px-sm-2_5 px-2 px-md-3 ${s.cardBody}`}>
                    <AccordionBody commentName={commentName} commentSurname={commentSurname} commentText={commentText} comments={comments}
                                   views={views} photo={photo} timePostComment={timePostComment} />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}