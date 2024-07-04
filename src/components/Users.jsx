import { useLoaderData } from "react-router-dom";
import User from "./User";
import './Users.css';


const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    return (
        <div className='user-container'>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Users;