import React from 'react';
import { FaLightbulb, FaHandshake, FaChartLine, FaGlobeAfrica, FaUsers, FaAward } from 'react-icons/fa';
import { MdBusiness, MdDiversity3 } from 'react-icons/md';
import Navbar from "../components/shared/Navbar";

const AboutUs = () => {
  const businesses = [
    {
      name: "Flavor & Spicy",
      description: "Award-winning restaurant redefining Nigerian cuisine with modern twists",
      icon: <FaLightbulb className="text-3xl text-red-600" />
    },
    {
      name: "QuickFix Coworking",
      description: "Premium workspaces fostering innovation and collaboration",
      icon: <MdBusiness className="text-3xl text-green-600" />
    },
    {
      name: "QuickFix Laundry",
      description: "Eco-friendly laundry service with free pickup/delivery",
      icon: <FaHandshake className="text-3xl text-blue-500" />
    },
    {
      name: "QuickFix Pharmacy",
      description: "Trusted healthcare provider with 24/7 emergency service",
      icon: <FaChartLine className="text-3xl text-purple-600" />
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded as single restaurant in Lagos" },
    { year: "2014", event: "Expanded to 3 locations across Nigeria" },
    { year: "2017", event: "Launched QuickFix Pharmacy chain" },
    { year: "2019", event: "Opened flagship coworking space" },
    { year: "2021", event: "Introduced eco-friendly laundry services" },
    { year: "2023", event: "Recognized as Top Nigerian Conglomerate" }
  ];

  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Redefining <span className="text-yellow-400">Business Excellence</span> in Africa
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            QuickFix Events Empire is a visionary Nigerian conglomerate blending hospitality, workspace innovation, healthcare, and lifestyle services into one seamless ecosystem.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="/founder.jpg" 
                alt="Founder" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-blue-500 p-4 rounded-lg shadow-lg">
                <p className="font-bold">Est. 2010</p>
                <p className="text-sm">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <span className="border-b-4 border-yellow-400 pb-2">Our Humble</span> Beginnings
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              What started as a single restaurant in Victoria Island has blossomed into a multi-dimensional business empire transforming how Nigerians live, work, and thrive.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Founded by <strong>Chinwe Ukuku</strong>, a visionary entrepreneur, QuickFix Events Empire was born from the belief that African businesses could rival global standards while maintaining authentic local character.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="italic text-gray-700 mb-2">"We don't just provide services - we create ecosystems where businesses support and elevate each other."</p>
              <p className="font-medium text-blue-500">- Chinwe Ukuku, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Ecosystem */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Our Integrated <span className="text-blue-500">Business Ecosystem</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Synergistic services designed to complement and enhance each other
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businesses.map((business, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {business.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{business.name}</h3>
                <p className="text-gray-600">{business.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-blue-500">Journey</span> Through Time
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Milestones */}
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} items-center`}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-blue-500">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-start">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 md:hidden">
                      {/* Empty for mobile */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 md:hidden">
                      {/* Empty for mobile */}
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>
                    </div>
                    <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                      <h3 className="text-2xl font-bold text-blue-500">{milestone.year}</h3>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-blue-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-yellow-400">Core Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-500 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-blue-500 p-2 rounded-full mr-4">
                  <FaGlobeAfrica className="text-xl" />
                </div>
                <h3 className="text-xl font-bold">African Excellence</h3>
              </div>
              <p className="text-blue-100">
                We showcase the best of African innovation while meeting global standards. Our businesses celebrate local flavors, traditions, and craftsmanship.
              </p>
            </div>
            
            <div className="bg-blue-500 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-blue-500 p-2 rounded-full mr-4">
                  <FaUsers className="text-xl" />
                </div>
                <h3 className="text-xl font-bold">Community First</h3>
              </div>
              <p className="text-blue-100">
                Each business is designed to solve real Nigerian challenges. We measure success by our positive impact on customers' daily lives.
              </p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-400 text-blue-500 p-2 rounded-full mr-4">
                  <MdDiversity3 className="text-xl" />
                </div>
                <h3 className="text-xl font-bold">Synergistic Growth</h3>
              </div>
              <p className="text-blue-100">
                Our businesses support each other - from coworking members getting restaurant discounts to pharmacy deliveries for laundry customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Meet Our <span className="text-blue-500">Leadership</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
              <img src="/ceo.jpg" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Chinwe Ukuku</h3>
            <p className="text-blue-500 font-medium mb-3">Founder & CEO</p>
            <p className="text-gray-600">
              Visionary entrepreneur with 15+ years building businesses that redefine industries.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
              <img src="/coo.jpg" alt="COO" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Amina Balogun</h3>
            <p className="text-blue-500 font-medium mb-3">Chief Operations Officer</p>
            <p className="text-gray-600">
              Operations expert ensuring seamless service across all business units.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
              <img src="/cmo.jpg" alt="CMO" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Emeka Nwankwo</h3>
            <p className="text-blue-500 font-medium mb-3">Chief Marketing Officer</p>
            <p className="text-gray-600">
              Brand strategist crafting our unified yet distinctive business identities.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <FaAward className="text-4xl mx-auto text-yellow-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Our Success Story</h2>
            <p className="text-xl text-blue-100 mb-6">
              Whether as a customer, partner, or team member - be part of redefining African business excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-500 font-bold py-3 px-8 rounded-full transition duration-300">
                Explore Careers
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;














// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import Navbar from "../components/shared/Navbar";
// import { FaCheck, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUserTie, FaEnvelope, FaBook, FaFileAlt } from 'react-icons/fa';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const About = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };

//   const accordionData = [
//     {
//       question: "Who We Are",
//       answer:
//         "Scovers is a leading education platform dedicated to helping students achieve their dreams of studying abroad. We partner with top universities worldwide to provide access to the best educational opportunities.",
//     },
//     {
//       question: "Our Mission",
//       answer:
//         "Our mission is to make studying abroad accessible and stress-free. We provide personalized guidance, from course selection to application submission, ensuring students maximize their potential.",
//     },
//     {
//       question: "Why Choose Us?",
//       answer:
//         "With a network of experienced counselors and partner universities, we offer tailored solutions to meet your educational goals. Our platform simplifies the process, saving you time and effort.",
//     },
//   ];

//   // Slider settings for universities
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1
//         }
//       }
//     ]
//   };

//   const universities = [
//     { name: 'University of Michigan', logo: '/michigan.png' },
//     { name: 'University of Toronto', logo: '/michigan.png' },
//     { name: 'University of Melbourne', logo: '/michigan.png' },
//     { name: 'University College London', logo: '/michigan.png' },
//     { name: 'University of Edinburgh', logo: '/michigan.png' },
//   ];

//   const benefits = [
//     "Direct interaction with university representatives",
//     "Detailed information about study programs and admission requirements",
//     "Scholarship and funding opportunities",
//     "Visa and accommodation guidance",
//     "Career prospects after graduation",
//     "Q&A session with our education experts",
//     "Exclusive application fee waivers for attendees",
//     "Personalized counseling sessions available"
//   ];

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
//           <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
//             About Scovers Education
//           </h1>
//           <p className="text-xl text-white max-w-2xl">
//             Your trusted partner in global education and university admissions
//           </p>
//         </div>
//       </div>
//       {/* <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col justify-center items-center text-center">
//           <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
//             About Scovers Education
//           </h1>
//           <p className="text-xl text-white max-w-2xl">
//             Your trusted partner in global education and university admissions
//           </p>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             {/* About Us Section */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-medium mb-6">OUR STORY</h2>
//               <p className="text-white mb-4">
//                 Founded in 2015, Scovers has helped thousands of students achieve their dreams of studying abroad. 
//                 We started with a simple mission: to make quality education accessible to everyone, regardless of 
//                 their background or location.
//               </p>
//               <p className="text-white">
//                 Today, we partner with over 200 institutions across 15 countries, offering personalized 
//                 guidance and support throughout the entire application process.
//               </p>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-medium text-[#2D8CD4] mb-6">Partner Universities</h2>
//               <Slider {...sliderSettings}>
//                 {universities.map((uni, index) => (
//                   <div key={index} className="px-2">
//                     <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center h-40 justify-center">
//                       <img src={uni.logo} alt={uni.name} className="h-16 object-contain mb-2" />
//                       <p className="text-center font-medium">{uni.name}</p>
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>

//             {/* Our Values */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-medium text-[#2D8CD4] mb-4">Our Values</h2>
//               <div className="space-y-3">
//                 {benefits.slice(0, 5).map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <FaCheck className="text-[#2D8CD4] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Team Section */}
//             <div className="bg-[#2D8CD4]/10 p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-[#2D8CD4] mb-6">Our Team</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="flex items-start gap-4">
//                   <FaUserTie className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Experienced Counselors</h3>
//                     <p className="text-gray-700">Our team includes education experts with years of experience in international admissions.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaBook className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Alumni Network</h3>
//                     <p className="text-gray-700">Connect with our global alumni community for insights and mentorship.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaFileAlt className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Success Stories</h3>
//                     <p className="text-gray-700">Over 5,000 successful placements in top universities worldwide.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaEnvelope className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Continuous Support</h3>
//                     <p className="text-gray-700">We provide ongoing assistance even after you've secured admission.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="md:w-1/3">
//             {/* Quick Facts */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h3 className="text-2xl font-medium text-[#2D8CD4] mb-6">Quick Facts</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <FaCalendarAlt className="text-[#2D8CD4] mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-1">Founded</h3>
//                     <p className="text-gray-700">2015</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-[#2D8CD4] mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-1">Headquarters</h3>
//                     <p className="text-gray-700">San Francisco, CA</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaClock className="text-[#2D8CD4] mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-1">Operating Hours</h3>
//                     <p className="text-gray-700">Mon-Fri: 9AM - 6PM</p>
//                     <p className="text-sm text-gray-500">Sat: 10AM - 4PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Video Section */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h3 className="text-2xl font-medium text-[#2D8CD4] mb-4">Our Story</h3>
//               <div className="video-container rounded-lg overflow-hidden">
//                 <video 
//                   controls 
//                   className="w-full"
//                   poster="/video-poster.jpg"
//                 >
//                   <source src="/testimony1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>

//             {/* FAQ Accordion */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-medium text-[#2D8CD4] mb-6">FAQs</h3>
//               <div className="space-y-4">
//                 {accordionData.map((item, index) => (
//                   <div 
//                     key={index}
//                     className={`border-b border-gray-200 pb-4 ${activeAccordion === index ? 'active' : ''}`}
//                   >
//                     <div 
//                       className="flex justify-between items-center cursor-pointer"
//                       onClick={() => toggleAccordion(index)}
//                     >
//                       <h4 className="font-medium text-gray-800">{item.question}</h4>
//                       <span className="text-[#2D8CD4] text-xl">
//                         {activeAccordion === index ? '-' : '+'}
//                       </span>
//                     </div>
//                     {activeAccordion === index && (
//                       <motion.p 
//                         className="text-gray-600 mt-2"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {item.answer}
//                       </motion.p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-12">
//           <h2 className="text-3xl font-medium text-[#2D8CD4] text-center mb-6">Contact Us</h2>
//           <p className="text-center text-gray-600 mb-8">
//             Have questions about studying abroad? Our team is here to help you every step of the way.
//           </p>
//           <form className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
//                 <input 
//                   type="text" 
//                   id="name" 
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D8CD4]"
//                   placeholder="Your name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
//                 <input 
//                   type="email" 
//                   id="email" 
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D8CD4]"
//                   placeholder="Your email"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
//               <textarea 
//                 id="message" 
//                 rows="5" 
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2D8CD4]"
//                 placeholder="How can we help you?"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white font-medium py-3 px-6 rounded-lg transition-colors"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;














// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import Navbar from "../components/shared/Navbar";

// const About = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };

//   const accordionData = [
//     {
//       question: "Who We Are",
//       answer:
//         "Scovers is a leading education platform dedicated to helping students achieve their dreams of studying abroad. We partner with top universities worldwide to provide access to the best educational opportunities.",
//     },
//     {
//       question: "Our Mission",
//       answer:
//         "Our mission is to make studying abroad accessible and stress-free. We provide personalized guidance, from course selection to application submission, ensuring students maximize their potential.",
//     },
//     {
//       question: "Why Choose Us?",
//       answer:
//         "With a network of experienced counselors and partner universities, we offer tailored solutions to meet your educational goals. Our platform simplifies the process, saving you time and effort.",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         {/* Image Banner Section */}
//         <BannerSection>
//           <div className="banner-content">
//             {/* <h1>About Us</h1> */}
//           </div>
//         </BannerSection>

//         {/* About Us Text Section */}
//         <AboutTextSection>
//           <h2>Welcome to Scovers</h2>
//           <p>
//             Scovers is a leading education platform dedicated to helping students achieve their dreams of studying abroad. We partner with top universities worldwide to provide access to the best educational opportunities. Our mission is to make studying abroad accessible and stress-free. We provide personalized guidance, from course selection to application submission, ensuring students maximize their potential.
//           </p>
//         </AboutTextSection>

//         {/* Video Section with iframe */}
//         <VideoSection>
//           <div className="video-container">
//             <iframe
//               className="video"
//               src="/testimony1.mp4"
//               title="Testimonial Video"
//               frameBorder="0"
//               allow="autoplay; fullscreen"
//             ></iframe>
//           </div>
//         </VideoSection>

//         {/* Accordion Section */}
//         <AccordionSection>
//           <h2>Frequently Asked Questions</h2>
//           <div className="accordion">
//             {accordionData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`accordion-item ${
//                   activeAccordion === index ? "active" : ""
//                 }`}
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="accordion-question">
//                   <h3>{item.question}</h3>
//                   <span>{activeAccordion === index ? "-" : "+"}</span>
//                 </div>
//                 {activeAccordion === index && (
//                   <motion.div
//                     className="accordion-answer"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <p>{item.answer}</p>
//                   </motion.div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </AccordionSection>

//         {/* Contact Form Section */}
//         <ContactSection>
//           <h2>Contact Us</h2>
//           <p>Have questions? Reach out to us, and we'll be happy to assist you.</p>
//           <form className="contact-form">
//             <div className="form-group">
//               <input type="text" placeholder="Your Name" required />
//             </div>
//             <div className="form-group">
//               <input type="email" placeholder="Your Email" required />
//             </div>
//             <div className="form-group">
//               <textarea placeholder="Your Message" rows="5" required></textarea>
//             </div>
//             <button type="submit" className="submit-button">
//               Send Message
//             </button>
//           </form>
//         </ContactSection>
//       </Wrapper>
//     </>
//   );
// };

// // Styled Components
// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;

//   @media (max-width: 768px) {
//     padding: 0 10px;
//   }
// `;

// const BannerSection = styled.section`
//   position: relative;
//   height: 200px; /* Reduced height */
//   background-image: url("/about.jpg");
//   background-size: cover;
//   background-position: center;
//   overflow: hidden;
//   width: 100%; /* Ensure it spans the full width */

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here */
//   }

//   .banner-content {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     color: white;
//     z-index: 1;

//     h1 {
//       font-size: 2.5rem; /* Adjusted font size */
//       margin: 0;
//     }
//   }

//   @media (max-width: 768px) {
//     height: 150px;

//     .banner-content h1 {
//       font-size: 2rem;
//     }
//   }
// `;

// const AboutTextSection = styled.section`
//   margin: 40px 0;
//   text-align: center;

//   h2 {
//     font-size: 2rem;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 1rem;
//     color: #555;
//     line-height: 1.6;
//     max-width: 800px;
//     margin: 0 auto;
//   }

//   @media (max-width: 768px) {
//     margin: 20px 0;

//     h2 {
//       font-size: 1.8rem;
//     }

//     p {
//       font-size: 0.9rem;
//     }
//   }
// `;

// const VideoSection = styled.section`
//   margin: 40px 0;

//   .video-container {
//     max-width: 800px;
//     margin: 0 auto;
//     border-radius: 10px;
//     overflow: hidden;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   }

//   .video {
//     width: 100%;
//     height: 450px;
//   }

//   @media (max-width: 768px) {
//     .video {
//       height: 300px;
//     }
//   }
// `;

// const AccordionSection = styled.section`
//   margin: 40px 0;

//   h2 {
//     text-align: center;
//     font-size: 2rem;
//     margin-bottom: 20px;
//   }

//   .accordion {
//     max-width: 800px;
//     margin: 0 auto;
//   }

//   .accordion-item {
//     border-bottom: 1px solid #ddd;
//     padding: 15px 0;
//     cursor: pointer;
//   }

//   .accordion-question {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     h3 {
//       font-size: 1.2rem;
//       margin: 0;
//     }

//     span {
//       font-size: 1.5rem;
//     }
//   }

//   .accordion-answer {
//     padding-top: 10px;
//     p {
//       margin: 0;
//       color: #555;
//     }
//   }

//   @media (max-width: 768px) {
//     h2 {
//       font-size: 1.8rem;
//     }

//     .accordion-question h3 {
//       font-size: 1rem;
//     }
//   }
// `;

// const ContactSection = styled.section`
//   margin: 40px 0;

//   h2 {
//     text-align: center;
//     font-size: 2rem;
//     margin-bottom: 10px;
//   }

//   p {
//     text-align: center;
//     color: #555;
//     margin-bottom: 20px;
//   }

//   .contact-form {
//     max-width: 600px;
//     margin: 0 auto;
//     padding: 20px;
//     background: #f9f9f9;
//     border-radius: 10px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   }

//   .form-group {
//     margin-bottom: 15px;

//     input,
//     textarea {
//       width: 100%;
//       padding: 10px;
//       border: 1px solid #ddd;
//       border-radius: 5px;
//       font-size: 1rem;
//     }

//     textarea {
//       resize: vertical;
//     }
//   }

//   .submit-button {
//     width: 100%;
//     padding: 10px;
//     background: #247bf7;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background 0.3s ease;

//     &:hover {
//       background: #1a5bbf;
//     }
//   }

//   @media (max-width: 768px) {
//     h2 {
//       font-size: 1.8rem;
//     }

//     p {
//       font-size: 0.9rem;
//     }

//     .contact-form {
//       padding: 15px;
//     }

//     .form-group input,
//     .form-group textarea {
//       font-size: 0.9rem;
//     }
//   }
// `;

// export default About;



























// import React, { useState } from "react";
// import styled from "styled-components";
// import { motion } from "framer-motion";
// import Navbar from "../components/shared/Navbar";

// const About = () => {
//   const [activeAccordion, setActiveAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveAccordion(activeAccordion === index ? null : index);
//   };

//   const accordionData = [
//     {
//       question: "Who We Are",
//       answer:
//         "Scovers is a leading education platform dedicated to helping students achieve their dreams of studying abroad. We partner with top universities worldwide to provide access to the best educational opportunities.",
//     },
//     {
//       question: "Our Mission",
//       answer:
//         "Our mission is to make studying abroad accessible and stress-free. We provide personalized guidance, from course selection to application submission, ensuring students maximize their potential.",
//     },
//     {
//       question: "Why Choose Us?",
//       answer:
//         "With a network of experienced counselors and partner universities, we offer tailored solutions to meet your educational goals. Our platform simplifies the process, saving you time and effort.",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <Wrapper>
//         {/* Image Banner Section */}
//         <BannerSection>
//           <div className="banner-content">
//             {/* <h1>About Us</h1> */}
//           </div>
//         </BannerSection>

//         {/* Video Section with iframe */}
//         <VideoSection>
//           <div className="video-container">
//             <iframe
//               className="video"
//               src="/testimony.mp4"
//               title="Testimonial Video"
//               frameBorder="0"
//               allow="autoplay; fullscreen"
//             ></iframe>
//           </div>
//         </VideoSection>

//         {/* Accordion Section */}
//         <AccordionSection>
//           <h2>Frequently Asked Questions</h2>
//           <div className="accordion">
//             {accordionData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`accordion-item ${
//                   activeAccordion === index ? "active" : ""
//                 }`}
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="accordion-question">
//                   <h3>{item.question}</h3>
//                   <span>{activeAccordion === index ? "-" : "+"}</span>
//                 </div>
//                 {activeAccordion === index && (
//                   <motion.div
//                     className="accordion-answer"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <p>{item.answer}</p>
//                   </motion.div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </AccordionSection>

//         {/* Contact Form Section */}
//         <ContactSection>
//           <h2>Contact Us</h2>
//           <p>Have questions? Reach out to us, and we'll be happy to assist you.</p>
//           <form className="contact-form">
//             <div className="form-group">
//               <input type="text" placeholder="Your Name" required />
//             </div>
//             <div className="form-group">
//               <input type="email" placeholder="Your Email" required />
//             </div>
//             <div className="form-group">
//               <textarea placeholder="Your Message" rows="5" required></textarea>
//             </div>
//             <button type="submit" className="submit-button">
//               Send Message
//             </button>
//           </form>
//         </ContactSection>
//       </Wrapper>
//     </>
//   );
// };

// // Styled Components
// const Wrapper = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
// `;

// const BannerSection = styled.section`
//   position: relative;
//   height: 200px; /* Reduced height */
//   background-image: url("/about.jpg");
//   background-size: cover;
//   background-position: center;
//   overflow: hidden;
//   width: 100%; /* Ensure it spans the full width */

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here */
//   }

//   .banner-content {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     text-align: center;
//     color: white;
//     z-index: 1;

//     h1 {
//       font-size: 2.5rem; /* Adjusted font size */
//       margin: 0;
//     }
//   }
// `;

// const VideoSection = styled.section`
//   margin: 40px 0;

//   .video-container {
//     max-width: 800px;
//     margin: 0 auto;
//     border-radius: 10px;
//     overflow: hidden;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   }

//   .video {
//     width: 100%;
//     height: 450px;
//   }
// `;

// const AccordionSection = styled.section`
//   margin: 40px 0;

//   h2 {
//     text-align: center;
//     font-size: 2rem;
//     margin-bottom: 20px;
//   }

//   .accordion {
//     max-width: 800px;
//     margin: 0 auto;
//   }

//   .accordion-item {
//     border-bottom: 1px solid #ddd;
//     padding: 15px 0;
//     cursor: pointer;
//   }

//   .accordion-question {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     h3 {
//       font-size: 1.2rem;
//       margin: 0;
//     }

//     span {
//       font-size: 1.5rem;
//     }
//   }

//   .accordion-answer {
//     padding-top: 10px;
//     p {
//       margin: 0;
//       color: #555;
//     }
//   }
// `;

// const ContactSection = styled.section`
//   margin: 40px 0;

//   h2 {
//     text-align: center;
//     font-size: 2rem;
//     margin-bottom: 10px;
//   }

//   p {
//     text-align: center;
//     color: #555;
//     margin-bottom: 20px;
//   }

//   .contact-form {
//     max-width: 600px;
//     margin: 0 auto;
//     padding: 20px;
//     background: #f9f9f9;
//     border-radius: 10px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   }

//   .form-group {
//     margin-bottom: 15px;

//     input,
//     textarea {
//       width: 100%;
//       padding: 10px;
//       border: 1px solid #ddd;
//       border-radius: 5px;
//       font-size: 1rem;
//     }

//     textarea {
//       resize: vertical;
//     }
//   }

//   .submit-button {
//     width: 100%;
//     padding: 10px;
//     background: #247bf7;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background 0.3s ease;

//     &:hover {
//       background: #1a5bbf;
//     }
//   }
// `;

// export default About;