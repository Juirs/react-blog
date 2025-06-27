import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import data from "../../constants/data.json";
import "./Overview.css";

function Overview() {
    const [postsTotal, setPostsTotal] = useState(0);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    function fetchPosts() {
        setError(false);
        try {
            const postsAmount = data.length;
            setPostsTotal(postsAmount);
            setPosts(data);
            console.log(`Er zijn ${postsAmount} posts op de platform!`);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <>
            {error === true ? (
                <h1>Oeps... Er ging iets mis bij het ophalen van de posts!</h1>
            ) : (
                <div className="overview-container">
                    <h1>Bekijk alle {postsTotal} posts op het platform!</h1>
                    <ul className="blog-list">
                        {posts.map(post => (
                            <li key={post.id} className="blog-post">
                                <Link to={`/posts/${post.id}`}>
                                    {post.title} <span className="blog-author">({post.author})</span>
                                </Link>
                                <span className="blog-interaction">
                                    {post.comments} reacties - {post.shares} keer gedeeld
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Overview;