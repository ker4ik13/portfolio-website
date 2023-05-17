import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RecentPost = (props) => {

    const [post, setPost] = useState({});

    useEffect(() => {
        setPost(props.post)
    })


    return(
        <div className={`recentPost ${props.secondClass}`}>
            <h2 className="recentPost__title">{post.title}</h2>
            <div className="recentPost__main">
                <p className="recentPost__date">{post.date}</p>
                <span className="recentPost__devide"></span>
                <p className="recentPost__theme">{post.theme}</p>
            </div>
            <p className="recentPost__description">{post.description}</p>
        </div>
    )
}

export default RecentPost