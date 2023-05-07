import react from "react";
import {Link} from 'react-router-dom';


const Nav=()=>{
    return(
        <div>
            <ul className="nav-ul">
                <li><link to="/">Home</link></li>
                <li><link to="/add">Add Products</link></li>
                <li><link to="/update">Update Product</link></li>
                <li><link to="/logout">Logout</link></li>
                <li><link to="/profile">Profile</link></li>
            </ul>
        </div>
    );
}

export default Nav;