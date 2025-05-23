import { CiCalendar } from "react-icons/ci";
import event1 from "../assets/event.jpeg"
import event2 from "../assets/event2.png"
import event3 from "../assets/event3.png"
import { IoPrintOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCalendar4 } from "react-icons/bs";



export const promoterOptions = [
  {
    type: "EVENTS",
    title: "Events",
    route: "/promoter/my-events",
    icon: CiCalendar,
    iconActive: null,
  },
  {
    type: "TICKET-MANAGEMENT",
    title: "Ticket Management",
    route: "/promoter/tickets",
    icon: IoPrintOutline,
    iconActive: null,
  },
  {
    type: "REMITTANCES",
    title: "Remittances",
    route: "/promoter/remittances",
    icon: BsCalendar4,
    iconActive: null,
  },
  {
    type: "SETTINGS",
    title: "Settings",
    route: "/promoter/settings",
    icon: IoSettingsOutline,
    iconActive: null,
  },
];
export const events = [
  {
    id: 1,
    title: "Mr Money With The Vibe Concert.",
    date: "Dec 21-23, 2024",
    time: "8:00 pm",
    location: "621 Aminu Kano Cres, Wuse, Abuja",
    price: "₦25,000.00",
    image: event1,
  },
  {
    id: 2,
    title: "Save the Kids Fundraiser.",
    date: "Sep 22, 2024",
    time: "8:00 pm",
    location: "Three Arms Zone, Abuja",
    price: "₦1,000.00",
    image: event2,
  },
  {
    id: 3,
    title: "Upper Room.",
    date: "Dec 21-23, 2024",
    time: "8:00 pm",
    location: "Jabi District, Abuja",
    price: "₦Free",
    image: event3,
  },
  {
    id: 4,
    title: "Pilgrims MatchDay",
    date: "Feb 22, 2024",
    time: "8:00 pm",
    location: "National Stadium, Abuja",
    price: "₦Free",
    image: event1,
  },
  {
    id: 5,
    title: "Endless Runway.",
    date: "Aug 22, 2024",
    time: "8:00 pm",
    location: "Silver Bird Galleries, Abuja",
    price: "₦5,000.00",
    image: event2,
  },
  {
    id: 6,
    title: "Today's Tech View",
    date: "Jan 21-23, 2024",
    time: "8:00 pm",
    location: "Jabi District, Abuja",
    price: "₦Free",
    image: event3,
  },
  {
    id: 7,
    title: "AI & Blockchain Summit",
    date: "Nov 10, 2024",
    time: "10:00 am",
    location: "NICON Luxury Hotel, Abuja",
    price: "₦10,000.00",
    image: event1,
  },
  {
    id: 8,
    title: "Music & Arts Festival",
    date: "May 15, 2024",
    time: "5:00 pm",
    location: "Maitama Amusement Park, Abuja",
    price: "₦7,500.00",
    image: event2,
  },
  {
    id: 9,
    title: "Startup Networking Event",
    date: "Jul 19, 2024",
    time: "6:00 pm",
    location: "Abuja Chamber of Commerce",
    price: "₦3,000.00",
    image: event3,
  },
  {
    id: 10,
    title: "Abuja Fashion Week",
    date: "Oct 2-4, 2024",
    time: "12:00 pm",
    location: "International Conference Centre, Abuja",
    price: "₦15,000.00",
    image: event1,
  },
  {
    id: 11,
    title: "Entrepreneurs Meetup",
    date: "Mar 8, 2024",
    time: "4:00 pm",
    location: "Civic Innovation Lab, Abuja",
    price: "₦2,000.00",
    image: event2,
  },
  {
    id: 12,
    title: "Food & Drink Expo",
    date: "Apr 28, 2024",
    time: "2:00 pm",
    location: "Eagles Square, Abuja",
    price: "₦1,500.00",
    image: event3,
  },
  {
    id: 1,
    title: "Mr Money With The Vibe Concert.",
    date: "Dec 21-23, 2024",
    time: "8:00 pm",
    location: "621 Aminu Kano Cres, Wuse, Abuja",
    price: "₦25,000.00",
    image: event1,
  },
  {
    id: 2,
    title: "Save the Kids Fundraiser.",
    date: "Sep 22, 2024",
    time: "8:00 pm",
    location: "Three Arms Zone, Abuja",
    price: "₦1,000.00",
    image: event2,
  },
  {
    id: 3,
    title: "Upper Room.",
    date: "Dec 21-23, 2024",
    time: "8:00 pm",
    location: "Jabi District, Abuja",
    price: "₦Free",
    image: event3,
  },
  {
    id: 4,
    title: "Pilgrims MatchDay",
    date: "Feb 22, 2024",
    time: "8:00 pm",
    location: "National Stadium, Abuja",
    price: "₦Free",
    image: event1,
  },
  {
    id: 5,
    title: "Endless Runway.",
    date: "Aug 22, 2024",
    time: "8:00 pm",
    location: "Silver Bird Galleries, Abuja",
    price: "₦5,000.00",
    image: event2,
  },
  {
    id: 6,
    title: "Today's Tech View",
    date: "Jan 21-23, 2024",
    time: "8:00 pm",
    location: "Jabi District, Abuja",
    price: "₦Free",
    image: event3,
  },
  {
    id: 7,
    title: "AI & Blockchain Summit",
    date: "Nov 10, 2024",
    time: "10:00 am",
    location: "NICON Luxury Hotel, Abuja",
    price: "₦10,000.00",
    image: event1,
  },
  {
    id: 8,
    title: "Music & Arts Festival",
    date: "May 15, 2024",
    time: "5:00 pm",
    location: "Maitama Amusement Park, Abuja",
    price: "₦7,500.00",
    image: event2,
  },
  {
    id: 9,
    title: "Startup Networking Event",
    date: "Jul 19, 2024",
    time: "6:00 pm",
    location: "Abuja Chamber of Commerce",
    price: "₦3,000.00",
    image: event3,
  },
  {
    id: 10,
    title: "Abuja Fashion Week",
    date: "Oct 2-4, 2024",
    time: "12:00 pm",
    location: "International Conference Centre, Abuja",
    price: "₦15,000.00",
    image: event1,
  },
  {
    id: 11,
    title: "Entrepreneurs Meetup",
    date: "Mar 8, 2024",
    time: "4:00 pm",
    location: "Civic Innovation Lab, Abuja",
    price: "₦2,000.00",
    image: event2,
  },
  {
    id: 12,
    title: "Food & Drink Expo",
    date: "Apr 28, 2024",
    time: "2:00 pm",
    location: "Eagles Square, Abuja",
    price: "₦1,500.00",
    image: event3,
  },
  {
    id: 1,
    title: "Mr Money With The Vibe Concert.",
    date: "Dec 21-23, 2024",
    time: "8:00 pm",
    location: "621 Aminu Kano Cres, Wuse, Abuja",
    price: "₦25,000.00",
    image: event1,
  },
  {
    id: 2,
    title: "Save the Kids Fundraiser.",
    date: "Sep 22, 2024",
    time: "8:00 pm",
    location: "Three Arms Zone, Abuja",
    price: "₦1,000.00",
    image: event2,
  },
  {
    id: 3,
    title: "Upper Room.",
    date: "Dec 21-23, 2024",
    time: "8:00 pm",
    location: "Jabi District, Abuja",
    price: "₦Free",
    image: event3,
  },
  {
    id: 4,
    title: "Pilgrims MatchDay",
    date: "Feb 22, 2024",
    time: "8:00 pm",
    location: "National Stadium, Abuja",
    price: "₦Free",
    image: event1,
  },
  {
    id: 5,
    title: "Endless Runway.",
    date: "Aug 22, 2024",
    time: "8:00 pm",
    location: "Silver Bird Galleries, Abuja",
    price: "₦5,000.00",
    image: event2,
  },
  {
    id: 6,
    title: "Today's Tech View",
    date: "Jan 21-23, 2024",
    time: "8:00 pm",
    location: "Jabi District, Abuja",
    price: "₦Free",
    image: event3,
  },
  {
    id: 7,
    title: "AI & Blockchain Summit",
    date: "Nov 10, 2024",
    time: "10:00 am",
    location: "NICON Luxury Hotel, Abuja",
    price: "₦10,000.00",
    image: event1,
  },
  {
    id: 8,
    title: "Music & Arts Festival",
    date: "May 15, 2024",
    time: "5:00 pm",
    location: "Maitama Amusement Park, Abuja",
    price: "₦7,500.00",
    image: event2,
  },
  {
    id: 9,
    title: "Startup Networking Event",
    date: "Jul 19, 2024",
    time: "6:00 pm",
    location: "Abuja Chamber of Commerce",
    price: "₦3,000.00",
    image: event3,
  },
  {
    id: 10,
    title: "Abuja Fashion Week",
    date: "Oct 2-4, 2024",
    time: "12:00 pm",
    location: "International Conference Centre, Abuja",
    price: "₦15,000.00",
    image: event1,
  },
  {
    id: 11,
    title: "Entrepreneurs Meetup",
    date: "Mar 8, 2024",
    time: "4:00 pm",
    location: "Civic Innovation Lab, Abuja",
    price: "₦2,000.00",
    image: event2,
  },
  {
    id: 12,
    title: "Food & Drink Expo",
    date: "Apr 28, 2024",
    time: "2:00 pm",
    location: "Eagles Square, Abuja",
    price: "₦1,500.00",
    image: event3,
  },
];
