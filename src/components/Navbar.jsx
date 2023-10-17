import React, { useState } from 'react';

import { BrowserRouter as Router, Routes,Route, Link, Navigate} from "react-router-dom";
import Indonesia from '../pages/Indonesia';
import Programming from '../pages/Programming';
import SearchResults from '../pages/SearchResults';
import Covid from '../pages/covid';
import Saved from '../pages/Saved';

import '../App.css';
const NavbarComp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [redirectToSearch, setRedirectToSearch] = useState(false);

    const handleInputChange = (e) => {
        console.log(searchTerm)
        setSearchTerm(e.target.value);
    }; 

    const handleSearch = (e,search) => {
        console.log(search)
        setRedirectToSearch(true);
    };

    return (
        <Router>
            <div className='navbar-container'>
                <Link as={Link} to="/" className='navbar-link'>Indonesia</Link>
                <Link as={Link} to="/programming" className='navbar-link'>Programming</Link>
                <Link as={Link} to="/covid" className='navbar-link'>Covid</Link>
                <Link as={Link} to="/saved" className='navbar-link'>Saved</Link>
                <div className='search'>
                    <form>
                        <input 
                            type="text"
                            placeholder='Cari...'
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleSearch}>Cari</button>
                    </form>
                    {redirectToSearch && <Navigate to={`/search/${searchTerm}`}/>}
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Indonesia />} />
                    <Route path="/programming" element={<Programming />} />
                    <Route path="/covid" element={<Covid />} />
                    <Route path="saved" element={<Saved />} />
                    <Route path={`/search/:search`} element={<SearchResults />} />
                </Routes>
            </div>
        </Router>
    );
};

export default NavbarComp;
