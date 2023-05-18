import React, { useEffect, useState } from "react";
import blogPosts from "../data/posts.json"
import RecentPost from "../RecentPosts/RecentPost";
import { Link } from "react-router-dom";
import renderViewPosts from "../utils/renderPosts";

const BlogPage = () => {

    const [posts, setPosts] = useState([])
    const [viewPosts, setViewPosts] = useState(5);


    useEffect(() => {
        setPosts(blogPosts)
    })

    return(
        <main className="main">
            <div className="main__wrapper">
            <h1 className="page__title">Блог</h1>
            {posts
            .slice(-viewPosts)
            .reverse()
            .map((post) => (
                <Link to={`./${post.id}`} key={post.id}>
                    <RecentPost post={post} secondClass='fullwidth'/>
                </Link>
            ))}
            </div>
            {viewPosts < posts.length && 
                <button type="button" className="moreButton" onClick={() => {
                    renderViewPosts(setViewPosts, viewPosts, posts)
                }}>Показать еще</button>
            }
        </main>
    )
}

export default BlogPage