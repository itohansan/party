import asake from "./asake.jpeg";
import fireboy from "./fireboy_concert.jpeg";
import burnaboyc from "./burnaboy-concert.jpeg";
import ayrac from "./ayra_concert.jpeg";
import olamidec from "./olamide_concert.jpeg";
import gal1 from "./gallery1.jpeg";
import gal2 from "./gallery2.jpeg";
import gal4 from "./gallery4.jpeg";
import gal5 from "./gallery5.jpeg";
import gal6 from "./gallery6.jpeg";
import gal7 from "./gallery7.jpeg";
import oj from "./oj.jpeg";
import carnival from "./carnival.jpg";
import jazz from "./jazfes.webp";
import fela from "./felabration.webp";
// import wiz from "./wizlivespot.jpeg"

export const assets = { asake, fireboy };
export const dummyCardData = [
  {
    _id: 1,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: olamidec,
    year: 2006,
    isAvaliable: true,
    venue: "Eko Convention Center, Lagos",
    time: "8:00 PM",
    date: "Sep 30, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 2,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: asake,
    year: 2006,
    isAvaliable: true,
    venue: "Tafawa Balewa Square, Lagos",
    time: "9:00 PM",
    date: "Oct 12, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 3,
    image: ayrac,
    year: 2006,
    isAvaliable: true,
    venue: "Obafemi Awolowo Stadium, Ibadan",
    time: "7:30 PM",
    date: "Oct 25, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 4,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: burnaboyc,
    year: 2006,
    isAvaliable: true,
    venue: "Eagle Square, Abuja",
    time: "8:30 PM",
    date: "Nov 10, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 5,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: fireboy,
    year: 2006,
    isAvaliable: true,
    venue: "Samson Siasia Stadium, Port Harcourt",
    time: "7:00 PM",
    date: "Dec 20, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
];

export const dummyCardData2 = [
  {
    _id: 6,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: carnival,
    year: 2006,
    isAvaliable: true,
    venue: "Teslim Balogun Stadium, Lagos",
    time: "7:00 PM",
    date: "Sep 30, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 7,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: fela,
    year: 2006,
    isAvaliable: true,
    venue: "International Conference Centre, Abuja",
    time: "8:30 PM",
    date: "Oct 8, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 8,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: jazz,
    year: 2006,
    isAvaliable: true,
    venue: "Cultural Centre, Calabar",
    time: "9:00 PM",
    date: "Oct 22, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 9,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: fireboy,
    year: 2006,
    isAvaliable: true,
    venue: "Ogbemudia Stadium, Benin City",
    time: "7:30 PM",
    date: "Nov 5, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
  {
    _id: 10,
    owner: "67fe3467ed8a8fe17d0ba6e2",
    image: oj,
    year: 2006,
    isAvaliable: true,
    venue: "Michael Okpara Square, Enugu",
    time: "8:00 PM",
    date: "Dec 18, 2025",
    createdAt: "2025-04-16T07:26:56.215Z",
  },
];

export const getMenuLinks = (isLoggedIn) => [
  { name: "EVENTS", path: "/events" },
  { name: "RSVP", path: "/reservations" },
  { name: "ABOUT", path: "/about" },
  isLoggedIn
    ? { name: "LOGIN", path: "/login" }
    : { name: "LOGOUT", path: "/logout" },
  // { name: "EVENTS", path: "/cars" },
];

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    // icon: dashboardIcon,
    // coloredIcon: dashboardIconColored,
  },
  {
    name: "Reservation",
    path: "/owner/reservation",
    // icon: addIcon,
    // coloredIcon: addIconColored,
  },

  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    // icon: listIcon,
    // coloredIcon: listIconColored,
  },
];

export const reservationCards = [
  {
    date: "Tuesday, Sep 21, 2025",
    time: "23: 30 - End",
    eventName: "owambe",
    venues: [
      { name: "tea room", details: ["host A", "guest artist B", "dj C"] },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
    ],
  },
  {
    date: "Tuesday, Sep 21, 2025",
    time: "23: 30 - End",
    eventName: "Ibiza feast",
    venues: [
      { name: "tea room", details: ["host A", "guest artist B", "dj C"] },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
    ],
  },
  {
    date: "Tuesday, Sep 21, 2025",
    time: "23: 30 - End",
    eventName: "owambe",
    venues: [
      { name: "tea room", details: ["host A", "guest artist B", "dj C"] },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
    ],
  },
  {
    date: "Tuesday, Sep 21, 2025",
    time: "23: 30 - End",
    eventName: "owambe",
    venues: [
      { name: "tea room", details: ["host A", "guest artist B", "dj C"] },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
    ],
  },
  {
    date: "Tuesday, Sep 21, 2025",
    time: "23: 30 - End",
    eventName: "owambe",
    venues: [
      { name: "tea room", details: ["host A", "guest artist B", "dj C"] },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
    ],
  },
  {
    date: "Tuesday, Sep 21, 2025",
    time: "23: 30 - End",
    eventName: "owambe",
    venues: [
      { name: "tea room", details: ["host A", "guest artist B", "dj C"] },
      {
        name: "Venue 2",
        details: ["host X", "guest artist Y", "dj Z"],
      },
    ],
  },
];

export const residents = [
  {
    id: 1,
    day: "Monday",
    content: "Industry Night",
    bg: "bg-[url('/images/Black.jpeg')] bg-cover bg-center",
  },
  {
    id: 2,
    day: "Tuesday",
    content: "Karaoke & Taco Tuesday",
    bg: "bg-[url('/images/karaoke.jpg')] bg-cover bg-center",
  },
  {
    id: 3,
    day: "Wednesday",
    content: "Ladies Luxe Night",
    bg: "bg-[url('/images/high.png')] bg-cover bg-center",
  },
  {
    id: 4,
    day: "Thursday",
    content: "Open mic & DJ collabs",
    bg: "bg-[url('/images/mic.jpeg')] bg-cover bg-center",
  },
  {
    id: 5,
    day: "Friday",
    content: "Black & Gold Fridays",
    bg: "bg-[url('/images/girl.jpeg')] bg-cover bg-center",
  },
  {
    id: 6,
    day: "Saturday",
    content: "Owambe",
    bg: "bg-[url('/images/owambe.png')] bg-cover bg-center",
  },
  {
    id: 7,
    day: "Sunday",
    content: "Sunset Soirée",
    bg: "bg-[url('/images/mic.jpeg')] bg-cover bg-center",
  },
];

export const gallery = [
  { image: gal1 },
  { image: gal2 },
  { image: gal4 },
  { image: gal5 },
  { image: gal6 },
  { image: gal7 },
];
