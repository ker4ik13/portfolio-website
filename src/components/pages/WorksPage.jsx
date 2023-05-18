import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import worksPosts from "../data/works.json"
import FeatureWork from "../FeaturedWorks/FeatureWork";
import renderViewPosts from "../utils/renderPosts";

const WorksPage = () => {

    const [works, setWorks] = useState([]);
    const [viewPosts, setViewPosts] = useState(5);


     useEffect(() => {
        setWorks(worksPosts)
     })

    return(
        <main className="main">
            <div className="main__wrapper">
            <h1 className="page__title">Работы</h1>
            {works
            .slice(-viewPosts)
            .reverse()
            .map((work) => (
                <Link to={`./${work.id}`} key={work.id}>
                    <FeatureWork work={work} secondClass='fullwidth'/>
                </Link>
            ))}
            </div>
            {viewPosts < works.length && 
                <button type="button" className="moreButton" onClick={() => {
                    renderViewPosts(setViewPosts, viewPosts, works)
                }}>Показать еще</button>
            }
        </main>
    )
}

export default WorksPage