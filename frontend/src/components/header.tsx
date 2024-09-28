import {Link} from "react-router-dom";
import { useAppContext } from "../contexts/appContext";
import Logout from "./logoutButton";

const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-blue-800 py-6 px-4 ">
            <div className="container mx-auto flex justify-between">
                <span className="text-2xl text-white font-bold tracking-tight">
                    <Link to="/">Roomora</Link>
                </span>
                <span className="flex space-x-2">
                    { isLoggedIn? 
                        <>
                            <Link to="/my-bookings" className="flex items-center text-white px-3 font-bold hover:bg-blue-600" >My Bookings</Link>
                            <Link to="/my-hotels" className="flex items-center text-white px-3 font-bold hover:bg-blue-600" >My Hotels</Link>
                            <Logout />
                        </>
                        :
                        <>
                            <Link to="/login" className= "flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100">Log In</Link>
                        </>
                    }
                </span>
            </div>
        </div>
    );
}

export default Header;