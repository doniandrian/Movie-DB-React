import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'



export default function Header({handleLocation}) {

    const location = useLocation()
    useEffect(() => {
        handleLocation(location.pathname)
    }, [location, handleLocation])

    const [burger, setBurger] = useState(false)
    const handleBurger = () => {
        setBurger(!burger)

    }

    return (
        <header className="header" id="header">
            <nav className="navbar container">
                <a href="#" className="brand">Movie DB React</a>
                <div className={`menu ${burger ? 'show' : ''}`} id="menu">
                    <ul className="menu-inner">
                        <li className="menu-item">
                            <NavLink to="/" className="menu-link" activeClassName="active">
                                Discover
                            </NavLink>
                        </li>
                        <li className="menu-item" >
                            <NavLink to="/popular" className="menu-link" activeClassName="active">
                                Popular
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/now-playing" className="menu-link" activeClassName="active">
                                Now Playing
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink to="/top-rated" className="menu-link" activeClassName="active">
                                Top Rated
                            </NavLink>
                        </li>
                        <li className="menu-item" >
                            <NavLink to="/people" className="menu-link" activeClassName="active">
                                People
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="burger" id="burger" onClick={() => handleBurger()}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
            </nav>
        </header>
    )
}