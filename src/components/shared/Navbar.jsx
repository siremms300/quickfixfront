 

import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { useUserContext } from "../../context/UserContext";

const Navbar = ({ navbarRef }) => {
    const { user, logout } = useUserContext();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Wrapper ref={navbarRef}>
            <div className="container">
                <Logo />
                <button className={`hamburger ${isSidebarOpen ? "open" : ""}`} onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={toggleSidebar}>
                        ✕
                    </button>
                    <NavLink className="nav-item" to="/" onClick={toggleSidebar}>
                        Home
                    </NavLink>
                    <NavLink className="nav-item" to="/about-us" onClick={toggleSidebar}>
                        About
                    </NavLink>
                    {/* <NavLink className="nav-item" to="/all-schools" onClick={toggleSidebar}>
                        Courses
                    </NavLink> */}
                    {/* {user ? (
                        <>
                            <NavLink className="nav-item" to="/dashboard" onClick={toggleSidebar}>
                                Dashboard
                            </NavLink>
                            <button
                                className="logout-btn"
                                onClick={() => {
                                    logout();
                                    toggleSidebar();
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLink className="nav-item" to="/login" onClick={toggleSidebar}>
                            <span className="login-btn">Login</span>
                        </NavLink>
                    )} */}
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px var(--shadow-light);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;

    .container {
        width: 100%;
        max-width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 20px;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 1001;
        padding: 0;
    }

    .hamburger span {
        width: 100%;
        height: 3px;
        background-color: var(--color-black);
        transition: all 0.3s ease;
    }

    .hamburger.open span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
    }

    .nav-links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .nav-item {
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
        margin-left: 20px;
        color: var(--color-black);
        text-decoration: none;
    }

    .nav-item.active {
        color: var(--color-primary);
    }

    .login-btn {
        background: #247bf7;
        color: white;
        padding: 8px 24px;
        border-radius: 4px;
        display: inline-block;
    }

    .logout-btn {
        background: #ff0000;
        color: white;
        padding: 8px 24px;
        border-radius: 4px;
        border: none;
        margin-left: 20px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        text-transform: capitalize;
    }

    .close-btn {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: var(--color-black);
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    @media screen and (max-width: 1200px) {
        padding: 1rem 2rem;
    }

    @media screen and (max-width: 600px) {
        padding: 1.2rem 1rem;

        .hamburger {
            display: flex;
        }

        .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 250px;
            background-color: white;
            flex-direction: column;
            align-items: flex-start;
            padding: 300px 20px;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            z-index: 1100;
        }

        .nav-links.open {
            transform: translateX(0);
        }

        .nav-item {
            margin: 15px 0;
            margin-left: 0;
            font-size: 18px;
        }

        .logout-btn {
            margin: 15px 0;
            margin-left: 0;
        }

        .close-btn {
            display: block;
        }
    }
