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
    title: "House Cleaning",
    master: "Jenny Wilson",
    address: "255 Grand Park Ave, New York",
    image: Image2,
  },
  {
    id: "s2",
    category: "cleaning",
    title: "Washing Clothes",
    master: "Emma Potter",
    address: "525 N Tyron Street, New York",
    image: Image1,
  },
  {
    id: "s3",
    category: "repair",
    title: "House Repairing",
    master: "Ronaldo Epric",
    address: "412 N Tyron Street, New York",
    image: Image2,
  },
  {
    id: "s4",
    category: "cleaning",
    title: "Bathroom Cleaning",
    master: "Henny Wilson",
    address: "525 N Tyron Street, New York",
    image: Image3,
  },
  {
    id: "s5",
    category: "cleaning",
    title: "Floor Cleaning",
    master: "Harry Will",
    address: "Kallie Loop, NC",
    image: Image2,
  },
  {
    id: "s6",
    category: "painting",
    title: "House Painting",
    master: "Jhon Robinson",
    address: "412 N Tyron Street, New York",
    image: Image3,
  },
  {
    id: "s7",
    category: "shifting",
    title: "House Shifting",
    master: "Robert Wilson",
    address: "255 Grand Park Ave, New York",
    image: Image1,
  },
  {
    id: "s8",
    category: "plumbing",
    title: "House Plumbing",
    master: "Ken Watson",
    address: "555 Grand Park Ave, New York",
    image: Image3,
  },
  {
    id: "s9",
    category: "electric",
    title: "House Elektric",
    master: "Den Potter",
    address: "755 Grand Park Ave, New York",
    image: Image3,
  },
];

export const popularServices = [
  {
    id: "s1",
    category: "cleaning",
    title: "Bathroom Cleaning",
    master: "Henny Wilson",
    address: "525 N Tyron Street, New York",
    image: Image2,
  },
  {
    id: "s2",
    category: "cleaning",
    title: "Floor Cleaning",
    master: "Harry Will",
    address: "Kallie Loop, NC",
    image: Image2,
  },
  {
    id: "s3",
    category: "painting",
    title: "House Painting",
    master: "Jhon Robinson",
    address: "412 N Tyron Street, New York",
    image: Image1,
  },
  {
    id: "s4",
    category: "shifting",
    title: "House Shifting",
    master: "Robert Wilson",
    address: "255 Grand Park Ave, New York",
    image: Image1,
  },
  {
    id: "s5",
    category: "plumbing",
    title: "House Plumbing",
    master: "Ken Watson",
    address: "555 Grand Park Ave, New York",
    image: Image1,
  },
  {
    id: "s6",
    category: "electric",
    title: "House Elektric",
    master: "Den Potter",
    address: "755 Grand Park Ave, New York",
    image: Image1,
  },
  {
    id: "s7",
    category: "painting",
    title: "House Painting",
    master: "Jhon Robinson",
    address: "412 N Tyron Street, New York",
    image: Image3,
  },
  {
    id: "s8",
    category: "shifting",
    title: "House Shifting",
    master: "Robert Wilson",
    address: "255 Grand Park Ave, New York",
    image: Image1,
  },
];
