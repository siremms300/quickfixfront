
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "../components/shared/Navbar";
import { FaUtensils, FaStar, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const FlavorAndSpicy = () => {
  const whatsappNumber = "+2349065219811";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=I'd like to place an order from Flavor & Spicy!`;

  const menuItems = [
    {
      id: 1,
      name: "Jollof Rice Special",
      description: "Our signature jollof rice with chicken, plantain and coleslaw",
      price: "₦3,500",
      spicy: true
    },
    {
      id: 2,
      name: "Pepper Soup Deluxe",
      description: "Assorted meat pepper soup with fresh fish and ponmo",
      price: "₦4,200",
      spicy: true
    },
    {
      id: 3,
      name: "Fried Rice Combo",
      description: "Fried rice with beef, chicken and vegetables",
      price: "₦3,800",
      spicy: false
    },
    {
      id: 4,
      name: "Egusi Soup Special",
      description: "Rich egusi soup with assorted meat and fufu",
      price: "₦3,200",
      spicy: false
    },
    {
      id: 5,
      name: "Suya Platter",
      description: "Grilled spicy beef suya with onions and tomatoes",
      price: "₦4,500",
      spicy: true
    },
    {
      id: 6,
      name: "Pounded Yam Set",
      description: "Pounded yam with egusi and ogbono soup combo",
      price: "₦4,000",
      spicy: false
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-[url('/hero1.jpg')] bg-cover bg-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col justify-center items-start text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Taste The <span className="text-red-600">Spicy</span> Difference
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white max-w-2xl mb-8"
          >
            Authentic Nigerian cuisine with a modern twist. Experience flavors that ignite your senses.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full flex items-center text-lg transition duration-300"
          >
            <FaWhatsapp className="mr-2" /> Order Now
          </motion.a>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/restaurant-interior.jpg" 
              alt="Flavor & Spicy Restaurant" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <FaUtensils className="inline text-red-600 mr-3" />
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Founded in 2020, Flavor & Spicy began as a small family-owned eatery with a passion for authentic Nigerian flavors. Today, we've grown into a beloved culinary destination known for our bold spices and innovative dishes.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Every dish tells a story - from our grandmother's secret recipes to our chef's modern interpretations. We source only the freshest ingredients to bring you an unforgettable dining experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-red-100 px-4 py-2 rounded-full flex items-center">
                <FaStar className="text-red-600 mr-2" />
                <span className="font-medium">4.9/5 (500+ Reviews)</span>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-full flex items-center">
                <FaClock className="text-green-600 mr-2" />
                <span className="font-medium">Open 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Each dish is crafted with care and packed with authentic flavors
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="relative">
                  <img 
                    src={`/jollof.jpg`} 
                    // src={`/dish-${item.id}.jpg`} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  {item.spicy && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      SPICY!
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-red-600">{item.price}</span>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full text-sm transition duration-300"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Location & Hours */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <FaMapMarkerAlt className="inline text-red-600 mr-3" />
              Visit Us
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Location</h3>
              <p className="text-gray-600 mb-4">
                123 Flavor Street, Port Harcourt, Nigeria
              </p>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.621646382358!2d3.421587415231639!3d6.428326295338438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3c4c0f%3A0x5f5e75f4a34e602!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <FaClock className="inline text-red-600 mr-3" />
              Opening Hours
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">We're Open</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Monday - Thursday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Friday</span>
                  <span>8:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>10:00 AM - 9:00 PM</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
                <div className="flex items-center mb-3">
                  <FaPhoneAlt className="text-red-600 mr-3" />
                  <a href="tel:+2349065219811" className="text-gray-600 hover:text-red-600">+234 906 521 9811</a>
                </div>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The jollof rice at Flavor & Spicy is simply the best in Port Harcourt! I order at least twice a week.",
                author: "Adebayo K.",
                rating: 5
              },
              {
                quote: "Their pepper soup cured my cold and became my favorite meal. The service is always excellent!",
                author: "Chioma M.",
                rating: 5
              },
              {
                quote: "As a food critic, I can confidently say Flavor & Spicy offers authentic Nigerian flavors with perfect spice levels.",
                author: "Emeka F.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-800">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorAndSpicy;




















// import React from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";
// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";
// import { FaSearch, FaUniversity, FaGraduationCap } from "react-icons/fa";

// const AllSchools = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col justify-center items-start text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             The <span className="text-[#2D8CD4]">#1 School Directory</span> for Your Future
//           </h1>
//           <p className="text-xl text-white max-w-2xl">
//             Discover top-rated schools with our AI-powered recommendation engine
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Panel: Search Form */}
//           <div className="lg:w-1/3">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h2 className="text-2xl font-bold text-[#2D8CD4] mb-6">
//                 <FaSearch className="inline mr-2" />
//                 Find Your Program
//               </h2>
//               <SearchAndFilter />
//             </div>
//           </div>

//           {/* Right Panel: Results */}
//           <div className="lg:w-2/3">
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <div className="flex items-center mb-6">
//                 <FaUniversity className="text-[#2D8CD4] text-2xl mr-3" />
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Matching Schools & Programs
//                 </h2>
//               </div>
              
//               <SchoolsListCom />
              
//               <div className="mt-8">
//                 <PaginationCom />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllSchools;

















// import React from "react";
// import styled from "styled-components";

// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";
// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";

// const AllSchools = () => {
//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         {/* Hero Section */}
//         <HeroSection>
//           <HeroContent>
//             <h1>
//               The <span className="highlight">#1 school directory</span> to find
//               vetted schools and programs.
//             </h1>
//             <p>
//               Search for top-rated schools with our AI-powered recommendation engine
//               built to give you the most suitable institution for you.
//             </p>
//           </HeroContent>
//         </HeroSection>

//         {/* Main Content */}
//         <MainContent>
//           {/* Left Panel: Search Form */}
//           <StaticForm>
//             <SearchAndFilter />
//           </StaticForm>

//           {/* Right Panel: Full Results */}
//           <FullResults>
//             <SchoolsListCom />
//             <PaginationCom />
//           </FullResults>
//         </MainContent>
//       </Wrapper>
//     </>
//   );
// };

// // Styled Components
// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// // Hero Section
// const HeroSection = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #e3edf7;
//   padding: 15px 50px;
//   border-radius: 8px;
//   margin: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const HeroContent = styled.div`
//   h1 {
//     font-size: 1.8rem;
//     color: #2c374e;
//     line-height: 1.4;
//   }

//   .highlight {
//     color: #ff5e3a;
//     font-weight: bold;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//     margin-top: 0.5rem;
//   }
// `;

// // Main Content
// const MainContent = styled.div`
//   display: flex;
//   gap: 2rem;
//   margin-top: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// // Static Form Section (Sticky and Scrollable)
// const StaticForm = styled.aside`
//   flex: 1;
//   background-color: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   position: sticky;
//   top: 20px; /* Keep the form 20px from the top while scrolling */
//   height: 500px; /* Set a height for the form */
//   overflow-y: auto; /* Enable scrolling if content overflows */

//   @media (max-width: 768px) {
//     width: 100%;
//     position: relative; /* Remove sticky for smaller screens */
//     height: auto; /* Allow the form to expand based on content */
//   }
// `;

// // Full Results Section
// const FullResults = styled.main`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 0 10px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export default AllSchools;
















// import React from "react";
// import styled from "styled-components";

// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";
// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";

// const AllSchools = () => {
//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         {/* Hero Section */}
//         <HeroSection>
//           <HeroContent>
//             <h1>
//               The <span className="highlight">#1 school directory</span> to find
//               vetted schools and programs.
//             </h1>
//             <p>
//               Search for top-rated schools with our AI-powered recommendation engine
//               built to give you the most suitable institution for you.
//             </p>
//           </HeroContent>
//         </HeroSection>

//         {/* Main Content */}
//         <MainContent>
//           {/* Left Panel: Search Form */}
//           <StaticForm>
//             <SearchAndFilter />
//           </StaticForm>

//           {/* Right Panel: Full Results */}
//           <FullResults>
//             <SchoolsListCom />
//             <PaginationCom />
//           </FullResults>
//         </MainContent>
//       </Wrapper>
//     </>
//   );
// };

// // Styled Components
// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// // Hero Section
// const HeroSection = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #e3edf7;
//   padding: 15px 50px;
//   border-radius: 8px;
//   margin: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const HeroContent = styled.div`
//   h1 {
//     font-size: 1.8rem;
//     color: #2c374e;
//     line-height: 1.4;
//   }

//   .highlight {
//     color: #ff5e3a;
//     font-weight: bold;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//     margin-top: 0.5rem;
//   }
// `;

// // Main Content
// const MainContent = styled.div`
//   display: flex;
//   gap: 2rem;
//   margin-top: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// // Static Form Section
// const StaticForm = styled.aside`
//   flex: 1;
//   background-color: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// // Full Results Section
// const FullResults = styled.main`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   /* Add padding for better alignment */
//   padding: 0 10px;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export default AllSchools;






















// import React from "react";
// import styled from "styled-components";

// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";
// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";

// // import heroImage from "../assets/hero-image.png"; // Replace with your actual image path

// const AllSchools = () => {
//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         {/* Hero Section */}
//         <HeroSection>
//           <HeroContent>
//             <h1>
//               The <span className="highlight">#1 school directory</span> to find
//               vetted schools and programs.
//             </h1>
//             <p>
//               Search for top-rated schools with our AI powered recommendation engine
//               built to give you the most suitable institution for you. 
//             </p>
//           </HeroContent>
//           {/* <HeroImage>
//             <img src={heroImage} alt="Relaxed student" />
//           </HeroImage> */}
//         </HeroSection>

//         {/* Main Content */}
//         <MainContent>
//           {/* Left Panel: Search Form */}
//           <StaticForm>
//             <SearchAndFilter />
//           </StaticForm>

//           {/* Right Panel: Scrollable Results */}
//           <ScrollableResults>
//             <SchoolsListCom />
//             <PaginationCom />
//           </ScrollableResults>
//         </MainContent>
//       </Wrapper>
//     </>
//   );
// };

// // Styled Components
// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// // Hero Section
// const HeroSection = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #e3edf7;
//   padding: 15px 50px;
//   border-radius: 8px;
//   margin: 20px;
//   position: sticky;
//   top: 0;
//   z-index: 10;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 1rem;
//   }
// `;

// const HeroContent = styled.div`
//   flex: 1;

//   h1 {
//     font-size: 1.8rem;
//     color: #2c374e;
//     line-height: 1.4;
//   }

//   .highlight {
//     color: #ff5e3a;
//     font-weight: bold;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//     margin-top: 0.5rem;
//   }
// `;

// const HeroImage = styled.div`
//   flex: 1;
//   text-align: right;

//   img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 8px;
//   }

//   @media (max-width: 768px) {
//     text-align: center;
//   }
// `;

// // Main Content
// const MainContent = styled.div`
//   display: flex;
//   gap: 2rem;
//   margin-top: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// // Static Form Section
// const StaticForm = styled.aside`
//   flex: 1;
//   position: sticky;
//   top: 150px; /* Adjust based on hero height */
//   align-self: flex-start;
//   background-color: #f9f9f9;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     position: static;
//     width: 100%;
//   }
// `;

// // Scrollable Results Section
// const ScrollableResults = styled.main`
//   flex: 2;
//   overflow-y: auto;
//   max-height: calc(100vh - 200px); /* Adjust height based on hero and padding */
//   padding-right: 10px;

//   /* Add scrollbar styles for better aesthetics */
//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-thumb {
//     background: #1a73e8;
//     border-radius: 4px;
//   }

//   &::-webkit-scrollbar-track {
//     background: #f0f4f8;
//   }
// `;

// export default AllSchools;

















// import React from "react";
// import styled from "styled-components";

// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";
// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";

// // import heroImage from "../assets/hero-image.png"; // Replace with your actual image path

// const AllSchools = () => {
//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         {/* Hero Section */}
//         <HeroSection>
//           <HeroContent>
//             <h1>
//               The <span className="highlight">#1 school directory</span> to find
//               vetted schools and programs since 2020.
//             </h1>
//             <ul>
//               <li>✅ 100% verified and high-quality schools</li>
//               <li>✅ Undergraduate to postgraduate programs</li>
//               <li>✅ Advanced school search filters</li>
//               <li>✅ No ads or irrelevant results</li>
//             </ul>
//           </HeroContent>
//           {/* <HeroImage>
//             <img src={heroImage} alt="Relaxed student" />
//           </HeroImage> */}
//         </HeroSection>

//         {/* Stats Section */}
//         <StatsSection>
//           <StatCard>
//             <h2>1000+</h2>
//             <p>Schools Listed</p>
//           </StatCard>
//           <StatCard>
//             <h2>500+</h2>
//             <p>Scholarships Available</p>
//           </StatCard>
//           <StatCard>
//             <h2>10,000+</h2>
//             <p>Students Enrolled</p>
//           </StatCard>
//         </StatsSection>

//         {/* Search and Filter */}
//         <SearchAndFilter />

//         {/* Schools List */}
//         <SchoolsListCom />

//         {/* Pagination */}
//         <PaginationCom />
//       </Wrapper>
//     </>
//   );
// };

// // Styled Components
// const Wrapper = styled.section`
//   padding: 2rem 1.5rem;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// // Hero Section
// const HeroSection = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   background: #e3edf7;
//   padding: 20px 40px;
//   border-radius: 8px;
// `;

// const HeroContent = styled.div`
//   max-width: 60%;

//   h1 {
//     font-size: 2rem;
//     color: #2c374e;
//     line-height: 1.4;
//   }

//   .highlight {
//     color: #ff5e3a;
//     font-weight: bold;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin-top: 20px;

//     li {
//       font-size: 1rem;
//       color: #2c374e;
//       margin-bottom: 10px;
//     }
//   }
// `;

// const HeroImage = styled.div`
//   img {
//     max-width: 100%;
//     height: auto;
//     border-radius: 8px;
//   }
// `;

// // Stats Section
// const StatsSection = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   gap: 1.5rem;
//   margin-bottom: 2rem;
// `;

// const StatCard = styled.div`
//   text-align: center;
//   padding: 1rem;
//   background-color: #f0f4f8;
//   border-radius: 8px;
//   flex: 1 1 30%;

//   h2 {
//     font-size: 2rem;
//     color: #1a73e8;
//   }

//   p {
//     font-size: 1rem;
//     color: #333;
//   }
// `;
 
// export default AllSchools;

















// import React from "react";
// import styled from "styled-components";

// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";

// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";

// const AllSchools = () => {
//     return (
//         <>
//             <Navbar />
//             <Wrapper>
//                 {/* Header Section */}
//                 <HeaderSection>
//                     <h1>Discover Your Dream School</h1>
//                     <p>
//                         Use our powerful search and filtering options to find the perfect school that matches your preferences. 
//                         Start your journey today!
//                     </p>
//                 </HeaderSection>



//                 {/* Stats Section */}
//                 <StatsSection>
//                     <StatCard>
//                         <h2>1000+</h2>
//                         <p>Schools Listed</p>
//                     </StatCard>
//                     <StatCard>
//                         <h2>500+</h2>
//                         <p>Scholarships Available</p>
//                     </StatCard>
//                     <StatCard>
//                         <h2>10,000+</h2>
//                         <p>Students Enrolled</p>
//                     </StatCard>
//                 </StatsSection>

//                 {/* Form Section */}
//                 <SearchAndFilter />

//                 {/* Features Section */}
                
//                 {/* Schools List */}
//                 <SchoolsListCom />

//                 {/* Pagination */}
//                 <PaginationCom />

//             </Wrapper>
//         </>
//     );
// };

// const Wrapper = styled.section`
//     padding: 2rem 1.5rem;
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     gap: 2rem;
// `;

// // Header Section
// const HeaderSection = styled.div`
//     text-align: center;
//     margin-bottom: 2rem;

//     h1 {
//         font-size: 2.5rem;
//         color: #1a73e8;
//     }

//     p {
//         font-size: 1.2rem;
//         color: #555;
//         margin-top: 0.5rem;
//     }
// `;

// // Stats Section
// const StatsSection = styled.div`
//     display: flex;
//     justify-content: space-around;
//     gap: 1.5rem;
//     margin-bottom: 2rem;
// `;

// const StatCard = styled.div`
//     text-align: center;
//     padding: 1rem;
//     background-color: #f0f4f8;
//     border-radius: 8px;
//     width: 30%;

//     h2 {
//         font-size: 2rem;
//         color: #1a73e8;
//     }

//     p {
//         font-size: 1rem;
//         color: #333;
//     }
// `;

// // Features Section
// const FeaturesSection = styled.div`
//     text-align: center;

//     h2 {
//         font-size: 2rem;
//         margin-bottom: 1.5rem;
//         color: #333;
//     }

//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     gap: 2rem;
// `;

// const FeatureCard = styled.div`
//     width: 30%;
//     text-align: center;
//     padding: 1.5rem;
//     background-color: #f9f9f9;
//     border-radius: 8px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

//     img {
//         width: 60px;
//         margin-bottom: 1rem;
//     }

//     h3 {
//         font-size: 1.2rem;
//         color: #1a73e8;
//         margin-bottom: 0.5rem;
//     }

//     p {
//         font-size: 1rem;
//         color: #555;
//     }
// `;

// // Footer Section
// const Footer = styled.footer`
//     margin-top: 3rem;
//     text-align: center;
//     color: #555;

//     p {
//         margin-bottom: 0.5rem;
//     }
// `;

// const FooterLinks = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 1.5rem;

//     a {
//         text-decoration: none;
//         color: #1a73e8;
//         font-weight: 500;

//         &:hover {
//             text-decoration: underline;
//         }
//     }
// `;

// export default AllSchools;








// import React from "react";
// import styled from "styled-components";

// import SchoolsListCom from "../components/AllJobsPage/SchoolsListCom";
// import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";

// import Navbar from "../components/shared/Navbar";
// import PaginationCom from "../components/AllJobsPage/PaginationCom";

// const AllSchools = () => {
//     return (
//         <>
//             <Navbar />
//             <Wrapper>
//                 <SearchAndFilter />
//                 <SchoolsListCom />
//                 <PaginationCom />
//             </Wrapper>
//         </>
//     );
// };

// const Wrapper = styled.section`
//     padding: 2rem 1.5rem;
//     width: 100%;
//     max-width: 1200px;
//     margin: 0 auto;
// `;
// export default AllSchools;
