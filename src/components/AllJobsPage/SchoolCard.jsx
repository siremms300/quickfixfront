// import React from "react";
// import { TfiLocationPin } from "react-icons/tfi";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useUserContext } from "../../context/UserContext";
// import { useApplicationContext } from "../../context/ApplicationContext";
// import dayjs from "dayjs";

// const SchoolCard = ({ school }) => {
//     const { user } = useUserContext();
//     const { openApplicationModal } = useApplicationContext();
//     const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

//     return (
//         <div style={styles.card}>
//             <Link to={`/school/${school._id}`} style={styles.link}>
//                 <h3 style={styles.title}>{school?.course}</h3>
//                 <div style={styles.university}>{school?.university}</div>
//                 <div style={styles.info}>
//                     <span style={styles.infoItem}>
//                         <TfiLocationPin style={styles.icon} />
//                         {school?.location}
//                     </span>
//                     <span style={styles.infoItem}>
//                         <BsFillBriefcaseFill style={styles.icon} />
//                         {school?.courseType}
//                     </span>
//                     <span style={styles.infoItem}>
//                         <FaRegCalendarAlt style={styles.icon} />
//                         {date}
//                     </span>
//                 </div>
//                 {school?.scholarship && (
//                     <div style={styles.scholarship}>
//                         Scholarship Available: {school?.scholarship ? "Yes" : "No"}
//                     </div>
//                 )}
//                 <div style={styles.degree}>
//                     <strong>Degree: </strong>
//                     {school?.schoolStatus}
//                 </div>
//             </Link>
//             <div style={styles.actions}>
//                 <Link to={`/school/${school._id}`} style={styles.detailsButton}>
//                     Details
//                 </Link>
//                 {user?.role === "user" && (
//                     <button
//                         style={styles.applyButton}
//                         onClick={() => openApplicationModal(school._id)}
//                     >
//                         Apply
//                     </button>
//                 )}
//                 {user?._id === school?.createdBy && (
//                     <Link to={`/dashboard/edit-school/${school._id}`} style={styles.editButton}>
//                         Edit
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// };

// // Styles remain the same as before


// const styles = {
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     padding: "20px",
//     margin: "16px auto",
//     border: "1px solid #e0e0e0",
//     borderRadius: "12px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     width: "100%",
//     maxWidth: "600px",
//     "&:hover": {
//       transform: "translateY(-4px)",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     },
//   },
//   link: {
//     textDecoration: "none",
//     color: "inherit",
//   },
//   title: {
//     fontSize: "24px",
//     color: "#1a0dab",
//     marginBottom: "8px",
//     fontWeight: "600",
//   },
//   university: {
//     fontSize: "16px",
//     color: "#006621",
//     marginBottom: "12px",
//     fontWeight: "500",
//   },
//   info: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "16px",
//     fontSize: "14px",
//     color: "#545454",
//     marginBottom: "16px",
//   },
//   infoItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//   },
//   icon: {
//     color: "#757575",
//   },
//   scholarship: {
//     fontSize: "14px",
//     color: "#008000",
//     marginBottom: "8px",
//     fontWeight: "500",
//   },
//   degree: {
//     fontSize: "14px",
//     color: "#333",
//     marginBottom: "16px",
//   },
//   actions: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "16px",
//   },
//   detailsButton: {
//     fontSize: "14px",
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "1px solid #dadce0",
//     backgroundColor: "#f8f9fa",
//     color: "#1a73e8",
//     textDecoration: "none",
//     cursor: "pointer",
//     transition: "background-color 0.3s, color 0.3s",
//     "&:hover": {
//       backgroundColor: "#1a73e8",
//       color: "#fff",
//     },
//   },
//   applyButton: {
//     fontSize: "14px",
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "1px solid #1a73e8",
//     backgroundColor: "#1a73e8",
//     color: "#fff",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//     "&:hover": {
//       backgroundColor: "#1557b0",
//     },
//   },
//   editButton: {
//     fontSize: "14px",
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "1px solid #34a853",
//     backgroundColor: "#34a853",
//     color: "#fff",
//     textDecoration: "none",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//     "&:hover": {
//       backgroundColor: "#2a8a46",
//     },
//   },
// };

// export default SchoolCard;



















// import React from "react";
// import { TfiLocationPin } from "react-icons/tfi";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useUserContext } from "../../context/UserContext";
// import dayjs from "dayjs";

// const SchoolCard = ({ school }) => {
//   const { user } = useUserContext();
//   const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

//   return (
//     <div style={styles.card}>
//       <Link to={`/school/${school._id}`} style={styles.link}>
//         <h3 style={styles.title}>{school?.course}</h3>
//         <div style={styles.university}>{school?.university}</div>
//         <div style={styles.info}>
//           <span style={styles.infoItem}>
//             <TfiLocationPin style={styles.icon} />
//             {school?.location}
//           </span>
//           <span style={styles.infoItem}>
//             <BsFillBriefcaseFill style={styles.icon} />
//             {school?.courseType}
//           </span>
//           <span style={styles.infoItem}>
//             <FaRegCalendarAlt style={styles.icon} />
//             {date}
//           </span>
//         </div>
//         {school?.scholarship && (
//           <div style={styles.scholarship}>
//             Scholarship Available: {school?.scholarship ? "Yes" : "No"}
//           </div>
//         )}
//         <div style={styles.degree}>
//           <strong>Degree: </strong>
//           {school?.schoolStatus}
//         </div>
//       </Link>
//       <div style={styles.actions}>
//         <Link to={`/school/${school._id}`} style={styles.detailsButton}>
//           Details
//         </Link>
//         {user?.role === "user" && (
//           <button
//             style={styles.applyButton}
//             onClick={() => handleApply(school._id)}
//           >
//             Apply
//           </button>
//         )}
//         {user?._id === school?.createdBy && (
//           <Link to={`/dashboard/edit-school/${school._id}`} style={styles.editButton}>
//             Edit
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   card: {
//     display: "flex",
//     flexDirection: "column",
//     padding: "20px",
//     margin: "16px auto",
//     border: "1px solid #e0e0e0",
//     borderRadius: "12px",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     transition: "transform 0.3s, box-shadow 0.3s",
//     width: "100%",
//     maxWidth: "600px",
//     "&:hover": {
//       transform: "translateY(-4px)",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
//     },
//   },
//   link: {
//     textDecoration: "none",
//     color: "inherit",
//   },
//   title: {
//     fontSize: "24px",
//     color: "#1a0dab",
//     marginBottom: "8px",
//     fontWeight: "600",
//   },
//   university: {
//     fontSize: "16px",
//     color: "#006621",
//     marginBottom: "12px",
//     fontWeight: "500",
//   },
//   info: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "16px",
//     fontSize: "14px",
//     color: "#545454",
//     marginBottom: "16px",
//   },
//   infoItem: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//   },
//   icon: {
//     color: "#757575",
//   },
//   scholarship: {
//     fontSize: "14px",
//     color: "#008000",
//     marginBottom: "8px",
//     fontWeight: "500",
//   },
//   degree: {
//     fontSize: "14px",
//     color: "#333",
//     marginBottom: "16px",
//   },
//   actions: {
//     display: "flex",
//     gap: "12px",
//     marginTop: "16px",
//   },
//   detailsButton: {
//     fontSize: "14px",
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "1px solid #dadce0",
//     backgroundColor: "#f8f9fa",
//     color: "#1a73e8",
//     textDecoration: "none",
//     cursor: "pointer",
//     transition: "background-color 0.3s, color 0.3s",
//     "&:hover": {
//       backgroundColor: "#1a73e8",
//       color: "#fff",
//     },
//   },
//   applyButton: {
//     fontSize: "14px",
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "1px solid #1a73e8",
//     backgroundColor: "#1a73e8",
//     color: "#fff",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//     "&:hover": {
//       backgroundColor: "#1557b0",
//     },
//   },
//   editButton: {
//     fontSize: "14px",
//     padding: "8px 16px",
//     borderRadius: "6px",
//     border: "1px solid #34a853",
//     backgroundColor: "#34a853",
//     color: "#fff",
//     textDecoration: "none",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//     "&:hover": {
//       backgroundColor: "#2a8a46",
//     },
//   },
// };

// export default SchoolCard;







// import React from "react";
// import { TfiLocationPin } from "react-icons/tfi";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { FaRegCalendarAlt, FaUniversity } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useUserContext } from "../../context/UserContext";
// import dayjs from "dayjs";
// import styled from "styled-components";

// const SchoolCard = ({ school }) => {
//   const { user } = useUserContext();
//   const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

//   return (
//     <Card>
//       <CardHeader>
//         <FaUniversity className="university-icon" />
//         <div>
//           <CourseTitle>{school?.course}</CourseTitle>
//           <UniversityName>{school?.university}</UniversityName>
//         </div>
//       </CardHeader>

//       <CardBody>
//         <InfoGrid>
//           <InfoItem>
//             <TfiLocationPin className="icon" />
//             <span>{school?.location}</span>
//           </InfoItem>
//           <InfoItem>
//             <BsFillBriefcaseFill className="icon" />
//             <span>{school?.courseType}</span>
//           </InfoItem>
//           <InfoItem>
//             <FaRegCalendarAlt className="icon" />
//             <span>{date}</span>
//           </InfoItem>
//           <InfoItem>
//             <span className="label">Degree:</span>
//             <span>{school?.schoolStatus}</span>
//           </InfoItem>
//         </InfoGrid>

//         {school?.scholarship && (
//           <ScholarshipBadge>
//             <span className="badge-text">Scholarship Available</span>
//           </ScholarshipBadge>
//         )}
//       </CardBody>

//       <CardFooter>
//         <DetailsButton to={`/school/${school._id}`}>View Details</DetailsButton>
//         {user?.role === "user" && (
//           <ApplyButton onClick={() => handleApply(school._id)}>
//             Apply Now
//           </ApplyButton>
//         )}
//         {user?._id === school?.createdBy && (
//           <EditButton to={`/dashboard/edit-school/${school._id}`}>
//             Edit
//           </EditButton>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };

// // Styled Components
// const Card = styled.div`
//   background: white;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//   overflow: hidden;
//   transition: all 0.3s ease;
//   margin-bottom: 24px;
//   border: 1px solid #eaeaea;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 20px;
//   background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
//   border-bottom: 1px solid #eaeaea;

//   .university-icon {
//     font-size: 28px;
//     color: #2d8cd4;
//     margin-right: 16px;
//   }
// `;

// const CourseTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   color: #2c3e50;
//   margin: 0 0 4px 0;
// `;

// const UniversityName = styled.div`
//   font-size: 0.9rem;
//   color: #2d8cd4;
//   font-weight: 500;
// `;

// const CardBody = styled.div`
//   padding: 20px;
// `;

// const InfoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 16px;
//   margin-bottom: 16px;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const InfoItem = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 0.9rem;
//   color: #555;

//   .icon {
//     margin-right: 8px;
//     color: #2d8cd4;
//     font-size: 1rem;
//   }

//   .label {
//     font-weight: 500;
//     margin-right: 6px;
//     color: #333;
//   }
// `;

// const ScholarshipBadge = styled.div`
//   display: inline-block;
//   background: rgba(46, 204, 113, 0.1);
//   color: #2ecc71;
//   padding: 6px 12px;
//   border-radius: 20px;
//   font-size: 0.8rem;
//   font-weight: 500;
//   margin-top: 8px;

//   .badge-text {
//     display: flex;
//     align-items: center;
//   }
// `;

// const CardFooter = styled.div`
//   display: flex;
//   padding: 16px 20px;
//   border-top: 1px solid #f0f0f0;
//   background: #f9fafb;
// `;

// const BaseButton = styled(Link)`
//   padding: 8px 16px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   text-decoration: none;
//   transition: all 0.2s ease;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// `;

// const DetailsButton = styled(BaseButton)`
//   background: white;
//   color: #2d8cd4;
//   border: 1px solid #2d8cd4;
//   margin-right: 12px;

//   &:hover {
//     background: #2d8cd4;
//     color: white;
//   }
// `;

// const ApplyButton = styled.button`
//   padding: 8px 16px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   background: #2d8cd4;
//   color: white;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: #1a5f8b;
//   }
// `;

// const EditButton = styled(BaseButton)`
//   background: #34a853;
//   color: white;
//   margin-left: auto;

//   &:hover {
//     background: #2a8a46;
//   }
// `;

// export default SchoolCard;


















// import React from "react";
// import { TfiLocationPin } from "react-icons/tfi";
// import { BsFillBriefcaseFill } from "react-icons/bs";
// import { FaRegCalendarAlt, FaUniversity } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useUserContext } from "../../context/UserContext";
// import dayjs from "dayjs";
// import styled from "styled-components";

// const SchoolCard = ({ school }) => {
//   const { user } = useUserContext();
//   const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

//   return (
//     <Card>
//       <CardHeader>
//         <FaUniversity className="university-icon" />
//         <CourseInfo>
//           <CourseTitle>{school?.course}</CourseTitle>
//           <UniversityName>{school?.university}</UniversityName>
//         </CourseInfo>
//       </CardHeader>

//       <CardBody>
//         <InfoGrid>
//           <InfoItem>
//             <TfiLocationPin className="icon" />
//             <span>{school?.location}</span>
//           </InfoItem>
//           <InfoItem>
//             <BsFillBriefcaseFill className="icon" />
//             <span>{school?.courseType}</span>
//           </InfoItem>
//           <InfoItem>
//             <FaRegCalendarAlt className="icon" />
//             <span>{date}</span>
//           </InfoItem>
//           <InfoItem>
//             <span className="label">Degree:</span>
//             <span>{school?.schoolStatus}</span>
//           </InfoItem>
//         </InfoGrid>

//         {school?.scholarship && (
//           <ScholarshipBadge>
//             <span className="badge-text">Scholarship Available</span>
//           </ScholarshipBadge>
//         )}
//       </CardBody>

//       <CardFooter>
//         <DetailsButton to={`/school/${school._id}`}>View Details</DetailsButton>
//         {user?.role === "user" && (
//           <ApplyButton onClick={() => handleApply(school._id)}>
//             Apply Now
//           </ApplyButton>
//         )}
//         {user?._id === school?.createdBy && (
//           <EditButton to={`/dashboard/edit-school/${school._id}`}>
//             Edit
//           </EditButton>
//         )}
//       </CardFooter>
//     </Card>
//   );
// };

// // Styled Components
// const Card = styled.div`
//   background: white;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//   transition: all 0.3s ease;
//   margin-bottom: 24px;
//   border: 1px solid #eaeaea;
//   width: 100%;
//   max-width: none; /* Remove any max-width constraints */
//   display: flex;
//   flex-direction: column;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
//   }
// `;

// const CardHeader = styled.div`
//   display: flex;
//   align-items: flex-start;
//   padding: 20px;
//   background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
//   border-bottom: 1px solid #eaeaea;
//   width: 100%;
// `;

// const CourseInfo = styled.div`
//   flex: 1;
//   min-width: 0; /* Allows text truncation */
// `;

// const CourseTitle = styled.h3`
//   font-size: 1.25rem;
//   font-weight: 600;
//   color: #2c3e50;
//   margin: 0 0 4px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   width: 100%;
// `;

// const UniversityName = styled.div`
//   font-size: 0.9rem;
//   color: #2d8cd4;
//   font-weight: 500;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   width: 100%;
// `;

// const CardBody = styled.div`
//   padding: 20px;
//   width: 100%;
// `;

// const InfoGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 16px;
//   margin-bottom: 16px;
//   width: 100%;

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const InfoItem = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 0.9rem;
//   color: #555;
//   min-width: 0; /* Allows text truncation */

//   .icon {
//     margin-right: 8px;
//     color: #2d8cd4;
//     font-size: 1rem;
//     flex-shrink: 0;
//   }

//   span {
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }

//   .label {
//     font-weight: 500;
//     margin-right: 6px;
//     color: #333;
//     flex-shrink: 0;
//   }
// `;

// const ScholarshipBadge = styled.div`
//   display: inline-block;
//   background: rgba(46, 204, 113, 0.1);
//   color: #2ecc71;
//   padding: 6px 12px;
//   border-radius: 20px;
//   font-size: 0.8rem;
//   font-weight: 500;
//   margin-top: 8px;

//   .badge-text {
//     display: flex;
//     align-items: center;
//   }
// `;

// const CardFooter = styled.div`
//   display: flex;
//   padding: 16px 20px;
//   border-top: 1px solid #f0f0f0;
//   background: #f9fafb;
//   width: 100%;
// `;

// const BaseButton = styled(Link)`
//   padding: 8px 16px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   text-decoration: none;
//   transition: all 0.2s ease;
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   flex-shrink: 0;
// `;

// const DetailsButton = styled(BaseButton)`
//   background: white;
//   color: #2d8cd4;
//   border: 1px solid #2d8cd4;
//   margin-right: 12px;

//   &:hover {
//     background: #2d8cd4;
//     color: white;
//   }
// `;

// const ApplyButton = styled.button`
//   padding: 8px 16px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   background: #2d8cd4;
//   color: white;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   flex-shrink: 0;

