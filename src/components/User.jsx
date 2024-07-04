import './User.css';
import { NavLink } from 'react-router-dom';

const User = ({user}) => {
    const {username, email, phone, id} = user;
    return (
        <div className='user-style'>
            <h1>{username}</h1>
            <h2>{email}</h2>
            <h1>{phone}</h1>
            <NavLink to={`/user/${id}`}><button>Details</button></NavLink>
        </div>
    );
};

export default User;