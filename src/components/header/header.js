import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className="titulo">Movie Catalog</h1>
            <Link to="/login">
                <button className="login">Entrar</button>
            </Link>
        </header>
    );
};
export default Header;