`;

export default Navbar;









// import React, { useState } from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import Logo from "../Logo";
// import { useUserContext } from "../../context/UserContext";

// const Navbar = ({ navbarRef }) => {
//     const { user, logout } = useUserContext();
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <Wrapper ref={navbarRef}>
//             <div className="container">
//                 <Logo />
//                 <button className="hamburger" onClick={toggleSidebar}>
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </button>
//                 <div className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
//                     <NavLink className="nav-item" to="/about-us" onClick={toggleSidebar}>
//                         About
//                     </NavLink>
//                     <NavLink className="nav-item" to="/all-schools" onClick={toggleSidebar}>
//                         Courses
//                     </NavLink>
//                     {user ? (
//                         <>
//                             <NavLink className="nav-item" to="/dashboard" onClick={toggleSidebar}>
//                                 Dashboard
//                             </NavLink>
//                             <button
//                                 className="logout-btn"
//                                 onClick={() => {
//                                     logout();
//                                     toggleSidebar();
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <NavLink className="nav-item" to="/login" onClick={toggleSidebar}>
//                             <span className="login-btn">Login</span>
//                         </NavLink>
//                     )}
//                 </div>
//             </div>
//         </Wrapper>
//     );
// };

// const Wrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     box-shadow: 0 5px 5px var(--shadow-light);
//     padding: 1rem 0;
//     position: sticky;
//     top: 0;
//     background-color: white;
//     z-index: 1000;

//     .container {
//         width: 100%;
//         max-width: 1200px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         position: relative;
//     }

//     .hamburger {
//         display: none;
//         flex-direction: column;
//         justify-content: space-between;
//         width: 30px;
//         height: 20px;
//         background: none;
//         border: none;
//         cursor: pointer;
//         z-index: 1001;
//         padding: 0;
//     }

//     .hamburger span {
//         width: 100%;
//         height: 3px;
//         background-color: var(--color-black);
//         transition: all 0.3s ease;
//     }

//     .nav-links {
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;
//     }

//     .nav-item {
//         font-size: 16px;
//         font-weight: 500;
//         text-transform: capitalize;
//         margin-left: 20px;
//         color: var(--color-black);
//         text-decoration: none;
//     }

//     .nav-item.active {
//         color: var(--color-primary);
//     }

//     .login-btn {
//         background: #247bf7;
//         color: white;
//         padding: 8px 24px;
//         border-radius: 4px;
//         display: inline-block;
//     }

//     .logout-btn {
//         background: #ff0000;
//         color: white;
//         padding: 8px 24px;
//         border-radius: 4px;
//         border: none;
//         margin-left: 20px;
//         cursor: pointer;
//         font-size: 16px;
//         font-weight: 500;
//         text-transform: capitalize;
//     }

//     @media screen and (max-width: 1200px) {
//         padding: 1rem 2rem;
//     }

//     @media screen and (max-width: 600px) {
//         padding: 1.2rem 1rem;

//         .hamburger {
//             display: flex;
//         }

//         .nav-links {
//             position: fixed;
//             top: 0;
//             right: 0;
//             height: 100vh;
//             width: 250px;
//             background-color: white;
//             flex-direction: column;
//             align-items: flex-start;
//             padding: 80px 20px;
//             transform: translateX(100%);
//             transition: transform 0.3s ease-in-out;
//             box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//             z-index: 1000;
//         }

//         .nav-links.open {
//             transform: translateX(0);
//         }

//         .nav-item {
//             margin: 15px 0;
//             margin-left: 0;
//             font-size: 18px;
//         }

//         .logout-btn {
//             margin: 15px 0;
//             margin-left: 0;
//         }
//     }
// `;

// export default Navbar;
















// // /* eslint-disable react/prop-types */

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { NavLink, useNavigate } from "react-router-dom"; // Added useNavigate
// import Logo from "../Logo";
// import { useUserContext } from "../../context/UserContext";

// const Navbar = ({ navbarRef }) => {
//     const { user, logout } = useUserContext();
//     const [isOpen, setIsOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//     const navigate = useNavigate(); // Added for programmatic navigation

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//             if (window.innerWidth >= 768) {
//                 setIsOpen(false);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const toggleSidebar = () => setIsOpen(!isOpen);
//     const closeSidebar = () => setIsOpen(false);

//     // New function to handle navigation
//     const handleNavigation = (path) => {
//         navigate(path); // Programmatically navigate
//         closeSidebar(); // Then close the sidebar
//     };