//   &:hover {
//     background: #1a5f8b;
//   }
// `;

// const EditButton = styled(BaseButton)`
//   background: #34a853;
//   color: white;
//   margin-left: auto;

//   &:hover {
//     background: #2a8a46;
//   }
// `;

// export default SchoolCard;






import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaRegCalendarAlt, FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import dayjs from "dayjs";
import styled from "styled-components";

const SchoolCard = ({ school }) => {
  const { user } = useUserContext();
  const date = dayjs(school?.applicationDeadline).format("MMM Do, YYYY");

  return (
    <Card>
      <CardHeader>
        <IconWrapper>
          <FaUniversity className="university-icon" />
        </IconWrapper>
        <CourseInfo>
          <CourseTitle>{school?.course}</CourseTitle>
          <UniversityName>{school?.university}</UniversityName>
        </CourseInfo>
      </CardHeader>

      <CardBody>
        <InfoGrid>
          <InfoItem>
            <IconWrapper>
              <TfiLocationPin className="icon" />
            </IconWrapper>
            <InfoText>{school?.location}</InfoText>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <BsFillBriefcaseFill className="icon" />
            </IconWrapper>
            <InfoText>{school?.courseType}</InfoText>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <FaRegCalendarAlt className="icon" />
            </IconWrapper>
            <InfoText>{date}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoText>
              <span className="label">Degree:</span> {school?.schoolStatus}
            </InfoText>
          </InfoItem>
        </InfoGrid>

        {school?.scholarship && (
          <ScholarshipBadge>
            <span className="badge-text">Scholarship Available</span>
          </ScholarshipBadge>
        )}
      </CardBody>

      {/* <CardFooter>
        <DetailsButton to={`/school/${school._id}`}>View Details</DetailsButton>
        {user?.role === "user" && (
          <ApplyButton onClick={() => handleApply(school._id)}>
            Apply Now
          </ApplyButton>
        )}
        {user?._id === school?.createdBy && (
          <EditButton to={`/dashboard/edit-school/${school._id}`}>
            Edit
          </EditButton>
        )}
      </CardFooter> */} 
      {/* <CardFooter>
        <DetailsButton to={`/school/${school._id}`}>View Details</DetailsButton>
        {user?.role === "user" && (
          <ApplyButton to={`/school/${school._id}`}>Apply Now</ApplyButton>
        )}
        {user?._id === school?.createdBy && (
          <EditButton to={`/dashboard/edit-school/${school._id}`}>
            Edit
          </EditButton>
        )}
      </CardFooter> */} 
      <CardFooter>
        <DetailsButton to={`/school/${school._id}`}>View Details</DetailsButton>
        {user?._id === school?.createdBy && (
          <EditButton to={`/dashboard/edit-school/${school._id}`}>
            Edit
          </EditButton>
        )}
      </CardFooter>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 24px;
  border: 1px solid #eaeaea;
  width: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  border-bottom: 1px solid #eaeaea;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 12px;
  flex-shrink: 0;

  .university-icon {
    font-size: 24px;
    color: #2d8cd4;
  }

  .icon {
    color: #2d8cd4;
    font-size: 16px;
  }
`;

const CourseInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CourseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const UniversityName = styled.div`
  font-size: 0.9rem;
  color: #2d8cd4;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const CardBody = styled.div`
  padding: 20px;
  width: 100%;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  min-width: 0;
`;

const InfoText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;

  .label {
    font-weight: 500;
    color: #333;
  }
`;

const ScholarshipBadge = styled.div`
  display: inline-block;
  background: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 8px;

  .badge-text {
    display: flex;
    align-items: center;
  }
`;

const CardFooter = styled.div`
  display: flex;
  padding: 16px 20px;
  border-top: 1px solid #f0f0f0;
  background: #f9fafb;
  width: 100%;
`;

const BaseButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
`;

const DetailsButton = styled(BaseButton)`
  background: white;
  color: #2d8cd4;
  border: 1px solid #2d8cd4;
  margin-right: 12px;

  &:hover {
    background: #2d8cd4;
    color: white;
  }
`;

const ApplyButton = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  background: #2d8cd4;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: #1a5f8b;
  }
`;

const EditButton = styled(BaseButton)`
  background: #34a853;
  color: white;
  margin-left: auto;

  &:hover {
    background: #2a8a46;
  }
`;

export default SchoolCard;