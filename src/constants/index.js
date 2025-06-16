import categImg1 from "../assets/images/categImg1.jpg";
import categImg2 from "../assets/images/categImg2.jpg";
import categImg3 from "../assets/images/categImg3.jpg";
import categImg4 from "../assets/images/categImg4.jpg";
import categImg5 from "../assets/images/categImg5.jpg";
import categImg6 from "../assets/images/categImg6.jpg";

import productImg1 from "../assets/images/productImages/OnionImg1.png";
import productImg2 from "../assets/images/productImages/CarrotImg1.png";
import productImg3 from "../assets/images/productImages/CucumberImg1.png";
import productImg4 from "../assets/images/productImages/CabbageImg1.png";
import productImg5 from "../assets/images/productImages/AppleImg1.png";
import productImg6 from "../assets/images/productImages/MilkImg1.png";

import customImg1 from "../assets/images/custImg1.jpg";
import customImg2 from "../assets/images/custImg2.png";
import customImg3 from "../assets/images/custImg3.jpg";

import heroCustImg1 from "../assets/images/heroCustImg1.jpg";
import heroCustImg2 from "../assets/images/heroCustImg2.jpg";
import heroCustImg3 from "../assets/images/heroCustImg3.jpg";
import heroCustImg4 from "../assets/images/heroCustImg4.jpg";

import blogImg1 from "../assets/images/blogImg1.jpg";
import blogImg2 from "../assets/images/blogImg2.jpg";
import blogImg3 from "../assets/images/blogImg3.jpg";

import authImg1 from "../assets/images/authImg1.jpg";
import authImg2 from "../assets/images/authImg2.png";
import authImg3 from "../assets/images/authImg3.png";

import bIcon1 from "../assets/icons/bIcon1.png";
import bIcon2 from "../assets/icons/bIcon2.png";
import bIcon3 from "../assets/icons/bIcon3.png";
import bIcon4 from "../assets/icons/bIcon4.png";
import bIcon5 from "../assets/icons/bIcon5.png";

import paymIcon1 from "../assets/icons/payIcon1.png";
import paymIcon2 from "../assets/icons/payIcon2.png";
import paymIcon3 from "../assets/icons/payIcon3.png";
import paymIcon4 from "../assets/icons/payIcon4.png";
import paymIcon5 from "../assets/icons/payIcon5.png";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Latest", path: "/latest" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const heroCusts = [
  { id: 1, src: heroCustImg1, alt: "cust1" },
  { id: 2, src: heroCustImg2, alt: "cust2" },
  { id: 3, src: heroCustImg3, alt: "cust3" },
  { id: 4, src: heroCustImg4, alt: "cust4" },
];

export const cardData = [
  {
    icon: "FaTruck",
    heading: "Fast Delivery",
    description: "Within 1-2 hours after ordering",
  },
  {
    icon: "FaClock",
    heading: "Opening Hours",
    description: "Mon-Sun: 8:00am -10:00pm",
  },
  {
    icon: "FaRecycle",
    heading: "Sustainable Packaging",
    description: "Recyclable materials for packaging",
  },
];

export const scrollingData = [
  { heading: "30-Min", description: "Avg. Delivery Time" },
  { heading: "2M+", description: "Orders Fulfilled" },
  { heading: "10K", description: "Products in Stock" },
  { heading: "98%", description: "Customer Satisfaction" },
  { heading: "500+", description: "Local Farmers Supported" },
];

export const scrollIcons = [
  { id: 1, iconSrc: bIcon1 },
  { id: 2, iconSrc: bIcon2 },
  { id: 3, iconSrc: bIcon3 },
  { id: 4, iconSrc: bIcon4 },
  { id: 5, iconSrc: bIcon5 },
];