//     return (
//         <>
//             <Wrapper ref={navbarRef}>
//                 <div className="container"> 
//                     <Logo />
//                     <div className="desktop-nav">
//                         <NavLink className="nav-item" to="/about-us">
//                             About
//                         </NavLink>
//                         <NavLink className="nav-item" to="/all-schools">
//                             Courses
//                         </NavLink>
//                         {user ? (
//                             <>
//                                 <NavLink className="nav-item" to="/dashboard">
//                                     Dashboard
//                                 </NavLink>
//                                 <button
//                                     className="logout-btn"
//                                     onClick={logout}
//                                 >
//                                     Logout
//                                 </button>
//                             </>
//                         ) : (
//                             <NavLink className="nav-item" to="/login">
//                                 <span className="login-btn">Login</span>
//                             </NavLink>
//                         )}
//                     </div>
//                     <HamburgerButton onClick={toggleSidebar} isOpen={isOpen}>
//                         <span />
//                         <span />
//                         <span />
//                     </HamburgerButton>
//                 </div>
//             </Wrapper>

//             {/* Mobile Sidebar */}
//             <Sidebar isOpen={isOpen && isMobile}>
//                 <CloseButton onClick={closeSidebar}>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                         <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                 </CloseButton>
//                 <SidebarContent>
//                     <button className="sidebar-item" onClick={() => handleNavigation("/about-us")}>
//                         About
//                     </button>
//                     <button className="sidebar-item" onClick={() => handleNavigation("/all-schools")}>
//                         Courses
//                     </button>
//                     {user ? (
//                         <>
//                             <button className="sidebar-item" onClick={() => handleNavigation("/dashboard")}>
//                                 Dashboard
//                             </button>
//                             <button
//                                 className="sidebar-logout"
//                                 onClick={() => {
//                                     logout();
//                                     closeSidebar();
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <button 
//                             className="sidebar-item sidebar-login"
//                             onClick={() => handleNavigation("/login")}
//                         >
//                             Login
//                         </button>
//                     )}
//                 </SidebarContent>
//                 <Overlay isOpen={isOpen && isMobile} onClick={closeSidebar} />
//             </Sidebar>
//         </>
//     );
// };



// const Wrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     box-shadow: 0 5px 5px var(--shadow-light);
//     padding: 1rem 0;
//     position: sticky;
//     top: 0;
//     background-color: white;
//     z-index: 1000;

//     .container {
//         width: 100%;
//         max-width: 1200px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding: 0 2rem;
//     }

//     .desktop-nav {
//         display: flex;
//         align-items: center;
        
//         @media (max-width: 768px) {
//             display: none;
//         }
//     }

//     .nav-item {
//         font-size: 16px;
//         font-weight: 500;
//         text-transform: capitalize;
//         margin-left: 20px;
//         color: var(--color-black);
//         transition: color 0.3s ease;

//         &:hover {
//             color: var(--color-primary);
//         }

//         &.active {
//             color: var(--color-primary);
//         }
//     }

//     .login-btn, .logout-btn {
//         background-color: ${props => props.logout ? '#FF0000' : '#247BF7'};
//         color: white;
//         padding: 0.5rem 1.5rem;
//         border-radius: 4px;
//         border: none;
//         cursor: pointer;
//         font-weight: 500;
//         transition: all 0.3s ease;
//         margin-left: 20px;

//         &:hover {
//             opacity: 0.9;
//             transform: translateY(-1px);
//         }
//     }

//     .logout-btn {
//         background-color: #FF0000;
//     }

//     @media (max-width: 600px) {
//         padding: 1rem;
//     }
// `;

// const HamburgerButton = styled.button`
//     display: none;
//     flex-direction: column;
//     justify-content: space-around;
//     width: 2rem;
//     height: 2rem;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     padding: 0;
//     z-index: 1100;

//     &:focus {
//         outline: none;
//     }

//     span {
//         width: 2rem;
//         height: 0.25rem;
//         background: var(--color-black);
//         border-radius: 10px;
//         transition: all 0.3s linear;
//         position: relative;
//         transform-origin: 1px;

//         &:first-child {
//             transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
//         }

//         &:nth-child(2) {
//             opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
//             transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
//         }

//         &:nth-child(3) {
//             transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
//         }
//     }

//     @media (max-width: 768px) {
//         display: flex;
//     }
// `;

