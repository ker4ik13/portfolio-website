import React from "react";
import { NavLink } from "react-router-dom";
import scrollTo from "../utils/scrollTo";

const Nav = () => {

    return(
        <nav className="nav">
            <NavLink to='/portfolio-website/' className='nav__item'>Главная</NavLink>
            <a href="#" className="nav__item" onClick={(event) => {
                scrollTo('aboutMe', event)
            }}>Обо мне</a>
            <NavLink to='/portfolio-website/blog' className='nav__item'>Блог</NavLink>
            <NavLink to='/portfolio-website/works' className='nav__item'>Работы</NavLink>
        </nav>
    )
}

export default Nav