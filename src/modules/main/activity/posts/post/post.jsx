import {Accordion, Card} from "react-bootstrap";
import check from './check.svg'
import {AccordionHeader} from "./accordionHeader/accordionHeader";
import {AccordionBody} from "./accordionBody/accordionBody";

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
        <Card className='mb-3'>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}
                              className="d-flex justify-content-between cur-point align-items-center"
                              style={{borderBottom: 'none', backgroundColor: 'white'}}>
                <AccordionHeader title={title} check={check} time={time} eventKey={eventKey}/>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={eventKey} style={{minHeight: '100%'}}>
                <Card.Body className='pt-1'>
                    <AccordionBody commentName={commentName} commentSurname={commentSurname} commentText={commentText} comments={comments}
                                   views={views} photo={photo} timePostComment={timePostComment} />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}