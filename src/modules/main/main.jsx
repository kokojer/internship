import {Container, Row} from "react-bootstrap";
import {Route, Routes} from "react-router-dom";
import {Map} from "./map/map";
import {Time} from "./time/time";
import {Activity} from "./activity/activity";
import {Notes} from "./notes/notes";
import {Friends} from "./friends/friends";
import {Photos} from "./photos/photos";
import {Account} from "./account/account";

export const Main = () => {
    if(/.+\/$/.test(window.location.href)){
        window.location.href = '/activity'
    }
    return (
        <main style={{background: '#E5E5E5', flex:'1 1 auto'}}>
            <Container>
                <Row className='py-4 px-2'>
                    <Routes>
                        <Route path="/map" element={<Map/>}/>
                        <Route path="/time" element={<Time/>}/>
                        <Route path="/activity" element={<Activity/>}/>
                        <Route path="/notes" element={<Notes/>}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/photos" element={<Photos/>}/>
                        <Route path="/account" element={<Account/>}/>
                    </Routes>
                </Row>
            </Container>
        </main>
)}