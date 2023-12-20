// Components
import {Home} from '../components/homepage/Home';
import {Nav} from '../components/common/nav/Nav';
import {Footer} from '../components/common/footer/Footer';

// Styles
import '../styles/global.css';

export const HomePage = () => {

    return (
    <>
        <Nav />
        <div style={{ paddingTop: '52px' }}/>
        <Home/>
        <Footer/>
    </>
    )
}