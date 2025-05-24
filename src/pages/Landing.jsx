import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/shared/Navbar";
import HowItWorks from "../components/HowItWorks";
import { 
  FaUtensils, 
  FaBriefcase, 
  FaPills, 
  FaTshirt,
  FaCalendarAlt,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';
import hero from "../assets/media/LandingPage/hero.jpg";
import hero1 from "../assets/media/LandingPage/hero1.jpg";
import hero2 from "../assets/media/LandingPage/hero2.jpg";
import hero3 from "../assets/media/LandingPage/hero3.jpg";

const partnerLogos = [
  { id: 1, name: "Flavor & Spicy", logo: "/hero1.jpg" },
  { id: 2, name: "QuickFix Coworking", logo: "/hero.jpg" },
  { id: 3, name: "QuickFix Laundry", logo: "/hero2.jpg" },
//   { id: 4, name: "QuickFix Pharmacy", logo: "/hero3.jpg" },
//   { id: 5, name: "QuickFix Events", logo: "/events-logo.png" },
//   { id: 6, name: "QuickFix Catering", logo: "/catering-logo.png" },
];

const Landing = () => {
    const navbarRef = useRef(null);
    const [locationCount, setLocationCount] = useState(0);
    const [customerCount, setCustomerCount] = useState(0);
    const [eventCount, setEventCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const increment = 100;
        const steps = duration / increment;
        
        const locationStep = 25 / steps;
        const customerStep = 10000 / steps;
        const eventStep = 500 / steps;

        let currentLoc = 0;
        let currentCust = 0;
        let currentEvent = 0;

        const timer = setInterval(() => {
            currentLoc += locationStep;
            currentCust += customerStep;
            currentEvent += eventStep;

            if (currentLoc >= 25) currentLoc = 25;
            if (currentCust >= 10000) currentCust = 10000;
            if (currentEvent >= 500) currentEvent = 500;

            setLocationCount(Math.floor(currentLoc));
            setCustomerCount(Math.floor(currentCust));
            setEventCount(Math.floor(currentEvent));

            if (currentLoc >= 25 && currentCust >= 10000 && currentEvent >= 500) {
                clearInterval(timer);
            }
        }, increment);

        return () => clearInterval(timer);
    }, []);

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <HeroSection>
                <Overlay />
                <ContentWrapper>
                    <TextContent>
                        <h1>
                            Your One-Stop <span className="highlight">Business Empire</span>
                        </h1>
                        <p>
                            From dining to workspaces, healthcare to laundry services - experience seamless living 
                            with QuickFix Events Empire's integrated solutions.
                        </p>
                        <div className="cta-buttons">
                            {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ THE LINK BELOW WILL BE CHANGED TO /RESTAURANT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */}
                            <Link className="cta-button" to="/all-schools">   
                                Visit Restaurant
                            </Link>
                            <Link className="cta-button secondary" to="/webinar">
                                Book Workspace
                            </Link>
                        </div>
                    </TextContent>
                </ContentWrapper>
            </HeroSection>

            {/* Business Arms Section */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ THIS WILL ALSO BE /RESTAURANT BELOW @@@@@@@@@@@@@@@@@@@@@@@@ */}
                    <Link to="/all-schools" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-red-600 text-4xl mb-4"><FaUtensils /></div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Flavor & Spicy</h2>
                            <p className="text-gray-600">Experience our award-winning culinary delights</p>
                            <div className="mt-4 text-green-600 font-medium">View Menu →</div>
                        </div>
                    </Link>

                    <Link to="/webinar" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-green-600 text-4xl mb-4"><FaBriefcase /></div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Coworking Space</h2>
                            <p className="text-gray-600">Premium workspaces with all amenities included</p>
                            <div className="mt-4 text-red-600 font-medium">Book Now →</div>
                        </div>
                    </Link>

                    <Link to="/visitor" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-red-600 text-4xl mb-4"><FaPills /></div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Pharmacy Chain</h2>
                            <p className="text-gray-600">Your health is our priority - 24/7 service</p>
                            <div className="mt-4 text-green-600 font-medium">Find Locations →</div>
                        </div>
                    </Link>

                    <Link to="/sat" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <div className="text-green-600 text-4xl mb-4"><FaTshirt /></div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">Laundry Services</h2>
                            <p className="text-gray-600">Premium cleaning with quick turnaround</p>
                            <div className="mt-4 text-red-600 font-medium">Schedule Pickup →</div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Empire by Numbers</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <FaBriefcase className="text-green-600 text-2xl mx-auto mb-3" />
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                {locationCount}+
                            </div>
                            <h3 className="text-base font-medium text-gray-800 mb-1">Locations Nationwide</h3>
                            <p className="text-sm text-gray-600">Serving communities everywhere</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <FaUsers className="text-green-600 text-2xl mx-auto mb-3" />
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                {customerCount.toLocaleString()}+
                            </div>
                            <h3 className="text-base font-medium text-gray-800 mb-1">Satisfied Customers</h3>
                            <p className="text-sm text-gray-600">Trusting us with their needs</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <FaCalendarAlt className="text-green-600 text-2xl mx-auto mb-3" />
                            <div className="text-3xl font-bold text-red-600 mb-2">
                                {eventCount}+
                            </div>
                            <h3 className="text-base font-medium text-gray-800 mb-1">Events Hosted</h3>
                            <p className="text-sm text-gray-600">Memorable experiences created</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Partners Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Business Portfolio</h2>
                    <div className="px-8">
                        <Slider {...carouselSettings}>
                            {partnerLogos.map((business) => (
                                <div key={business.id} className="px-2">
                                    <div className="bg-white p-4 rounded-lg shadow-sm h-32 flex items-center justify-center">
                                        <img 
                                            src={business.logo} 
                                            alt={business.name} 
                                            className="max-h-16 max-w-full object-contain"
                                        />
                                    </div>
                                    <p className="text-center mt-2 text-gray-600">{business.name}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            {/* <HowItWorks /> */}

            {/* Why Choose Us Section */}
            <section className="bg-green-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Why Choose QuickFix Events Empire?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <FaChartLine className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-gray-800 mb-1">Integrated Services</h3>
                                <p className="text-sm text-gray-600">All your needs met under one roof</p>
                            </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <FaUtensils className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-gray-800 mb-1">Premium Quality</h3>
                                <p className="text-sm text-gray-600">Exceptional standards across all services</p>
                            </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <FaBriefcase className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-gray-800 mb-1">Business Solutions</h3>
                                <p className="text-sm text-gray-600">Tailored services for professionals</p>
                            </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
                            <div className="bg-green-100 p-2 rounded-full text-green-600">
                                <FaUsers className="text-lg" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-gray-800 mb-1">Community Focus</h3>
                                <p className="text-sm text-gray-600">Committed to local development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const fadeBackgrounds = keyframes`
    0%, 100% { background-image: url(${hero}); opacity: 1; }
    25% { background-image: url(${hero1}); opacity: 1; }
    50% { background-image: url(${hero2}); opacity: 1; }
    75% { background-image: url(${hero3}); opacity: 1; }
`;

const HeroSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 2rem;
    color: white;
    text-align: center;
    animation: ${fadeBackgrounds} 12s infinite ease-in-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 2;
    max-width: 800px;
    width: 90%;
`;

const TextContent = styled.div`
    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    .highlight {
        color: #28a745;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        line-height: 1.6;
    }

    .cta-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .cta-button {
        display: inline-block;
        background: #28a745;
        color: white;
        padding: 0.8rem 1.5rem;
        text-decoration: none;
        font-weight: bold;
        border-radius: 5px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        &:hover {
            background: #218838;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }
    }

    .secondary {
        background: #dc3545;
        
        &:hover {
            background: #c82333;
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }

        .cta-button {
            padding: 0.7rem 1.2rem;
        }
    }
`;

export default Landing;
















// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from "../components/shared/Navbar";
// import HowItWorks from "../components/HowItWorks";
// import { 
//   FaUserTie, 
//   FaBook, 
//   FaFileAlt, 
//   FaEnvelope,
//   FaUniversity,
//   FaGraduationCap,
//   FaUsers
// } from 'react-icons/fa';
// import hero from "../assets/media/LandingPage/hero.jpg";
// import hero1 from "../assets/media/LandingPage/hero1.jpg";
// import hero2 from "../assets/media/LandingPage/hero2.jpg";
// import hero3 from "../assets/media/LandingPage/hero3.jpg";

// const universityLogos = [
//   { id: 1, name: "University of Kentucky", logo: "/kentucky.png" },
//   { id: 2, name: "University of Michigan", logo: "/michigan.png" },
//   { id: 3, name: "University of Virginia", logo: "/universityvirginia.png" },
//   { id: 4, name: "EU Business School", logo: "/eu.png" },
//   { id: 5, name: "Catholic University of America", logo: "/cua.png" },
//   { id: 6, name: "Wichita State University", logo: "/wichita.png" },
//   { id: 7, name: "Ottawa University", logo: "/ottawa.jpeg" },
//   { id: 8, name: "Ball State University", logo: "/ballstate.png" },
// ];

// const Landing = () => {
//     const navbarRef = useRef(null);
//     const [universityCount, setUniversityCount] = useState(0);
//     const [courseCount, setCourseCount] = useState(0);
//     const [studentCount, setStudentCount] = useState(0);

//     useEffect(() => {
//         const duration = 2000;
//         const increment = 100;
//         const steps = duration / increment;
        
//         const universityStep = 5000 / steps;
//         const courseStep = 30000 / steps;
//         const studentStep = 100000 / steps;

//         let currentUni = 0;
//         let currentCourse = 0;
//         let currentStudent = 0;

//         const timer = setInterval(() => {
//             currentUni += universityStep;
//             currentCourse += courseStep;
//             currentStudent += studentStep;

//             if (currentUni >= 5000) currentUni = 5000;
//             if (currentCourse >= 30000) currentCourse = 30000;
//             if (currentStudent >= 100000) currentStudent = 100000;

//             setUniversityCount(Math.floor(currentUni));
//             setCourseCount(Math.floor(currentCourse));
//             setStudentCount(Math.floor(currentStudent));

//             if (currentUni >= 5000 && currentCourse >= 30000 && currentStudent >= 100000) {
//                 clearInterval(timer);
//             }
//         }, increment);

//         return () => clearInterval(timer);
//     }, []);

//     const carouselSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             }
//         ]
//     };

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection>
//                 <Overlay />
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Your Global Education <span className="highlight">Gateway</span>
//                         </h1>
//                         <p>
//                             Discover the best universities, prepare for exams, and join our webinars - 
//                             all in one place to launch your international education journey.
//                         </p>
//                         <div className="cta-buttons">
//                             <Link className="cta-button" to="/all-schools">
//                                 Explore Universities
//                             </Link>
//                         </div>
//                     </TextContent>
//                 </ContentWrapper>
//             </HeroSection>

//             {/* Quick Links Section - Now with 4 cards */}
//             <section className="max-w-7xl mx-auto px-4 py-12">
//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     <Link to="/webinar" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🎓</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Webinars</h2>
//                             <p className="text-gray-600">Join our expert-led sessions on studying abroad</p>
//                             <div className="mt-4 text-blue-600 font-medium">View Schedule →</div>
//                         </div>
//                     </Link>

//                     <Link to="/sat" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">✏️</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">SAT Preparation</h2>
//                             <p className="text-gray-600">Register for our annual SAT challenge competition</p>
//                             <div className="mt-4 text-blue-600 font-medium">Learn More →</div>
//                         </div>
//                     </Link>

//                     <Link to="/all-schools" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🏫</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">Explore Universities</h2>
//                             <p className="text-gray-600">Browse our extensive list of partner institutions</p>
//                             <div className="mt-4 text-blue-600 font-medium">Browse Now →</div>
//                         </div>
//                     </Link>

//                     <Link to="/visitor" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🌍</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">University Matching</h2>
//                             <p className="text-gray-600">Find your perfect international university match</p>
//                             <div className="mt-4 text-blue-600 font-medium">Get Started →</div>
//                         </div>
//                     </Link>
//                 </div>
//             </section>

//             {/* Stats Section - Moved up for credibility */}
//             <section className="py-12 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Stats</h2>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         <div className="bg-white p-6 rounded-lg border border-gray-200">
//                             <FaUniversity className="text-blue-600 text-2xl mx-auto mb-3" />
//                             <div className="text-3xl font-bold text-blue-600 mb-2">
//                                 {universityCount.toLocaleString()}+
//                             </div>
//                             <h3 className="text-base font-medium text-gray-800 mb-1">Universities Worldwide</h3>
//                             <p className="text-sm text-gray-600">Access to top institutions</p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-lg border border-gray-200">
//                             <FaBook className="text-blue-600 text-2xl mx-auto mb-3" />
//                             <div className="text-3xl font-bold text-blue-600 mb-2">
//                                 {courseCount.toLocaleString()}+
//                             </div>
//                             <h3 className="text-base font-medium text-gray-800 mb-1">Courses Available</h3>
//                             <p className="text-sm text-gray-600">Wide academic program selection</p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-lg border border-gray-200">
//                             <FaUsers className="text-blue-600 text-2xl mx-auto mb-3" />
//                             <div className="text-3xl font-bold text-blue-600 mb-2">
//                                 {studentCount.toLocaleString()}+
//                             </div>
//                             <h3 className="text-base font-medium text-gray-800 mb-1">Students Helped</h3>
//                             <p className="text-sm text-gray-600">Successful placements</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Partner Universities Section */}
//             <section className="bg-gray-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Partnering Universities</h2>
//                     <div className="px-8">
//                         <Slider {...carouselSettings}>
//                             {universityLogos.map((university) => (
//                                 <div key={university.id} className="px-2">
//                                     <div className="bg-white p-4 rounded-lg shadow-sm h-32 flex items-center justify-center">
//                                         <img 
//                                             src={university.logo} 
//                                             alt={university.name} 
//                                             className="max-h-16 max-w-full object-contain"
//                                         />
//                                     </div>
//                                     <p className="text-center mt-2 text-gray-600">{university.name}</p>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </section>

//             {/* How It Works Section */}
//             <HowItWorks />

//             {/* Why Choose Us Section */}
//             <section className="bg-blue-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Why Choose Scovers?</h2>
//                     <div className="grid md:grid-cols-2 gap-4">
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaUserTie className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Expert Advisors</h3>
//                                 <p className="text-sm text-gray-600">Experienced international education counselors</p>
//                             </div>
//                         </div>
                        
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaBook className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Comprehensive Support</h3>
//                                 <p className="text-sm text-gray-600">From application to visa processing</p>
//                             </div>
//                         </div>
                        
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaFileAlt className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Success Rate</h3>
//                                 <p className="text-sm text-gray-600">95% admission success rate</p>
//                             </div>
//                         </div>
                        
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaEnvelope className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Ongoing Assistance</h3>
//                                 <p className="text-sm text-gray-600">Continued support post-admission</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// const fadeBackgrounds = keyframes`
//     0%, 100% { background-image: url(${hero}); opacity: 1; }
//     25% { background-image: url(${hero1}); opacity: 1; }
//     50% { background-image: url(${hero2}); opacity: 1; }
//     75% { background-image: url(${hero3}); opacity: 1; }
// `;

// const HeroSection = styled.section`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 60vh;
//     padding: 2rem;
//     color: white;
//     text-align: center;
//     animation: ${fadeBackgrounds} 12s infinite ease-in-out;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// `;

// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     z-index: 2;
//     max-width: 800px;
//     width: 90%;
// `;

// const TextContent = styled.div`
//     h1 {
//         font-size: 2.5rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//         line-height: 1.3;
//     }

//     .highlight {
//         color: #247BF7;
//     }

//     p {
//         font-size: 1.1rem;
//         margin-bottom: 1.5rem;
//         line-height: 1.6;
//     }

//     .cta-buttons {
//         display: flex;
//         justify-content: center;
//         gap: 1rem;
//         flex-wrap: wrap;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #247BF7;
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: all 0.3s ease;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//         &:hover {
//             background: #1a5fcb;
//             transform: translateY(-2px);
//             box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.7rem 1.2rem;
//         }
//     }
// `;

// export default Landing;



















// import React, { useRef, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from "../components/shared/Navbar";
// import HowItWorks from "../components/HowItWorks";
// import { 
//   FaUserTie, 
//   FaBook, 
//   FaFileAlt, 
//   FaEnvelope,
//   FaUniversity,
//   FaGraduationCap,
//   FaUsers
// } from 'react-icons/fa';
// import hero from "../assets/media/LandingPage/hero.jpg";
// import hero1 from "../assets/media/LandingPage/hero1.jpg";
// import hero2 from "../assets/media/LandingPage/hero2.jpg";
// import hero3 from "../assets/media/LandingPage/hero3.jpg";

// const universityLogos = [
//   { id: 1, name: "University of Kentucky", logo: "/kentucky.png" },
//   { id: 2, name: "University of Michigan", logo: "/michigan.png" },
//   { id: 3, name: "University of Virginia", logo: "/universityvirginia.png" },
//   { id: 4, name: "EU Business School", logo: "/eu.png" },
//   { id: 5, name: "Catholic University of America", logo: "/cua.png" },
//   { id: 6, name: "Wichita State University", logo: "/wichita.png" },
//   { id: 7, name: "Ottawa University", logo: "/ottawa.jpeg" },
//   { id: 8, name: "Ball State University", logo: "/ballstate.png" },
// ];

// const Landing = () => {
//     const navbarRef = useRef(null);
//     const [universityCount, setUniversityCount] = useState(0);
//     const [courseCount, setCourseCount] = useState(0);
//     const [studentCount, setStudentCount] = useState(0);

//     useEffect(() => {
//         const duration = 2000;
//         const increment = 100;
//         const steps = duration / increment;
        
//         const universityStep = 5000 / steps;
//         const courseStep = 30000 / steps;
//         const studentStep = 100000 / steps;

//         let currentUni = 0;
//         let currentCourse = 0;
//         let currentStudent = 0;

//         const timer = setInterval(() => {
//             currentUni += universityStep;
//             currentCourse += courseStep;
//             currentStudent += studentStep;

//             if (currentUni >= 5000) currentUni = 5000;
//             if (currentCourse >= 30000) currentCourse = 30000;
//             if (currentStudent >= 100000) currentStudent = 100000;

//             setUniversityCount(Math.floor(currentUni));
//             setCourseCount(Math.floor(currentCourse));
//             setStudentCount(Math.floor(currentStudent));

//             if (currentUni >= 5000 && currentCourse >= 30000 && currentStudent >= 100000) {
//                 clearInterval(timer);
//             }
//         }, increment);

//         return () => clearInterval(timer);
//     }, []);

//     const carouselSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             }
//         ]
//     };

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection>
//                 <Overlay />
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Your Global Education <span className="highlight">Gateway</span>
//                         </h1>
//                         <p>
//                             Discover the best universities, prepare for exams, and join our webinars - 
//                             all in one place to launch your international education journey.
//                         </p>
//                         <div className="cta-buttons">
//                             <Link className="cta-button" to="/all-schools">
//                                 Explore Universities
//                             </Link>
//                         </div>
//                     </TextContent>
//                 </ContentWrapper>
//             </HeroSection>

//             <section className="max-w-7xl mx-auto px-4 py-12">
//                 <div className="grid md:grid-cols-3 gap-8">
//                     <Link to="/webinar" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🎓</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Webinars</h2>
//                             <p className="text-gray-600">Join our expert-led sessions on studying abroad</p>
//                             <div className="mt-4 text-blue-600 font-medium">View Schedule →</div>
//                         </div>
//                     </Link>

//                     <Link to="/sat" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">✏️</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">SAT Preparation</h2>
//                             <p className="text-gray-600">Register for our annual SAT challenge competition</p>
//                             <div className="mt-4 text-blue-600 font-medium">Learn More →</div>
//                         </div>
//                     </Link>

//                     <Link to="/university-interest" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🌍</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">University Matching</h2>
//                             <p className="text-gray-600">Find your perfect international university match</p>
//                             <div className="mt-4 text-blue-600 font-medium">Get Started →</div>
//                         </div>
//                     </Link>
//                 </div>
//             </section>

//             <section className="bg-gray-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Partnering Universities</h2>
//                     <div className="px-8">
//                         <Slider {...carouselSettings}>
//                             {universityLogos.map((university) => (
//                                 <div key={university.id} className="px-2">
//                                     <div className="bg-white p-4 rounded-lg shadow-sm h-32 flex items-center justify-center">
//                                         <img 
//                                             src={university.logo} 
//                                             alt={university.name} 
//                                             className="max-h-16 max-w-full object-contain"
//                                         />
//                                     </div>
//                                     <p className="text-center mt-2 text-gray-600">{university.name}</p>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </section>

//             {/* Our Stats Section with reduced font sizes and live counting */}
//             <section className="py-12 bg-white">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Stats</h2>
//                     <div className="grid md:grid-cols-3 gap-6">
//                         <div className="bg-white p-6 rounded-lg border border-gray-200">
//                             <FaUniversity className="text-blue-600 text-2xl mx-auto mb-3" />
//                             <div className="text-3xl font-bold text-blue-600 mb-2">
//                                 {universityCount.toLocaleString()}+
//                             </div>
//                             <h3 className="text-base font-medium text-gray-800 mb-1">Universities Worldwide</h3>
//                             <p className="text-sm text-gray-600">Access to top institutions</p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-lg border border-gray-200">
//                             <FaBook className="text-blue-600 text-2xl mx-auto mb-3" />
//                             <div className="text-3xl font-bold text-blue-600 mb-2">
//                                 {courseCount.toLocaleString()}+
//                             </div>
//                             <h3 className="text-base font-medium text-gray-800 mb-1">Courses Available</h3>
//                             <p className="text-sm text-gray-600">Wide academic program selection</p>
//                         </div>
                        
//                         <div className="bg-white p-6 rounded-lg border border-gray-200">
//                             <FaUsers className="text-blue-600 text-2xl mx-auto mb-3" />
//                             <div className="text-3xl font-bold text-blue-600 mb-2">
//                                 {studentCount.toLocaleString()}+
//                             </div>
//                             <h3 className="text-base font-medium text-gray-800 mb-1">Students Helped</h3>
//                             <p className="text-sm text-gray-600">Successful placements</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <HowItWorks />

//             <section className="bg-blue-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-xl font-bold text-center text-gray-800 mb-8">Why Choose Scovers?</h2>
//                     <div className="grid md:grid-cols-2 gap-4">
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaUserTie className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Expert Advisors</h3>
//                                 <p className="text-sm text-gray-600">Experienced international education counselors</p>
//                             </div>
//                         </div>
                        
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaBook className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Comprehensive Support</h3>
//                                 <p className="text-sm text-gray-600">From application to visa processing</p>
//                             </div>
//                         </div>
                        
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaFileAlt className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Success Rate</h3>
//                                 <p className="text-sm text-gray-600">95% admission success rate</p>
//                             </div>
//                         </div>
                        
//                         <div className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
//                             <div className="bg-blue-100 p-2 rounded-full text-blue-600">
//                                 <FaEnvelope className="text-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-base font-medium text-gray-800 mb-1">Ongoing Assistance</h3>
//                                 <p className="text-sm text-gray-600">Continued support post-admission</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// const fadeBackgrounds = keyframes`
//     0%, 100% { background-image: url(${hero}); opacity: 1; }
//     25% { background-image: url(${hero1}); opacity: 1; }
//     50% { background-image: url(${hero2}); opacity: 1; }
//     75% { background-image: url(${hero3}); opacity: 1; }
// `;

// const HeroSection = styled.section`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 70vh;
//     padding: 2rem;
//     color: white;
//     text-align: center;
//     animation: ${fadeBackgrounds} 12s infinite ease-in-out;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// `;

// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     z-index: 2;
//     max-width: 800px;
//     width: 90%;
// `;

// const TextContent = styled.div`
//     h1 {
//         font-size: 2.5rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//         line-height: 1.3;
//     }

//     .highlight {
//         color: #247BF7;
//     }

//     p {
//         font-size: 1.1rem;
//         margin-bottom: 1.5rem;
//         line-height: 1.6;
//     }

//     .cta-buttons {
//         display: flex;
//         justify-content: center;
//         gap: 1rem;
//         flex-wrap: wrap;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #247BF7;
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: all 0.3s ease;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//         &:hover {
//             background: #1a5fcb;
//             transform: translateY(-2px);
//             box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.7rem 1.2rem;
//         }
//     }
// `;

// export default Landing;


















// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Navbar from "../components/shared/Navbar";
// import HowItWorks from "../components/HowItWorks";
// import { 
//     FaUserTie, 
//     FaBook, 
//     FaFileAlt, 
//     FaEnvelope 
//   } from 'react-icons/fa';
// import hero from "../assets/media/LandingPage/hero.jpg";
// import hero1 from "../assets/media/LandingPage/hero1.jpg";
// import hero2 from "../assets/media/LandingPage/hero2.jpg";
// import hero3 from "../assets/media/LandingPage/hero3.jpg";

// // University logos - replace with your actual images
// const universityLogos = [
//   { id: 1, name: "University of Kentucky", logo: "/kentucky.png" },
//   { id: 2, name: "University of Michigan", logo: "/michigan.png" },
//   { id: 3, name: "University of Virginia", logo: "/universityvirginia.png" },
//   { id: 4, name: "EU Business School", logo: "/eu.png" },
//   { id: 5, name: "Catholic University of America", logo: "/cua.png" },
//   { id: 6, name: "Wichita State University", logo: "/wichita.png" },
//   { id: 7, name: "Ottawa University", logo: "/ottawa.jpeg" },
//   { id: 8, name: "Ball State University", logo: "/ballstate.png" },
// ];

// const Landing = () => {
//     const navbarRef = useRef(null);

//     // Settings for the university carousel
//     const carouselSettings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 4,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             }
//         ]
//     };

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection>
//                 <Overlay />
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Your Global Education <span className="highlight">Gateway</span>
//                         </h1>
//                         <p>
//                             Discover the best universities, prepare for exams, and join our webinars - 
//                             all in one place to launch your international education journey.
//                         </p>
//                         <div className="cta-buttons">
//                             <Link className="cta-button" to="/all-schools">
//                                 Explore Universities
//                             </Link>
//                         </div>
//                     </TextContent>
//                 </ContentWrapper>
//             </HeroSection>

//             {/* Quick Navigation Cards */}
//             <section className="max-w-7xl mx-auto px-4 py-12">
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {/* Webinar Card */}
//                     <Link to="/webinar" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🎓</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Webinars</h2>
//                             <p className="text-gray-600">Join our expert-led sessions on studying abroad</p>
//                             <div className="mt-4 text-blue-600 font-medium">View Schedule →</div>
//                         </div>
//                     </Link>

//                     {/* SAT Card */}
//                     <Link to="/sat" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">✏️</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">SAT Preparation</h2>
//                             <p className="text-gray-600">Register for our annual SAT challenge competition</p>
//                             <div className="mt-4 text-blue-600 font-medium">Learn More →</div>
//                         </div>
//                     </Link>

//                     {/* University Interest Card */}
//                     <Link to="/university-interest" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🌍</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">University Matching</h2>
//                             <p className="text-gray-600">Find your perfect international university match</p>
//                             <div className="mt-4 text-blue-600 font-medium">Get Started →</div>
//                         </div>
//                     </Link>
//                 </div>
//             </section>

//             {/* Partnering Universities Carousel */}
//             <section className="bg-gray-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Partnering Universities</h2>
//                     <div className="px-8">
//                         <Slider {...carouselSettings}>
//                             {universityLogos.map((university) => (
//                                 <div key={university.id} className="px-2">
//                                     <div className="bg-white p-4 rounded-lg shadow-sm h-32 flex items-center justify-center">
//                                         <img 
//                                             src={university.logo} 
//                                             alt={university.name} 
//                                             className="max-h-16 max-w-full object-contain"
//                                         />
//                                     </div>
//                                     <p className="text-center mt-2 text-gray-600">{university.name}</p>
//                                 </div>
//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </section>

//             <HowItWorks />

//                         {/* Why Choose Scovers Section - Updated to match Our Team style */}
//             <section className="bg-blue-50 py-12">
//             <div className="max-w-7xl mx-auto px-4">
//                 <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">Why Choose Scovers?</h2>
//                 <div className="grid md:grid-cols-3 gap-8">
//                 {/* Stat 1 */}
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                     <div className="text-blue-600 text-3xl font-bold">5,000+</div>
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Universities Worldwide</h3>
//                     <p className="text-gray-600">Access to top institutions across the globe</p>
//                     </div>
//                 </div>
                
//                 {/* Stat 2 */}
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                     <div className="text-blue-600 text-3xl font-bold">30,000+</div>
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Courses Available</h3>
//                     <p className="text-gray-600">Wide range of academic programs to choose from</p>
//                     </div>
//                 </div>
                
//                 {/* Stat 3 */}
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full">
//                     <div className="text-blue-600 text-3xl font-bold">100,000+</div>
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Students Helped</h3>
//                     <p className="text-gray-600">Successful placements with personalized guidance</p>
//                     </div>
//                 </div>
//                 </div>
                
//                 {/* Additional Benefits - Matching Our Team section style */}
//                 <div className="grid md:grid-cols-2 gap-6 mt-12">
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full text-blue-600">
//                     <FaUserTie className="text-xl" />
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Expert Advisors</h3>
//                     <p className="text-gray-600">Our counselors have years of experience in international education</p>
//                     </div>
//                 </div>
                
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full text-blue-600">
//                     <FaBook className="text-xl" />
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Comprehensive Support</h3>
//                     <p className="text-gray-600">From application to visa processing and beyond</p>
//                     </div>
//                 </div>
                
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full text-blue-600">
//                     <FaFileAlt className="text-xl" />
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Success Rate</h3>
//                     <p className="text-gray-600">95% admission success rate for qualified applicants</p>
//                     </div>
//                 </div>
                
//                 <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
//                     <div className="bg-blue-100 p-3 rounded-full text-blue-600">
//                     <FaEnvelope className="text-xl" />
//                     </div>
//                     <div>
//                     <h3 className="text-lg font-medium mb-2 text-gray-800">Ongoing Assistance</h3>
//                     <p className="text-gray-600">Continued support even after you've secured admission</p>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </section>

//             {/* Simple Stats Section */}
//             {/* <section className="bg-blue-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Choose Scovers?</h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div>
//                             <div className="text-blue-600 text-4xl font-bold mb-2">5,000+</div>
//                             <p className="text-gray-600">Universities Worldwide</p>
//                         </div>
//                         <div>
//                             <div className="text-blue-600 text-4xl font-bold mb-2">30,000+</div>
//                             <p className="text-gray-600">Courses Available</p>
//                         </div>
//                         <div>
//                             <div className="text-blue-600 text-4xl font-bold mb-2">100,000+</div>
//                             <p className="text-gray-600">Students Helped</p>
//                         </div>
//                     </div>
//                 </div>
//             </section> */}
//         </>
//     );
// };

// export default Landing;

// // Keyframes for fading background transitions
// const fadeBackgrounds = keyframes`
//     0%, 100% { background-image: url(${hero}); opacity: 1; }
//     25% { background-image: url(${hero1}); opacity: 1; }
//     50% { background-image: url(${hero2}); opacity: 1; }
//     75% { background-image: url(${hero3}); opacity: 1; }
// `;

// // Styled Components
// const HeroSection = styled.section`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 70vh;
//     padding: 2rem;
//     color: white;
//     text-align: center;
//     animation: ${fadeBackgrounds} 12s infinite ease-in-out;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// `;

// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     z-index: 2;
//     max-width: 800px;
//     width: 90%;
// `;

// const TextContent = styled.div`
//     h1 {
//         font-size: 2.5rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//         line-height: 1.3;
//     }

//     .highlight {
//         color: #247BF7;
//     }

//     p {
//         font-size: 1.1rem;
//         margin-bottom: 1.5rem;
//         line-height: 1.6;
//     }

//     .cta-buttons {
//         display: flex;
//         justify-content: center;
//         gap: 1rem;
//         flex-wrap: wrap;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #247BF7;
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: all 0.3s ease;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//         &:hover {
//             background: #1a5fcb;
//             transform: translateY(-2px);
//             box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.7rem 1.2rem;
//         }
//     }
// `;














// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import Navbar from "../components/shared/Navbar";
// import hero from "../assets/media/LandingPage/hero.jpg";
// import hero1 from "../assets/media/LandingPage/hero1.jpg";
// import hero2 from "../assets/media/LandingPage/hero2.jpg";
// import hero3 from "../assets/media/LandingPage/hero3.jpg";

// const Landing = () => {
//     const navbarRef = useRef(null);

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection>
//                 <Overlay />
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Your Global Education <span className="highlight">Gateway</span>
//                         </h1>
//                         <p>
//                             Discover the best universities, prepare for exams, and join our webinars - 
//                             all in one place to launch your international education journey.
//                         </p>
//                         <div className="cta-buttons">
//                             <Link className="cta-button" to="/all-schools">
//                                 Explore Universities
//                             </Link>
//                         </div>
//                     </TextContent>
//                 </ContentWrapper>
//             </HeroSection>

//             {/* Quick Navigation Cards */}
//             <section className="max-w-7xl mx-auto px-4 py-12">
//                 <div className="grid md:grid-cols-3 gap-8">
//                     {/* Webinar Card */}
//                     <Link to="/webinar" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🎓</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">Upcoming Webinars</h2>
//                             <p className="text-gray-600">Join our expert-led sessions on studying abroad</p>
//                             <div className="mt-4 text-blue-600 font-medium">View Schedule →</div>
//                         </div>
//                     </Link>

//                     {/* SAT Card */}
//                     <Link to="/sat" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">✏️</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">SAT Preparation</h2>
//                             <p className="text-gray-600">Register for our annual SAT challenge competition</p>
//                             <div className="mt-4 text-blue-600 font-medium">Learn More →</div>
//                         </div>
//                     </Link>

//                     {/* University Interest Card */}
//                     <Link to="/university-interest" className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//                         <div className="p-6">
//                             <div className="text-blue-600 text-4xl mb-4">🌍</div>
//                             <h2 className="text-xl font-bold text-gray-800 mb-2">University Matching</h2>
//                             <p className="text-gray-600">Find your perfect international university match</p>
//                             <div className="mt-4 text-blue-600 font-medium">Get Started →</div>
//                         </div>
//                     </Link>
//                 </div>
//             </section>

//             {/* Simple Stats Section */}
//             <section className="bg-blue-50 py-12">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-8">Why Choose Scovers?</h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div>
//                             <div className="text-blue-600 text-4xl font-bold mb-2">5,000+</div>
//                             <p className="text-gray-600">Universities Worldwide</p>
//                         </div>
//                         <div>
//                             <div className="text-blue-600 text-4xl font-bold mb-2">30,000+</div>
//                             <p className="text-gray-600">Courses Available</p>
//                         </div>
//                         <div>
//                             <div className="text-blue-600 text-4xl font-bold mb-2">100,000+</div>
//                             <p className="text-gray-600">Students Helped</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Landing;

// // Keyframes for fading background transitions
// const fadeBackgrounds = keyframes`
//     0%, 100% { background-image: url(${hero}); opacity: 1; }
//     25% { background-image: url(${hero1}); opacity: 1; }
//     50% { background-image: url(${hero2}); opacity: 1; }
//     75% { background-image: url(${hero3}); opacity: 1; }
// `;

// // Styled Components
// const HeroSection = styled.section`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 70vh;
//     padding: 2rem;
//     color: white;
//     text-align: center;
//     animation: ${fadeBackgrounds} 12s infinite ease-in-out;
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// `;

// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     z-index: 2;
//     max-width: 800px;
//     width: 90%;
// `;

// const TextContent = styled.div`
//     h1 {
//         font-size: 2.5rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//         line-height: 1.3;
//     }

//     .highlight {
//         color: #247BF7;
//     }

//     p {
//         font-size: 1.1rem;
//         margin-bottom: 1.5rem;
//         line-height: 1.6;
//     }

//     .cta-buttons {
//         display: flex;
//         justify-content: center;
//         gap: 1rem;
//         flex-wrap: wrap;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #247BF7;
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: all 0.3s ease;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//         &:hover {
//             background: #1a5fcb;
//             transform: translateY(-2px);
//             box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.7rem 1.2rem;
//         }
//     }
// `;













// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import styled, { keyframes } from "styled-components";
// import Navbar from "../components/shared/Navbar";
// import LogoCarousel from "../components/shared/logoCarousel";
// import PopularCategory from "../components/Home Page/PopularCategory";
// import HowWorks from "../components/Home Page/HowWorks";
// // import Team from "../components/Home Page/Team";
// import Brands from "../components/Home Page/Brands";
// import Testimonial from "../components/Home Page/Testimonial";
// import hero from "../assets/media/LandingPage/hero.jpg";
// import hero1 from "../assets/media/LandingPage/hero1.jpg";
// import hero2 from "../assets/media/LandingPage/hero2.jpg";
// import hero3 from "../assets/media/LandingPage/hero3.jpg";

// const Landing = () => {
//     const navbarRef = useRef(null);

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection>
//                 <Overlay />
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Study abroad, <span className="highlight">made easy</span>
//                         </h1>
//                         <p>
//                             Scovers education portal is the leading web directory 
//                             for finding and applying to top universities across the globe.
//                             Search thousands of universities and courses, send your application, 
//                             and let us handle the rest.
//                         </p>
//                         <Link className="cta-button" to="/all-schools">
//                             Apply Now
//                         </Link>
//                     </TextContent>
//                 </ContentWrapper>
//             </HeroSection>

//             {/* Other sections */}
//             <LogoCarousel />
//             <PopularCategory />
//             <HowWorks />
//             {/* <Team /> */}
//             <Testimonial />
//             <Brands />
//         </>
//     );
// };

// export default Landing;

// // Keyframes for fading background transitions
// const fadeBackgrounds = keyframes`
//     0%, 100% { background-image: url(${hero}); opacity: 1; }
//     25% { background-image: url(${hero1}); opacity: 1; }
//     50% { background-image: url(${hero2}); opacity: 1; }
//     75% { background-image: url(${hero3}); opacity: 1; }
// `;

// // Styled Components
// const HeroSection = styled.section`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     min-height: 60vh;
//     padding: 2rem;
//     color: white;
//     text-align: center;
//     animation: ${fadeBackgrounds} 12s infinite ease-in-out; /* Adjust timing */
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
// `;

// // Dark overlay for text readability
// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     z-index: 2;
//     max-width: 800px;
//     width: 90%;
// `;

// const TextContent = styled.div`
//     h1 {
//         font-size: 2.5rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//     }

//     .highlight {
//         color: #247BF7; /* Highlight color */
//     }

//     p {
//         font-size: 1.1rem;
//         margin-bottom: 1.5rem;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #247BF7;
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: background 0.3s ease;

//         &:hover {
//             background: #1a5fcb;
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.7rem 1.2rem;
//         }
//     }
// `;


















// import React, { useRef } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Navbar from "../components/shared/Navbar";
// import LogoCarousel from "../components/shared/logoCarousel";
// import PopularCategory from "../components/Home Page/PopularCategory";
// import HowWorks from "../components/Home Page/HowWorks";
// import Team from "../components/Home Page/Team";
// import Brands from "../components/Home Page/Brands";
// import Testimonial from "../components/Home Page/Testimonial";
// import photo from "../assets/media/LandingPage/hero.jpg";

// const Landing = () => {
//     const navbarRef = useRef(null);

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection>
//                 <Overlay />
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Study abroad, <span className="highlight">made easy</span>
//                         </h1>
//                         <p>
//                             Scovers education portal is the leading web directory 
//                             for finding and applying to top universities across the globe.
//                             Search thousands of universities and courses, send your application, 
//                             and let us handle the rest.
//                         </p>
//                         <Link className="cta-button" to="/all-schools">
//                             Apply Now
//                         </Link>
//                     </TextContent>
//                 </ContentWrapper>
//             </HeroSection>

//             {/* Other sections */}
//             <LogoCarousel />
//             <PopularCategory />
//             <HowWorks />
//             <Team />
//             <Testimonial />
//             <Brands />
//         </>
//     );
// };

// export default Landing;

// // Styled Components
// const HeroSection = styled.section`
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: url(${photo}) no-repeat center center/cover;
//     min-height: 60vh; /* Adjusted height */
//     padding: 2rem;
//     color: white;
//     text-align: center;
// `;

// // Dark overlay for text readability
// const Overlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6); /* Dark overlay */
// `;

// const ContentWrapper = styled.div`
//     position: relative;
//     z-index: 2;
//     max-width: 800px;
//     width: 90%;
// `;

// const TextContent = styled.div`
//     h1 {
//         font-size: 2.5rem;
//         font-weight: bold;
//         margin-bottom: 1rem;
//     }

//     .highlight {
//         color: #247BF7; /* Bright highlight color */
//     }

//     p {
//         font-size: 1.1rem;
//         margin-bottom: 1.5rem;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #247BF7;
//         color: black;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: background 0.3s ease;

//         &:hover {
//             background: #e6b800;
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.7rem 1.2rem;
//         }
//     }
// `;















// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Navbar from "../components/shared/Navbar";
// import LogoCarousel from "../components/shared/logoCarousel";
// import PopularCategory from "../components/Home Page/PopularCategory";
// import HowWorks from "../components/Home Page/HowWorks";
// import Team from "../components/Home Page/Team";
// import Brands from "../components/Home Page/Brands";
// import Testimonial from "../components/Home Page/Testimonial";
// import photo from "../assets/media/LandingPage/hero.png";

// const Landing = () => {
//     const navbarRef = useRef(null);
//     const heroRef = useRef(null);

//     useEffect(() => {
//         const navbarHeight = navbarRef.current.getBoundingClientRect().height;
//         heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
//     }, []);

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection ref={heroRef} image={photo}>
//                 <TextContent>
//                     <h1>
//                         Study abroad, <span className="highlight">made easy</span>
//                     </h1>
//                     <p>
//                         Scovers education portal is the leading web directory 
//                         for finding and applying to top universities across the globe.
//                         Search thousands of universities and courses, send your application, 
//                         and let us handle the rest.
//                     </p>
//                     <Link className="cta-button" to="/all-schools">
//                         Apply Now
//                     </Link>
//                 </TextContent>
//             </HeroSection>

//             {/* image slider */} 
//             <LogoCarousel />
//             <PopularCategory />
//             <HowWorks />
//             <Team />
//             <Testimonial />
//             <Brands />
//         </>
//     );
// };

// export default Landing;

// // Styled Components
// const HeroSection = styled.section`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-image: url(${props => props.image});
//     background-size: cover;
//     background-position: center;
//     min-height: 100vh;
//     padding: 2rem;
//     position: relative;

//     &::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: rgba(0, 0, 0, 0.5); /* Dark overlay for better text visibility */
//     }
// `;

// const TextContent = styled.div`
//     position: relative;
//     z-index: 1;
//     text-align: center;
//     color: white;
//     max-width: 800px;
//     padding: 2rem;
//     background: rgba(0, 0, 0, 0.6); /* Slightly transparent background for text */
//     border-radius: 10px;

//     h1 {
//         font-size: 2.8rem;
//         font-weight: bold;
//         margin-bottom: 1rem;

//         .highlight {
//             color: #ffdd57; /* Yellow highlight */
//         }
//     }

//     p {
//         font-size: 1.2rem;
//         line-height: 1.6;
//         margin-bottom: 2rem;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #0056b3; /* Blue CTA Button */
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: background 0.3s ease;

//         &:hover {
//             background: #004494;
//         }
//     }

//     @media (max-width: 768px) {
//         h1 {
//             font-size: 2rem;
//         }

//         p {
//             font-size: 1rem;
//         }

//         .cta-button {
//             padding: 0.6rem 1.2rem;
//         }
//     }
// `;








// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import Navbar from "../components/shared/Navbar";
// import LogoCarousel  from "../components/shared/logoCarousel"
// import PopularCategory from "../components/Home Page/PopularCategory";
// import HowWorks from "../components/Home Page/HowWorks";
// import Team from "../components/Home Page/Team";
// import Brands from "../components/Home Page/Brands";
// import Testimonial from "../components/Home Page/Testimonial";
// import photo from "../assets/media/LandingPage/hero.png";

// const Landing = () => {
//     const navbarRef = useRef(null);
//     const heroRef = useRef(null);

//     useEffect(() => {
//         const navbarHeight = navbarRef.current.getBoundingClientRect().height;
//         heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
//     }, []);

//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <HeroSection ref={heroRef}>
//                 <ContentWrapper>
//                     <TextContent>
//                         <h1>
//                             Study abroad, <span className="highlight">made easy</span>
//                         </h1>
//                         <p>
//                             Scovers education portal is the leading web directory 
//                             for finding and applying to top universities across the globe.
//                             Search thousands of universities and courses, send your application, 
//                             and let us handle the rest.
//                         </p>
//                         <Link className="cta-button" to="/all-schools">
//                             Apply Now
//                         </Link>
//                     </TextContent>
//                     <ImageContainer>
//                         <img src={photo} alt="Counseling session" />
//                     </ImageContainer>
//                 </ContentWrapper>
//             </HeroSection>

//             {/* image slider */} 
//             <LogoCarousel />
//             <PopularCategory />
//             <HowWorks />
//             <Team />
//             <Testimonial />
//             <Brands />
//         </>
//     );
// };

// export default Landing;

// // Styled Components
// const HeroSection = styled.section`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: #f8f8f8;
//     padding: 4rem 2rem;
//     min-height: 100vh; 
// `;

// // // 
// // padding: 4rem 2rem;
// // min-height: 100vh; 

// const ContentWrapper = styled.div`
//     display: flex;
//     max-width: 1200px;
//     width: 100%;
//     align-items: center;
//     justify-content: space-between;
//     gap: 2rem;
// `;

// const TextContent = styled.div`
//     flex: 1;
//     max-width: 600px;

//     h1 {
//         font-size: 2.8rem;
//         font-weight: bold;
//         color: #333;
//     }

//     .highlight {
//         color: #0056b3; /* Blue highlight */
//     }

//     p {
//         font-size: 1.1rem;
//         color: #555;
//         line-height: 1.6;
//         margin: 1rem 0;
//     }

//     .cta-button {
//         display: inline-block;
//         background: #0056b3; /* Blue CTA Button */
//         color: white;
//         padding: 0.8rem 1.5rem;
//         text-decoration: none;
//         font-weight: bold;
//         border-radius: 5px;
//         transition: background 0.3s ease;

//         &:hover {
//             background: #004494;
//         }
//     }
// `;

// const ImageContainer = styled.div`
//     flex: 1;
//     display: flex;
//     justify-content: center;

//     img {
//         width: 100%;
//         max-width: 500px;
//         border-radius: 10px;
//     }
// `;











// import React, { useEffect, useRef } from "react";
// import Wrapper from "../assets/css/wrappers/LandingPage";
// import { Link } from "react-router-dom";
// import photo from "../assets/media/LandingPage/hero.png";
// import Navbar from "../components/shared/Navbar";
// import PopularCategory from "../components/Home Page/PopularCategory";
// import HowWorks from "../components/Home Page/HowWorks";
// import Team from "../components/Home Page/Team";
// import Brands from "../components/Home Page/Brands";
// import Testimonial from "../components/Home Page/Testimonial";
// import styled from "styled-components";

// const Landing = () => {
//     const navbarRef = useRef(null);
//     const heroRef = useRef(null);

//     useEffect(() => {
//         const navbarHeight = navbarRef.current.getBoundingClientRect().height;
//         heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
//     }, []);
//     return (
//         <>
//             <Navbar navbarRef={navbarRef} />
//             <Wrapper ref={heroRef}>
//                 <div className="hero-content">
//                     <div className="text-content">
//                         <h1>
//                             Get Your <span className="fancy">Dream Course </span> 
//                             Today!
//                         </h1>
//                         <p>
//                         Scovers education portal is the leading web directory 
//                             for finding and applying to leading universities across the globe.
//                             Search through thousands of univertities and courses to find your preferred course,
//                             send your application and let us handle the rest.
//                         </p>
//                         <div className="btn-grp">
//                             <Link className="btn" to="/all-schools">
//                                 Apply Now
//                             </Link>
//                         </div>
//                     </div>
//                     <div className="placeholder">
//                         <img src={photo} alt="job viva photo" />
//                     </div>
//                 </div>
//             </Wrapper>
//             <div>
//             <PopularCategory/>
//             <HowWorks/>
//             <Team/>
//             <Testimonial/>
//             <Brands/>
//             </div>
//         </>
//     );
// };




// export default Landing;