// const Sidebar = styled.div`
//     position: fixed;
//     top: 0;
//     right: 0;
//     width: 70%;
//     max-width: 300px;
//     height: 100vh;
//     background: white;
//     box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//     transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
//     transition: transform 0.3s ease-in-out;
//     z-index: 1050;
//     padding-top: 5rem;
// `;

// const CloseButton = styled.button`
//     position: absolute;
//     top: 1.5rem;
//     right: 1.5rem;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     padding: 0.5rem;
//     color: var(--color-black);
//     transition: color 0.3s ease;

//     &:hover {
//         color: var(--color-primary);
//     }

//     svg {
//         display: block;
//     }
// `;

// const SidebarContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 2rem;

//     .sidebar-item {
//         font-size: 1.2rem;
//         padding: 1rem 0;
//         color: var(--color-black);
//         border-bottom: 1px solid #eee;
//         transition: color 0.3s ease;
//         text-decoration: none;

//         &:hover {
//             color: var(--color-primary);
//         }

//         &.active {
//             color: var(--color-primary);
//         }
//     }

//     .sidebar-login, .sidebar-logout {
//         margin-top: 1.5rem;
//         padding: 0.75rem;
//         border-radius: 4px;
//         font-weight: 500;
//         text-align: center;
//         cursor: pointer;
//         transition: all 0.3s ease;
//     }

//     .sidebar-login {
//         background-color: #247BF7;
//         color: white;
//         border: none;
//     }

//     .sidebar-logout {
//         background-color: #FF0000;
//         color: white;
//         border: none;
//     }
// `;

// const Overlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 1040;
//     display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
// `;

// export default Navbar;













// // /* eslint-disable react/prop-types */

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import Logo from "../Logo";
// import { useUserContext } from "../../context/UserContext";

// const Navbar = ({ navbarRef }) => {
//     const { user, logout } = useUserContext();
//     const [isOpen, setIsOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768);
//             if (window.innerWidth >= 768) {
//                 setIsOpen(false);
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     const toggleSidebar = () => setIsOpen(!isOpen);

//     return (
//         <>
//             <Wrapper ref={navbarRef}>
//                 <div className="container"> 
//                     <Logo />
//                     <div className="desktop-nav">
//                         <NavLink className="nav-item" to="/about-us">
//                             About
//                         </NavLink>
//                         <NavLink className="nav-item" to="/all-schools">
//                             Courses
//                         </NavLink>
//                         {user ? (
//                             <>
//                                 <NavLink className="nav-item" to="/dashboard">
//                                     Dashboard
//                                 </NavLink>
//                                 <button
//                                     className="logout-btn"
//                                     onClick={logout}
//                                 >
//                                     Logout
//                                 </button>
//                             </>
//                         ) : (
//                             <NavLink className="nav-item" to="/login">
//                                 <span className="login-btn">Login</span>
//                             </NavLink>
//                         )}
//                     </div>
//                     <HamburgerButton onClick={toggleSidebar} isOpen={isOpen}>
//                         <span />
//                         <span />
//                         <span />
//                     </HamburgerButton>
//                 </div>
//             </Wrapper>

//             {/* Mobile Sidebar */}
//             <Sidebar isOpen={isOpen && isMobile}>
//                 <SidebarContent>
//                     <NavLink className="sidebar-item" to="/about-us" onClick={() => setIsOpen(false)}>
//                         About
//                     </NavLink>
//                     <NavLink className="sidebar-item" to="/all-schools" onClick={() => setIsOpen(false)}>
//                         Courses
//                     </NavLink>
//                     {user ? (
//                         <>
//                             <NavLink className="sidebar-item" to="/dashboard" onClick={() => setIsOpen(false)}>
//                                 Dashboard
//                             </NavLink>
//                             <button
//                                 className="sidebar-logout"
//                                 onClick={() => {
//                                     logout();
//                                     setIsOpen(false);
//                                 }}
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <NavLink 
//                             className="sidebar-item" 
//                             to="/login" 
//                             onClick={() => setIsOpen(false)}
//                         >
//                             <span className="sidebar-login">Login</span>
//                         </NavLink>
//                     )}
//                 </SidebarContent>
//                 <Overlay isOpen={isOpen && isMobile} onClick={() => setIsOpen(false)} />
//             </Sidebar>
//         </>
//     );
// };

