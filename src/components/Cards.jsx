import {
  FaUsers,
  FaMapMarkerAlt,
  FaShoppingBag,
  FaCalendarCheck,
} from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: (
      <FaUsers className="text-purple-500 group-hover:text-white text-4xl" />
    ),
    title: "People",
    description:
      "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
    buttonText: "Connect",
    hoverBg: "hover:bg-purple-400",
  },
  {
    id: 2,
    icon: (
      <FaMapMarkerAlt className="text-green-600 group-hover:text-white text-4xl" />
    ),
    title: "Place",
    description:
      "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
    buttonText: "Meet up",
    hoverBg: "hover:bg-green-400",
  },
  {
    id: 3,
    icon: (
      <FaShoppingBag className="text-red-500 group-hover:text-white text-4xl" />
    ),
    title: "Product",
    description:
      "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
    buttonText: "Get it",
    hoverBg: "hover:bg-red-400",
  },
  {
    id: 4,
    icon: (
      <FaCalendarCheck className="text-blue-500 group-hover:text-white text-4xl" />
    ),
    title: "Program",
    description:
      "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
    buttonText: "Attend",
    hoverBg: "hover:bg-blue-400",
  },
];

export default function Card() {
  return (
    <div className="grid sm:grid-cols-2 px-5 py-10 gap-10 sm:justify-items-center">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`border rounded-2xl p-6 flex flex-col sm:items-start items-center sm:w-[80%] transition duration-300 group ${card.hoverBg}`}
        >
          <div className="flex items-center gap-3 group-hover:text-white ">
            {card.icon}
            <h2 className="text-xl font-bold ">{card.title}</h2>
          </div>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            {card.description}
          </p>
          <button className="mt-4 border w-full sm:w-30 border-purple-400 text-purple-500 px-6 py-2 rounded-lg group-hover:bg-white group-hover:hidden">
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}

// import {
//   FaUsers,
//   FaMapMarkerAlt,
//   FaShoppingBag,
//   FaCalendarCheck,
// } from "react-icons/fa";

// const cards = [
//   {
//     id: 1,
//     icon: <FaUsers />,
//     title: "People",
//     description:
//       "An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.",
//     hoverBg: "bg-purple-600",
//   },
//   {
//     id: 2,
//     icon: <FaMapMarkerAlt />,
//     title: "Place",
//     description:
//       "An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.",
//     hoverBg: "bg-green-600",
//   },
//   {
//     id: 3,
//     icon: <FaShoppingBag />,
//     title: "Product",
//     description:
//       "An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.",
//     hoverBg: "bg-red-600",
//   },
//   {
//     id: 4,
//     icon: <FaCalendarCheck />,
//     title: "Program",
//     description:
//       "An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.",
//     hoverBg: "bg-blue-600",
//   },
// ];

// export default function Card() {
//   return (
//     <div className="grid sm:grid-cols-2 px-5 py-10 gap-10 sm:justify-items-center">
//       {cards.map((card) => (
//         <div
//           key={card.id}
//           className={`group border rounded-2xl p-6 flex flex-col sm:items-start items-center sm:w-[80%] transition duration-300 hover:${card.hoverBg}`}
//         >
//           {/* Icon + Title */}
//           <div className="flex items-center gap-3">
//             <span className="text-3xl text-gray-600 group-hover:text-white">
//               {card.icon}
//             </span>
//             <h2 className="text-xl font-bold text-gray-800 group-hover:text-white">
//               {card.title}
//             </h2>
//           </div>

//           {/* Description */}
//           <p className="text-gray-600 mt-2 group-hover:text-white">
//             {card.description}
//           </p>

//           {/* Button (only visible before hover) */}
//           <button className="mt-4 border w-full sm:w-30 border-purple-400 text-purple-500 px-6 py-2 rounded-lg hover:bg-purple-100 transition group-hover:hidden">
//             Learn more
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
