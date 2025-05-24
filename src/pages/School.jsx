import React, { useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleHandler } from "../utils/FetchHandlers";
import LoadingComTwo from "../components/shared/LoadingComTwo";
import { FaUniversity, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";
import { useApplicationContext } from "../context/ApplicationContext";
import { useUserContext } from "../context/UserContext";
import ApplicationModal from "../components/shared/ApplicationModal";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { toast } from "react-toastify";

dayjs.extend(advancedFormat);

const School = () => {
    const { id } = useParams();
    const { user } = useUserContext();
    const { data: school, isLoading, isError, error } = useQuery({
        queryKey: ["school", id],
        queryFn: () => getSingleHandler(`${import.meta.env.VITE_API_BASE_URL}/schools/${id}`),
    });

    const [showRequirements, setShowRequirements] = useState(true);
    const [showFacilities, setShowFacilities] = useState(true);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    const { openApplicationModal } = useApplicationContext();
    const deadlineDate = dayjs(school?.applicationDeadline).format("MMMM D, YYYY");
    const postedDate = dayjs(school?.createdAt).format("MMMM D, YYYY");

    const handleApplyClick = () => {
        if (!user) {
            toast.info("Please log in to apply for this program");
            setShowLoginPrompt(true);
            return;
        }
        if (user.role === "user") {
            openApplicationModal(school._id);
        } else {
            toast.warning("Only regular users can apply for programs");
        }
    };

    if (isLoading) return <LoadingComTwo />;
    if (isError) return <h2 className="">{error?.message}</h2>;

    return (
        <>
            <Navbar />
            <Wrapper>
                {/* Hero Section with Image Background */}
                <HeroSection>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <div className="course-info">
                            <h1 className="course-title">{school?.course}</h1>
                            <div className="university">
                                <FaUniversity className="icon" />
                                <span>{school?.university}</span>
                            </div>
                        </div>
                    </div>
                </HeroSection>

                {/* Main Content */}
                <div className="main-content">
                    {/* Left Column - Description */}
                    <div className="left-column">
                        <div className="content-card">
                            <h2 className="section-title">
                                <span className="title-icon">📝</span>
                                Program Description
                            </h2>
                            <p className="description">{school?.description}</p>
                        </div>

                        {/* Requirements Accordion */}
                        <div className="content-card accordion">
                            <div 
                                className="accordion-header" 
                                onClick={() => setShowRequirements(!showRequirements)}
                            >
                                <h2 className="section-title">
                                    <span className="title-icon">📋</span>
                                    Requirements
                                </h2>
                                {showRequirements ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {showRequirements && (
                                <ul className="requirements-list">
                                    {school?.requirements?.map((requirement, index) => (
                                        <li key={index}>
                                            <span className="bullet">•</span>
                                            {requirement}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Facilities Accordion */}
                        <div className="content-card accordion">
                            <div 
                                className="accordion-header" 
                                onClick={() => setShowFacilities(!showFacilities)}
                            >
                                <h2 className="section-title">
                                    <span className="title-icon">🏫</span>
                                    Facilities
                                </h2>
                                {showFacilities ? <FaChevronUp /> : <FaChevronDown />}
                            </div>
                            {showFacilities && (
                                <ul className="facilities-list">
                                    {school?.facilities?.map((facility, index) => (
                                        <li key={index}>
                                            <span className="bullet">•</span>
                                            {facility}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Key Info */}
                    <div className="right-column">
                        <div className="info-card">
                            <div className="info-item">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <h3>Location</h3>
                                    <p>{school?.location}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaGraduationCap className="info-icon" />
                                <div>
                                    <h3>Degree Type</h3>
                                    <p>{school?.schoolStatus}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaCalendarAlt className="info-icon" />
                                <div>
                                    <h3>Application Deadline</h3>
                                    <p>{deadlineDate}</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaMoneyBillWave className="info-icon" />
                                <div>
                                    <h3>Tuition</h3>
                                    <p>{school?.tuition} USD</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <FaMoneyBillWave className="info-icon" />
                                <div>
                                    <h3>Scholarship Availability</h3>
                                    <p>{school?.scholarship || "Available for qualified students"}</p>
                                </div>
                            </div>

                            <div className="apply-section">
                                <button 
                                    className="apply-button"
                                    onClick={handleApplyClick}
                                >
                                    Apply Now
                                </button>
                                {showLoginPrompt && !user && (
                                    <p className="login-prompt">
                                        Please <Link to="/login">login</Link> or <Link to="/register">sign up</Link> to apply
                                    </p>
                                )}
                                <p className="contact-info">
                                    Contact: <span>{school?.contact}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <ApplicationModal />
        </>
    );
};

// Styled Components
const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    font-family: 'Poppins', sans-serif;
    color: #2c3e50;

    .main-content {
        display: flex;
        gap: 30px;
        margin-top: 30px;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }

    .left-column {
        flex: 2;
    }

    .right-column {
        flex: 1;
    }

    .content-card {
        background: white;
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 25px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        
        &.accordion {
            padding: 0;
            overflow: hidden;
        }
    }

    .accordion-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background-color: #f8f9fa;
        }

        svg {
            color: #2d8cd4;
        }
    }

    .section-title {
        font-size: 1.4rem;
        color: #2c3e50;
        margin: 0;
        display: flex;
        align-items: center;
        font-weight: 600;

        .title-icon {
            margin-right: 10px;
            font-size: 1.3rem;
        }
    }

    .description {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #4a5568;
        margin-top: 15px;
    }

    .requirements-list,
    .facilities-list {
        list-style: none;
        padding: 0 25px 25px;
        margin: 0;

        li {
            padding: 8px 0;
            display: flex;
            align-items: flex-start;
            font-size: 1.05rem;
            color: #4a5568;
            line-height: 1.6;

            .bullet {
                color: #2d8cd4;
                margin-right: 10px;
                font-weight: bold;
            }
        }
    }

    .info-card {
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        position: sticky;
        top: 20px;
    }

    .info-item {
        display: flex;
        margin-bottom: 20px;
        align-items: flex-start;

        .info-icon {
            color: #2d8cd4;
            font-size: 1.2rem;
            margin-right: 15px;
            margin-top: 3px;
        }

        h3 {
            font-size: 0.95rem;
            color: #718096;
            margin: 0 0 5px 0;
            font-weight: 600;
        }

        p {
            font-size: 1.1rem;
            color: #2d3748;
            margin: 0;
            font-weight: 500;
        }
    }

    .apply-section {
        margin-top: 30px;
        text-align: center;

        .apply-button {
            background: #2d8cd4;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            width: 100%;
            margin-bottom: 15px;

            &:hover {
                background: #1a5f8b;
                transform: translateY(-2px);
            }
        }

        .login-prompt {
            color: #e53e3e;
            font-size: 0.9rem;
            margin-bottom: 15px;
            text-align: center;
            
            a {
                color: #2d8cd4;
                text-decoration: underline;
                margin: 0 4px;
            }
        }

        .contact-info {
            font-size: 0.95rem;
            color: #4a5568;
            margin: 0;

            span {
                color: #2d8cd4;
                font-weight: 500;
            }
        }
    }
`;

const HeroSection = styled.section`
    position: relative;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
    border-radius: 12px;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('/webback.jpg') center/cover no-repeat;
        z-index: -2;
    }

    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: -1;
    }

    .hero-content {
        z-index: 1;
        width: 100%;
        max-width: 800px;
        padding: 0 20px;
    }

    .course-info {
        color: white;
    }

    .course-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0 0 10px 0;
        line-height: 1.2;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .university {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        font-weight: 500;
        opacity: 0.9;

        .icon {
            margin-right: 10px;
            font-size: 1.3rem;
        }

        @media (max-width: 768px) {
            font-size: 1.2rem;
        }
    }
`;

export default School;
















// import React, { useState } from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getSingleHandler } from "../utils/FetchHandlers";
// import LoadingComTwo from "../components/shared/LoadingComTwo";
// import { FaUniversity, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { MdAccessTime } from "react-icons/md";
// import Navbar from "../components/shared/Navbar";
// import { useApplicationContext } from "../context/ApplicationContext";
// import ApplicationModal from "../components/shared/ApplicationModal";
// import dayjs from "dayjs";
// import advancedFormat from "dayjs/plugin/advancedFormat";

// dayjs.extend(advancedFormat);

// const School = () => {
//     const { id } = useParams();
//     const { data: school, isLoading, isError, error } = useQuery({
//         queryKey: ["school", id],
//         queryFn: () => getSingleHandler(`${import.meta.env.VITE_API_BASE_URL}/schools/${id}`),
//     });

//     const [showRequirements, setShowRequirements] = useState(true);
//     const [showFacilities, setShowFacilities] = useState(true);
//     const { openApplicationModal } = useApplicationContext();
//     const deadlineDate = dayjs(school?.applicationDeadline).format("MMMM D, YYYY");
//     const postedDate = dayjs(school?.createdAt).format("MMMM D, YYYY");

//     if (isLoading) return <LoadingComTwo />;
//     if (isError) return <h2 className="">{error?.message}</h2>;

//     return (
//         <>
//             <Navbar />
//             <Wrapper>
//                 {/* Hero Section with Image Background */}
//                 <HeroSection>
//                     <div className="hero-overlay"></div>
//                     <div className="hero-content">
//                         <div className="course-info">
//                             <h1 className="course-title">{school?.course}</h1>
//                             <div className="university">
//                                 <FaUniversity className="icon" />
//                                 <span>{school?.university}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </HeroSection>

//                 {/* Main Content */}
//                 <div className="main-content">
//                     {/* Left Column - Description */}
//                     <div className="left-column">
//                         <div className="content-card">
//                             <h2 className="section-title">
//                                 <span className="title-icon">📝</span>
//                                 Program Description
//                             </h2>
//                             <p className="description">{school?.description}</p>
//                         </div>

//                         {/* Requirements Accordion */}
//                         <div className="content-card accordion">
//                             <div 
//                                 className="accordion-header" 
//                                 onClick={() => setShowRequirements(!showRequirements)}
//                             >
//                                 <h2 className="section-title">
//                                     <span className="title-icon">📋</span>
//                                     Requirements
//                                 </h2>
//                                 {showRequirements ? <FaChevronUp /> : <FaChevronDown />}
//                             </div>
//                             {showRequirements && (
//                                 <ul className="requirements-list">
//                                     {school?.requirements?.map((requirement, index) => (
//                                         <li key={index}>
//                                             <span className="bullet">•</span>
//                                             {requirement}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>

//                         {/* Facilities Accordion */}
//                         <div className="content-card accordion">
//                             <div 
//                                 className="accordion-header" 
//                                 onClick={() => setShowFacilities(!showFacilities)}
//                             >
//                                 <h2 className="section-title">
//                                     <span className="title-icon">🏫</span>
//                                     Facilities
//                                 </h2>
//                                 {showFacilities ? <FaChevronUp /> : <FaChevronDown />}
//                             </div>
//                             {showFacilities && (
//                                 <ul className="facilities-list">
//                                     {school?.facilities?.map((facility, index) => (
//                                         <li key={index}>
//                                             <span className="bullet">•</span>
//                                             {facility}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                     </div>

//                     {/* Right Column - Key Info */}
//                     <div className="right-column">
//                         <div className="info-card">
//                             <div className="info-item">
//                                 <FaMapMarkerAlt className="info-icon" />
//                                 <div>
//                                     <h3>Location</h3>
//                                     <p>{school?.location}</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaGraduationCap className="info-icon" />
//                                 <div>
//                                     <h3>Degree Type</h3>
//                                     <p>{school?.schoolStatus}</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaCalendarAlt className="info-icon" />
//                                 <div>
//                                     <h3>Application Deadline</h3>
//                                     <p>{deadlineDate}</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaMoneyBillWave className="info-icon" />
//                                 <div>
//                                     <h3>Tuition</h3>
//                                     <p>{school?.tuition} USD</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaMoneyBillWave className="info-icon" />
//                                 <div>
//                                     <h3>Scholarship Availability</h3>
//                                     <p>{school?.scholarship || "Available for qualified students"}</p>
//                                 </div>
//                             </div>

//                             <div className="apply-section">
//                                 <button 
//                                     className="apply-button"
//                                     onClick={() => openApplicationModal(school._id)}
//                                 >
//                                     Apply Now
//                                 </button>
//                                 <p className="contact-info">
//                                     Contact: <span>{school?.contact}</span>
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Wrapper>
//             <ApplicationModal />
//         </>
//     );
// };

// // Styled Components
// const Wrapper = styled.div`
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//     font-family: 'Poppins', sans-serif;
//     color: #2c3e50;

//     .main-content {
//         display: flex;
//         gap: 30px;
//         margin-top: 30px;

//         @media (max-width: 768px) {
//             flex-direction: column;
//         }
//     }

//     .left-column {
//         flex: 2;
//     }

//     .right-column {
//         flex: 1;
//     }

//     .content-card {
//         background: white;
//         border-radius: 12px;
//         padding: 25px;
//         margin-bottom: 25px;
//         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        
//         &.accordion {
//             padding: 0;
//             overflow: hidden;
//         }
//     }

//     .accordion-header {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding: 25px;
//         cursor: pointer;
//         transition: background-color 0.2s;

//         &:hover {
//             background-color: #f8f9fa;
//         }

//         svg {
//             color: #2d8cd4;
//         }
//     }

//     .section-title {
//         font-size: 1.4rem;
//         color: #2c3e50;
//         margin: 0;
//         display: flex;
//         align-items: center;
//         font-weight: 600;

//         .title-icon {
//             margin-right: 10px;
//             font-size: 1.3rem;
//         }
//     }

//     .description {
//         font-size: 1.05rem;
//         line-height: 1.7;
//         color: #4a5568;
//         margin-top: 15px;
//     }

//     .requirements-list,
//     .facilities-list {
//         list-style: none;
//         padding: 0 25px 25px;
//         margin: 0;

//         li {
//             padding: 8px 0;
//             display: flex;
//             align-items: flex-start;
//             font-size: 1.05rem;
//             color: #4a5568;
//             line-height: 1.6;

//             .bullet {
//                 color: #2d8cd4;
//                 margin-right: 10px;
//                 font-weight: bold;
//             }
//         }
//     }

//     .info-card {
//         background: white;
//         border-radius: 12px;
//         padding: 25px;
//         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//         position: sticky;
//         top: 20px;
//     }

//     .info-item {
//         display: flex;
//         margin-bottom: 20px;
//         align-items: flex-start;

//         .info-icon {
//             color: #2d8cd4;
//             font-size: 1.2rem;
//             margin-right: 15px;
//             margin-top: 3px;
//         }

//         h3 {
//             font-size: 0.95rem;
//             color: #718096;
//             margin: 0 0 5px 0;
//             font-weight: 600;
//         }

//         p {
//             font-size: 1.1rem;
//             color: #2d3748;
//             margin: 0;
//             font-weight: 500;
//         }
//     }

//     .apply-section {
//         margin-top: 30px;
//         text-align: center;

//         .apply-button {
//             background: #2d8cd4;
//             color: white;
//             border: none;
//             padding: 12px 25px;
//             font-size: 1rem;
//             font-weight: 600;
//             border-radius: 8px;
//             cursor: pointer;
//             transition: all 0.2s;
//             width: 100%;
//             margin-bottom: 15px;

//             &:hover {
//                 background: #1a5f8b;
//                 transform: translateY(-2px);
//             }
//         }

//         .contact-info {
//             font-size: 0.95rem;
//             color: #4a5568;
//             margin: 0;

//             span {
//                 color: #2d8cd4;
//                 font-weight: 500;
//             }
//         }
//     }
// `;

// const HeroSection = styled.section`
//     position: relative;
//     height: 300px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     margin-top: 20px;
//     border-radius: 12px;
//     overflow: hidden;

//     &::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: url('/webback.jpg') center/cover no-repeat;
//         z-index: -2;
//     }

//     .hero-overlay {
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: rgba(0, 0, 0, 0.6);
//         z-index: -1;
//     }

//     .hero-content {
//         z-index: 1;
//         width: 100%;
//         max-width: 800px;
//         padding: 0 20px;
//     }

//     .course-info {
//         color: white;
//     }

//     .course-title {
//         font-size: 2.5rem;
//         font-weight: 700;
//         margin: 0 0 10px 0;
//         line-height: 1.2;

//         @media (max-width: 768px) {
//             font-size: 2rem;
//         }
//     }

//     .university {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 1.4rem;
//         font-weight: 500;
//         opacity: 0.9;

//         .icon {
//             margin-right: 10px;
//             font-size: 1.3rem;
//         }

//         @media (max-width: 768px) {
//             font-size: 1.2rem;
//         }
//     }
// `;

// export default School;













// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getSingleHandler } from "../utils/FetchHandlers";
// import LoadingComTwo from "../components/shared/LoadingComTwo";
// import { FaUniversity, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
// import { MdAccessTime } from "react-icons/md";
// import Navbar from "../components/shared/Navbar";
// import { useApplicationContext } from "../context/ApplicationContext";
// import ApplicationModal from "../components/shared/ApplicationModal";
// import dayjs from "dayjs";
// import advancedFormat from "dayjs/plugin/advancedFormat";

// dayjs.extend(advancedFormat);

// const School = () => {
//     const { id } = useParams();
//     const { data: school, isLoading, isError, error } = useQuery({
//         queryKey: ["school", id],
//         queryFn: () => getSingleHandler(`${import.meta.env.VITE_API_BASE_URL}/schools/${id}`),
//     });

//     const { openApplicationModal } = useApplicationContext();
//     const deadlineDate = dayjs(school?.applicationDeadline).format("MMMM D, YYYY");
//     const postedDate = dayjs(school?.createdAt).format("MMMM D, YYYY");

//     if (isLoading) return <LoadingComTwo />;
//     if (isError) return <h2 className="">{error?.message}</h2>;

//     return (
//         <>
//             <Navbar />
//             <Wrapper>
//                 {/* Hero Section with Image Background */}
//                 <HeroSection>
//                     <div className="hero-overlay"></div>
//                     <div className="hero-content">
//                         <div className="course-info">
//                             <h1 className="course-title">{school?.course}</h1>
//                             <div className="university">
//                                 <FaUniversity className="icon" />
//                                 <span>{school?.university}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </HeroSection>

//                 {/* Main Content */}
//                 <div className="main-content">
//                     {/* Left Column - Description */}
//                     <div className="left-column">
//                         <div className="content-card">
//                             <h2 className="section-title">
//                                 <span className="title-icon">📝</span>
//                                 Program Description
//                             </h2>
//                             <p className="description">{school?.description}</p>
//                         </div>

//                         <div className="content-card">
//                             <h2 className="section-title">
//                                 <span className="title-icon">📋</span>
//                                 Requirements
//                             </h2>
//                             <ul className="requirements-list">
//                                 {school?.requirements?.map((requirement, index) => (
//                                     <li key={index}>
//                                         <span className="bullet">•</span>
//                                         {requirement}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Right Column - Key Info */}
//                     <div className="right-column">
//                         <div className="info-card">
//                             <div className="info-item">
//                                 <FaMapMarkerAlt className="info-icon" />
//                                 <div>
//                                     <h3>Location</h3>
//                                     <p>{school?.location}</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaGraduationCap className="info-icon" />
//                                 <div>
//                                     <h3>Degree Type</h3>
//                                     <p>{school?.schoolStatus}</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaCalendarAlt className="info-icon" />
//                                 <div>
//                                     <h3>Application Deadline</h3>
//                                     <p>{deadlineDate}</p>
//                                 </div>
//                             </div>

//                             <div className="info-item">
//                                 <FaMoneyBillWave className="info-icon" />
//                                 <div>
//                                     <h3>Tuition</h3>
//                                     <p>{school?.tuition} USD</p>
//                                 </div>
//                             </div>

//                             <div className="apply-section">
//                                 <button 
//                                     className="apply-button"
//                                     onClick={() => openApplicationModal(school._id)}
//                                 >
//                                     Apply Now
//                                 </button>
//                                 <p className="contact-info">
//                                     Contact: <span>{school?.contact}</span>
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="content-card facilities">
//                             <h2 className="section-title">
//                                 <span className="title-icon">🏫</span>
//                                 Facilities
//                             </h2>
//                             <ul className="facilities-list">
//                                 {school?.facilities?.map((facility, index) => (
//                                     <li key={index}>
//                                         <span className="bullet">•</span>
//                                         {facility}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </Wrapper>
//             <ApplicationModal />
//         </>
//     );
// };

// // Styled Components
// const Wrapper = styled.div`
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//     font-family: 'Poppins', sans-serif;

//     .main-content {
//         display: flex;
//         gap: 30px;
//         margin-top: 30px;

//         @media (max-width: 768px) {
//             flex-direction: column;
//         }
//     }

//     .left-column {
//         flex: 2;
//     }

//     .right-column {
//         flex: 1;
//     }

//     .content-card {
//         background: white;
//         border-radius: 12px;
//         padding: 25px;
//         margin-bottom: 25px;
//         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//     }

//     .section-title {
//         font-size: 1.4rem;
//         color: #2c3e50;
//         margin-top: 0;
//         margin-bottom: 20px;
//         display: flex;
//         align-items: center;

//         .title-icon {
//             margin-right: 10px;
//             font-size: 1.3rem;
//         }
//     }

//     .description {
//         font-size: 1.05rem;
//         line-height: 1.7;
//         color: #4a5568;
//     }

//     .requirements-list,
//     .facilities-list {
//         list-style: none;
//         padding-left: 0;
//         margin: 0;

//         li {
//             padding: 8px 0;
//             display: flex;
//             align-items: flex-start;
//             font-size: 1.05rem;
//             color: #4a5568;

//             .bullet {
//                 color: #2d8cd4;
//                 margin-right: 10px;
//                 font-weight: bold;
//             }
//         }
//     }

//     .info-card {
//         background: white;
//         border-radius: 12px;
//         padding: 25px;
//         box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
//         position: sticky;
//         top: 20px;
//     }

//     .info-item {
//         display: flex;
//         margin-bottom: 20px;
//         align-items: flex-start;

//         .info-icon {
//             color: #2d8cd4;
//             font-size: 1.2rem;
//             margin-right: 15px;
//             margin-top: 3px;
//         }

//         h3 {
//             font-size: 0.95rem;
//             color: #718096;
//             margin: 0 0 5px 0;
//             font-weight: 600;
//         }

//         p {
//             font-size: 1.1rem;
//             color: #2d3748;
//             margin: 0;
//             font-weight: 500;
//         }
//     }

//     .apply-section {
//         margin-top: 30px;
//         text-align: center;

//         .apply-button {
//             background: #2d8cd4;
//             color: white;
//             border: none;
//             padding: 12px 25px;
//             font-size: 1rem;
//             font-weight: 600;
//             border-radius: 8px;
//             cursor: pointer;
//             transition: all 0.2s;
//             width: 100%;
//             margin-bottom: 15px;

//             &:hover {
//                 background: #1a5f8b;
//                 transform: translateY(-2px);
//             }
//         }

//         .contact-info {
//             font-size: 0.95rem;
//             color: #4a5568;
//             margin: 0;

//             span {
//                 color: #2d8cd4;
//                 font-weight: 500;
//             }
//         }
//     }
// `;

// const HeroSection = styled.section`
//     position: relative;
//     height: 300px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     margin-top: 20px;
//     border-radius: 12px;
//     overflow: hidden;

//     &::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: url('/webback.jpg') center/cover no-repeat;
//         z-index: -2;
//     }

//     .hero-overlay {
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: rgba(0, 0, 0, 0.6);
//         z-index: -1;
//     }

//     .hero-content {
//         z-index: 1;
//         width: 100%;
//         max-width: 800px;
//         padding: 0 20px;
//     }

//     .course-info {
//         color: white;
//     }

//     .course-title {
//         font-size: 2.5rem;
//         font-weight: 700;
//         margin: 0 0 10px 0;
//         line-height: 1.2;

//         @media (max-width: 768px) {
//             font-size: 2rem;
//         }
//     }

//     .university {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         font-size: 1.4rem;
//         font-weight: 500;
//         opacity: 0.9;

//         .icon {
//             margin-right: 10px;
//             font-size: 1.3rem;
//         }

//         @media (max-width: 768px) {
//             font-size: 1.2rem;
//         }
//     }
// `;

// export default School;














// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getSingleHandler } from "../utils/FetchHandlers";
// import LoadingComTwo from "../components/shared/LoadingComTwo";
// import { FaUniversity, FaCalendarAlt, FaMoneyBillWave, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
// import { MdAccessTime } from "react-icons/md";
// import Navbar from "../components/shared/Navbar";
// import { useApplicationContext } from "../context/ApplicationContext";
// import ApplicationModal from "../components/shared/ApplicationModal";
// import dayjs from "dayjs";
// import advancedFormat from "dayjs/plugin/advancedFormat";

// dayjs.extend(advancedFormat);

// const School = () => {
//     const { id } = useParams();
//     const { data: school, isLoading, isError, error } = useQuery({
//         queryKey: ["school", id],
//         queryFn: () => getSingleHandler(`${import.meta.env.VITE_API_BASE_URL}/schools/${id}`),
//     });

//     const { openApplicationModal } = useApplicationContext();
//     const deadlineDate = dayjs(school?.applicationDeadline).format("MMMM D, YYYY");
//     const postedDate = dayjs(school?.createdAt).format("MMMM D, YYYY");

//     if (isLoading) return <LoadingComTwo />;
//     if (isError) return <h2 className="">{error?.message}</h2>;

//     return (
//         <>
//             <Navbar />
//             <Wrapper>
//                 {/* Hero Section */}
//                 <HeroSection>
//                     <div className="hero-content">
//                         <div className="university-info">
//                             <div className="university-logo">
//                                 <FaUniversity className="icon" />
//                             </div>
//                             <div>
//                                 <h1 className="course-title">{school?.course}</h1>
//                                 <h2 className="university-name">{school?.university}</h2>
//                             </div>
//                         </div>
//                         <p className="course-description">{school?.courseDescription}</p>
//                     </div>
//                 </HeroSection>

//                 {/* Main Content */}
//                 <MainContent>
//                     <div className="details-section">
//                         {/* Key Information */}
//                         <div className="key-info-grid">
//                             <div className="info-card">
//                                 <FaMapMarkerAlt className="info-icon" />
//                                 <div>
//                                     <h4>Location</h4>
//                                     <p>{school?.location}</p>
//                                 </div>
//                             </div>
//                             <div className="info-card">
//                                 <FaGraduationCap className="info-icon" />
//                                 <div>
//                                     <h4>Degree Type</h4>
//                                     <p>{school?.schoolStatus}</p>
//                                 </div>
//                             </div>
//                             <div className="info-card">
//                                 <FaCalendarAlt className="info-icon" />
//                                 <div>
//                                     <h4>Application Deadline</h4>
//                                     <p>{deadlineDate}</p>
//                                 </div>
//                             </div>
//                             <div className="info-card">
//                                 <FaMoneyBillWave className="info-icon" />
//                                 <div>
//                                     <h4>Tuition</h4>
//                                     <p>{school?.tuition} USD</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Requirements Section */}
//                         <div className="content-section">
//                             <h3 className="section-title">
//                                 <span className="title-icon">📋</span>
//                                 Program Requirements
//                             </h3>
//                             <ul className="requirements-list">
//                                 {school?.requirements?.map((requirement, index) => (
//                                     <li key={index}>{requirement}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Facilities Section */}
//                         <div className="content-section">
//                             <h3 className="section-title">
//                                 <span className="title-icon">🏫</span>
//                                 Campus Facilities
//                             </h3>
//                             <ul className="facilities-list">
//                                 {school?.facilities?.map((facility, index) => (
//                                     <li key={index}>{facility}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         {/* Application Section */}
//                         <div className="content-section apply-section">
//                             <h3 className="section-title">
//                                 <span className="title-icon">✉️</span>
//                                 How to Apply
//                             </h3>
//                             <div className="apply-content">
//                                 <p>Send your application materials to:</p>
//                                 <p className="contact-email">{school?.contact}</p>
//                                 <button 
//                                     className="apply-button"
//                                     onClick={() => openApplicationModal(school._id)}
//                                 >
//                                     Start Application
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="posted-date">
//                             <MdAccessTime className="time-icon" />
//                             Posted on {postedDate}
//                         </div>
//                     </div>
//                 </MainContent>
//             </Wrapper>
//             <ApplicationModal />
//         </>
//     );
// };

// // Styled Components
// const Wrapper = styled.div`
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
// `;

// const HeroSection = styled.section`
//     background: linear-gradient(135deg, #2d8cd4, #1a5f8b);
//     color: white;
//     padding: 40px;
//     border-radius: 12px;
//     margin-top: 20px;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

//     .hero-content {
//         max-width: 1000px;
//         margin: 0 auto;
//     }

//     .university-info {
//         display: flex;
//         align-items: center;
//         margin-bottom: 20px;
//     }

//     .university-logo {
//         width: 60px;
//         height: 60px;
//         background: rgba(255, 255, 255, 0.1);
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         margin-right: 20px;

//         .icon {
//             font-size: 28px;
//             color: white;
//         }
//     }

//     .course-title {
//         font-size: 2rem;
//         font-weight: 700;
//         margin: 0 0 5px 0;
//     }

//     .university-name {
//         font-size: 1.3rem;
//         font-weight: 500;
//         opacity: 0.9;
//         margin: 0;
//     }

//     .course-description {
//         font-size: 1.1rem;
//         line-height: 1.6;
//         opacity: 0.95;
//     }
// `;

// const MainContent = styled.div`
//     background: white;
//     border-radius: 12px;
//     padding: 30px;
//     margin: 30px auto;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//     max-width: 1000px;

//     .key-info-grid {
//         display: grid;
//         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//         gap: 20px;
//         margin-bottom: 40px;
//     }

//     .info-card {
//         display: flex;
//         align-items: flex-start;
//         padding: 20px;
//         background: #f8fafc;
//         border-radius: 8px;
//         border-left: 4px solid #2d8cd4;

//         .info-icon {
//             font-size: 20px;
//             color: #2d8cd4;
//             margin-right: 15px;
//             margin-top: 3px;
//         }

//         h4 {
//             margin: 0 0 5px 0;
//             font-size: 0.9rem;
//             color: #64748b;
//             font-weight: 600;
//         }

//         p {
//             margin: 0;
//             font-size: 1.1rem;
//             color: #1e293b;
//             font-weight: 500;
//         }
//     }

//     .content-section {
//         margin-bottom: 40px;

//         .section-title {
//             font-size: 1.4rem;
//             color: #1e293b;
//             margin-bottom: 20px;
//             display: flex;
//             align-items: center;

//             .title-icon {
//                 margin-right: 10px;
//                 font-size: 1.2rem;
//             }
//         }
//     }

//     .requirements-list,
//     .facilities-list {
//         list-style: none;
//         padding-left: 0;

//         li {
//             position: relative;
//             padding-left: 25px;
//             margin-bottom: 10px;
//             font-size: 1.05rem;
//             line-height: 1.5;
//             color: #334155;

//             &::before {
//                 content: "•";
//                 color: #2d8cd4;
//                 font-size: 1.5rem;
//                 position: absolute;
//                 left: 0;
//                 top: -2px;
//             }
//         }
//     }

//     .apply-section {
//         background: #f8fafc;
//         padding: 25px;
//         border-radius: 8px;
//         border-left: 4px solid #2d8cd4;

//         .apply-content {
//             p {
//                 margin: 0 0 10px 0;
//                 font-size: 1.05rem;
//                 color: #334155;
//             }

//             .contact-email {
//                 font-weight: 600;
//                 color: #2d8cd4;
//                 font-size: 1.1rem;
//             }
//         }
//     }

//     .apply-button {
//         display: inline-block;
//         margin-top: 15px;
//         padding: 12px 24px;
//         background: linear-gradient(135deg, #2d8cd4, #1a5f8b);
//         color: white;
//         border: none;
//         border-radius: 6px;
//         font-size: 1rem;
//         font-weight: 600;
//         cursor: pointer;
//         transition: transform 0.2s, box-shadow 0.2s;

//         &:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 4px 12px rgba(45, 140, 212, 0.3);
//         }
//     }

//     .posted-date {
//         display: flex;
//         align-items: center;
//         font-size: 0.9rem;
//         color: #64748b;
//         margin-top: 30px;

//         .time-icon {
//             margin-right: 8px;
//             font-size: 1rem;
//         }
//     }
// `;

// export default School;















// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { getSingleHandler } from "../utils/FetchHandlers";
// import LoadingComTwo from "../components/shared/LoadingComTwo";

// import advancedFormat from "dayjs/plugin/advancedFormat";
// import dayjs from "dayjs";
// dayjs.extend(advancedFormat);

// import { MdAccessTime } from "react-icons/md";
// import Navbar from "../components/shared/Navbar";
// import { useApplicationContext } from "../context/ApplicationContext"; // Import ApplicationContext
// import ApplicationModal from "../components/shared/ApplicationModal"; // Import ApplicationModal

// const School = () => {
//     const { id } = useParams();
//     const {
//         isLoading,
//         isError,
//         data: school,
//         error,
//     } = useQuery({
//         queryKey: ["school", id],
//         queryFn: () => getSingleHandler(`${import.meta.env.VITE_API_BASE_URL}/schools/${id}`),
//     });

//     const { openApplicationModal } = useApplicationContext(); // Get openApplicationModal from context
//     const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

//     if (isLoading) {
//         return <LoadingComTwo />;
//     }
//     if (isError) {
//         return <h2 className="">{error?.message}</h2>;
//     }

//     return (
//         <>
//             <Navbar />
//             <Wrapper>
//                 <div className="top-row">
//                     <h2 className="title">
//                         <span className="capitalize">Course: </span>
//                         {school?.course}
//                     </h2>
//                     <h4 className="university">
//                         <span className="fancy">By: </span>
//                         {school?.university}
//                     </h4>
//                     <h4 className="post-date">
//                         <MdAccessTime className="text-lg mr-1" />
//                         {dayjs(school?.createdAt).format("MMM Do, YYYY")}
//                     </h4>
//                 </div>
//                 <div className="middle-row">
//                     <div className="description">
//                         <h3 className="sec-title">Description</h3>
//                         <p>{school?.description}</p>
//                     </div>
//                     <h4 className="deadline">
//                         Application Deadline: <span>{date}</span>
//                     </h4>
//                     <h4 className="vacancy">
//                         Open Applications: <span>{school?.applicationsRequired}</span>
//                     </h4>
//                     <div className="requirement">
//                         <h3 className="sec-title">Requirements</h3>
//                         <ul>
//                             {school?.requirements?.map((requirement) => (
//                                 <li key={requirement}>{requirement}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="facility">
//                         <h3 className="sec-title">Facilities</h3>
//                         <ul>
//                             {school?.facilities?.map((facility) => (
//                                 <li key={facility}>{facility}</li>
//                             ))}
//                         </ul>
//                     </div>
//                     <h4 className="tuition">
//                         Tuition: <span>{school?.tuition} USD</span>
//                     </h4>
//                     <div className="apply">
//                         <h3 className="sec-title">To Apply</h3>
//                         <p className="intro">Send your CV/Resume</p>
//                         <p className="info">Email: {school?.contact}</p>
//                         <button
//                             className="apply-button"
//                             onClick={() => openApplicationModal(school._id)} // Open the modal
//                         >
//                             Apply Now
//                         </button>
//                     </div>
//                 </div>
//             </Wrapper>
//             <ApplicationModal /> {/* Render the ApplicationModal */}
//         </>
//     );
// };






// // import React from "react";
// // import styled from "styled-components";
// // import { useParams } from "react-router-dom";
// // import { useQuery } from "@tanstack/react-query";
// // import { getSingleHandler } from "../utils/FetchHandlers";
// // import LoadingComTwo from "../components/shared/LoadingComTwo";

// // import advancedFormat from "dayjs/plugin/advancedFormat";
// // import dayjs from "dayjs";
// // dayjs.extend(advancedFormat);

// // import { MdAccessTime } from "react-icons/md";
// // import Navbar from "../components/shared/Navbar";

// // const School = () => {
// //     const { id } = useParams();
// //     const {
// //         isLoading,
// //         isError,
// //         data: school,
// //         error,
// //     } = useQuery({
// //         queryKey: ["school", id],

// //         queryFn: () => getSingleHandler(`${import.meta.env.VITE_API_BASE_URL}/schools/${id}`),

// //     });

// //     const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

// //     if (isLoading) {
// //         return <LoadingComTwo />;
// //     }
// //     if (isError) {
// //         return <h2 className="">{error?.message}</h2>;
// //     }

// //     return (
// //         <>
// //             <Navbar />
// //             <Wrapper>
// //                 <div className="top-row">
// //                     <h2 className="title">
// //                         <span className="capitalize">Course: </span>
// //                         {school?.course}
// //                     </h2>
// //                     <h4 className="university">
// //                         <span className="fancy">By: </span>
// //                         {school?.university}
// //                     </h4>
// //                     <h4 className="post-date">
// //                         <MdAccessTime className="text-lg mr-1" />
// //                         {dayjs(school?.createdAt).format("MMM Do, YYYY")}
// //                     </h4>
// //                 </div>
// //                 <div className="middle-row">
// //                     <div className="description">
// //                         <h3 className="sec-title">Description</h3>
// //                         <p>{school?.courseDescription}</p>
// //                     </div>
// //                     <h4 className="deadline">
// //                         Application Deadline: <span>{date}</span>
// //                     </h4>
// //                     <h4 className="vacancy">
// //                         Open Applications: <span>{school?.applicationsRequired}</span>
// //                     </h4>
// //                     <div className="requirement">
// //                         <h3 className="sec-title">Requirements</h3>
// //                         <ul>
// //                             {school?.requirements?.map((requirement) => (
// //                                 <li key={requirement}>{requirement}</li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                     <div className="facility">
// //                         <h3 className="sec-title">Facilities</h3>
// //                         <ul>
// //                             {school?.facilities?.map((facility) => (
// //                                 <li key={facility}>{facility}</li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                     <h4 className="tuition">
// //                         Tuition: <span>{school?.tuition} USD</span>
// //                     </h4>
// //                     {/* <div className="apply">
// //                         <h3 className="sec-title">To Apply</h3>
// //                         <p className="intro">Send your CV/Resume</p>
// //                         <p className="info">Email: {school?.contact}</p>
// //                     </div> */}

// //                     <div className="apply">
// //                         <h3 className="sec-title">To Apply</h3>
// //                         <p className="intro">Send your CV/Resume</p>
// //                         <p className="info">Email: {school?.contact}</p>
// //                         <a href={`mailto:${school?.contact}`} className="apply-button">
// //                             Apply Now
// //                         </a>
// //                     </div>
// //                 </div>
// //             </Wrapper>
// //         </>
// //     );
// // };



// const Wrapper = styled.section`
//     padding: 2rem 1rem;
//     max-width: 1000px;
//     margin: 0 auto;
//     margin-bottom: calc(20px + 1vw);
//     width: 100%;
//     font-family: 'Poppins', sans-serif;

//     .top-row {
//         margin-bottom: calc(30px + 1vw);
//         text-align: center;
//         background: linear-gradient(135deg, #6a11cb, #2575fc);
//         padding: 2rem;
//         border-radius: 12px;
//         color: white;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     }
//     .top-row .title {
//         font-size: calc(20px + 1vw);
//         font-weight: 600;
//         margin-bottom: 0.5rem;
//     }
//     .top-row .university {
//         font-size: calc(14px + 0.5vw);
//         font-weight: 500;
//         opacity: 0.9;
//     }
//     .top-row .post-date {
//         font-size: 14px;
//         font-weight: 500;
//         opacity: 0.8;
//         margin-top: 8px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     }

//     .middle-row {
//         background: white;
//         padding: 2rem;
//         border-radius: 12px;
//         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//         margin-top: 2rem;
//     }
//     .middle-row .description h3 {
//         font-size: calc(18px + 0.15vw);
//         font-weight: 600;
//         color: #333;
//         margin-bottom: 1rem;
//     }
//     .middle-row .description p {
//         font-size: calc(14px + 0.15vw);
//         line-height: 1.6;
//         color: #555;
//     }
//     .middle-row .deadline,
//     .middle-row .vacancy,
//     .middle-row .tuition {
//         font-size: calc(16px + 0.1vw);
//         font-weight: 600;
//         color: #333;
//         margin: 1.5rem 0;
//     }
//     .middle-row .deadline span,
//     .middle-row .vacancy span,
//     .middle-row .tuition span {
//         color: #2575fc;
//     }
//     .middle-row .requirement,
//     .middle-row .facility {
//         margin-bottom: 2rem;
//     }
//     .middle-row .requirement h3,
//     .middle-row .facility h3 {
//         font-size: calc(18px + 0.15vw);
//         font-weight: 600;
//         color: #333;
//         margin-bottom: 1rem;
//     }
//     .middle-row .requirement ul,
//     .middle-row .facility ul {
//         list-style: none;
//         padding-left: 1.5rem;
//     }
//     .middle-row .requirement ul li,
//     .middle-row .facility ul li {
//         font-size: calc(14px + 0.15vw);
//         color: #555;
//         margin-bottom: 0.5rem;
//         position: relative;
//     }
//     .middle-row .requirement ul li::before,
//     .middle-row .facility ul li::before {
//         content: "•";
//         color: #2575fc;
//         font-size: 1.2rem;
//         position: absolute;
//         left: -1.5rem;
//         top: 50%;
//         transform: translateY(-50%);
//     }
//     .middle-row .apply {
//         margin-top: 2rem;
//     }
//     .middle-row .apply h3 {
//         font-size: calc(18px + 0.15vw);
//         font-weight: 600;
//         color: #333;
//         margin-bottom: 1rem;
//     }
//     .middle-row .apply p {
//         font-size: calc(14px + 0.15vw);
//         color: #555;
//         margin-bottom: 0.5rem;
//     }
//     .middle-row .apply p.info {
//         font-weight: 600;
//         color: #2575fc;
//     }

//     .apply-button {
//     display: inline-block;
//     margin-top: 1rem;
//     padding: 0.75rem 1.5rem;
//     background: linear-gradient(135deg, #6a11cb, #2575fc);
//     color: white;
//     text-decoration: none;
//     border-radius: 8px;
//     font-weight: 600;
//     transition: transform 0.2s, box-shadow 0.2s;
//     }
//     .apply-button:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     }
// `;

// export default School;
