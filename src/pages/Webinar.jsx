import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/shared/Navbar";
import { FaWifi, FaCheck, FaClock, FaMapMarkerAlt, FaCoffee, FaPrint, FaParking, FaUsers, FaChartLine, FaBuilding, FaRegSmile, FaRegCalendarCheck } from 'react-icons/fa';
import { MdMeetingRoom, MdEventSeat, MdSecurity } from 'react-icons/md';

const CoworkingSpace = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    company: '',
    membershipType: 'monthly',
    specialRequests: ''
  });

  const membershipPlans = [
    {
      type: 'monthly',
      name: 'Flexi Pass',
      price: '₦35,000',
      features: [
        '5 days/month',
        'High-speed WiFi',
        'Complimentary coffee',
        'Access to common areas',
        'Printing credits (20 pages)'
      ],
      popular: false
    },
    {
      type: 'quarterly',
      name: 'Professional',
      price: '₦90,000',
      features: [
        'Unlimited access',
        'Dedicated desk',
        'Meeting room credits (5 hrs)',
        'Locker included',
        'Free parking'
      ],
      popular: true
    },
    {
      type: 'biannually',
      name: 'Business',
      price: '₦160,000',
      features: [
        '24/7 access',
        'Premium workspace',
        'Meeting room credits (15 hrs)',
        'Mail handling',
        'Event discounts'
      ],
      popular: false
    },
    {
      type: 'annually',
      name: 'Enterprise',
      price: '₦300,000',
      features: [
        'Private office space',
        'Unlimited meeting room access',
        'VIP lounge access',
        'Personal assistant hours',
        'Networking event invites'
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
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you shortly to complete your registration.');
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      company: '',
      membershipType: 'monthly',
      specialRequests: ''
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

  const amenities = [
    { icon: <FaWifi size={24} />, name: 'High-Speed WiFi' },
    { icon: <MdMeetingRoom size={24} />, name: 'Meeting Rooms' },
    { icon: <FaCoffee size={24} />, name: 'Free Coffee' },
    { icon: <FaPrint size={24} />, name: 'Printing Facilities' },
    { icon: <FaParking size={24} />, name: 'Secure Parking' },
    { icon: <MdEventSeat size={24} />, name: 'Ergonomic Furniture' },
    { icon: <MdSecurity size={24} />, name: '24/7 Security' },
    { icon: <FaUsers size={24} />, name: 'Community Events' }
  ];

  const testimonials = [
    {
      quote: "The perfect environment for productivity. I've grown my business 3x since joining!",
      author: "Tunde O., Freelance Developer",
      role: "Quarterly Member"
    },
    {
      quote: "Love the professional atmosphere and networking opportunities. Worth every naira.",
      author: "Amina B., Startup Founder",
      role: "Annual Member"
    },
    {
      quote: "Best coworking space in Port Harcourt. The amenities and staff make all the difference.",
      author: "Emeka F., Digital Marketer",
      role: "Monthly Member"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium <span className="text-green-500">Coworking Space</span> in Port Harcourt
          </h1>
          <p className="text-xl text-white max-w-2xl mb-8">
            Productivity meets comfort in our state-of-the-art workspace designed for professionals, entrepreneurs, and remote workers.
          </p>
          <button 
            onClick={() => document.getElementById('membership-plans').scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Book a Tour
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/cowork.jpg" 
              alt="QuickFix Coworking Space" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              <FaBuilding className="inline text-green-600 mr-3" />
              Our Workspace
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              QuickFix Coworking is designed to inspire creativity and productivity. Located in the heart of Port Harcourt, our space combines professional amenities with a vibrant community of like-minded professionals.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Whether you're a freelancer, startup team, or remote worker, we have the perfect workspace solution for your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-100 px-4 py-2 rounded-full flex items-center">
                <FaRegSmile className="text-green-600 mr-2" />
                <span className="font-medium">200+ Happy Members</span>
              </div>
              <div className="bg-red-100 px-4 py-2 rounded-full flex items-center">
                <FaRegCalendarCheck className="text-red-600 mr-2" />
                <span className="font-medium">24/7 Access Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Premium Amenities
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Everything you need to do your best work
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-green-600 mb-3 flex justify-center">
                  {amenity.icon}
                </div>
                <h3 className="font-medium text-gray-800">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="max-w-7xl mx-auto px-4 py-16" id="membership-plans">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Membership Plans
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Flexible options to suit your work style
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.type} 
              className={`relative rounded-lg overflow-hidden shadow-md ${plan.popular ? 'border-2 border-green-500 transform md:-translate-y-4' : 'border border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">{plan.price}<span className="text-sm text-gray-500">/{plan.type === 'monthly' ? 'mo' : plan.type === 'quarterly' ? '3mo' : plan.type === 'biannually' ? '6mo' : 'yr'}</span></p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, membershipType: plan.type }));
                    document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-green-100 hover:bg-green-200 text-green-700'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-7xl mx-auto px-4 py-8" id="registration-form">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-green-600 p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h2>
              <p className="mb-6">Fill out this form and we'll contact you within 24 hours to complete your registration and schedule a tour.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-xl mt-1" />
                  <div>
                    <h3 className="font-medium">Networking Opportunities</h3>
                    <p className="text-green-100 text-sm">Connect with professionals across industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MdMeetingRoom className="text-xl mt-1" />
                  <div>
                    <h3 className="font-medium">Professional Environment</h3>
                    <p className="text-green-100 text-sm">All the amenities you need to focus and grow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaUsers className="text-xl mt-1" />
                  <div>
                    <h3 className="font-medium">Vibrant Community</h3>
                    <p className="text-green-100 text-sm">Regular events and workshops for members</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get Started</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="border p-3 rounded w-full"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="border p-3 rounded w-full"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="border p-3 rounded w-full"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Company (if applicable)</label>
                  <input
                    type="text"
                    name="company"
                    className="border p-3 rounded w-full"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Membership Type</label>
                  <select
                    name="membershipType"
                    className="border p-3 rounded w-full"
                    value={formData.membershipType}
                    onChange={handleChange}
                    required
                  >
                    <option value="monthly">Monthly (Flexi Pass)</option>
                    <option value="quarterly">Quarterly (Professional)</option>
                    <option value="biannually">Biannually (Business)</option>
                    <option value="annually">Annually (Enterprise)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    rows="3"
                    className="border p-3 rounded w-full"
                    value={formData.specialRequests}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded w-full font-medium transition-colors"
                >
                  Submit Application
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
            What Our Members Say
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

      {/* Location Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Location
            </h2>
            <p className="text-gray-600 mb-6">
              Visit us at our premium coworking space in the heart of Port Harcourt, Nigeria. We're conveniently located near major business hubs with easy access to transportation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Business Avenue, Port Harcourt, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaClock className="text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-800">Operating Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 7:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
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

export default CoworkingSpace;


























// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheck, FaFileAlt, FaEnvelope, FaUserTie, FaBook } from 'react-icons/fa';

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Webinar date: April 24, 2025 8:00 AM (Los Angeles time)
//   const webinarDate = new Date('2025-04-24T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = webinarDate - now;

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
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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
      
//       {/* Hero Section with countdown timer */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-medium text-white mb-4">
//               Scovers Education Webinar
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               Discover your pathway to global education with direct access to top universities.
//               Get personalized guidance on admissions, scholarships, and career opportunities.
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4 text-xl">Webinar Starts In</h3>
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

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             {/* Event Details with icons */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-medium mb-6">EVENT DETAILS</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start gap-3">
//                   <FaCalendarAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">DATE</h3>
//                     <p className="text-white">24 April 2025</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaClock className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">TIME</h3>
//                     <p className="text-white">8:00 AM - 12:00 PM</p>
//                     <p className="text-sm text-white opacity-80">America/Los_Angeles</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">LOCATION</h3>
//                     <p className="text-white">Zoom</p>
//                     <p className="text-sm text-white opacity-80">(Link will be provided after registration)</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-medium text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-medium text-[#2D8CD4] mb-4">What to Expect</h2>
//               <div className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <FaCheck className="text-[#2D8CD4] mt-1 flex-shrink-0" />
//                     <p className="text-gray-700">{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Post-Webinar Benefits */}
//             <div className="bg-[#2D8CD4]/10 p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-medium text-[#2D8CD4] mb-6">After The Webinar</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="flex items-start gap-4">
//                   <FaFileAlt className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Complete Recording</h3>
//                     <p className="text-gray-700">Receive full webinar recording and presentation materials.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaEnvelope className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Personalized Follow-up</h3>
//                     <p className="text-gray-700">Get customized recommendations based on your interests.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaUserTie className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">1-on-1 Counseling</h3>
//                     <p className="text-gray-700">Schedule private sessions with our advisors.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaBook className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Resource Library</h3>
//                     <p className="text-gray-700">Access to application templates and guides.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-medium text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;














// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheck, FaFileAlt, FaEnvelope, FaUserTie, FaBook } from 'react-icons/fa';

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   // Countdown timer state
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Webinar date: April 24, 2025 8:00 AM (Los Angeles time)
//   const webinarDate = new Date('2025-04-24T08:00:00-07:00');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       const difference = webinarDate - now;

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
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section with countdown timer */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center">
//           {/* Left text */}
//           <div className="text-left mb-8 md:mb-0 md:w-1/2">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Scovers Education Webinar
//             </h1>
//             <p className="text-lg text-white max-w-lg">
//               Discover your pathway to global education with direct access to top universities.
//               Get personalized guidance on admissions, scholarships, and career opportunities.
//             </p>
//           </div>

//           {/* Right countdown timer */}
//           <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center md:w-1/3">
//             <h3 className="text-white font-medium mb-4 text-xl">Webinar Starts In</h3>
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
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             {/* Event Details with icons */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold mb-6">EVENT DETAILS</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start gap-3">
//                   <FaCalendarAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">DATE</h3>
//                     <p className="text-white">24 April 2025</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaClock className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">TIME</h3>
//                     <p className="text-white">8:00 AM - 12:00 PM</p>
//                     <p className="text-sm text-white opacity-80">America/Los_Angeles</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">LOCATION</h3>
//                     <p className="text-white">Zoom</p>
//                     <p className="text-sm text-white opacity-80">(Link will be provided after registration)</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">What to Expect</h2>
//               <div className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <FaCheck className="text-[#2D8CD4] mt-1 flex-shrink-0" />
//                     <p>{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Post-Webinar Benefits */}
//             <div className="bg-[#2D8CD4]/10 p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">After The Webinar</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="flex items-start gap-4">
//                   <FaFileAlt className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Complete Recording</h3>
//                     <p className="text-gray-700">Receive full webinar recording and presentation materials.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaEnvelope className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Personalized Follow-up</h3>
//                     <p className="text-gray-700">Get customized recommendations based on your interests.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaUserTie className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">1-on-1 Counseling</h3>
//                     <p className="text-gray-700">Schedule private sessions with our advisors.</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <FaBook className="text-[#2D8CD4] mt-1 text-xl" />
//                   <div>
//                     <h3 className="font-medium mb-2 text-lg">Resource Library</h3>
//                     <p className="text-gray-700">Access to application templates and guides.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;

















// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section with background image */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-12">
//           <div className="text-left">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Scovers Education Webinar
//             </h1>
//             <p className="text-lg text-white max-w-3xl">
//               Discover your pathway to global education with direct access to top universities.
//               Get personalized guidance on admissions, scholarships, and career opportunities.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             {/* Event Details with icons */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold mb-6">EVENT DETAILS</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start gap-3">
//                   <FaCalendarAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">DATE</h3>
//                     <p className="text-white">24 April 2025</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaClock className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">TIME</h3>
//                     <p className="text-white">8:00 AM - 12:00 PM</p>
//                     <p className="text-sm text-white opacity-80">America/Los_Angeles</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">LOCATION</h3>
//                     <p className="text-white">Zoom</p>
//                     <p className="text-sm text-white opacity-80">(Link will be provided after registration)</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect with blue check marks */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">What to Expect</h2>
//               <div className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <FaCheck className="text-[#2D8CD4] mt-1 flex-shrink-0" />
//                     <p>{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;























// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";
// import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section with updated styling */}
//       <div className="relative bg-[#2D8CD4]">
//         <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16">
//           <div className="text-left">
//             <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Scovers Education Webinar
//             </h1>
//             <p className="text-lg text-white max-w-3xl">
//               Discover your pathway to global education with direct access to top universities.
//               Get personalized guidance on admissions, scholarships, and career opportunities.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             {/* Event Details with icons */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold mb-6">EVENT DETAILS</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="flex items-start gap-3">
//                   <FaCalendarAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">DATE</h3>
//                     <p className="text-white">24 April 2025</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaClock className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">TIME</h3>
//                     <p className="text-white">8:00 AM - 12:00 PM</p>
//                     <p className="text-sm text-white opacity-80">America/Los_Angeles</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-xl mt-1" />
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">LOCATION</h3>
//                     <p className="text-white">Zoom</p>
//                     <p className="text-sm text-white opacity-80">(Link will be provided after registration)</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">What to Expect</h2>
//               <ul className="space-y-3 list-disc pl-5">
//                 <li>Direct interaction with university representatives</li>
//                 <li>Detailed information about study programs and admission requirements</li>
//                 <li>Scholarship and funding opportunities</li>
//                 <li>Visa and accommodation guidance</li>
//                 <li>Career prospects after graduation</li>
//                 <li>Q&A session with our education experts</li>
//                 <li>Exclusive application fee waivers for attendees</li>
//                 <li>Personalized counseling sessions available</li>
//               </ul>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;














// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section with reduced height */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center opacity-30"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-10"> {/* Reduced height */}
//           <div className="text-center">
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"> {/* Changed to dark text */}
//               Scovers Education Webinar
//             </h1>
//             <p className="text-lg text-gray-700 max-w-3xl mx-auto"> {/* Changed to dark text */}
//               Join our exclusive virtual event connecting students with top international universities. 
//               Discover your global education opportunities and get expert guidance on admissions, 
//               scholarships, and career pathways.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             {/* Event Details with new UI */}
//             <div className="bg-[#2D8CD4] text-white p-6 rounded-lg shadow-md mb-8"> {/* Blue background */}
//               <h2 className="text-2xl font-semibold mb-6">EVENT DETAILS</h2> {/* Changed to match image */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div>
//                   <h3 className="text-lg font-medium mb-2">FAIR</h3>
//                   <p className="text-white">24 April 2025</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium mb-2">TIME</h3>
//                   <p className="text-white">8:00 AM - 12:00 PM</p>
//                   <p className="text-sm text-white opacity-80">America/Los_Angeles</p>
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium mb-2">LOCATION</h3>
//                   <p className="text-white">Zoom</p>
//                   <p className="text-sm text-white opacity-80">(Link will be provided after registration)</p>
//                 </div>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">What to Expect</h2>
//               <ul className="space-y-3 list-disc pl-5">
//                 <li>Direct interaction with university representatives</li>
//                 <li>Detailed information about study programs and admission requirements</li>
//                 <li>Scholarship and funding opportunities</li>
//                 <li>Visa and accommodation guidance</li>
//                 <li>Career prospects after graduation</li>
//                 <li>Q&A session with our education experts</li>
//                 <li>Exclusive application fee waivers for attendees</li>
//                 <li>Personalized counseling sessions available</li>
//               </ul>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;

















// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section with Background Image */}
//       <div className="relative">
//         <div 
//           className="absolute inset-0 bg-[url('/webback.jpg')] bg-cover bg-center opacity-30"
//           style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
//         ></div>
//         <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//               Scovers Education Webinar
//             </h1>
//             <p className="text-xl text-white max-w-3xl mx-auto mb-8 drop-shadow-md">
//               Join our exclusive virtual event connecting students with top international universities. 
//               Discover your global education opportunities and get expert guidance on admissions, 
//               scholarships, and career pathways.
//             </p>
//             <button 
//               className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
//               onClick={() => document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' })}
//             >
//               Register Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">Event Details</h2>
//               <div className="space-y-2">
//                 <p className="text-lg"><span className="font-medium">Date:</span> 24 April 2025</p>
//                 <p className="text-lg"><span className="font-medium">Time:</span> 8:00 AM - 12:00 PM</p>
//                 <p className="text-lg"><span className="font-medium">Location:</span> Zoom (Link will be provided after registration)</p>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">What to Expect</h2>
//               <ul className="space-y-3 list-disc pl-5">
//                 <li>Direct interaction with university representatives</li>
//                 <li>Detailed information about study programs and admission requirements</li>
//                 <li>Scholarship and funding opportunities</li>
//                 <li>Visa and accommodation guidance</li>
//                 <li>Career prospects after graduation</li>
//                 <li>Q&A session with our education experts</li>
//                 <li>Exclusive application fee waivers for attendees</li>
//                 <li>Personalized counseling sessions available</li>
//               </ul>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3" id="registration-form">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;

















// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

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
//     { name: 'University of Toronto', logo: '/michigan.png' }, // Replace with actual images
//     { name: 'University of Melbourne', logo: '/michigan.png' },
//     { name: 'University College London', logo: '/michigan.png' },
//     { name: 'University of Edinburgh', logo: '/michigan.png' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Content */}
//           <div className="md:w-2/3">
//             <h1 className="text-4xl font-bold text-[#2D8CD4] mb-6">Scovers Education Webinar</h1>
            
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">Event Details</h2>
//               <div className="space-y-2">
//                 <p className="text-lg"><span className="font-medium">Date:</span> 24 April 2025</p>
//                 <p className="text-lg"><span className="font-medium">Time:</span> 8:00 AM - 12:00 PM</p>
//                 <p className="text-lg"><span className="font-medium">Location:</span> Zoom (Link will be provided after registration)</p>
//               </div>
//             </div>

//             {/* Attending Universities */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-6">Attending Universities</h2>
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

//             {/* What to Expect */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold text-[#2D8CD4] mb-4">What to Expect</h2>
//               <ul className="space-y-3 list-disc pl-5">
//                 <li>Direct interaction with university representatives</li>
//                 <li>Detailed information about study programs and admission requirements</li>
//                 <li>Scholarship and funding opportunities</li>
//                 <li>Visa and accommodation guidance</li>
//                 <li>Career prospects after graduation</li>
//                 <li>Q&A session with our education experts</li>
//               </ul>
//             </div>
//           </div>

//           {/* Registration Form */}
//           <div className="md:w-1/3">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
//               <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Full Name"
//                   className="border p-3 rounded w-full"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className="border p-3 rounded w-full"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="tel"
//                   name="phoneNumber"
//                   placeholder="Phone Number"
//                   className="border p-3 rounded w-full"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   type="text"
//                   name="preferredCourse"
//                   placeholder="Preferred Course (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCourse}
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="text"
//                   name="preferredCountry"
//                   placeholder="Preferred Country (optional)"
//                   className="border p-3 rounded w-full"
//                   value={formData.preferredCountry}
//                   onChange={handleChange}
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                   disabled={loading}
//                 >
//                   {loading ? 'Processing...' : 'Register Now'}
//                 </button>

//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;















// import React, { useState } from "react";
// import { useWebinar } from "../context/WebinarContext";
// import Navbar from "../components/shared/Navbar";

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   return (
//     <div className="font-sans min-h-screen bg-gray-100">
//       <Navbar />
//       <div className="grid md:grid-cols-2 min-h-screen">
//         {/* Left: Promotional Side */}
//         {/* Left: Promotional Side with Background Image */}
//         <div
//           className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center p-8"
//           style={{ backgroundImage: `url("/webinar.jpg")`, minHeight: "80vh" }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay */}

//           <div className="relative z-10 max-w-md">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Free Webinar</h2>
//             <h3 className="text-xl font-semibold mb-2">Study Abroad: Everything You Need to Know</h3>
//             <p className="mb-6">
//               Learn how to choose the best course and country for your future, application tips, scholarship opportunities, and more.
//             </p>
//             <button className="bg-white text-[#2D8CD4] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* <div className="bg-[#2D8Cd4] text-white flex flex-col justify-center items-center text-center p-8">
//           <div className="max-w-md">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Free Webinar</h2>
//             <h3 className="text-xl font-semibold mb-2">Study Abroad: Everything You Need to Know</h3>
//             <p className="mb-6">
//               Learn how to choose the best course and country for your future, application tips, scholarship opportunities, and more.
//             </p>
//             <button className="bg-white text-[#2D8CD4] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
//               Learn More
//             </button>
//           </div>
//         </div> */}

//         {/* Right: Form Side */}
//         <div className="bg-white flex flex-col justify-center p-8">
//           <div className="max-w-md w-full mx-auto">
//             <h3 className="text-2xl font-bold text-[#2D8CD4] mb-6">Register Now</h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 className="border p-3 rounded w-full"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 className="border p-3 rounded w-full"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 className="border p-3 rounded w-full"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="text"
//                 name="preferredCourse"
//                 placeholder="Preferred Course (optional)"
//                 className="border p-3 rounded w-full"
//                 value={formData.preferredCourse}
//                 onChange={handleChange}
//               />

//               <input
//                 type="text"
//                 name="preferredCountry"
//                 placeholder="Preferred Country (optional)"
//                 className="border p-3 rounded w-full"
//                 value={formData.preferredCountry}
//                 onChange={handleChange}
//               />

//               <button
//                 type="submit"
//                 className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//                 disabled={loading}
//               >
//                 {loading ? 'Processing...' : 'Register Now'}
//               </button>

//               {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;
 















// import React, { useState } from "react";
// import { useWebinar } from "../context/WebinarContext"; 
// import Navbar from "../components/shared/Navbar";

// const Webinar = () => {
//   const { loading, error, registerForWebinar } = useWebinar();
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     preferredCourse: '',
//     preferredCountry: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await registerForWebinar(formData);
//       // Reset form after successful submission
//       setFormData({
//         fullName: '',
//         email: '',
//         phoneNumber: '',
//         preferredCourse: '',
//         preferredCountry: ''
//       });
//     } catch (err) {
//       console.error("Registration error:", err);
//     }
//   };

//   return (
//     <div className="font-sans min-h-screen bg-gray-50">
//       <Navbar />
      
//       {/* Hero Section */}
//       <div className="bg-[#2D8CD4] text-white py-16 px-6 text-center">
//         <h2 className="text-3xl font-bold">Good communication in a digital world</h2>
//         <p className="mt-4 max-w-2xl mx-auto">
//           Learn how better communication means better performance for you and your team
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">
//         {/* Registration Form */}
//         <div className="bg-white shadow-lg p-6 rounded-md">
//           <h3 className="text-xl font-bold mb-6 text-[#2D8CD4]">Register for webinar</h3>
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
            
//             <input
//               type="text"
//               name="preferredCourse"
//               placeholder="Preferred course (optional)"
//               className="border p-3 rounded w-full"
//               value={formData.preferredCourse}
//               onChange={handleChange}
//             />
            
//             <input
//               type="text"
//               name="preferredCountry"
//               placeholder="Preferred country (optional)"
//               className="border p-3 rounded w-full"
//               value={formData.preferredCountry}
//               onChange={handleChange}
//             />
            
//             <button
//               type="submit"
//               className="bg-[#2D8CD4] hover:bg-[#1A5F8B] text-white py-3 px-6 rounded w-full transition-colors"
//               disabled={loading}
//             >
//               {loading ? 'Processing...' : 'REGISTER NOW'}
//             </button>
            
//             {error && (
//               <p className="text-red-500 text-sm mt-2">{error}</p>
//             )}
//           </form>
//         </div>

//         {/* Webinar Details */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-bold text-[#2D8CD4]">About This Webinar</h3>
//           <p className="text-gray-700">
//             Workplace communication isn't easy, especially in a remote world. Learn how to improve collaboration, boost resilience, and avoid miscommunication.
//           </p>
          
//           <div>
//             <h4 className="font-bold text-lg mb-2">You'll learn:</h4>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>How to give employees a sense of purpose</li>
//               <li>How to boost company resilience in times of crisis</li>
//               <li>How to clarify messaging and improve transparency</li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-bold text-lg mb-2">Featured speakers:</h4>
//             <div className="space-y-2">
//               <p className="text-gray-700">John Doe - Learning & Development Manager, Slack</p>
//               <p className="text-gray-700">Jay Ice Reed - Professor of Psychology and Technology</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;
















// import React from "react";
// import Navbar from "../components/shared/Navbar";
// import { useWebinarContext } from "../context/WebinarContext"; // Import ApplicationContext

// const Webinar = () => {
//   return (
//     <div className="font-sans">
//       <Navbar />
//       <div className="bg-[#2D8CD4] text-white py-12 px-6 text-center">
//         <h2 className="text-3xl font-bold">Good communication in a digital world</h2>
//         <p className="mt-2">Learn how better communication means better performance for you and your team</p>
//       </div>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 p-6">
//         {/* Registration Form */}
//         <div className="bg-white shadow-lg p-6 rounded-md">
//           <h3 className="text-xl font-bold mb-4">Register for webinar</h3>
//           <form className="space-y-4"> 
//             <input type="text" placeholder="Full name" className="border p-2 rounded w-full" />
            
//             <input type="email" placeholder="email" className="border p-2 rounded w-full" />
//             <input type="phone" placeholder="phone number" className="border p-2 rounded w-full" />
//             <input type="phone" placeholder="phone number" className="border p-2 rounded w-full" />
//             <input type="phone" placeholder="phone number" className="border p-2 rounded w-full" />
            
//             <button className="bg-[#2D8CD4] text-white py-2 px-4 rounded w-full">REGISTER NOW</button>
//           </form>
//         </div>
//         {/* Webinar Details */}
//         <div>
//           <p className="text-gray-700 mb-4">
//             Workplace communication isn’t easy, especially in a remote world. Learn how to improve collaboration, boost resilience, and avoid miscommunication.
//           </p>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>How to give employees a sense of purpose</li>
//             <li>How to boost company resilience in times of crisis</li>
//             <li>How to clarify messaging and improve transparency</li>
//           </ul>
//           <h4 className="font-bold mt-4">Featured speakers:</h4>
//           <p className="text-gray-700">John Doe - Learning & Development Manager, Slack</p>
//           <p className="text-gray-700">Jay Ice Reed - Professor of Psychology and Technology</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Webinar;
