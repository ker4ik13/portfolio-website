import React, { useEffect, useState } from "react";
import blogPosts from "../data/posts.json"
import RecentPost from "../RecentPosts/RecentPost";
import { Link } from "react-router-dom";

const BlogPage = () => {

    const [posts, setPosts] = useState([])
    const [viewPosts, setViewPosts] = useState(5);

    const renderViewPosts = () => {
        if(viewPosts < posts.length){
            setViewPosts(viewPosts + 5)
        } else{
            return;
        }
    }

    useEffect(() => {
        setPosts(blogPosts)
    })

    return(
        <main className="main">
            <h1 className="page__title">Блог</h1>
            {posts
            .slice(-viewPosts)
            .reverse()
            .map((post) => (
                <Link to={`./${post.id}`} key={post.id}>
                    <RecentPost post={post} secondClass='fullwidth'/>
                </Link>
            ))}
            {viewPosts <= posts.length && 
                <button type="button" className="moreButton" onClick={renderViewPosts}>Показать еще</button>
            }
        </main>
    )
}

export default BlogPage