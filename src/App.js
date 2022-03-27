import {Container, Row, Col} from "react-bootstrap";
import {Header} from "./modules/header/header";

export const App = () => (
    <div className='wrapper d-flex flex-column' style={{height:'100vh',fontFamily: 'Roboto, sans-serif'}}>
        <Header />
    </div>
)
