import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="bg-blue-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-2xl text-white font-bold tracking-tight">Roomora</span>
                <span className="text-base text-white font-medium tracking-tight flex gap-4">
                    <Link to="/" >Privacy Policy</Link>
                    <Link to="/" >Terms of Service</Link>
                </span>
            </div>
            <div className="container mx-auto flex mt-4">
                <span className="text-sm text-white">© 2024 Roomora. All rights reserved.</span>
            </div>
        </div>
    )
};

export default Footer; 