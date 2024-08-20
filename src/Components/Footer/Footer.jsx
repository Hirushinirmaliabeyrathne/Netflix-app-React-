import React from 'react';
import './Footer.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw" aria-label="YouTube">
          <YouTubeIcon />
        </a>
        <a href="https://www.instagram.com/Netflix/" aria-label="Instagram">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/netflix/" aria-label="Facebook">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com/netflix/" aria-label="Twitter">
          <TwitterIcon />
        </a>
      </div>
      <ul className='footer-links'>
        <li><a href="https://www.netflix.com/browse/audio-description">Audio Description</a></li>
        <li><a href="https://help.netflix.com/en">Help Center</a></li>
        <li><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investor Relations</a></li>
        <li><a href="https://jobs.netflix.com/">Jobs</a></li>
        <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
        <li><a href="#cookies-preferences">Cookies Preferences</a></li>
        <li><a href="https://media.netflix.com/en/">Media Center</a></li>
        <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
        <li><a href="https://help.netflix.com/en/contactus">Contact Us</a></li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  );
}

export default Footer;