export const categDatas = [
  { id: 1, src: categImg1, to: "/", text: "Fresh Produce" },
  { id: 2, src: categImg2, to: "/", text: "Meat & Seafood" },
  { id: 3, src: categImg3, to: "/", text: "Snacks & Beverages" },
  { id: 4, src: categImg4, to: "/", text: "Pantry Staples" },
  { id: 5, src: categImg5, to: "/", text: "Bakery & Dairy" },
  { id: 6, src: categImg6, to: "/", text: "Household & Essentials" },
];

// Corrected products array
export const products = [
  // Fruits & Milks (15 items)
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1584424277384-99975315c81c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBiYW5hbmFzfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Organic Bananas",
    description: "A bunch of fresh, organic bananas.",
    rating: 4.5,
    price: 1.99,
    discountPercentage: 10,
    category: "Fruits & Milks",
  },
  {
    // Renamed from Fresh Strawberries to match productImg5
    id: 2,
    image: productImg5, // AppleImg1.png
    name: "Fresh Apples",
    description: "Sweet and juicy apples, 1lb pack.",
    rating: 4.8,
    price: 4.49,
    category: "Fruits & Milks",
  },
  {
    id: 3,
    image: productImg6, // MilkImg1.png
    name: "Whole Milk",
    description: "Gallon of fresh whole milk.",
    rating: 4.6,
    price: 3.99,
    category: "Fruits & Milks",
  },
  {
    // Kept Red Apples, using URL
    id: 4,
    image:
      "https://images.unsplash.com/photo-1603386493298-0816965f330e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwYXBwbGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Red Apples",
    description: "Crisp and sweet red apples, sold by the pound.",
    rating: 4.4,
    price: 2.99,
    discountPercentage: 15,
    category: "Fruits & Milks",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1629490115774-849159179743?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Blueberries",
    description: "Fresh blueberries, pint container.",
    rating: 4.7,
    price: 5.29,
    category: "Fruits & Milks",
  },
  {
    id: 6,
    image: productImg6, // MilkImg1.png
    name: "Almond Milk",
    description: "Unsweetened almond milk, half gallon.",
    rating: 4.5,
    price: 3.79,
    category: "Fruits & Milks",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1560011424-d7faeca948c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Grapes",
    description: "Seedless green grapes, sold by the pound.",
    rating: 4.6,
    price: 2.79,
    category: "Fruits & Milks",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1547514701-428d2364c74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Orange Juice",
    description: "Freshly squeezed orange juice, half gallon.",
    rating: 4.8,
    price: 4.99,
    category: "Fruits & Milks",
  },
  {
    id: 9,
    image: productImg6, // MilkImg1.png
    name: "Greek Yogurt",
    description: "Plain Greek yogurt, 32oz container.",
    rating: 4.9,
    price: 5.49,
    category: "Fruits & Milks",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1550304943-4f24f39dd9cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Pineapple",
    description: "Fresh pineapple.",
    rating: 4.3,
    price: 3.99,
    category: "Fruits & Milks",
  },
  {
    id: 11,
    image: productImg6, // MilkImg1.png
    name: "Coconut Milk",
    description: "Coconut Milk.",
    rating: 4.7,
    price: 2.99,
    category: "Fruits & Milks",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1629372815559-9a9f1165490a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFzcGJlcnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Raspberries",
    description: "Fresh raspberries.",
    rating: 4.5,
    price: 6.49,
    category: "Fruits & Milks",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1587049244677-b5999c93c7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Watermelon",
    description: "Watermelon.",
    rating: 4.2,
    price: 7.99,
    category: "Fruits & Milks",
  },
  {
    id: 14,
    image: productImg6, // MilkImg1.png
    name: "Soy Milk",
    description: "Soy Milk.",
    rating: 4.6,
    price: 3.49,
    category: "Fruits & Milks",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1569696980359-b15653d80b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Peach",
    description: "Peach.",
    rating: 4.8,
    price: 1.49,
    category: "Fruits & Milks",
  },

  // Veggies (16 items - added Cabbage)
  {
    // Using URL for Avocado
    id: 16,
    image:
      "https://images.unsplash.com/photo-1518568045001-1610c4987477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZvY2Fkb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Avocado Hass",
    description: "Creamy Hass avocados, perfect for toast.",
    rating: 4.7,
    price: 2.5,
    discountPercentage: 5,
    category: "Veggies",
  },
  {
    // Using URL for Broccoli
    id: 17,
    image:
      "https://images.unsplash.com/photo-1587351177733-0a533599a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Broccoli Florets",
    description: "Fresh cut broccoli florets, ready to cook.",
    rating: 4.3,
    price: 3.2,
    category: "Veggies",
  },
  {
    // Using URL for Spinach
    id: 18,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f2f8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Spinach",
    description: "Fresh spinach.",
    rating: 4.5,
    price: 2.99,
    category: "Veggies",
  },
  {
    // Using productImg2
    id: 19,
    image: productImg2, // CarrotImg1.png
    name: "Carrots",
    description: "Fresh carrots.",
    rating: 4.6,
    price: 1.99,
    category: "Veggies",
  },
  {
    // Using productImg3
    id: 20,
    image: productImg3, // CucumberImg1.png
    name: "Cucumbers",
    description: "Fresh cucumbers.",
    rating: 4.4,
    price: 0.99,
    category: "Veggies",
  },
  {
    // Using URL for Bell Peppers
    id: 21,
    image:
      "https://images.unsplash.com/photo-1601648764658-cf37e8c8ceb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsbCUyMHBlcHBlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Bell Peppers",
    description: "Fresh bell peppers.",
    rating: 4.7,
    price: 1.49,
    category: "Veggies",
  },
  {
    // Using URL for Tomatoes
    id: 22,
    image:
      "https://images.unsplash.com/photo-1591421368904-0546099794d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Tomatoes",
    description: "Fresh tomatoes.",
    rating: 4.8,
    price: 2.49,
    category: "Veggies",
  },
  {
    // Using URL for Lettuce
    id: 23,
    image:
      "https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Lettuce",
    description: "Fresh lettuce.",
    rating: 4.5,
    price: 1.79,
    category: "Veggies",
  },
  {
    // Using productImg1
    id: 24,
    image: productImg1, // OnionImg1.png
    name: "Onions",
    description: "Fresh onions.",
    rating: 4.6,
    price: 0.79,
    category: "Veggies",
  },
  {
    // Using URL for Potatoes
    id: 25,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Potatoes",
    description: "Fresh potatoes.",
    rating: 4.4,
    price: 2.29,
    category: "Veggies",
  },
  {
    // Using URL for Garlic
    id: 26,
    image:
      "https://images.unsplash.com/photo-1599547467426-3094d1647434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Garlic",
    description: "Fresh garlic.",
    rating: 4.9,
    price: 0.49,
    category: "Veggies",
  },
  {
    // Using URL for Celery
    id: 27,
    image:
      "https://images.unsplash.com/photo-1598112962001-3a80052117e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Celery",
    description: "Fresh celery.",
    rating: 4.3,
    price: 1.29,
    category: "Veggies",
  },
  {
    // Using URL for Zucchini
    id: 28,
    image:
      "https://images.unsplash.com/photo-1581331474516-8f1e83c6e55a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Zucchini",
    description: "Fresh zucchini.",
    rating: 4.7,
    price: 1.19,
    category: "Veggies",
  },
  {
    // Using URL for Eggplant
    id: 29,
    image:
      "https://images.unsplash.com/photo-1601472026663-c976e17890d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdncGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Eggplant",
    description: "Fresh eggplant.",
    rating: 4.5,
    price: 1.99,
    category: "Veggies",
  },
  {
    // Using URL for Asparagus
    id: 30,
    image:
      "https://images.unsplash.com/photo-1557681452-765d7d5a9a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNwYXJhZ3VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Asparagus",
    description: "Fresh asparagus.",
    rating: 4.6,
    price: 3.49,
    category: "Veggies",
  },
  {
    // Added Cabbage for productImg4
    id: 31, // New ID
    image: productImg4, // CabbageImg1.png
    name: "Fresh Cabbage",
    description: "Crisp green cabbage head.",
    rating: 4.5,
    price: 1.79,
    category: "Veggies",
  },

  // Meat & Seafood (12 items - Using URLs)
  {
    id: 32, // Start re-numbering from here
    image:
      "https://images.unsplash.com/photo-1559058789-672da062599c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Fresh Salmon",
    description: "Fresh Salmon",
    rating: 4.5,
    price: 10.99, // Adjusted price
    category: "Meat & Seafood",
  },
  {
    id: 33,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51419039fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Chicken Breast",
    description: "Chicken Breast",
    rating: 4.7,
    price: 5.99,
    category: "Meat & Seafood",
  },
  {
    id: 34,
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdW5kJTIwYmVlZnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Ground Beef",
    description: "Ground Beef",
    rating: 4.6,
    price: 4.99,
    category: "Meat & Seafood",
  },
  {
    id: 35,
    image:
      "https://images.unsplash.com/photo-1599039635900-71e5f6b6b987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Shrimp",
    description: "Shrimp",
    rating: 4.4,
    price: 7.99,
    category: "Meat & Seafood",
  },
  {
    id: 36,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51419039fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yayUyMGNob3BzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Pork Chops",
    description: "Pork Chops",
    rating: 4.8,
    price: 6.49,
    category: "Meat & Seafood",
  },
  {
    id: 37,
    image:
      "https://images.unsplash.com/photo-1611141611022-86d6f6a457d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kJTIwZmlsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Cod Fillet",
    description: "Cod Fillet",
    rating: 4.5,
    price: 8.99,
    category: "Meat & Seafood",
  },
  {
    id: 38,
    image:
      "https://images.unsplash.com/photo-1598111082799-176a951f3d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVya2V5JTIwYnJlYXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Turkey Breast",
    description: "Turkey Breast",
    rating: 4.7,
    price: 7.49,
    category: "Meat & Seafood",
  },
  {
    id: 39,
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JhYiUyMGxlZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Crab Legs",
    description: "Crab Legs",
    rating: 4.6,
    price: 12.99,
    category: "Meat & Seafood",
  },
  {
    id: 40,
    image:
      "https://images.unsplash.com/photo-1588540986830-a4a5d4f3a4ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F1c2FnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Sausage",
    description: "Sausage",
    rating: 4.9,
    price: 3.99,
    category: "Meat & Seafood",
  },
  {
    id: 41,
    image:
      "https://images.unsplash.com/photo-1615141982883-c492e6ac3380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVuYSUyMHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Tuna Steak",
    description: "Tuna Steak",
    rating: 4.3,
    price: 9.99,
    category: "Meat & Seafood",
  },
  {
    id: 42,
    image:
      "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtYiUyMGNob3BzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Lamb Chops",
    description: "Lamb Chops",
    rating: 4.7,
    price: 11.99,
    category: "Meat & Seafood",
  },
  {
    id: 43,
    image:
      "https://images.unsplash.com/photo-1601205876470-70a61bdfa1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3lzdGVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Oysters",
    description: "Oysters",
    rating: 4.5,
    price: 14.99,
    category: "Meat & Seafood",
  },

  // Bakery (12 items - Using URLs)
  {
    id: 44, // Continue numbering
    image:
      "https://images.unsplash.com/photo-1533134210763-661a0345afa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXNhbiUyMGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Artisan Bread",
    description: "Freshly baked sourdough loaf.",
    rating: 4.9,
    price: 5.5,
    category: "Bakery",
  },
  {
    id: 45,
    image:
      "https://images.unsplash.com/photo-1506459225024-1428097a7e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvaXNzYW50c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Croissants",
    description: "Buttery and flaky croissants.",
    rating: 4.7,
    price: 2.5,
    category: "Bakery",
  },
  {
    id: 46,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Chocolate Cake",
    description: "Rich chocolate cake with fudge frosting.",
    rating: 4.8,
    price: 15.0,
    category: "Bakery",
  },
  {
    id: 47,
    image:
      "https://images.unsplash.com/photo-1598128019211-84049179e49d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Bagels",
    description: "Freshly baked bagels.",
    rating: 4.6,
    price: 1.75,
    category: "Bakery",
  },
  {
    id: 48,
    image:
      "https://images.unsplash.com/photo-1607958996333-41a3db140859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Muffins",
    description: "Blueberry muffins.",
    rating: 4.5,
    price: 2.25,
    category: "Bakery",
  },
  {
    id: 49,
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9udXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Donuts",
    description: "Glazed donuts.",
    rating: 4.4,
    price: 1.5,
    category: "Bakery",
  },
  {
    id: 50,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Cookies",
    description: "Chocolate chip cookies.",
    rating: 4.7,
    price: 3.0,
    category: "Bakery",
  },
  {
    id: 51,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvd25pZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Brownies",
    description: "Fudgy brownies.",
    rating: 4.6,
    price: 2.75,
    category: "Bakery",
  },
  {
    id: 52,
    image:
      "https://images.unsplash.com/photo-1563080496-1880ca65e931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Scones",
    description: "Cranberry scones.",
    rating: 4.8,
    price: 2.5,
    category: "Bakery",
  },
  {
    id: 53,
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VwY2FrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "Cupcakes",
    description: "Vanilla cupcakes with buttercream frosting.",
    rating: 4.9,
    price: 3.25,
    category: "Bakery",
  },
  {
    id: 54,
    image:
      "https://images.unsplash.com/photo-1598373182133-fb2f76451c14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWQlMjByb2xsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Bread Rolls",
    description: "Fresh bread rolls.",
    rating: 4.5,
    price: 2.0,
    category: "Bakery",
  },
  {
    id: 55,
    image:
      "https://images.unsplash.com/photo-1509440159596-064f00977b23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFndWV0dGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "Baguettes",
    description: "Baguettes",
    rating: 4.5,
    price: 2.0,
    category: "Bakery",
  },

  // Hot Offers (12 items - Using URLs and productImgs where applicable)
  {
    id: 56, // Continue numbering
    image: productImg1, // Example URL
    name: "Onions",
    description:
      "Essential for every dish, freshly harvested. A kitchen must-have.",
    rating: 4.5,
    price: 20.99,
    discountPercentage: 23,
    category: "Hot Offers",
  },
  {
    id: 57, // Continue numbering
    image: productImg2, // Example URL
    name: "Carrot",
    description: "Sweet and crisp carrots, picked fresh for your table.",
    rating: 4.3,
    price: 38.99,
    // discountPercentage: 20,
    category: "Hot Offers",
  },
  {
    id: 58, // Continue numbering
    image: productImg3, // Example URL
    name: "Cucumber",
    description:
      "Perfect for salads, snacks, or juicing. Hydrating and crunchy with every bite.",
    rating: 4.8,
    price: 35.99,
    discountPercentage: 20,
    category: "Hot Offers",
  },
  {
    id: 59, // Continue numbering
    image: productImg4, // Example URL
    name: "Cabbage",
    description:
      "Essential for every dish, freshly harvested. A kitchen must-have.",
    rating: 4.6,
    price: 26.99,
    discountPercentage: 18,
    category: "Hot Offers",
  },
  {
    id: 60, // Continue numbering
    image: productImg5, // Example URL
    name: "Apple",
    description: "Sweet and crisp carrots, picked fresh for your table.",
    rating: 4.5,
    price: 18.99,
    // discountPercentage: 20,
    category: "Hot Offers",
  },
  {
    id: 61, // Continue numbering
    image: productImg6, // Example URL
    name: "Milk",
    description:
      "Perfect for salads, snacks, or juicing. Hydrating and crunchy with every bite.",
    rating: 4.9,
    price: 37.99,
    discountPercentage: 23,
    category: "Hot Offers",
  },
  // Staring Here
  {
    id: 62, // Continue numbering
    image:
      "https://images.unsplash.com/photo-1533134210763-661a0345afa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0aXNhbiUyMGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Hot Offers Bread",
    description: "Hot Offers Bread",
    rating: 4.5,
    price: 3.49,
    discountPercentage: 20,
    category: "Hot Offers",
  },
  {
    id: 63,
    image: productImg5, // AppleImg1.png
    name: "Discounted Apples",
    description: "Discounted Apples",
    rating: 4.2,
    price: 1.99,
    discountPercentage: 30,
    category: "Hot Offers",
  },
  {
    id: 64,
    image:
      "https://images.unsplash.com/photo-1559058789-672da062599c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Special Salmon",
    description: "Special Salmon",
    rating: 4.7,
    price: 9.99,
    discountPercentage: 15,
    category: "Hot Offers",
  },
  {
    id: 65,
    image:
      "https://images.unsplash.com/photo-1607958996333-41a3db140859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVmZmluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Limited Time Muffins",
    description: "Limited Time Muffins",
    rating: 4.6,
    price: 1.99,
    discountPercentage: 25,
    category: "Hot Offers",
  },
  {
    id: 66,
    image:
      "https://images.unsplash.com/photo-1587351177733-0a533599a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Clearance Broccoli",
    description: "Clearance Broccoli",
    rating: 4.3,
    price: 2.49,
    discountPercentage: 40,
    category: "Hot Offers",
  },
  {
    id: 67,
    image: productImg6, // MilkImg1.png
    name: "Reduced Milk",
    description: "Reduced Milk",
    rating: 4.4,
    price: 2.99,
    discountPercentage: 10,
    category: "Hot Offers",
  },
  {
    id: 68,
    image:
      "https://images.unsplash.com/photo-1598128019211-84049179e49d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Bargain Bagels",
    description: "Bargain Bagels",
    rating: 4.8,
    price: 1.25,
    discountPercentage: 20,
    category: "Hot Offers",
  },
  {
    id: 69,
    image:
      "https://images.unsplash.com/photo-1591287381149-61f693796950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Example URL (Using Strawberries)
    name: "Promo Strawberries",
    description: "Promo Strawberries",
    rating: 4.5,
    price: 3.99,
    discountPercentage: 35,
    category: "Hot Offers",
  },
  {
    id: 70,
    image: productImg2, // CarrotImg1.png
    name: "Sale Carrots",
    description: "Sale Carrots",
    rating: 4.7,
    price: 1.49,
    discountPercentage: 15,
    category: "Hot Offers",
  },
  {
    id: 71,
    image:
      "https://images.unsplash.com/photo-1615141982883-c492e6ac3380?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVuYSUyMHN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Offer Tuna",
    description: "Offer Tuna",
    rating: 4.6,
    price: 8.49,
    discountPercentage: 20,
    category: "Hot Offers",
  },
  {
    id: 72,
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", // Example URL
    name: "Deal Cookies",
    description: "Deal Cookies",
    rating: 4.9,
    price: 2.49,
    discountPercentage: 30,
    category: "Hot Offers",
  },
  {
    id: 73, // New ID
    image: productImg6, // MilkImg1.png (Using Yogurt)
    name: "Special Yogurt",
    description: "Special Yogurt",
    rating: 4.3,
    price: 4.99,
    discountPercentage: 25,
    category: "Hot Offers",
  },
];

