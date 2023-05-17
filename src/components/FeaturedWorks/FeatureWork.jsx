import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeatureWork = (props) => {

    const [work, setWork] = useState({});

    useEffect(() => {
        setWork(props.work)
    })


    return(
        <Link to={`./works/${work.id}`} className="featureWork">
            <img src="./assets/img/photos/Rectangle 30.jpg" alt="Work" className="featureWork__img" />
            <div className="featureWork__content">
                <h2 className="featureWork__title">{work.title}</h2>
                <div className="featureWork__main">
                    <p className="featureWork__year">{work.date}</p>
                    <p className="featureWork__theme">{work.theme}</p>
                </div>
                <div className="featureWork__description">{work.description}</div>
            </div>
        </Link>
    )
}

export default FeatureWork