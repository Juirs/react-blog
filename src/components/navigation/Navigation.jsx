import './Navigation.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo-medium.png';

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <NavLink to="/" className="page-container">
                    <img src={logo} alt="Company logo"/>
                </NavLink>

                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive === true ? "active-link" : "default-link"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/overview" className={({ isActive }) => isActive === true ? "active-link" : "default-link"}>Alle posts</NavLink></li>
                    <li>
                        <NavLink to="/new-post" className={({ isActive }) => isActive === true ? "active-link" : "default-link"}>Nieuwe post maken</NavLink>
                    </li>
                </ul>
            </div>
        </nav>);
}

export default Navigation;