// const Wrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     box-shadow: 0 5px 5px var(--shadow-light);
//     padding: 1rem 0;
//     position: sticky;
//     top: 0;
//     background-color: white;
//     z-index: 1000;

//     .container {
//         width: 100%;
//         max-width: 1200px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding: 0 2rem;
//     }

//     .desktop-nav {
//         display: flex;
//         align-items: center;
        
//         @media (max-width: 768px) {
//             display: none;
//         }
//     }

//     .nav-item {
//         font-size: 16px;
//         font-weight: 500;
//         text-transform: capitalize;
//         margin-left: 20px;
//         color: var(--color-black);
//         transition: color 0.3s ease;

//         &:hover {
//             color: var(--color-primary);
//         }

//         &.active {
//             color: var(--color-primary);
//         }
//     }

//     .login-btn, .logout-btn {
//         background-color: ${props => props.logout ? '#FF0000' : '#247BF7'};
//         color: white;
//         padding: 0.5rem 1.5rem;
//         border-radius: 4px;
//         border: none;
//         cursor: pointer;
//         font-weight: 500;
//         transition: all 0.3s ease;
//         margin-left: 20px;

//         &:hover {
//             opacity: 0.9;
//             transform: translateY(-1px);
//         }
//     }

//     .logout-btn {
//         background-color: #FF0000;
//     }

//     @media (max-width: 600px) {
//         padding: 1rem;
//     }
// `;

// const HamburgerButton = styled.button`
//     display: none;
//     flex-direction: column;
//     justify-content: space-around;
//     width: 2rem;
//     height: 2rem;
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     padding: 0;
//     z-index: 1100;

//     &:focus {
//         outline: none;
//     }

//     span {
//         width: 2rem;
//         height: 0.25rem;
//         background: var(--color-black);
//         border-radius: 10px;
//         transition: all 0.3s linear;
//         position: relative;
//         transform-origin: 1px;

//         &:first-child {
//             transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
//         }

//         &:nth-child(2) {
//             opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
//             transform: ${({ isOpen }) => isOpen ? 'translateX(20px)' : 'translateX(0)'};
//         }

//         &:nth-child(3) {
//             transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
//         }
//     }

//     @media (max-width: 768px) {
//         display: flex;
//     }
// `;

// const Sidebar = styled.div`
//     position: fixed;
//     top: 0;
//     right: 0;
//     width: 70%;
//     max-width: 300px;
//     height: 100vh;
//     background: white;
//     box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//     transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
//     transition: transform 0.3s ease-in-out;
//     z-index: 1050;
//     padding-top: 5rem;
// `;

// const SidebarContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     padding: 2rem;

//     .sidebar-item {
//         font-size: 1.2rem;
//         padding: 1rem 0;
//         color: var(--color-black);
//         border-bottom: 1px solid #eee;
//         transition: color 0.3s ease;

//         &:hover {
//             color: var(--color-primary);
//         }

//         &.active {
//             color: var(--color-primary);
//         }
//     }

//     .sidebar-login, .sidebar-logout {
//         margin-top: 1.5rem;
//         padding: 0.75rem;
//         border-radius: 4px;
//         font-weight: 500;
//         text-align: center;
//         cursor: pointer;
//         transition: all 0.3s ease;
//     }

//     .sidebar-login {
//         background-color: #247BF7;
//         color: white;
//     }

