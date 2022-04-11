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

    return (
        <main style={{background: '#E5E5E5'}} className='h-100'>
            <Container>
                <Row className='p-4'>
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