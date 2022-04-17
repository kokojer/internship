import {Container, Row, Col, DropdownButton, Dropdown,Accordion} from "react-bootstrap";
import {Post} from "./post/post";
import photo from './photo.png'
import photo2 from './photo2.jpg'
import photo3 from './photo3.jpg'
import postsData from './postsdata.json'
export const Posts = () => {
    return (
        <Accordion defaultActiveKey="0">
            {postsData.map((item, index) => {

                function getTimeAgo(){
                    let dateNow = Date.now();
                    let datePost = Date.parse(item.time);
                    let seconds = Math.floor(Math.abs(dateNow-datePost)/(1000))
                    let minutes = Math.floor(Math.abs(dateNow-datePost)/(1000 * 60))
                    let hours = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60))
                    let days = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60*24))
                    let x = new Date(dateNow - datePost)
                    let month = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60*24*30))
                    let years = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60*24*30*12))
                    console.log(x)
                    console.log(years)
                }
                getTimeAgo()
                return (
                <Post
                    title={item.title}
                    photo={item.img}
                    eventKey={item.eventKey}
                    commentName={item.comment?.commentName}
                    commentSurname={item.comment?.commentSurname}
                    commentText={item.comment?.commentText}
                    comments={item.comments}
                    views={item.views}
                    timePostComment={item.comment?.timePostComment}
                    time={item.time}
                    key={index}
                />
            )})}

        </Accordion>
)}