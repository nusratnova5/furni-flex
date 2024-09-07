import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/products'}>Products</Link>
            <Link to={'/carts'}>Carts</Link>
        </div>
    );
};

export default Header;