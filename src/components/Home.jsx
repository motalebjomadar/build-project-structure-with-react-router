import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './Home.css';


const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <h1 className='home-style'>Welcome to visited our website</h1>
            {
                navigation.state === "loading"? <p>Loading...</p> : <Outlet></Outlet>
            }
            
            <Footer></Footer>
            
        </div>
    );
};

export default Home;