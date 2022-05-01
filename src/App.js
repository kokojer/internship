import {Header} from "./modules/header/header";
import {Navbar} from "./modules/navbar/navbar";
import {Main} from "./modules/main/main";

export const App = () => (
    <div className='wrapper d-flex flex-column' style={{minHeight:'100vh', fontFamily: 'Roboto, sans-serif', background: '#E5E5E5'}}>
        <Header />
        <Navbar />
        <Main />
    </div>
)
