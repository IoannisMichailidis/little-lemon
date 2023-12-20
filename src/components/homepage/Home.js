// Components
import {Header} from './header/Header';
import {Main} from './main/Main';

// Styles
import '../../styles/global.css';
import './Home.css';

export const Home = () => {

    return (
    <div className="Home">
        <div className="HeaderContainer">
            <Header />
        </div>
        <div className="MainContainer">
            <Main />
        </div>
    </div>
    )
}