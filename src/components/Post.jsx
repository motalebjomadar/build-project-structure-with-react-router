import './Post.css';

const Post = ({post}) => {
    const {title, body, id} = post;
    return (
        <div className='post'>
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default Post;