import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'


const header = () => {
    return (
        <div className='Header'>
            <div className='bx--row'>
                <div>
                <a>
                    <header>
                    <NavLink to="/upload" activeStyle={{ color: 'white' }} className="active">
          <h1>click hier</h1>
        </NavLink>
                    </header>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default header;
