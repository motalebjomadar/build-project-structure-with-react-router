import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import './Posts.css';


const Posts = () => {
    const post = useLoaderData();
    return (
        <div className='post-container'>
            {
                post.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    );
};

export default Posts;