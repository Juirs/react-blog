import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import data from "../../constants/data.json";
import "./PostDetails.css";
import formatDate from "../../helpers/formatDate/formatDate.js";

function PostDetails () {
    const [postDetails, setPostDetails] = useState(null);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        fetchPostDetails();
        // eslint-disable-next-line
    }, [id]);

    function fetchPostDetails() {
        setError(false);
        try {
            const post = data.find(post => String(post.id) === String(id));
            setPostDetails(post);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    if (error) {
        return <h1>Oeps... Er ging iets mis bij het ophalen van de post details!</h1>;
    }
    if (!postDetails) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="post-details">
            <h1>{postDetails.title} <span className="read-time">({postDetails.readTime} minuten)</span></h1>
            <h2 className="subtitle">{postDetails.subtitle}</h2>
            <div className="author">
                Geschreven door {postDetails.author} op {formatDate(postDetails.created)}
            </div>
            <div className="content">{postDetails.content}</div>
            <div className="interaction">
                {postDetails.comments} reacties - {postDetails.shares} keer gedeeld
            </div>
            <Link to="/overview" className="back-link">
                 Terug naar de overzichtspagina
            </Link>
        </div>
    );
}

export default PostDetails;