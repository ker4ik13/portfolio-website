import React from "react";

const Header = (props) => {
    return(
        <header className="header">
            <div className="header__text">
                <p className="header__title">Привет, я Кирилл Frontend - Разработчик</p>
                <p className="header__subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam sequi a repellat pariatur reiciendis eius explicabo at totam suscipit nisi, quos ea optio. Exercitationem, consectetur. Quas consequatur odio totam dolore?</p>
                <button className="header__button" type="button">Посмотреть резюме</button>
            </div>
            <div className="header__photo">
                <img src="./assets/img/photos/main-photo.jpg" alt="" className="header__img" />
            </div>
        </header>
    )
}

export default Header