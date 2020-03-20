import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <div class="collapse navbar-collapse">
            <span class=""><h3>RECIVENT +</h3> </span>
        </div>
        <div class="">
            <Link to="/crear">
                <button class="btn btn-light" style={{ margin: '16px' }}>
                    Recicladora Add
                </button>
            </Link>
        </div>
        <div>
            <Link to="/lista">
                <button className="btn btn-light" style={{ margin: '16px' }}>
                    Recicladora List
                    </button>
            </Link>
        </div> 
    </nav>
)

export default Header;