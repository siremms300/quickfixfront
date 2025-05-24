import React from "react";

const category = [
  { id: 1, name: "Computer Science", count: "2,343 Schools", icon: "💻" },
  { id: 2, name: "Neurosurgery", count: "54 Schools", icon: "🧠" },
  { id: 3, name: "Political Science", count: "364 Schools", icon: "🏛️" },
  { id: 4, name: "Cyber Security", count: "564 Schools", icon: "🔒" }
];

const PopularCategory = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-12 px-6 mb-10">
      <h2 className="md:text-3xl text-2xl font-semibold mb-8 text-center">Popular Courses</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category.map(({ name, id, count, icon }) => (
          <div key={id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl mb-4">{icon}</div>
            <p className="text-xl font-semibold text-[#18191C] mb-2">{name}</p>
            <p className="text-sm text-[#767F8C]">{count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;













// import React from "react";

// const category = [
//   {id: 1,name: "Computer Science",count: "2,343 Schools",},
//   { id: 2, name: "Neurosurgery", count: "54 Schools" },
//   { id: 3, name: "Political Science", count: "364 Schools" },
//   { id: 4, name: "Cyber Security", count: "564 Schools" }
// ];

// const PopularCategory = () => {
//   return (
//     <div className="max-w-7xl mx-auto md:px-12 px-6 mb-20">
//       <h2 className="md:text-3xl text-2xl font-semibold mb-5">Popular Courses</h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {
//             category.map(({name, id, count}) => (
//                 <div key={id}>
//                     <p className="text-lg text-[#18191C]">{name}</p>
//                     <p className="text-sm text-[#767F8C]">{count}</p>
//                 </div>
//             ))
//         }
//       </div>

//     </div>
//   );
// };

// export default PopularCategory;
