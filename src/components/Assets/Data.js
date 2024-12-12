import h1 from '../Assets/hero/h1.png'
import h2 from '../Assets/hero/h2.png'
import h3 from '../Assets/hero/h3.png'
import h4 from '../Assets/hero/h4.png'
import h5 from '../Assets/hero/h5.png'

import p1 from '../Assets/list/p-1.jpg'
import p2 from '../Assets/list/p-2.png'
import p3 from '../Assets/list/p-3.jpg'
import p4 from '../Assets/list/p-4.jpg'
import p5 from '../Assets/list/p-5.png'
import p6 from '../Assets/list/p-6.png'

import city1 from '../Assets/location/city-1.png'
import city2 from '../Assets/location/city-2.png'
import city3 from '../Assets/location/city-3.png'
import city4 from '../Assets/location/city-4.jpg'
import city5 from '../Assets/location/city-5.jpg'
import city6 from '../Assets/location/city-6.png'

import team1 from '../Assets/customer/team-1.jpg'
import team2 from '../Assets/customer/team-2.jpg'
import team3 from '../Assets/customer/team-3.jpg'
import team4 from '../Assets/customer/team-4.jpg'
import team5 from '../Assets/customer/team-5.jpg'
import team6 from '../Assets/customer/team-6.jpg'

import { FaBriefcase, FaHeart, FaLightbulb, FaTrophy } from 'react-icons/fa'

export const nav = [
  {
    id:1,
    text: "home",
    path: "/",
  },
  {
    id:2,
    text: "A propo",
    path: "/about",
  },
  {
    id:3,
    text: "services",
    path: "/services",
  },
  {
    id:4,
    text: "blog",
    path: "/blog",
  },
  {
    id:5,
    text: "Tarif",
    path: "/pricing",
  },
  {
    id:6,
    text: "contact",
    path: "/contact",
  },
]

export const featured = [
  {
    cover: h1,
    name: "Maison familiale",
    total: "122 Property",
  },
  {
    cover: h2,
    name: "Maison & Villa",
    total: "155 Property",
  },
  {
    cover: h3,
    name: "Apartement",
    total: "300 Property",
  },
  {
    cover: h4,
    name: "Bureau & Studio",
    total: "80 Property",
  },
  {
    cover: h5,
    name: "Villa & Condo",
    total: "80 Property",
  },
]

export const list = [
  {
    id: 1,
    cover:p1,
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "A louer",
    price: "$3,700",
    type: "Apartement",
  },
  {
    id: 2,
    cover: p5,
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "A vendre",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover:p3,
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "A louer",
    price: "$5,860",
    type: "bureaux",
  },
  {
    id: 4,
    cover:p4,
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "A vendre",
    price: "$7,540",
    type: "Maisons & Villas",
  },
  {
    id: 5,
    cover:p2,
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "A louer",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: p6,
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "A vendre",
    price: "$2,742",
    type: "Apartement",
  },
]

export const awards = [
  {
    icon: FaTrophy,
    num: "32 M	",
    name: "Blue Burmin Award",
  },
  {
    icon: FaBriefcase,
    num: "43 M",
    name: "Mimo X11 Award",
  },
  {
    icon: FaLightbulb,
    num: "51 M",
    name: "Australian UGC Award",
  },
  {
    icon: FaHeart,
    num: "42 M",
    name: "IITCA Green Award",
  },
]

export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartements",
    Offices: "07 Bureaux",
    cover:city1,
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartements",
    Offices: "07 Bureaux",
    cover:city2,
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: " 10 Apartements",
    Offices: "07 Bureaux",
    cover: city3,
  },
  {
    id: 4,
    name: "Paris, France",
    Villas: "12 Villas",
    Apartments: " 10 Apartements",
    Offices: "07 Bureaux",
    cover:city4,
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: " 10 Apartements",
    Offices: "07 Bureaux",
    cover:city5,
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: " 10 Apartements",
    Offices: "07 Bureaux",
    cover: city6,
  },
]

export const team = [
  {
    list: "50",
    cover: team1,
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
  },
  {
    list: "70",
    cover: team2,
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
  },
  {
    list: "80",
    cover: team3,
    address: "Denever, USA",
    name: "Anna K. Young",
  },
  {
    list: "51",
    cover: team4,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    list: "42",
    cover: team5,
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
  },
  {
    list: "38",
    cover: team6,
    address: "Montreal, USA",
    name: "Adam K. Jollio",
  },
]

import {FaCheck} from 'react-icons/fa';
import { HiX } from 'react-icons/hi'
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "un utilisateur, par mois",
    list: [
      {
        icon: FaCheck,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: FaCheck,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: FaCheck,
        text: "5GB Cloud Storage",
      },
      { change: "color", icon: HiX, text: "Personal Help Support" },
      { change: "color", icon: HiX, text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "un utilisateur, par mois",
    list: [
      {
        icon: FaCheck,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: FaCheck,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: FaCheck,
        text: "10GB Cloud Storage",
      },
      {
        icon: FaCheck,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: HiX,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "Deux utilisateur, par mois",
    list: [
      {
        icon: FaCheck ,
        text: "100% Uptime Guarantee",
      },
      {
        icon: FaCheck,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: FaCheck,
        text: "20GB Cloud Storage",
      },
      {
        icon: FaCheck,
        text: "Personal Help Support",
      },
      {
        icon: FaCheck,
        text: "Enterprise SLA",
      },
    ],
  },
]