
import {Outlet} from 'react-router-dom';
import Nav from '../Nav';

//styles
import '../css/App.css';

function RootLayout(){
    return <>
    <Nav />
    <Outlet />
    </>;
}

export default RootLayout;
