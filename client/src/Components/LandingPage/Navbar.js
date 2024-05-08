/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Logo from "./Logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useNavigate } from "react-router-dom";

import logo from "../../Assets/logo.png"
import "../../Styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation,NavLink } from "react-router-dom";



function NavBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  // Custom - CSS
  const shadowDark = {
    height: "10vh",
    boxShadow: "0 0.5px 4px rgba(0, 0, 0, 0.5)",
  };

  const navLinkStyle = {
    fontSize: "18px",
    fontWeight: "normal",
    color: "#333", // Darker color
    marginRight: "20px", // Margin between the links
    textDecoration: "none", // Remove underline
    transition: "color 0.3s ease", // Smooth color transition on hover
  };

  const hoverStyle = {
    color: "blue", // Change color to blue on hover
    textDecoration: "underline", // Add underline on hover
  };

  // Function to handle hover effect
  const handleHover = (e) => {
    e.target.style.color = hoverStyle.color;
    e.target.style.textDecoration = hoverStyle.textDecoration;
  };

  // Function to handle mouse leave
  const handleMouseLeave = (e) => {
    e.target.style.color = navLinkStyle.color;
    e.target.style.textDecoration = navLinkStyle.textDecoration;
  };

  return (
    <>
      <div>
        <Navbar bg="light" expand="lg" fixed="top" style={shadowDark}>
          <Navbar.Brand
            // href="#"
            style={{ marginLeft: "40px", fontSize: "30px" }}
          >
            <div className="navbar-logo">
            <img src={logo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mx-auto">
              <NavLink
                to="/"
                style={navLinkStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </NavLink>
              <NavLink
                to="/"
                style={navLinkStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                Quiz
              </NavLink>
              <NavLink
                to="#"
                style={navLinkStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
              >
                Scores
              </NavLink>
            </Nav>
          
          <div>
            {currentPath === "/" ||
            currentPath === "/login" ||
            currentPath === "/register" ? (
              <div className="d-lg-block me-4" style={{ position: "relative" }}>
                <Button
                  variant="outline-primary"
                  className="mr-2"
                  style={{ marginRight: "10px", color: "#fff"}}
                >
                  <Link
                    to="/login"
                      style={{ textDecoration: "none", margin: "8px" }}
                  >
                    Login
                  </Link>
                </Button>
                <Button
                  variant="outline-primary"
                  style={{ marginRight: "20px" }}
                >
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", margin: "8px" }}
                  >
                    Register
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="d-lg-block me-4" style={{ position: "relative" }}>
                <Button
                  variant="outline-primary"
                  className="mr-2"
                  style={{ marginRight: "10px" }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", margin: "8px" }}
                  >
                    Logout
                  </Link>
                </Button>
                </div>
            )}
          </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div style={{ paddingTop: "65px" }}></div>
    </>
  );
}

export default NavBar;



//  but it is same as header.js


// old code -----

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [openMenu, setOpenMenu] = useState(false);
//   const menuOptions = [
//     {
//       text: "Home",
//       icon: <HomeIcon />,
//       route: ''
//     },
//     {
//       text: "About",
//       icon: <InfoIcon />,
//       route: 'about'
//     },
//     {
//       text: "Contact",
//       icon: <PhoneRoundedIcon />,
//       route: 'contact'
//     },
//   ];
//   return (
//     <nav>
//       <div className="nav-logo-container">
//         {/* <img className="logo" src={Logo} alt="" /> */}
//       </div>
//       <div className="navbar-links-container">
//         <a onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Home</a>
//         <a onClick={()=>navigate('/about')} style={{cursor: 'pointer'}}>About</a>
//         {/* <a href="">Testimonials</a> */}
//         <a onClick={()=>navigate('/contact')} style={{cursor: 'pointer'}}>Contact</a>
//         {/* <a href="">
//           <BsCart2 className="navbar-cart-icon" />
//         </a> */}
//         {/* <button className="primary-button">Bookings Now</button> */}
//       </div>
//       <div className="navbar-menu-container">
//         <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
//       </div>
//       <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={() => setOpenMenu(false)}
//           onKeyDown={() => setOpenMenu(false)}
//         >
//           <List>
//             {menuOptions.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} onClick={()=>navigate(`/${item.route}`)}/>
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
         
//           <Divider />
//         </Box>
//       </Drawer>
//     </nav>
//   );
// };
// // done p

// export default Navbar;