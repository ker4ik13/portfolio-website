import React, { useEffect, useState } from "react";
import RecentPost from "./RecentPost";
import blogPosts from "../data/posts.json"
import { Link } from "react-router-dom";

const RecentPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(blogPosts)
    })

    return(
        <div className="recentPosts">
            
            <div className="recentPosts__wrapper">
                <div className="recentItems__header">
                    <h2 className="recentItems__title">Недавние посты</h2>
                    <Link to={`./blog`} className="recentsItems__button">Посмотреть все</Link>
                </div>

                <div className="recentItems__content">
                    {posts
                    .slice(-2)
                    .reverse()
                    .map((post) => (
                        <Link to={`./blog/${post.id}`} key={post.id}>
                            <RecentPost post={post}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecentPosts