import React from "react";
import { Link } from "react-router-dom";
import { useParams} from 'react-router-dom'



function NavBar() {

    // const { user_id } = useParams()

    return ( 
        <ul>
            <li><Link to={`/`}>Logout</Link></li>
        </ul>
    )
}

export default NavBar;