//     .sidebar-logout {
//         background-color: #FF0000;
//         color: white;
//         border: none;
//     }
// `;

// const Overlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 1040;
//     display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
// `;

// export default Navbar;













// // /* eslint-disable react/prop-types */


// import React from "react";
// import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import Logo from "../Logo";
// import { useUserContext } from "../../context/UserContext";

// const Navbar = ({ navbarRef }) => {
//     const { user, logout } = useUserContext(); // Get user and logout function from context

//     return (
//         <Wrapper ref={navbarRef}>
//             <div className="container"> 
//                 <Logo />
//                 <div className="flex justify-end items-center">
//                 <NavLink className="nav-item" to="/about-us">
//                     About
//                 </NavLink>
//                     <NavLink className="nav-item" to="/all-schools">
//                         Courses
//                     </NavLink>
//                     {user ? (
//                         <>
//                             <NavLink className="nav-item hidden sm:block" to="/dashboard">
//                                 Dashboard
//                             </NavLink>
//                             <button
//                                 className="bg-[#FF0000] text-white px-6 py-2 rounded ml-4"
//                                 onClick={logout} // Call logout function
//                             >
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <NavLink className="nav-item" to="/login">
//                             <span className="bg-[#247BF7] text-white px-6 py-2 rounded"> Login</span>
//                         </NavLink>
//                     )}
//                 </div>
//             </div>
//         </Wrapper>
//     );
// };

// const Wrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     box-shadow: 0 5px 5px var(--shadow-light);
//     padding: 1rem 0;

//     position: sticky;
//     top: 0; /* Stick the navbar to the top of the page */
//     background-color: white; /* Ensure the background color remains consistent when sticky */
//     z-index: 1000; /* Make sure the navbar stays above other content when scrolling */

//     .container {
//         width: 100%;
//         max-width: 1200px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
//     .container .nav-item {
//         font-size: 16px;
//         font-weight: 500;
//         text-transform: capitalize;
//         margin-left: 20px;
//         color: var(--color-black);
//     }
//     .container .nav-item.active {
//         color: var(--color-primary);
//     }
//     @media screen and (max-width: 1200px) {
//         padding: 1rem 2rem;
//     }
//     @media screen and (max-width: 600px) {
//         padding: 1.2rem 1rem;
//         .container {
//             display: flex;
//             /* justify-content: center; */
//         }
//     }
// `;

// export default Navbar;





















// import styled from "styled-components";
// import Logo from "../Logo";
// import { NavLink } from "react-router-dom";

// const Navbar = ({ navbarRef }) => {
//     return (
//         <Wrapper ref={navbarRef}>
//             <div className="container">
//                 <Logo />
//                 <div className="flex justify-end items-center">
//                     <NavLink className="nav-item" to="/all-jobs">
//                         Jobs
//                     </NavLink>
//                     <NavLink className="nav-item hidden sm:block" to="/dashboard">
//                         Dashboard
//                     </NavLink>
//                     <NavLink className="nav-item" to="/login">
//                         <span className="bg-[#247BF7] text-white px-6 py-2 rounded"> Login</span>
//                     </NavLink>
//                 </div>
//             </div>
//         </Wrapper>
//     );
// };

// const Wrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     box-shadow: 0 5px 5px var(--shadow-light);
//     padding: 1rem 0;
//     .container {
//         width: 100%;
//         max-width: 1200px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
//     .container .nav-item {
//         font-size: 16px;
//         font-weight: 500;
//         text-transform: capitalize;
//         margin-left: 20px;
//         color: var(--color-black);
//     }
//     .container .nav-item.active {
//         color: var(--color-primary);
//     }
//     @media screen and (max-width: 1200px) {
//         padding: 1rem 2rem;
//     }
//     @media screen and (max-width: 600px) {
//         padding: 1.2rem 1rem;
//         .container {
//             display: flex;
//             /* justify-content: center; */
//         }
//     }
// `;

// export default Navbar;
