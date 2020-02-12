import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'


const header = () => {
    return (
        <div className='Header'>
            <div className='bx--row'>
                <div>
                    <header>
                    <Link to="/upload" className="nav-link">
          <h1>click hier</h1>
        </Link>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default header;
