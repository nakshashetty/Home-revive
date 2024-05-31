import React from 'react';
import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import logo from '../assets/logo.png';
import '../styles/Footer.css';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com/watch?v=K4_J3ShsUOY",
    icon: <AiFillYoutube style={{ color: '#fff', width: '20px', height: '20px' }} />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub style={{ color: '#fff', width: '20px', height: '20px' }} />,
  },
  {
    path: "https://www.instagram.com/?hl=en",
    icon: <AiOutlineInstagram style={{ color: '#fff', width: '20px', height: '20px' }} />,
  },
  {
    path: "https://www.linkedin.com/",
    icon: <RiLinkedinFill style={{ color: '#fff', width: '20px', height: '20px' }} />,
  }
];

const quickLinks01 = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/category",
      display: "Category",
    },
    {
      path: "/furniture",
      display: "Furniture",
    },
    {
      path: "/booking",
      display: "Booking",
    },
  ];

const quickLinks02 = [
    {
      path: "/architect",
      display: "Get a Architect",
    },
    {
      path: "/architect",
      display: "Contact",
    },
    {
      path: "/furniture",
      display: "Find affordable furniture",
    },
    {
      path: "/photos",
      display: "Get an Opinion",
    },
  
  ];

const quickLinks03 = [
    {
      path: "/faq",
      display: "FAQ",
    },
  ];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#232323', color: '#fff', paddingTop: '10px', paddingBottom: '16px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: '30px' }}>
              <div>
                <img src={logo} alt="" style={{ maxWidth: '150px', height: 'auto' }} />
                <p style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '400', color: '#ccc', marginTop: '4px' }}>
                  Copyright  {year} developed by Naksha all rights reserved.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '4px' }}>
                  {socialLinks.map((link, index) => (
                    <Link to={link.path} key={index} style={{ width: '2.25rem', height: '2.25rem', border: '1px solid #181A1E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', transition: 'background-color 0.3s, border 0.3s' }}>
                        {link.icon}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                   Quick Links
                </h2>

                <ul>
                    {quickLinks01.map((item, index) => (
                        <li key={index} className="mb-4">
                         <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}
                         </Link>
                        </li>
                    ))}
                </ul>

              </div>

              <div>
                <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                   I want to:
                </h2>

                <ul>
                    {quickLinks02.map((item, index) => (
                        <li key={index} className="mb-4">
                         <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}
                         </Link>
                        </li>
                    ))}
                </ul>

              </div>

              <div>
                <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                   Support
                </h2>

                <ul>
                    {quickLinks03.map((item, index) => (
                        <li key={index} className="mb-4">
                         <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}
                         </Link>
                        </li>
                    ))}
                </ul>

              </div>
              
            </div>
          </div>
        </footer>
    );
};

export default Footer;