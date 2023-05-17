import React, { useEffect, useState } from "react";
import worksPosts from "../data/works.json"
import { Link } from "react-router-dom";
import FeatureWork from "./FeatureWork";

const FeaturedWorks = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {
        setWorks(worksPosts)
    })


    return(
        <div className="featuredWorks">
            <div className="recentItems__header">
                <h2 className="recentItems__title">Работы</h2>
                <Link to={`./works`} className="recentsItems__button">Посмотреть все</Link>
            </div>
            <div className="recentItems__content recentItems__works">
                {works
                .slice(-3)
                .reverse()
                .map((work) => (
                    <FeatureWork key={work.id} work={work}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedWorks