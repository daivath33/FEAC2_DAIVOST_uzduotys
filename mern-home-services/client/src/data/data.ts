import Image1 from "../assets/images/service1.jpg";
import Image2 from "../assets/images/service2.jpg";
import Image3 from "../assets/images/service3.jpg";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaBrush } from "react-icons/fa6";
import { FaBucket } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { PiPipeFill } from "react-icons/pi";

export const categories = [
  { name: "cleaning", icon: FaBucket, color: "#b12fde" },
  { name: "repair", icon: FaScrewdriverWrench, color: "#ecbb3a" },
  { name: "painting", icon: FaBrush, color: "#e23e40" },
  { name: "shifting", icon: FaTruck, color: "#059e96" },
  { name: "plumbing", icon: PiPipeFill, color: "#ea9319" },
  { name: "electric", icon: FaLightbulb, color: "#1f71c5" },
];

export const services = [
  {
    id: "s1",
    category: "cleaning",
    name: "House Cleaning",
    contactPerson: "Jenny Wilson",
    address: "255 Grand Park Ave, New York",
    photos: [Image2],
  },
  {
    id: "s2",
    category: "cleaning",
    name: "Washing Clothes",
    contactPerson: "Emma Potter",
    address: "525 N Tyron Street, New York",
    photos: [Image1],
  },
  {
    id: "s3",
    category: "repair",
    name: "House Repairing",
    contactPerson: "Ronaldo Epric",
    address: "412 N Tyron Street, New York",
    photos: [Image2],
  },
  {
    id: "s4",
    category: "cleaning",
    name: "Bathroom Cleaning",
    contactPerson: "Henny Wilson",
    address: "525 N Tyron Street, New York",
    photos: [Image3],
  },
  {
    id: "s5",
    category: "cleaning",
    name: "Floor Cleaning",
    contactPerson: "Harry Will",
    address: "Kallie Loop, NC",
    photos: [Image2],
  },
  {
    id: "s6",
    category: "painting",
    name: "House Painting",
    contactPerson: "Jhon Robinson",
    address: "412 N Tyron Street, New York",
    photos: [Image3],
  },
  {
    id: "s7",
    category: "shifting",
    name: "House Shifting",
    contactPerson: "Robert Wilson",
    address: "255 Grand Park Ave, New York",
    photos: [Image1],
  },
  {
    id: "s8",
    category: "plumbing",
    name: "House Plumbing",
    contactPerson: "Ken Watson",
    address: "555 Grand Park Ave, New York",
    photos: [Image3],
  },
  {
    id: "s9",
    category: "electric",
    name: "House Elektric",
    contactPerson: "Den Potter",
    address: "755 Grand Park Ave, New York",
    photos: [Image3],
  },
];

export const popularServices = [
  {
    id: "s1",
    category: "cleaning",
    name: "Bathroom Cleaning",
    contactPerson: "Henny Wilson",
    address: "525 N Tyron Street, New York",
    photos: [Image2],
  },
  {
    id: "s2",
    category: "cleaning",
    name: "Floor Cleaning",
    contactPerson: "Harry Will",
    address: "Kallie Loop, NC",
    photos: [Image2],
  },
  {
    id: "s3",
    category: "painting",
    name: "House Painting",
    contactPerson: "Jhon Robinson",
    address: "412 N Tyron Street, New York",
    photos:[Image1],
  },
  {
    id: "s4",
    category: "shifting",
    name: "House Shifting",
    contactPerson: "Robert Wilson",
    address: "255 Grand Park Ave, New York",
    photos: [Image1],
  },
  {
    id: "s5",
    category: "plumbing",
    name: "House Plumbing",
    contactPerson: "Ken Watson",
    address: "555 Grand Park Ave, New York",
    photos: [Image1],
  },
  {
    id: "s6",
    category: "electric",
    name: "House Elektric",
    contactPerson: "Den Potter",
    address: "755 Grand Park Ave, New York",
    photos: [Image1],
  },
  {
    id: "s7",
    category: "painting",
    name: "House Painting",
    contactPerson: "Jhon Robinson",
    address: "412 N Tyron Street, New York",
    photos: [Image3],
  },
  {
    id: "s8",
    category: "shifting",
    name: "House Shifting",
    contactPerson: "Robert Wilson",
    address: "255 Grand Park Ave, New York",
    photos: [Image1],
  },
];
