import React from 'react';
import {Link} from 'react-router-dom' ;

function Header()
{
    return (
        <header>
            <h1 style={HeaderStyle}>Todo List</h1>
            <Link style={linkstyle} to='/'>Home</Link>
            <Link style={linkstyle} to='/about'>About</Link>
        </header>
    )
}

const HeaderStyle={
    background: '#333',color:'#fff',textAlign:'center',padding:'10px'
}
const linkstyle={
    color:'#fff',
    textDecoration:'none'
}
export default Header;