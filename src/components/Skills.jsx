import React from "react";

const Skills = () => {
    return(
        <div className="skills">
            <h2 className="skills__title">Навыки</h2>
            <p className="skills__subtitle">Я работаю с</p>
            <div className="skills__items">

                <div className="skills__item">
                    <img src="./assets/img/icons/vs-code.svg" className="skills__item__icon"/>
                    <p className="skills__item__title">Visual Studio Code</p>
                </div>
                <div className="skills__item">
                    <img src="./assets/img/icons/react.svg" className="skills__item__icon"/>
                    <p className="skills__item__title">React JS</p>
                </div>
                <div className="skills__item">
                    <img src="./assets/img/icons/photoshop.svg" className="skills__item__icon"/>
                    <p className="skills__item__title">Photoshop</p>
                </div>
                <div className="skills__item">
                    <img src="./assets/img/icons/figma.svg" className="skills__item__icon"/>
                    <p className="skills__item__title">Figma</p>
                </div>

            </div>
        </div>
    )
}
export default Skills