import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/shared/Navbar";
import { FaTshirt, FaCheck, FaShippingFast, FaLeaf, FaStar, FaRegClock, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdLocalLaundryService, MdIron, MdDryCleaning } from 'react-icons/md';

const LaundryService = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceType: 'wash-fold',
    pickupDate: '',
    specialInstructions: ''
  });

  const servicePackages = [
    {
      type: 'wash-fold',
      name: 'Wash & Fold',
      price: '₦1,500',
      per: '/kg',
      features: [
        'Professional washing',
        'Gentle detergent',
        'Low-heat drying',
        'Neat folding',
        'Next-day delivery'
      ],
      popular: true
    },
    {
      type: 'dry-clean',
      name: 'Dry Cleaning',
      price: '₦2,500',
      per: '/item',
      features: [
        'Expert stain removal',
        'Premium cleaning solvents',
        'Garment inspection',
        'Professional pressing',
        'Protective packaging'
      ],
      popular: false
    },
    {
      type: 'iron-only',
      name: 'Iron Only',
      price: '₦800',
      per: '/item',
      features: [
        'Professional steaming',
        'Wrinkle removal',
        'Garment inspection',
        'Neat hanging',
        'Same-day service'
      ],
      popular: false
    },
    {
      type: 'premium',
      name: 'Premium Care',
      price: '₦4,000',
      per: '/kg',
      features: [
        'Hand washing',
        'Eco-friendly detergents',
        'Line drying',
        'Special fabric care',
        'VIP packaging'
      ],
      popular: false
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Service requested:', formData);
    alert('Thank you for your laundry request! We will contact you shortly to confirm pickup details.');
    setFormData({
      name: '',
      phone: '',
      address: '',
      serviceType: 'wash-fold',
      pickupDate: '',
      specialInstructions: ''
    });
  };

  // Slider settings for testimonials
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  const features = [
    { icon: <MdLocalLaundryService size={24} />, name: 'Same-Day Service' },
    { icon: <FaShippingFast size={24} />, name: 'Free Pickup & Delivery' },
    { icon: <MdIron size={24} />, name: 'Expert Ironing' },
    { icon: <FaLeaf size={24} />, name: 'Eco-Friendly' },
    { icon: <MdDryCleaning size={24} />, name: 'Dry Cleaning' },
    { icon: <FaTshirt size={24} />, name: 'Special Fabric Care' }
  ];

  const testimonials = [
    {
      quote: "My clothes have never looked better! QuickFix Laundry saves me so much time each week.",
      author: "Chioma A.",
      role: "Regular Customer"
    },
    {
      quote: "The stain removal on my favorite dress was magical. I thought it was ruined forever!",
      author: "Emeka B.",
      role: "Dry Cleaning Customer"
    },
    {
      quote: "As a busy executive, their pickup service is a lifesaver. Always on time and perfect results.",
      author: "Adeola K.",
      role: "Corporate Client"
    }
  ];

  const whatsappNumber = "+2349065219811";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace('+', '')}?text=I'd like to schedule a laundry pickup!`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="text-green-500">Laundry Service</span> in Port Harcourt
          </h1>
          <p className="text-xl text-white max-w-2xl mb-8">
            We handle your laundry with care so you can focus on what matters. Free pickup and delivery included.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center"
            >
              <FaWhatsapp className="mr-2" /> Schedule Pickup
            </a>
            <button 
              onClick={() => document.getElementById('service-plans').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/hero22.jpg" 
              alt="QuickFix Laundry Service" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <MdLocalLaundryService className="inline text-green-600 mr-3" />
              Our Laundry Care
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              QuickFix Laundry provides professional cleaning services with attention to detail. We use premium detergents and state-of-the-art equipment to ensure your clothes look their best.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our team is trained in handling all fabric types, from everyday wear to delicate garments requiring special care.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-100 px-4 py-2 rounded-full flex items-center">
                <FaStar className="text-green-600 mr-2" />
                <span className="font-medium">4.8/5 (300+ Reviews)</span>
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-full flex items-center">
                <FaRegClock className="text-green-600 mr-2" />
                <span className="font-medium">Same-Day Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Why Choose Our Service
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional care that makes your clothes look and feel better
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-green-600 mb-3 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-gray-800">{feature.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div className="max-w-7xl mx-auto px-4 py-16" id="service-plans">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Our Service Packages
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Affordable options for all your laundry needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePackages.map((service) => (
            <div 
              key={service.type} 
              className={`relative rounded-lg overflow-hidden shadow-md ${service.popular ? 'border-2 border-green-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">{service.price}<span className="text-sm text-gray-500">{service.per}</span></p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, serviceType: service.type }));
                    document.getElementById('service-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                    service.popular 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-blue-100 hover:bg-blue-200 text-green-700'
                  }`}
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Request Form */}
      <div className="max-w-7xl mx-auto px-4 py-8" id="service-form">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-green-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Schedule Your Laundry Service</h2>
              <p className="mb-6">Fill out this form and we'll contact you to confirm pickup details within 1 hour.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShippingFast className="text-xl mt-1" />
                  <div>
                    <h3 className="font-medium">Free Pickup & Delivery</h3>
                    <p className="text-blue-100 text-sm">We come to you at your convenience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MdLocalLaundryService className="text-xl mt-1" />
                  <div>
                    <h3 className="font-medium">Professional Care</h3>
                    <p className="text-blue-100 text-sm">Expert handling of all fabric types</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaLeaf className="text-xl mt-1" />
                  <div>
                    <h3 className="font-medium">Eco-Friendly</h3>
                    <p className="text-blue-100 text-sm">Gentle on clothes and environment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Request</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="border p-3 rounded w-full"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="border p-3 rounded w-full"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    className="border p-3 rounded w-full"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Service Type</label>
                  <select
                    name="serviceType"
                    className="border p-3 rounded w-full"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="wash-fold">Wash & Fold</option>
                    <option value="dry-clean">Dry Cleaning</option>
                    <option value="iron-only">Iron Only</option>
                    <option value="premium">Premium Care</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Preferred Pickup Date</label>
                  <input
                    type="date"
                    name="pickupDate"
                    className="border p-3 rounded w-full"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Special Instructions</label>
                  <textarea
                    name="specialInstructions"
                    rows="3"
                    className="border p-3 rounded w-full"
                    value={formData.specialInstructions}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded w-full font-medium transition-colors"
                >
                  Request Service
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <p className="text-gray-600 italic text-lg mb-6">"{testimonial.quote}"</p>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Location & Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Facility
            </h2>
            <p className="text-gray-600 mb-6">
              Visit our state-of-the-art laundry facility in Port Harcourt. We welcome inspections to see our professional equipment and processes.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">456 Clean Street, Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaRegClock className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Operating Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 7:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Contact</h3>
                  <p className="text-gray-600">+234 906 521 9811</p>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300"
                  >
                    <FaWhatsapp className="mr-2" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.621646382358!2d3.421587415231639!3d6.428326295338438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3c4c0f%3A0x5f5e75f4a34e602!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryService;
















// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SATContext";
// import Navbar from "../components/shared/Navbar";
// import { 
//   FaCalendarAlt, 
//   FaClock, 
//   FaMapMarkerAlt, 
//   FaCheck, 
//   FaTrophy,
//   FaSchool, 
//   FaUserGraduate,
//   FaMedal,
//   FaChartLine,
//   FaAward,
//   FaUsers,
//   FaMoneyBillWave
// } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // School rankings data
//   const [leaderboard, setLeaderboard] = useState([
//     { rank: 1, school: 'Greenwood High', score: 1540, students: 28 },
//     { rank: 2, school: 'Sunrise Academy', score: 1510, students: 32 },
//     { rank: 3, school: 'Preston International', score: 1490, students: 24 },
//     { rank: 4, school: 'Heritage College', score: 1475, students: 19 },
//     { rank: 5, school: 'Maplewood Secondary', score: 1460, students: 22 }
//   ]);

//   // Next competition date
//   const competitionDate = new Date('2025-06-15T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = competitionDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   const competitionStats = [
//     { icon: <FaSchool className="text-2xl" />, value: "42+", label: "Schools Registered" },
//     { icon: <FaUserGraduate className="text-2xl" />, value: "387+", label: "Students Competing" },
//     { icon: <FaAward className="text-2xl" />, value: "₦50,000", label: "Total Prize Pool" }
//   ];

//   const programBenefits = [
//     "Standardized mock test for Math and English",
//     "Determine your readiness for SAT exams",
//     "Win scholarships and cash prizes",
//     "Benchmark your performance before the real SAT",
//     "Special recognition for top performers",
//     "First prize: Up to 80% scholarship with partner institutions",
//     "Free application process for first prize winner"
//   ];

//   const prizes = [
//     {
//       title: "First Prize",
//       icon: <FaTrophy className="text-3xl text-yellow-500" />,
//       description: "Best performing student with a minimum of 3.4 GPA stands the chance of securing up to 80% scholarship with our partner institutions in the United States. Plus free application process handled by Scovers Education.",
//       additional: "Free live SAT registration for students scoring 1400+ on SAT (T&C apply)"
//     },
//     {
//       title: "Second Prize",
//       icon: <FaMoneyBillWave className="text-3xl text-gray-500" />,
//       description: "Cash reward of ₦30,000",
//       additional: ""
//     },
//     {
//       title: "Third Prize",
//       icon: <FaMedal className="text-3xl text-amber-600" />,
//       description: "Cash reward of ₦20,000",
//       additional: ""
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />
      
//       {/* Hero Section with Image Background */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text - reduced height */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
//               SAT Preparation Mock Test
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               A standardized Math and English test to assess your readiness for college admissions
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4">Next Test Begins In</h3>
//             <div className="grid grid-cols-4 gap-2">
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.days}</div>
//                 <div className="text-xs text-white/80">DAYS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.hours}</div>
//                 <div className="text-xs text-white/80">HOURS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.minutes}</div>
//                 <div className="text-xs text-white/80">MINS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.seconds}</div>
//                 <div className="text-xs text-white/80">SECS</div>
//               </div>
//             </div>
//             <button 
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//               className="mt-4 bg-white text-[#2D8CD4] hover:bg-gray-100 font-medium py-2 px-6 rounded transition-colors"
//             >
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-8 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {competitionStats.map((stat, index) => (
//               <div key={index} className="text-center p-4">
//                 <div className="text-blue-600 flex justify-center mb-2">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-medium text-gray-800">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Program Details */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* About the Test */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6">About the Test</h2>
//               <div className="border-b border-gray-200 pb-6 mb-6">
//                 <p className="text-gray-600">
//                   This is a Math and English standardized mock test designed for students preparing for college admissions.
//                   The aim is to determine the adequacy of students preparing to study abroad for the SAT exams.
//                 </p>
//               </div>
              
//               <h3 className="text-xl font-medium text-blue-600 mb-4">Program Benefits</h3>
//               <ul className="space-y-3">
//                 {programBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
//                     <span className="text-gray-600">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Prizes Section */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6">Prizes</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {prizes.map((prize, index) => (
//                   <div key={index} className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
//                     <div className="flex justify-center mb-4">
//                       {prize.icon}
//                     </div>
//                     <h3 className="text-xl font-medium text-gray-800 mb-2">{prize.title}</h3>
//                     <p className="text-gray-600 mb-3">{prize.description}</p>
//                     {prize.additional && (
//                       <p className="text-sm text-blue-600">{prize.additional}</p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Test Schedule */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6">Test Schedule</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaCalendarAlt className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Test Date</h3>
//                     <p className="text-gray-600">To be announced</p>
//                     <p className="text-gray-500 text-sm mt-1">Check back for updates on the test schedule</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaClock className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Duration</h3>
//                     <p className="text-gray-600">Approximately 3 hours</p>
//                     <p className="text-gray-500 text-sm mt-1">Timed sections for Math and English</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaTrophy className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Results Announcement</h3>
//                     <p className="text-gray-600">Within 2 weeks of test completion</p>
//                     <p className="text-gray-500 text-sm mt-1">Detailed score reports will be provided</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* School Rankings with Light Blue Background */}
//             {/* <div className="bg-blue-50 p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6 text-left">
//                 Current School Rankings
//               </h2>
//               <p className="text-gray-600 mb-4">School rankings are currently being calculated and will be updated soon.</p>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg overflow-hidden">
//                   <thead className="bg-blue-100">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Rank</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">School</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Avg Score</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Students</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {leaderboard.map((school) => (
//                       <tr key={school.rank}>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {school.rank === 1 ? (
//                             <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">🥇 1st</span>
//                           ) : school.rank === 2 ? (
//                             <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">🥈 2nd</span>
//                           ) : school.rank === 3 ? (
//                             <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">🥉 3rd</span>
//                           ) : (
//                             `#${school.rank}`
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-medium">{school.school}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.score}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.students}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div> */} 



//             {/* SCHOOOOOOOOOL STAT PENDINGGGGGGGGGGG */}

//             {/* School Rankings with Light Blue Background */}
//             <div className="bg-blue-50 p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6 text-left">
//                 Current School Rankings
//               </h2>
//               <div className="text-center py-10">
//                 <div className="inline-block bg-white p-6 rounded-lg shadow-sm">
//                   <FaChartLine className="text-4xl text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-medium text-gray-700 mb-2">Rankings Pending</h3>
//                   <p className="text-gray-500">School rankings will be available soon.</p>
//                 </div>
//               </div>
//             </div>



//           </div>

//           {/* Registration Form */}
//           <div className="lg:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
//               <h3 className="text-xl font-medium text-blue-600 mb-6 text-left">Mock Test Registration</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.dob}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current Class</label>
//                   <select
//                     name="currentClass"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentClass}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="JSS">Junior Secondary School</option>
//                     <option value="SSS">Senior Secondary School</option>
//                     <option value="Grade 11">Grade 11</option>
//                     <option value="Grade 12">Grade 12</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current GPA (5.0 scale)</label>
//                   <select
//                     name="currentGPA"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {gpaOptions.map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 3.4 && (
//                     <p className="text-yellow-600 text-xs mt-1">
//                       Note: Minimum 3.4 GPA required for scholarship consideration
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="isStraightAStudent"
//                     id="isStraightAStudent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.isStraightAStudent}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="isStraightAStudent" className="ml-2 text-sm text-gray-600">
//                     Are you a straight A student?
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="interestInStudyingAbroad"
//                     id="interestInStudyingAbroad"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.interestInStudyingAbroad}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="interestInStudyingAbroad" className="ml-2 text-sm text-gray-600">
//                     Interested in studying abroad?
//                   </label>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Sponsorship Availability</label>
//                   <select
//                     name="sponsorAvailability"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.sponsorAvailability}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="none">No sponsor available</option>
//                     <option value="5000-7000">$5,000 - $7,000</option>
//                     <option value="7000-15000">$7,000 - $15,000</option>
//                     <option value="15000-20000">$15,000 - $20,000</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">How did you hear about us?</label>
//                   <select
//                     name="referralSource"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.referralSource}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="Social Media">Social Media</option>
//                     <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//                     <option value="Individual Recommendation">Individual Recommendation</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
                
//                 {formData.referralSource === 'Individual Recommendation' && (
//                   <>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Name</label>
//                       <input
//                         type="text"
//                         name="referrerName"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Phone</label>
//                       <input
//                         type="tel"
//                         name="referrerPhone"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerPhone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Email</label>
//                       <input
//                         type="email"
//                         name="referrerEmail"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </>
//                 )}
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="parentConsent"
//                     id="parentConsent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.parentConsent}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="parentConsent" className="ml-2 text-sm text-gray-600">
//                     I have parent/guardian consent
//                   </label>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register for Mock Test'}
//                 </button>
                
//                 {error && (
//                   <p className="text-red-500 text-sm mt-2">{error}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;













// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SATContext";
// import Navbar from "../components/shared/Navbar";
// import { 
//   FaCalendarAlt, 
//   FaClock, 
//   FaMapMarkerAlt, 
//   FaCheck, 
//   FaTrophy,
//   FaSchool, 
//   FaUserGraduate,
//   FaMedal,
//   FaChartLine,
//   FaAward,
//   FaUsers
// } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // School rankings data
//   const [leaderboard, setLeaderboard] = useState([
//     { rank: 1, school: 'Greenwood High', score: 1540, students: 28 },
//     { rank: 2, school: 'Sunrise Academy', score: 1510, students: 32 },
//     { rank: 3, school: 'Preston International', score: 1490, students: 24 },
//     { rank: 4, school: 'Heritage College', score: 1475, students: 19 },
//     { rank: 5, school: 'Maplewood Secondary', score: 1460, students: 22 }
//   ]);

//   // Next competition date
//   const competitionDate = new Date('2025-06-15T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = competitionDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   const competitionStats = [
//     { icon: <FaSchool className="text-2xl" />, value: "42+", label: "Schools Registered" },
//     { icon: <FaUserGraduate className="text-2xl" />, value: "387+", label: "Students Competing" },
//     { icon: <FaAward className="text-2xl" />, value: "$15,000", label: "Total Prize Pool" }
//   ];

//   const programBenefits = [
//     "Compete against top students from across the region",
//     "Win scholarships and academic prizes",
//     "Benchmark your performance before the real SAT",
//     "Gain recognition for your school",
//     "Special awards for top-performing schools",
//     "College admission officers attending",
//     "Networking with high-achieving peers"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />
      
//       {/* Hero Section with Image Background */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text - reduced height */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
//               Annual Inter-School SAT Challenge
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               Compete with the brightest minds and showcase your academic excellence
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4">Next Competition Begins In</h3>
//             <div className="grid grid-cols-4 gap-2">
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.days}</div>
//                 <div className="text-xs text-white/80">DAYS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.hours}</div>
//                 <div className="text-xs text-white/80">HOURS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.minutes}</div>
//                 <div className="text-xs text-white/80">MINS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.seconds}</div>
//                 <div className="text-xs text-white/80">SECS</div>
//               </div>
//             </div>
//             <button 
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//               className="mt-4 bg-white text-[#2D8CD4] hover:bg-gray-100 font-medium py-2 px-6 rounded transition-colors"
//             >
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-8 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {competitionStats.map((stat, index) => (
//               <div key={index} className="text-center p-4">
//                 <div className="text-blue-600 flex justify-center mb-2">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-medium text-gray-800">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Program Details */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* About the Competition */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6">About the Competition</h2>
//               <div className="border-b border-gray-200 pb-6 mb-6">
//                 <p className="text-gray-600">
//                   Our annual inter-school SAT challenge brings together the brightest students from across the region 
//                   to compete in a rigorous academic competition. This event serves as both a mock exam and a 
//                   scholarship competition, with top performers earning recognition and financial awards.
//                 </p>
//               </div>
              
//               <h3 className="text-xl font-medium text-blue-600 mb-4">Program Benefits</h3>
//               <ul className="space-y-3">
//                 {programBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
//                     <span className="text-gray-600">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Competition Schedule */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6">Event Schedule</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaCalendarAlt className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 1: Orientation</h3>
//                     <p className="text-gray-600">June 14, 2025 | 9:00 AM - 12:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Overview of competition rules and structure</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaClock className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Main Competition</h3>
//                     <p className="text-gray-600">June 15, 2025 | 8:00 AM - 12:30 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Full-length SAT exam under competition conditions</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaTrophy className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Awards Ceremony</h3>
//                     <p className="text-gray-600">June 15, 2025 | 3:00 PM - 5:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Recognition of top performers and schools</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* School Rankings with Light Blue Background */}
//             <div className="bg-blue-50 p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-blue-600 mb-6 text-left">
//                 Current School Rankings
//               </h2>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg overflow-hidden">
//                   <thead className="bg-blue-100">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Rank</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">School</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Avg Score</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Students</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {leaderboard.map((school) => (
//                       <tr key={school.rank}>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {school.rank === 1 ? (
//                             <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">🥇 1st</span>
//                           ) : school.rank === 2 ? (
//                             <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">🥈 2nd</span>
//                           ) : school.rank === 3 ? (
//                             <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">🥉 3rd</span>
//                           ) : (
//                             `#${school.rank}`
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-medium">{school.school}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.score}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.students}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="lg:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
//               <h3 className="text-xl font-medium text-blue-600 mb-6 text-left">SAT Competition Registration</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.dob}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current Class</label>
//                   <select
//                     name="currentClass"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentClass}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="JSS">Junior Secondary School</option>
//                     <option value="SSS">Senior Secondary School</option>
//                     <option value="Grade 11">Grade 11</option>
//                     <option value="Grade 12">Grade 12</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current GPA (5.0 scale)</label>
//                   <select
//                     name="currentGPA"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {gpaOptions.map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 4.0 && (
//                     <p className="text-yellow-600 text-xs mt-1">
//                       Note: Lower chances of scholarship for GPA below 4.0
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="isStraightAStudent"
//                     id="isStraightAStudent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.isStraightAStudent}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="isStraightAStudent" className="ml-2 text-sm text-gray-600">
//                     Are you a straight A student?
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="interestInStudyingAbroad"
//                     id="interestInStudyingAbroad"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.interestInStudyingAbroad}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="interestInStudyingAbroad" className="ml-2 text-sm text-gray-600">
//                     Interested in studying abroad?
//                   </label>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Sponsorship Availability</label>
//                   <select
//                     name="sponsorAvailability"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.sponsorAvailability}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="none">No sponsor available</option>
//                     <option value="5000-7000">$5,000 - $7,000</option>
//                     <option value="7000-15000">$7,000 - $15,000</option>
//                     <option value="15000-20000">$15,000 - $20,000</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">How did you hear about us?</label>
//                   <select
//                     name="referralSource"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.referralSource}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="Social Media">Social Media</option>
//                     <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//                     <option value="Individual Recommendation">Individual Recommendation</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
                
//                 {formData.referralSource === 'Individual Recommendation' && (
//                   <>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Name</label>
//                       <input
//                         type="text"
//                         name="referrerName"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Phone</label>
//                       <input
//                         type="tel"
//                         name="referrerPhone"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerPhone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Email</label>
//                       <input
//                         type="email"
//                         name="referrerEmail"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </>
//                 )}
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="parentConsent"
//                     id="parentConsent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.parentConsent}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="parentConsent" className="ml-2 text-sm text-gray-600">
//                     I have parent/guardian consent
//                   </label>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register for Competition'}
//                 </button>
                
//                 {error && (
//                   <p className="text-red-500 text-sm mt-2">{error}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;

















// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SatContext";
// import Navbar from "../components/shared/Navbar";
// import { 
//   FaCalendarAlt, 
//   FaClock, 
//   FaMapMarkerAlt, 
//   FaCheck, 
//   FaTrophy,
//   FaSchool, 
//   FaUserGraduate,
//   FaMedal,
//   FaChartLine,
//   FaAward,
//   FaUsers
// } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // School rankings data
//   const [leaderboard, setLeaderboard] = useState([
//     { rank: 1, school: 'Greenwood High', score: 1540, students: 28 },
//     { rank: 2, school: 'Sunrise Academy', score: 1510, students: 32 },
//     { rank: 3, school: 'Preston International', score: 1490, students: 24 },
//     { rank: 4, school: 'Heritage College', score: 1475, students: 19 },
//     { rank: 5, school: 'Maplewood Secondary', score: 1460, students: 22 }
//   ]);

//   // Next competition date
//   const competitionDate = new Date('2025-06-15T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = competitionDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   const competitionStats = [
//     { icon: <FaSchool className="text-2xl" />, value: "42+", label: "Schools Registered" },
//     { icon: <FaUserGraduate className="text-2xl" />, value: "387+", label: "Students Competing" },
//     { icon: <FaAward className="text-2xl" />, value: "$15,000", label: "Total Prize Pool" }
//   ];

//   const programBenefits = [
//     "Compete against top students from across the region",
//     "Win scholarships and academic prizes",
//     "Benchmark your performance before the real SAT",
//     "Gain recognition for your school",
//     "Special awards for top-performing schools",
//     "College admission officers attending",
//     "Networking with high-achieving peers"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />
      
//       {/* Hero Section with Image Background */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text - reduced height */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
//               Annual Inter-School SAT Challenge
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               Compete with the brightest minds and showcase your academic excellence
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4">Next Competition Begins In</h3>
//             <div className="grid grid-cols-4 gap-2">
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.days}</div>
//                 <div className="text-xs text-white/80">DAYS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.hours}</div>
//                 <div className="text-xs text-white/80">HOURS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.minutes}</div>
//                 <div className="text-xs text-white/80">MINS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.seconds}</div>
//                 <div className="text-xs text-white/80">SECS</div>
//               </div>
//             </div>
//             <button 
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//               className="mt-4 bg-white text-[#2D8CD4] hover:bg-gray-100 font-medium py-2 px-6 rounded transition-colors"
//             >
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-8 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {competitionStats.map((stat, index) => (
//               <div key={index} className="text-center p-4">
//                 <div className="text-blue-600 flex justify-center mb-2">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-medium text-gray-800">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Program Details */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* About the Competition */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-4">About the Competition</h2>
//               <p className="text-gray-600 mb-6">
//                 Our annual inter-school SAT challenge brings together the brightest students from across the region 
//                 to compete in a rigorous academic competition. This event serves as both a mock exam and a 
//                 scholarship competition, with top performers earning recognition and financial awards.
//               </p>
              
//               <h3 className="text-xl font-medium text-gray-800 mb-3">Program Benefits</h3>
//               <ul className="space-y-3">
//                 {programBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                     <span className="text-gray-600">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Competition Schedule */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-6">Event Schedule</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaCalendarAlt className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 1: Orientation</h3>
//                     <p className="text-gray-600">June 14, 2025 | 9:00 AM - 12:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Overview of competition rules and structure</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaClock className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Main Competition</h3>
//                     <p className="text-gray-600">June 15, 2025 | 8:00 AM - 12:30 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Full-length SAT exam under competition conditions</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaTrophy className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Awards Ceremony</h3>
//                     <p className="text-gray-600">June 15, 2025 | 3:00 PM - 5:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Recognition of top performers and schools</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* School Rankings with Light Blue Background */}
//             <div className="bg-blue-50 p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-6 text-center">
//                 Current School Rankings
//               </h2>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full bg-white rounded-lg overflow-hidden">
//                   <thead className="bg-blue-100">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Rank</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">School</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Avg Score</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Students</th>
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {leaderboard.map((school) => (
//                       <tr key={school.rank}>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           {school.rank === 1 ? (
//                             <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">🥇 1st</span>
//                           ) : school.rank === 2 ? (
//                             <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">🥈 2nd</span>
//                           ) : school.rank === 3 ? (
//                             <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">🥉 3rd</span>
//                           ) : (
//                             `#${school.rank}`
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-medium">{school.school}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.score}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.students}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="lg:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
//               <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">SAT Competition Registration</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.dob}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current Class</label>
//                   <select
//                     name="currentClass"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentClass}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="JSS">Junior Secondary School</option>
//                     <option value="SSS">Senior Secondary School</option>
//                     <option value="Grade 11">Grade 11</option>
//                     <option value="Grade 12">Grade 12</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current GPA (5.0 scale)</label>
//                   <select
//                     name="currentGPA"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {gpaOptions.map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 4.0 && (
//                     <p className="text-yellow-600 text-xs mt-1">
//                       Note: Lower chances of scholarship for GPA below 4.0
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="isStraightAStudent"
//                     id="isStraightAStudent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.isStraightAStudent}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="isStraightAStudent" className="ml-2 text-sm text-gray-600">
//                     Are you a straight A student?
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="interestInStudyingAbroad"
//                     id="interestInStudyingAbroad"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.interestInStudyingAbroad}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="interestInStudyingAbroad" className="ml-2 text-sm text-gray-600">
//                     Interested in studying abroad?
//                   </label>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Sponsorship Availability</label>
//                   <select
//                     name="sponsorAvailability"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.sponsorAvailability}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="none">No sponsor available</option>
//                     <option value="5000-7000">$5,000 - $7,000</option>
//                     <option value="7000-15000">$7,000 - $15,000</option>
//                     <option value="15000-20000">$15,000 - $20,000</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">How did you hear about us?</label>
//                   <select
//                     name="referralSource"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.referralSource}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="Social Media">Social Media</option>
//                     <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//                     <option value="Individual Recommendation">Individual Recommendation</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
                
//                 {formData.referralSource === 'Individual Recommendation' && (
//                   <>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Name</label>
//                       <input
//                         type="text"
//                         name="referrerName"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Phone</label>
//                       <input
//                         type="tel"
//                         name="referrerPhone"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerPhone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Email</label>
//                       <input
//                         type="email"
//                         name="referrerEmail"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </>
//                 )}
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="parentConsent"
//                     id="parentConsent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.parentConsent}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="parentConsent" className="ml-2 text-sm text-gray-600">
//                     I have parent/guardian consent
//                   </label>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register for Competition'}
//                 </button>
                
//                 {error && (
//                   <p className="text-red-500 text-sm mt-2">{error}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;













// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SatContext";
// import Navbar from "../components/shared/Navbar";
// import { 
//   FaCalendarAlt, 
//   FaClock, 
//   FaMapMarkerAlt, 
//   FaCheck, 
//   FaTrophy,
//   FaSchool, 
//   FaUserGraduate,
//   FaMedal,
//   FaChartLine,
//   FaAward,
//   FaUsers
// } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // School rankings data
//   const [leaderboard, setLeaderboard] = useState([
//     { rank: 1, school: 'Greenwood High', score: 1540, students: 28 },
//     { rank: 2, school: 'Sunrise Academy', score: 1510, students: 32 },
//     { rank: 3, school: 'Preston International', score: 1490, students: 24 },
//     { rank: 4, school: 'Heritage College', score: 1475, students: 19 },
//     { rank: 5, school: 'Maplewood Secondary', score: 1460, students: 22 }
//   ]);

//   // Next competition date
//   const competitionDate = new Date('2025-06-15T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = competitionDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   const competitionStats = [
//     { icon: <FaSchool className="text-2xl" />, value: "42+", label: "Schools Registered" },
//     { icon: <FaUserGraduate className="text-2xl" />, value: "387+", label: "Students Competing" },
//     { icon: <FaAward className="text-2xl" />, value: "$15,000", label: "Total Prize Pool" }
//   ];

//   const programBenefits = [
//     "Compete against top students from across the region",
//     "Win scholarships and academic prizes",
//     "Benchmark your performance before the real SAT",
//     "Gain recognition for your school",
//     "Special awards for top-performing schools",
//     "College admission officers attending",
//     "Networking with high-achieving peers"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />
      
//       {/* Hero Section with Image Background */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/sat-hero-bg.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text - reduced height */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
//               Annual Inter-School SAT Challenge
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               Compete with the brightest minds and showcase your academic excellence
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4">Next Competition Begins In</h3>
//             <div className="grid grid-cols-4 gap-2">
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.days}</div>
//                 <div className="text-xs text-white/80">DAYS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.hours}</div>
//                 <div className="text-xs text-white/80">HOURS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.minutes}</div>
//                 <div className="text-xs text-white/80">MINS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-medium text-white">{timeLeft.seconds}</div>
//                 <div className="text-xs text-white/80">SECS</div>
//               </div>
//             </div>
//             <button 
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//               className="mt-4 bg-white text-[#2D8CD4] hover:bg-gray-100 font-medium py-2 px-6 rounded transition-colors"
//             >
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* School Rankings with Light Blue Background */}
//       <div className="bg-blue-50 py-8">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl font-medium text-gray-800 mb-6 text-center">
//             Current School Rankings
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg overflow-hidden">
//               <thead className="bg-blue-100">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Rank</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">School</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Avg Score</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Students</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {leaderboard.map((school) => (
//                   <tr key={school.rank}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {school.rank === 1 ? (
//                         <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">🥇 1st</span>
//                       ) : school.rank === 2 ? (
//                         <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">🥈 2nd</span>
//                       ) : school.rank === 3 ? (
//                         <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">🥉 3rd</span>
//                       ) : (
//                         `#${school.rank}`
//                       )}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium">{school.school}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{school.score}</td>
//                     <td className="px-6 py-4 whitespace-nowrap">{school.students}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-8 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {competitionStats.map((stat, index) => (
//               <div key={index} className="text-center p-4">
//                 <div className="text-blue-600 flex justify-center mb-2">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-medium text-gray-800">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Program Details */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* About the Competition */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-4">About the Competition</h2>
//               <p className="text-gray-600 mb-6">
//                 Our annual inter-school SAT challenge brings together the brightest students from across the region 
//                 to compete in a rigorous academic competition. This event serves as both a mock exam and a 
//                 scholarship competition, with top performers earning recognition and financial awards.
//               </p>
              
//               <h3 className="text-xl font-medium text-gray-800 mb-3">Program Benefits</h3>
//               <ul className="space-y-3">
//                 {programBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                     <span className="text-gray-600">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Competition Schedule */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-6">Event Schedule</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaCalendarAlt className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 1: Orientation</h3>
//                     <p className="text-gray-600">June 14, 2025 | 9:00 AM - 12:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Overview of competition rules and structure</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaClock className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Main Competition</h3>
//                     <p className="text-gray-600">June 15, 2025 | 8:00 AM - 12:30 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Full-length SAT exam under competition conditions</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaTrophy className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Awards Ceremony</h3>
//                     <p className="text-gray-600">June 15, 2025 | 3:00 PM - 5:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Recognition of top performers and schools</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="lg:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
//               <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">SAT Competition Registration</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.dob}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current Class</label>
//                   <select
//                     name="currentClass"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentClass}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="JSS">Junior Secondary School</option>
//                     <option value="SSS">Senior Secondary School</option>
//                     <option value="Grade 11">Grade 11</option>
//                     <option value="Grade 12">Grade 12</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current GPA (5.0 scale)</label>
//                   <select
//                     name="currentGPA"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {gpaOptions.map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 4.0 && (
//                     <p className="text-yellow-600 text-xs mt-1">
//                       Note: Lower chances of scholarship for GPA below 4.0
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="isStraightAStudent"
//                     id="isStraightAStudent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.isStraightAStudent}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="isStraightAStudent" className="ml-2 text-sm text-gray-600">
//                     Are you a straight A student?
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="interestInStudyingAbroad"
//                     id="interestInStudyingAbroad"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.interestInStudyingAbroad}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="interestInStudyingAbroad" className="ml-2 text-sm text-gray-600">
//                     Interested in studying abroad?
//                   </label>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Sponsorship Availability</label>
//                   <select
//                     name="sponsorAvailability"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.sponsorAvailability}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="none">No sponsor available</option>
//                     <option value="5000-7000">$5,000 - $7,000</option>
//                     <option value="7000-15000">$7,000 - $15,000</option>
//                     <option value="15000-20000">$15,000 - $20,000</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">How did you hear about us?</label>
//                   <select
//                     name="referralSource"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.referralSource}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="Social Media">Social Media</option>
//                     <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//                     <option value="Individual Recommendation">Individual Recommendation</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
                
//                 {formData.referralSource === 'Individual Recommendation' && (
//                   <>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Name</label>
//                       <input
//                         type="text"
//                         name="referrerName"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Phone</label>
//                       <input
//                         type="tel"
//                         name="referrerPhone"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerPhone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Email</label>
//                       <input
//                         type="email"
//                         name="referrerEmail"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </>
//                 )}
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="parentConsent"
//                     id="parentConsent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.parentConsent}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="parentConsent" className="ml-2 text-sm text-gray-600">
//                     I have parent/guardian consent
//                   </label>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register for Competition'}
//                 </button>
                
//                 {error && (
//                   <p className="text-red-500 text-sm mt-2">{error}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;














// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SatContext";
// import Navbar from "../components/shared/Navbar";
// import { 
//   FaCalendarAlt, 
//   FaClock, 
//   FaMapMarkerAlt, 
//   FaCheck, 
//   FaTrophy,
//   FaSchool, 
//   FaUserGraduate,
//   FaMedal,
//   FaChartLine,
//   FaAward,
//   FaUsers
// } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Next competition date
//   const competitionDate = new Date('2025-06-15T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = competitionDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   const competitionStats = [
//     { icon: <FaSchool className="text-2xl" />, value: "42+", label: "Schools Registered" },
//     { icon: <FaUserGraduate className="text-2xl" />, value: "387+", label: "Students Competing" },
//     { icon: <FaAward className="text-2xl" />, value: "$15,000", label: "Total Prize Pool" }
//   ];

//   const programBenefits = [
//     "Compete against top students from across the region",
//     "Win scholarships and academic prizes",
//     "Benchmark your performance before the real SAT",
//     "Gain recognition for your school",
//     "Special awards for top-performing schools",
//     "College admission officers attending",
//     "Networking with high-achieving peers"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       <Navbar />
      
//       {/* Hero Section with Image Background */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/sat-hero-bg.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-white">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-medium mb-4">Annual Inter-School SAT Challenge</h1>
//             <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8">
//               Compete with the brightest minds and showcase your academic excellence
//             </p>
            
//             {/* Countdown Timer */}
//             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
//               <h3 className="text-lg font-normal mb-4">Next Competition Begins In:</h3>
//               <div className="flex justify-center gap-2">
//                 <div className="bg-[#2D8CD4] px-4 py-2 rounded">
//                   <div className="text-2xl font-medium">{timeLeft.days}</div>
//                   <div className="text-sm">Days</div>
//                 </div>
//                 <div className="bg-[#2D8CD4] px-4 py-2 rounded">
//                   <div className="text-2xl font-medium">{timeLeft.hours}</div>
//                   <div className="text-sm">Hours</div>
//                 </div>
//                 <div className="bg-[#2D8CD4] px-4 py-2 rounded">
//                   <div className="text-2xl font-medium">{timeLeft.minutes}</div>
//                   <div className="text-sm">Minutes</div>
//                 </div>
//                 <div className="bg-[#2D8CD4] px-4 py-2 rounded">
//                   <div className="text-2xl font-medium">{timeLeft.seconds}</div>
//                   <div className="text-sm">Seconds</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="bg-white py-8 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {competitionStats.map((stat, index) => (
//               <div key={index} className="text-center p-4">
//                 <div className="text-blue-600 flex justify-center mb-2">
//                   {stat.icon}
//                 </div>
//                 <div className="text-3xl font-medium text-gray-800">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Program Details */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* About the Competition */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-4">About the Competition</h2>
//               <p className="text-gray-600 mb-6">
//                 Our annual inter-school SAT challenge brings together the brightest students from across the region 
//                 to compete in a rigorous academic competition. This event serves as both a mock exam and a 
//                 scholarship competition, with top performers earning recognition and financial awards.
//               </p>
              
//               <h3 className="text-xl font-medium text-gray-800 mb-3">Program Benefits</h3>
//               <ul className="space-y-3">
//                 {programBenefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
//                     <span className="text-gray-600">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Competition Schedule */}
//             <div className="bg-white p-8 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-gray-800 mb-6">Event Schedule</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaCalendarAlt className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 1: Orientation</h3>
//                     <p className="text-gray-600">June 14, 2025 | 9:00 AM - 12:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Overview of competition rules and structure</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaClock className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Main Competition</h3>
//                     <p className="text-gray-600">June 15, 2025 | 8:00 AM - 12:30 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Full-length SAT exam under competition conditions</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-4">
//                     <FaTrophy className="text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-gray-800">Day 2: Awards Ceremony</h3>
//                     <p className="text-gray-600">June 15, 2025 | 3:00 PM - 5:00 PM</p>
//                     <p className="text-gray-500 text-sm mt-1">Recognition of top performers and schools</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="lg:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
//               <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">SAT Competition Registration</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.dob}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current Class</label>
//                   <select
//                     name="currentClass"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentClass}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="JSS">Junior Secondary School</option>
//                     <option value="SSS">Senior Secondary School</option>
//                     <option value="Grade 11">Grade 11</option>
//                     <option value="Grade 12">Grade 12</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Current GPA (5.0 scale)</label>
//                   <select
//                     name="currentGPA"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {gpaOptions.map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 4.0 && (
//                     <p className="text-yellow-600 text-xs mt-1">
//                       Note: Lower chances of scholarship for GPA below 4.0
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="isStraightAStudent"
//                     id="isStraightAStudent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.isStraightAStudent}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="isStraightAStudent" className="ml-2 text-sm text-gray-600">
//                     Are you a straight A student?
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="interestInStudyingAbroad"
//                     id="interestInStudyingAbroad"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.interestInStudyingAbroad}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="interestInStudyingAbroad" className="ml-2 text-sm text-gray-600">
//                     Interested in studying abroad?
//                   </label>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">Sponsorship Availability</label>
//                   <select
//                     name="sponsorAvailability"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.sponsorAvailability}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="none">No sponsor available</option>
//                     <option value="5000-7000">$5,000 - $7,000</option>
//                     <option value="7000-15000">$7,000 - $15,000</option>
//                     <option value="15000-20000">$15,000 - $20,000</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm text-gray-600 mb-1">How did you hear about us?</label>
//                   <select
//                     name="referralSource"
//                     className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                     value={formData.referralSource}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="Social Media">Social Media</option>
//                     <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//                     <option value="Individual Recommendation">Individual Recommendation</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
                
//                 {formData.referralSource === 'Individual Recommendation' && (
//                   <>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Name</label>
//                       <input
//                         type="text"
//                         name="referrerName"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerName}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Phone</label>
//                       <input
//                         type="tel"
//                         name="referrerPhone"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerPhone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm text-gray-600 mb-1">Referrer's Email</label>
//                       <input
//                         type="email"
//                         name="referrerEmail"
//                         className="border p-3 rounded w-full focus:ring-2 focus:ring-blue-300"
//                         value={formData.referrerEmail}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </>
//                 )}
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="parentConsent"
//                     id="parentConsent"
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-300"
//                     checked={formData.parentConsent}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="parentConsent" className="ml-2 text-sm text-gray-600">
//                     I have parent/guardian consent
//                   </label>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register for Competition'}
//                 </button>
                
//                 {error && (
//                   <p className="text-red-500 text-sm mt-2">{error}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;

















// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SatContext";
// import Navbar from "../components/shared/Navbar";
// import { 
//   FaCalendarAlt, 
//   FaClock, 
//   FaMapMarkerAlt, 
//   FaCheck, 
//   FaTrophy,
//   FaSchool, 
//   FaUserGraduate,
//   FaMedal,
//   FaChartLine,
//   FaAward,
//   FaUsers
// } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     schoolName: '',
//     schoolType: 'public',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     previousSATScore: '',
//     isStraightAStudent: false,
//     hasParticipatedBefore: false,
//     sponsorAvailability: 'none',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Competition statistics
//   const [stats, setStats] = useState({
//     schoolsRegistered: 42,
//     studentsRegistered: 387,
//     prizePool: '$15,000',
//     topSchool: 'Greenwood High'
//   });

//   // Next competition date
//   const competitionDate = new Date('2025-06-15T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = competitionDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       // Update stats optimistically
//       setStats(prev => ({
//         ...prev,
//         studentsRegistered: prev.studentsRegistered + 1,
//         schoolsRegistered: prev.schoolsRegistered + 
//           (formData.schoolName && !registeredSchools.includes(formData.schoolName) ? 1 : 0)
//       }));
      
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         schoolName: '',
//         schoolType: 'public',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         previousSATScore: '',
//         isStraightAStudent: false,
//         hasParticipatedBefore: false,
//         sponsorAvailability: 'none',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Sample data for leaderboard
//   const [leaderboard, setLeaderboard] = useState([
//     { rank: 1, school: 'Greenwood High', score: 1540, students: 28 },
//     { rank: 2, school: 'Sunrise Academy', score: 1510, students: 32 },
//     { rank: 3, school: 'Preston International', score: 1490, students: 24 },
//     { rank: 4, school: 'Heritage College', score: 1475, students: 19 },
//     { rank: 5, school: 'Maplewood Secondary', score: 1460, students: 22 }
//   ]);

//   const programBenefits = [
//     "Compete against top students from across the region",
//     "Win scholarships and academic prizes",
//     "Benchmark your performance before the real SAT",
//     "Gain recognition for your school",
//     "Special awards for top-performing schools",
//     "College admission officers attending",
//     "Networking with high-achieving peers"
//   ];

//   const competitionDetails = [
//     {
//       icon: <FaTrophy className="text-3xl text-yellow-500" />,
//       title: "Grand Prize",
//       description: "$5,000 scholarship + trophy for top scorer"
//     },
//     {
//       icon: <FaSchool className="text-3xl text-blue-500" />,
//       title: "School Trophy",
//       description: "Awarded to school with highest average score"
//     },
//     {
//       icon: <FaMedal className="text-3xl text-amber-600" />,
//       title: "Category Awards",
//       description: "Top scores in Math, Reading, and Writing"
//     },
//     {
//       icon: <FaUsers className="text-3xl text-green-500" />,
//       title: "Team Competition",
//       description: "Special prizes for school teams"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
//         <div className="absolute inset-0 bg-[url('/sat-competition-bg.jpg')] bg-cover bg-center opacity-20" />
//         <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row justify-between items-center">
//           <div className="text-center md:text-left mb-10 md:mb-0 md:w-1/2">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//               Annual Inter-School SAT Challenge
//             </h1>
//             <p className="text-xl mb-8 max-w-2xl">
//               The premier academic competition for secondary students. Showcase your skills and win scholarships!
//             </p>
//             <button 
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//               className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
//             >
//               Register Your School Now
//             </button>
//           </div>

//           {/* Countdown and Stats */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:w-2/5">
//             <h3 className="text-2xl font-bold mb-6 text-center">Competition Countdown</h3>
//             <div className="grid grid-cols-4 gap-3 mb-8">
//               <div className="bg-white/20 p-3 rounded-lg text-center">
//                 <div className="text-3xl font-bold">{timeLeft.days}</div>
//                 <div className="text-sm uppercase tracking-wider">Days</div>
//               </div>
//               <div className="bg-white/20 p-3 rounded-lg text-center">
//                 <div className="text-3xl font-bold">{timeLeft.hours}</div>
//                 <div className="text-sm uppercase tracking-wider">Hours</div>
//               </div>
//               <div className="bg-white/20 p-3 rounded-lg text-center">
//                 <div className="text-3xl font-bold">{timeLeft.minutes}</div>
//                 <div className="text-sm uppercase tracking-wider">Mins</div>
//               </div>
//               <div className="bg-white/20 p-3 rounded-lg text-center">
//                 <div className="text-3xl font-bold">{timeLeft.seconds}</div>
//                 <div className="text-sm uppercase tracking-wider">Secs</div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <span className="flex items-center">
//                   <FaSchool className="mr-2" /> Schools Registered:
//                 </span>
//                 <span className="font-bold">{stats.schoolsRegistered}+</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="flex items-center">
//                   <FaUserGraduate className="mr-2" /> Students Competing:
//                 </span>
//                 <span className="font-bold">{stats.studentsRegistered}+</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="flex items-center">
//                   <FaAward className="mr-2" /> Total Prize Pool:
//                 </span>
//                 <span className="font-bold">{stats.prizePool}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Competition Highlights */}
//         <div className="grid md:grid-cols-4 gap-6 mb-16">
//           {competitionDetails.map((item, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
//               <div className="flex justify-center mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Content */}
//           <div className="lg:w-2/3 space-y-8">
//             {/* School Leaderboard */}
//             <div className="bg-white rounded-xl shadow-md overflow-hidden">
//               <div className="bg-blue-600 text-white p-4">
//                 <h2 className="text-2xl font-bold flex items-center">
//                   <FaChartLine className="mr-2" /> Current School Rankings
//                 </h2>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">School</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Score</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {leaderboard.map((school) => (
//                       <tr key={school.rank} className={school.rank <= 3 ? "bg-blue-50" : ""}>
//                         <td className="px-6 py-4 whitespace-nowrap font-medium">
//                           {school.rank === 1 ? (
//                             <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">🥇 1st</span>
//                           ) : school.rank === 2 ? (
//                             <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">🥈 2nd</span>
//                           ) : school.rank === 3 ? (
//                             <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">🥉 3rd</span>
//                           ) : (
//                             `#${school.rank}`
//                           )}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap font-medium">{school.school}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.score}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{school.students}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Program Benefits */}
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Participate?</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {programBenefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-4">
//                     <div className="bg-blue-100 p-2 rounded-full">
//                       <FaCheck className="text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-lg">{benefit}</h3>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Competition Schedule */}
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <h2 className="text-3xl font-bold text-blue-600 mb-6">Event Schedule</h2>
//               <div className="space-y-6">
//                 <div className="border-l-4 border-blue-500 pl-4 py-2">
//                   <h3 className="font-bold text-lg">Opening Ceremony</h3>
//                   <p className="text-gray-600">June 14, 2025 | 9:00 AM</p>
//                 </div>
//                 <div className="border-l-4 border-blue-500 pl-4 py-2">
//                   <h3 className="font-bold text-lg">SAT Mock Exam</h3>
//                   <p className="text-gray-600">June 15, 2025 | 8:00 AM - 12:30 PM</p>
//                 </div>
//                 <div className="border-l-4 border-blue-500 pl-4 py-2">
//                   <h3 className="font-bold text-lg">Lunch & Networking</h3>
//                   <p className="text-gray-600">June 15, 2025 | 12:30 PM - 2:00 PM</p>
//                 </div>
//                 <div className="border-l-4 border-blue-500 pl-4 py-2">
//                   <h3 className="font-bold text-lg">Awards Ceremony</h3>
//                   <p className="text-gray-600">June 15, 2025 | 3:00 PM - 5:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="lg:w-1/3" id="registration-form">
//             <div className="bg-white p-8 rounded-xl shadow-xl sticky top-4">
//               <div className="bg-blue-600 text-white rounded-lg p-4 mb-6 text-center">
//                 <h3 className="text-2xl font-bold">Register Now</h3>
//                 <p>Limited spots available!</p>
//               </div>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
//                     <input
//                       type="date"
//                       name="dob"
//                       className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                       value={formData.dob}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Current Class</label>
//                     <select
//                       name="currentClass"
//                       className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                       value={formData.currentClass}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="JSS">Junior Secondary</option>
//                       <option value="SSS">Senior Secondary</option>
//                       <option value="Grade 11">Grade 11</option>
//                       <option value="Grade 12">Grade 12</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
//                   <input
//                     type="text"
//                     name="schoolName"
//                     placeholder="Enter your school name"
//                     className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                     value={formData.schoolName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">School Type</label>
//                   <select
//                     name="schoolType"
//                     className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                     value={formData.schoolType}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="public">Public School</option>
//                     <option value="private">Private School</option>
//                     <option value="international">International School</option>
//                   </select>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                     <input
//                       type="tel"
//                       name="phoneNumber"
//                       className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Current GPA (5.0 scale)</label>
//                   <select
//                     name="currentGPA"
//                     className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {Array.from({ length: 41 }, (_, i) => (5.0 - i * 0.1).toFixed(1)).map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 4.0 && (
//                     <p className="text-yellow-600 text-sm mt-1">
//                       Note: Students with GPA ≥ 4.0 get priority registration
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Previous SAT Score (if any)
//                   </label>
//                   <input
//                     type="number"
//                     name="previousSATScore"
//                     min="400"
//                     max="1600"
//                     className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
//                     value={formData.previousSATScore}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       name="isStraightAStudent"
//                       id="isStraightAStudent"
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                       checked={formData.isStraightAStudent}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="isStraightAStudent" className="ml-2 block text-sm text-gray-700">
//                       Straight A Student
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       name="hasParticipatedBefore"
//                       id="hasParticipatedBefore"
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                       checked={formData.hasParticipatedBefore}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="hasParticipatedBefore" className="ml-2 block text-sm text-gray-700">
//                       Participated in previous competitions
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       name="parentConsent"
//                       id="parentConsent"
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                       checked={formData.parentConsent}
//                       onChange={handleChange}
//                       required
//                     />
//                     <label htmlFor="parentConsent" className="ml-2 block text-sm text-gray-700">
//                       Parent/Guardian consent obtained
//                     </label>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105"
//                   disabled={loading}
//                 >
//                   {loading ? (
//                     <span className="flex items-center justify-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </span>
//                   ) : (
//                     "SUBMIT REGISTRATION"
//                   )}
//                 </button>

//                 {error && (
//                   <div className="bg-red-50 border-l-4 border-red-500 p-4">
//                     <div className="flex">
//                       <div className="flex-shrink-0">
//                         <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <div className="ml-3">
//                         <p className="text-sm text-red-700">{error}</p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;















// import React, { useState, useEffect } from 'react';
// import { useSAT } from "../context/SatContext";
// import Navbar from "../components/shared/Navbar";
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheck, FaChalkboardTeacher, FaBookOpen, FaUniversity, FaGraduationCap } from 'react-icons/fa';

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0',
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Next SAT test date
//   const nextSATDate = new Date('2025-05-03T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = nextSATDate - now;

//       if (difference <= 0) {
//         clearInterval(timer);
//         return;
//       }

//       const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   const programBenefits = [
//     "Expert instructors with proven SAT teaching experience",
//     "Personalized study plans based on diagnostic tests",
//     "Full-length practice tests with detailed score reports",
//     "Strategies for all sections: Reading, Writing, and Math",
//     "Scholarship guidance for high-achieving students",
//     "College application support",
//     "Free retake for students who complete the program"
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section with Countdown */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               SAT Preparation Program
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               Unlock your potential for studying abroad with our comprehensive SAT preparation
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4 text-xl">Next SAT Mock Test Date</h3>
//             <div className="grid grid-cols-4 gap-2">
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
//                 <div className="text-xs text-white/80">DAYS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
//                 <div className="text-xs text-white/80">HOURS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
//                 <div className="text-xs text-white/80">MINS</div>
//               </div>
//               <div className="bg-[#2D8CD4]/90 p-3 rounded">
//                 <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
//                 <div className="text-xs text-white/80">SECS</div>
//               </div>
//             </div>
//             <button 
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//               className="mt-4 bg-white text-[#2D8CD4] hover:bg-gray-100 font-semibold py-2 px-6 rounded transition-colors"
//             >
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Program Details */}
//           <div className="md:w-2/3">
//             {/* Program Highlights */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold mb-6">MOCK EXAM DETAILS</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start gap-3">
//                   <FaCalendarAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">START DATE</h3>
//                     <p className="text-white">May 10, 2025</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaClock className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">DURATION</h3>
//                     <p className="text-white">12 Weeks</p>
//                     <p className="text-sm text-white opacity-80">3 sessions per week</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">LOCATION</h3>
//                     <p className="text-white">Hybrid</p>
//                     <p className="text-sm text-white opacity-80">Online & In-Person</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Program Benefits */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">Program Benefits</h2>
//               <div className="space-y-3">
//                 {programBenefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <FaCheck className="text-[#2D8CD4] mt-1 flex-shrink-0" />
//                     <p>{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Scholarship Information */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">Scholarship Opportunities</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="flex items-start gap-4">
//                   <FaGraduationCap className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Merit-Based</h3>
//                     <p className="text-gray-700">Students with GPA ≥ 4.0 may qualify for partial scholarships</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaUniversity className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Full Scholarships</h3>
//                     <p className="text-gray-700">Available for exceptional students with outstanding test scores</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaChalkboardTeacher className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Financial Aid</h3>
//                     <p className="text-gray-700">Options for students with limited sponsorship</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaBookOpen className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Accreditation</h3>
//                     <p className="text-gray-700">Higher tuition institutions often have better accreditation</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">SAT Registration</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />
                
//                 <input
//                   type="date"
//                   name="dob"
//                   placeholder="Date of birth"
//                   className="border p-3 rounded w-full"
//                   value={formData.dob}
//                   onChange={handleChange}
//                   required
//                 />
                
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
                
//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />
                
//                 <select
//                   name="currentClass"
//                   className="border p-3 rounded w-full"
//                   value={formData.currentClass}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="JSS">Junior Secondary School</option>
//                   <option value="SSS">Senior Secondary School</option>
//                   <option value="Grade 11">Grade 11</option>
//                   <option value="Grade 12">Grade 12</option>
//                 </select>
                
//                 {/* GPA Dropdown */}
//                 <div>
//                   <label htmlFor="currentGPA" className="block mb-1 text-sm font-medium text-gray-700">
//                     Current GPA (5.0 scale)
//                   </label>
//                   <select
//                     name="currentGPA"
//                     id="currentGPA"
//                     className="border p-3 rounded w-full"
//                     value={formData.currentGPA}
//                     onChange={handleChange}
//                     required
//                   >
//                     {gpaOptions.map(gpa => (
//                       <option key={gpa} value={gpa}>{gpa}</option>
//                     ))}
//                   </select>
//                   {parseFloat(formData.currentGPA) < 4.0 && (
//                     <p className="text-yellow-600 text-sm mt-1">
//                       Note: Lower chances of scholarship for individuals below 4.0 GPA on a 5.0 grading system
//                     </p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="isStraightAStudent"
//                     id="isStraightAStudent"
//                     className="mr-2"
//                     checked={formData.isStraightAStudent}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="isStraightAStudent">Are you a straight A student?</label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="interestInStudyingAbroad"
//                     id="interestInStudyingAbroad"
//                     className="mr-2"
//                     checked={formData.interestInStudyingAbroad}
//                     onChange={handleChange}
//                   />
//                   <label htmlFor="interestInStudyingAbroad">Interested in studying abroad?</label>
//                 </div>
                
//                 {/* Sponsorship Section */}
//                 <div className="space-y-2">
//                   <p className="text-gray-700 font-medium">
//                     If you're not eligible for a full scholarship, do you have a sponsor?
//                   </p>
//                   <select
//                     name="sponsorAvailability"
//                     className="border p-3 rounded w-full"
//                     value={formData.sponsorAvailability}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="none">No sponsor available</option>
//                     <option value="5000-7000">$5,000 - $7,000</option>
//                     <option value="7000-15000">$7,000 - $15,000</option>
//                     <option value="15000-20000">$15,000 - $20,000</option>
//                   </select>
//                 </div>
                
//                 <select
//                   name="referralSource"
//                   className="border p-3 rounded w-full"
//                   value={formData.referralSource}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="Social Media">Social Media</option>
//                   <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//                   <option value="Individual Recommendation">Individual Recommendation</option>
//                   <option value="Other">Other</option>
//                 </select>
                
//                 {formData.referralSource === 'Individual Recommendation' && (
//                   <>
//                     <input
//                       type="text"
//                       name="referrerName"
//                       placeholder="Referrer's name"
//                       className="border p-3 rounded w-full"
//                       value={formData.referrerName}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="tel"
//                       name="referrerPhone"
//                       placeholder="Referrer's phone"
//                       className="border p-3 rounded w-full"
//                       value={formData.referrerPhone}
//                       onChange={handleChange}
//                     />
//                     <input
//                       type="email"
//                       name="referrerEmail"
//                       placeholder="Referrer's email"
//                       className="border p-3 rounded w-full"
//                       value={formData.referrerEmail}
//                       onChange={handleChange}
//                     />
//                   </>
//                 )}
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     name="parentConsent"
//                     id="parentConsent"
//                     className="mr-2"
//                     checked={formData.parentConsent}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label htmlFor="parentConsent">I have parent/guardian consent</label>
//                 </div>
                
//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'REGISTER FOR SAT'}
//                 </button>
                
//                 {error && (
//                   <p className="text-red-500 text-sm mt-2">{error}</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;













// // import React, { useState } from "react";
// // import { useSAT } from "../context/SATContext"; 
// // import Navbar from "../components/shared/Navbar";

// import React, { useState } from "react";
// import { useSAT } from "../context/SatContext";
// import Navbar from "../components/shared/Navbar";

// const Sat = () => {
//   const { loading, error, registerForSAT } = useSAT();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     dob: '',
//     email: '',
//     phoneNumber: '',
//     currentClass: 'SSS',
//     currentGPA: '4.0', // Default to 4.0
//     isStraightAStudent: false,
//     interestInStudyingAbroad: true,
//     sponsorAvailability: 'none',
//     referralSource: 'Social Media',
//     referrerName: '',
//     referrerPhone: '',
//     referrerEmail: '',
//     parentConsent: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({ 
//       ...prev, 
//       [name]: type === 'checkbox' ? checked : value 
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForSAT(formData);
//       // Reset form after successful submission
//       setFormData({
//         fullName: '',
//         dob: '',
//         email: '',
//         phoneNumber: '',
//         currentClass: 'SSS',
//         currentGPA: '4.0',
//         isStraightAStudent: false,
//         interestInStudyingAbroad: true,
//         sponsorAvailability: 'none',
//         referralSource: 'Social Media',
//         referrerName: '',
//         referrerPhone: '',
//         referrerEmail: '',
//         parentConsent: false
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   // Generate GPA options from 1.0 to 5.0 in 0.1 increments
//   const gpaOptions = [];
//   for (let i = 5.0; i >= 1.0; i -= 0.1) {
//     gpaOptions.push(i.toFixed(1));
//   }

//   return (
//     <div className="font-sans min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="bg-[#2D8CD4] text-white py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold">SAT Preparation Program</h2>
//         <p className="mt-4 max-w-2xl mx-auto">
//           Unlock your potential for studying abroad with our comprehensive SAT preparation
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">
//         {/* Registration Form */}
//         <div className="bg-white shadow-lg p-6 rounded-md">
//           <h3 className="text-xl font-bold mb-6 text-[#2D8CD4]">SAT Registration</h3>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full name"
//               className="border p-3 rounded w-full"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
            
//             <input
//               type="date"
//               name="dob"
//               placeholder="Date of birth"
//               className="border p-3 rounded w-full"
//               value={formData.dob}
//               onChange={handleChange}
//               required
//             />
            
//             <input
//               type="email"
//               name="email"
//               placeholder="Email address"
//               className="border p-3 rounded w-full"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
            
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone number"
//               className="border p-3 rounded w-full"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
            
//             <select
//               name="currentClass"
//               className="border p-3 rounded w-full"
//               value={formData.currentClass}
//               onChange={handleChange}
//               required
//             >
//               <option value="JSS">Junior Secondary School</option>
//               <option value="SSS">Senior Secondary School</option>
//               <option value="Grade 11">Grade 11</option>
//               <option value="Grade 12">Grade 12</option>
//             </select>
            
//             {/* GPA Dropdown */}
//             <div>
//               <label htmlFor="currentGPA" className="block mb-1 text-sm font-medium text-gray-700">
//                 Current GPA (5.0 scale)
//               </label>
//               <select
//                 name="currentGPA"
//                 id="currentGPA"
//                 className="border p-3 rounded w-full"
//                 value={formData.currentGPA}
//                 onChange={handleChange}
//                 required
//               >
//                 {gpaOptions.map(gpa => (
//                   <option key={gpa} value={gpa}>{gpa}</option>
//                 ))}
//               </select>
//               {parseFloat(formData.currentGPA) < 4.0 && (
//                 <p className="text-yellow-600 text-sm mt-1">
//                   Note: Lower chances of scholarship for individuals below 4.0 GPA on a 5.0 grading system
//                 </p>
//               )}
//             </div>
            
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="isStraightAStudent"
//                 id="isStraightAStudent"
//                 className="mr-2"
//                 checked={formData.isStraightAStudent}
//                 onChange={handleChange}
//               />
//               <label htmlFor="isStraightAStudent">Are you a straight A student?</label>
//             </div>
            
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="interestInStudyingAbroad"
//                 id="interestInStudyingAbroad"
//                 className="mr-2"
//                 checked={formData.interestInStudyingAbroad}
//                 onChange={handleChange}
//               />
//               <label htmlFor="interestInStudyingAbroad">Interested in studying abroad?</label>
//             </div>
            
//             {/* Updated Sponsorship Section */}
//             <div className="space-y-2">
//               <p className="text-gray-700 font-medium">
//                 If you're not eligible for a full scholarship, do you have a sponsor?
//               </p>
//               <select
//                 name="sponsorAvailability"
//                 className="border p-3 rounded w-full"
//                 value={formData.sponsorAvailability}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="none">No sponsor available</option>
//                 <option value="5000-7000">$5,000 - $7,000</option>
//                 <option value="7000-15000">$7,000 - $15,000</option>
//                 <option value="15000-20000">$15,000 - $20,000</option>
//               </select>
//             </div>
            
//             <select
//               name="referralSource"
//               className="border p-3 rounded w-full"
//               value={formData.referralSource}
//               onChange={handleChange}
//               required
//             >
//               <option value="Social Media">Social Media</option>
//               <option value="Pocketfriendlydigitals">Pocketfriendlydigitals</option>
//               <option value="Individual Recommendation">Individual Recommendation</option>
//               <option value="Other">Other</option>
//             </select>
            
//             {formData.referralSource === 'Individual Recommendation' && (
//               <>
//                 <input
//                   type="text"
//                   name="referrerName"
//                   placeholder="Referrer's name"
//                   className="border p-3 rounded w-full"
//                   value={formData.referrerName}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="tel"
//                   name="referrerPhone"
//                   placeholder="Referrer's phone"
//                   className="border p-3 rounded w-full"
//                   value={formData.referrerPhone}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="email"
//                   name="referrerEmail"
//                   placeholder="Referrer's email"
//                   className="border p-3 rounded w-full"
//                   value={formData.referrerEmail}
//                   onChange={handleChange}
//                 />
//               </>
//             )}
            
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="parentConsent"
//                 id="parentConsent"
//                 className="mr-2"
//                 checked={formData.parentConsent}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="parentConsent">I have parent/guardian consent</label>
//             </div>
            
//             <button
//               type="submit"
//               className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//               disabled={loading}
//             >
//               {loading ? 'Processing...' : 'REGISTER FOR SAT'}
//             </button>
            
//             {error && (
//               <p className="text-red-500 text-sm mt-2">{error}</p>
//             )}
//           </form>
//         </div>


//         {/* SAT Details */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-bold text-[#2D8CD4]">About Our SAT Program</h3>
//           <p className="text-gray-700">
//             Our comprehensive SAT preparation program is designed to help students achieve their best possible scores and gain admission to top universities worldwide.
//           </p>
          
//           <div>
//             <h4 className="font-bold text-lg mb-2">Program Benefits:</h4>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Expert instructors with proven SAT teaching experience</li>
//               <li>Personalized study plans based on diagnostic tests</li>
//               <li>Full-length practice tests with detailed score reports</li>
//               <li>Strategies for all sections: Reading, Writing, and Math</li>
//               <li>Scholarship guidance for high-achieving students</li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-lg mb-2">Program Structure:</h4>
//             <div className="space-y-2 text-gray-700">
//               <p><strong>Duration:</strong> 12 weeks intensive preparation</p>
//               <p><strong>Schedule:</strong> 3 sessions per week (2 hours each)</p>
//               <p><strong>Materials:</strong> Official SAT study guide and custom materials</p>
//               <p><strong>Location:</strong> Online and in-person options available</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-2">Scholarship Information:</h4>
//             <div className="space-y-2 text-gray-700">
//               <p>Students with GPA ≥ 4.0 may qualify for partial scholarships</p>
//               <p>Full scholarships available for exceptional cases</p>
//               <p>Financial aid options for students with limited sponsorship</p>
//               <p>institutions with higher tuition fees have more accreditation than those that are lower </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sat;