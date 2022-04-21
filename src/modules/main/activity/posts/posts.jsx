import {Accordion} from "react-bootstrap";
import {Post} from "./post/post";
import postsData from './postsdata.json'
export const Posts = () => {
    return (
        <Accordion defaultActiveKey="0">
            {postsData.map((item, index) => {

                function getTimeAgo(item){
                    let dateNow = Date.now();
                    let datePost = Date.parse(item);
                    let minutes = Math.floor(Math.abs(dateNow-datePost)/(1000 * 60))
                    let hours = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60))
                    let days = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60*24))
                    let month = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60*24*30))
                    let years = Math.floor(Math.abs(dateNow-datePost)/(1000*60*60*24*30*12))
                    if(years !== 0){
                        return `${years} ${years === 1 ? "year" : "years"} ago`
                    }else if(month !== 0){
                        return `${month} ${month === 1 ? "month" : "months"} ago`
                    }else if(days !== 0){
                        return `${days} ${days === 1 ? "day" : "days"} ago`
                    }else if(hours !== 0){
                        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`
                    }else if(minutes !== 0){
                        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
                    }
                }

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
                    timePostComment={getTimeAgo(item.comment?.timePostComment)}
                    time={getTimeAgo(item.time)}
                    key={index}
                />
            )})}

        </Accordion>
)}