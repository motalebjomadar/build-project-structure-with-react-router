import { useLoaderData, useNavigate } from "react-router-dom";
import './Details.css';


const Details = () => {
    const details = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className='details-style'>
            <h1>{details.username}</h1>
            <h1>{details.website}</h1>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default Details;