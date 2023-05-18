import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import works from "../data/works.json"

const WorkPage = (props) => {


    const {id} = useParams();
    const [work, setWork] = useState({});
    
    useEffect(() => {
        setWork(works[id -1])
    })

    
    return(
        <main className="main">
            <div className="main__wrapper">
                <h1 className="page__title">{work.title}</h1>
                <div className="post__info">
                    <p className="featureWork__year red">{work.date}</p>
                    <p className="post__theme">{work.theme}</p>
                </div>
                <div className="post__content">
                    <div className="post__text">{work.description}</div>

                    {Object.values(work)
                    .slice(5)
                    .map(item => (
                        <div className="post__text">{item}</div>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default WorkPage