export const testimonialsData = [
  {
    id: 1,
    customerImage: customImg1,
    name: "John Doe",
    location: "New York, USA",
    rating: 5,
    testimony: "This is an amazing product! I highly recommend it to everyone.",
  },
  {
    id: 2,
    customerImage: customImg2,
    name: "Elizabeth Werner",
    location: "New York. USA",
    rating: 4,
    testimony:
      "I’ve switched to ordering all my groceries from here, and I couldn’t be happier. Easy ordering, fast delivery, and the best part? Everything stays fresh for days.",
  },
  {
    id: 3,
    customerImage: customImg3,
    name: "Peter Jones",
    location: "Sydney, Australia",
    rating: 5,
    testimony:
      "Great service and fast delivery. I will definitely be buying from this store again.",
  },
];

export const blogs = [
  {
    id: 1,
    imageUrl: blogImg1,
    tag: "Veggies",
    datePosted: "March 27, 2025",
    title: "5 Reasons Why Grocery Delivery is the Future of Shopping",
    description:
      "As online grocery shopping surges, experts predict it will dominate the food retail industry by 2030. With convenience, better deals, and same-day delivery, more consumers are choosing digital carts over physical store aisles.",
    authorImageUrl: authImg1,
    authorName: "Dr. Mark Thomas",
    readMoreLink: "/",
  },
  {
    id: 2,
    imageUrl: blogImg2,
    tag: "Fruits",
    datePosted: "March 27, 2025",
    title: "How to Keep Your Fruits & Vegetables Fresher for Longer",
    description:
      "Studies show that nearly 30% of fresh produce is wasted due to improper storage. Experts recommend simple hacks—like keeping bananas separate and storing herbs in water—to help extend the shelf life of your groceries.",
    authorImageUrl: authImg2,
    authorName: "Camone Mide",
    readMoreLink: "/",
  },
  {
    id: 3,
    imageUrl: blogImg3,
    tag: "Fruits",
    datePosted: "March 27, 2025",
    title: "The Health Benefits of Eating Fresh Organic Produce",
    description:
      "Recent research highlights that organic fruits and vegetables contain higher antioxidants and fewer pesticides. Nutritionists say switching to fresh, unprocessed foods can improve digestion, boost immunity, and enhance overall wellness.",
    authorImageUrl: authImg3,
    authorName: "Dr. Mark Thomas",
    readMoreLink: "/",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Useful Information",
    items: [
      { id: 1.1, to: "/", link: "About Us" },
      { id: 1.2, to: "/", link: "Checkout" },
      { id: 1.3, to: "/", link: "Contact" },
      { id: 1.4, to: "/", link: "Blog" },
      { id: 1.5, to: "/", link: "Services" },
      { id: 1.6, to: "/", link: "FAQ" },
    ],
  },
  {
    id: 2,
    title: "My Account",
    items: [
      { id: 2.1, to: "/", link: "My Account" },
      { id: 2.2, to: "/", link: "Payment & delivery" },
      { id: 2.3, to: "/", link: "Customer Support" },
      { id: 2.4, to: "/", link: "Cart" },
      { id: 2.5, to: "/", link: "Offers" },
    ],
  },
  {
    id: 3,
    title: "Product Categories",
    items: [
      { id: 3.1, to: "/", link: "Fresh Produce" },
      { id: 3.2, to: "/", link: "Meat & Seafood" },
      { id: 3.3, to: "/", link: "Snacks & Beverages" },
      { id: 3.4, to: "/", link: "Pantry Staples" },
      { id: 3.5, to: "/", link: "Bakery & Dairy" },
      { id: 3.6, to: "/", link: "Household & Essentials" },
    ],
  },
];

export const payCards = [
  { id: 1, src: paymIcon1, alt: "masterCard" },
  { id: 2, src: paymIcon2, alt: "payPal" },
  { id: 3, src: paymIcon3, alt: "bitCoin" },
  { id: 4, src: paymIcon4, alt: "americanExpress" },
  { id: 5, src: paymIcon5, alt: "VISA" },
];
