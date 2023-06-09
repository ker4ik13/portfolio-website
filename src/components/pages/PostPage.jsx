import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../data/posts.json"

const PostPage = (props) => {

    const {id} = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(blogPosts[id -1], [id -1])
    })
    


    return(
        <main className="main">
            <div className="main__wrapper">
                <h1 className="page__title">{post.title}</h1>
                <div className="post__info">
                    <p className="featureWork__year red">{post.date}</p>
                    <p className="post__theme">{post.theme}</p>
                </div>
                <div className="post__content">
                    <div className="post__text">{post.description}</div>

                    {Object.values(post)
                    .slice(5)
                    .map(item => (
                        <div className="post__text">{item}</div>
                    ))}

                </div>
            </div>
        </main>
    )
}

export default PostPage