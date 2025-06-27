import './App.css'
import {Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import Overview from "./pages/overview/Overview.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import PostDetails from "./pages/postDetails/PostDetails.jsx";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-post" element={<NewPost />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
