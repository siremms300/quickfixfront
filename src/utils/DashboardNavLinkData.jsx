// import React from "react";
// import { FiUser } from "react-icons/fi";
// import { IoIosStats } from "react-icons/io";
// import { RiMenuAddFill } from "react-icons/ri";
// import { FaUserShield, FaUsers, FaSchool } from "react-icons/fa";
// import { MdManageAccounts } from "react-icons/md";
// import { FaChalkboardTeacher, FaUserTie, FaGraduationCap, FaFileAlt } from "react-icons/fa";
// import { FaCalendarAlt } from "react-icons/fa6";

// // Admin Dashboard Links (paths unchanged)
// const AdminLinks = [
//   {
//     text: "Profile",
//     path: ".",
//     icon: <FiUser />,
//   },
//   {
//     text: "Stats",
//     path: "stats",
//     icon: <IoIosStats />,
//   },
//   {
//     text: "Admin",
//     path: "admin",
//     icon: <FaUserShield />,
//   },
//   {
//     text: "Manage Users",
//     path: "manage-users",
//     icon: <FaUsers />,
//   },
//   {
//     text: "Manage SAT Mock",
//     path: "manage-sat",
//     icon: <FaFileAlt />,
//   },
//   {
//     text: "Manage Webinars",
//     path: "manage-webinars",
//     icon: <FaChalkboardTeacher />,
//   },
//   {
//     text: "Manage Visitors",
//     path: "manage-visitors",
//     icon: <FaUserTie />,
//   },
//   {
//     text: "Applications",
//     path: "applications",
//     icon: <FaGraduationCap />,
//   }
// ];

// // Recruiter Dashboard Links (paths unchanged)
// const RecruiterLinks = [
//   {
//     text: "Profile",
//     path: ".",
//     icon: <FiUser />,
//   },
//   {
//     text: "Add School",
//     path: "add-school",
//     icon: <RiMenuAddFill />,
//   },
//   {
//     text: "Manage Schools",
//     path: "manage-schools",
//     icon: <MdManageAccounts />,
//   },
//   {
//     text: "My Schools",
//     path: "my-schools",
//     icon: <FaSchool />,
//   }
// ];

// // Student/User Dashboard Links (paths unchanged)
// const UserLinks = [
//   {
//     text: "Profile",
//     path: ".",
//     icon: <FiUser />,
//   },
//   {
//     text: "My Schools",
//     path: "my-schools",
//     icon: <FaSchool />,
//   }
// ];

// export { AdminLinks, RecruiterLinks, UserLinks };












import React from "react";

import { IoIosStats } from "react-icons/io";
import { RiMenuAddFill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { FaUserShield } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

const AdminLinks = [
    {
        text: "profile",
        path: ".",
        icon: <FiUser />,
    },
    {
        text: "stats",
        path: "stats",
        icon: <IoIosStats />,
    },
    {
        text: "admin",
        path: "admin",
        icon: <FaUserShield />,
    },
    {
        text: "manage users",
        path: "manage-users",
        icon: <FaUsers />,
    },
    {
        text: "manage sat mock",
        path: "manage-sat",
        icon: <FaUsers />,
    },
    {
        text: "manage webinars",
        path: "manage-webinars",
        icon: <FaUsers />,
    },
    {
        text: "manage visitors",
        path: "manage-visitors",
        icon: <FaUsers />,
    },
    {
        text: "applications",
        path: "applications",
        icon: <FaUsers />,
    },
];

const RecruiterLinks = [
    {
        text: "profile",
        path: ".",
        icon: <FiUser />,
    },
    {
        text: "add school",
        path: "add-school",
        icon: <RiMenuAddFill />,
    },
    {
        text: "manage schools",
        path: "manage-schools",
        icon: <MdManageAccounts />,
    },
    {
        text: "My Schools",
        path: "my-schools",
        icon: <FaSchool />,
    },
];

const UserLinks = [
    {
        text: "profile",
        path: ".",
        icon: <FiUser />,
    },
    {
        text: "My Schools",
        path: "my-schools",
        icon: <FaSchool />,
    },
];

export { AdminLinks, RecruiterLinks, UserLinks };


















// import React from "react";

// import { IoIosStats } from "react-icons/io";
// import { RiMenuAddFill } from "react-icons/ri";
// import { FiUser } from "react-icons/fi";
// import { FaUserShield } from "react-icons/fa";
// import { MdManageAccounts } from "react-icons/md";
// import { FaBriefcase } from "react-icons/fa";
// import { FaUsers } from "react-icons/fa6";

// const AdminLinks = [
//     {
//         text: "profile",
//         path: ".",
//         icon: <FiUser />,
//     },
//     {
//         text: "stats",
//         path: "stats",
//         icon: <IoIosStats />,
//     },
//     {
//         text: "admin",
//         path: "admin",
//         icon: <FaUserShield />,
//     },
//     {
//         text: "manage users",
//         path: "manage-users",
//         icon: <FaUsers />,
//     },
// ];

// const RecruiterLinks = [
//     {
//         text: "profile",
//         path: ".",
//         icon: <FiUser />,
//     },
//     {
//         text: "add job",
//         path: "add-jobs",
//         icon: <RiMenuAddFill />,
//     },
//     {
//         text: "manage jobs",
//         path: "manage-jobs",
//         icon: <MdManageAccounts />,
//     },
//     {
//         text: "Applications",
//         path: "my-jobs",
//         icon: <FaBriefcase />,
//     },
// ];

// const UserLinks = [
//     {
//         text: "profile",
//         path: ".",
//         icon: <FiUser />,
//     },
//     {
//         text: "Applications",
//         path: "my-jobs",
//         icon: <FaBriefcase />,
//     },
// ];

// export { AdminLinks, RecruiterLinks, UserLinks };
