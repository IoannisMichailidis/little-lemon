// Components
import {Header} from './header/Header';
import {Main} from './main/Main';

// Styles
import '../../styles/global.css';
import './Home.css';

// Videos
import HeaderVideo from '../../videos/headerVideo.mp4';

export const Home = () => {
    return (
    <div className="Home">
        <div className="HeaderContainer">
            <Header HeaderVideo={HeaderVideo}/>
        </div>
        <div className="MainContainer">
            <Main />
        </div>
    </div>
    )
}