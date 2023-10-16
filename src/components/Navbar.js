import React, { useState } from 'react';

import { BrowserRouter as Router, Routes,Route, Link, Navigate} from "react-router-dom";
import Indonesia from '../pages/Indonesia';
import Programming from '../pages/Programming';
import Covid from '../pages/covid';
import Saved from '../pages/Saved';
import '../App.css';

const NavbarComp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [redirectToSearch, setRedirectToSearch] = useState(false);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }; 

    const handleSearch = () => {
        console.log('Melakukan pencarian untuk: ${SearchTerm}');
        
        setRedirectToSearch(true);
    };

    return (
        <Router>
            <div className='navbar-container'>
                <Link as={Link} to="/indonesia" className='navbar-link'>Indonesia</Link>
                <Link as={Link} to="/programming" className='navbar-link'>Programming</Link>
                <Link as={Link} to="/covid" className='navbar-link'>Covid</Link>
                <Link as={Link} to="/saved" className='navbar-link'>Saved</Link>
                <Link as={Link} to="/search" className='navbar-link'>Search</Link>
                <div className='search'>
                <input 
                type="text"
                placeholder='Cari...'
                value={searchTerm}
                onChange={handleInputChange}
                />
                <button onClick={handleSearch}>Cari</button>
                {redirectToSearch && <Navigate to={`/search?query=${searchTerm}`}/>}
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/indonesia" element={<Indonesia />} />
                    <Route path="/programming" element={<Programming />} />
                    <Route path="/covid" element={<Covid />} />
                    <Route path="saved" element={<Saved />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </div>
        </Router>
    );
};

const SearchResults = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get('masi kosong');

    return <div>Hasil pencarian untuk:Ekonomi? {query}</div>;
};

export default NavbarComp;
