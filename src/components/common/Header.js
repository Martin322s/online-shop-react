import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <header>
            <Link id="logo" to="/">
                <img id="logo-img" src="./images/logo.png" alt="home" />
            </Link>
            <nav>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/search">Search</Link>
                </div>
                {user.accessToken ?
                    <div className="user">
                        <Link to="/create">Add Pair</Link>
                        <Link to="/logout">Logout</Link>
                    </div> :
                    <div className="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                }
            </nav>
        </header>
    );
}

export default Header;