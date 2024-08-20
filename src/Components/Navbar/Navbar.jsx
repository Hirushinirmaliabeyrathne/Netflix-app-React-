import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/netflix_logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const navRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add('nav-dark');
        } else {
          navRef.current.classList.remove('nav-dark');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" className="logo" />
        <ul className="nav-list">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <SearchIcon className='icons' />
        <p className='children'>Children</p>
        <NotificationsIcon className='icons' />
        <div className="navbar-profile" onClick={handleDropdownToggle}>
          <AccountCircleIcon className='profile' />
          <ArrowDropDownIcon className='icons' />
          {dropdownOpen && (
            <div className="dropdown">
              <p>Profile</p>
              <p>Account</p>
              <p>Help Center</p>
              <p>Sign out</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
