import { ReactComponent as GithubIcon } from 'assents/img/github.svg';
import './styles.css';
function Navbar() {
    return (
        <header >
            <nav className="container">
                <div className="dsmovie-nav-content" >
                    <h1>LuizFilmes</h1>
                    <a href="https://github.com/Luiz-Miranda">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/Luiz-Miranda</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;