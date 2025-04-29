import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { Link } from "@remix-run/react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold text-green-600"> <Link to="/"> 
      <img src="/FindoTripLogo.png" alt="Findo Trip Logo" className="h-10 w-auto" />
      </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-semibold">
        <li className="hover:text-green-500 cursor-pointer">
          
        <Link to="/Room"> Rooms</Link></li>
        <li className="hover:text-green-500 cursor-pointer">
        <Link to="/CarRent"> Car Rentals</Link></li>
        <li className="hover:text-green-500 cursor-pointer"><Link to="/Tours"> Tours</Link></li>
        <li className="hover:text-green-500 cursor-pointer"><Link to="/Blogs"> Blogs</Link></li>
        <li>
          <button className="border border-green-500 text-green-500 px-4 py-1 rounded-md hover:bg-green-500 hover:text-white">Sign In</button>
        </li>
        <li>
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md hover:bg-red-500 hover:text-white">
            
            Register</button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg flex flex-col space-y-6 p-6 transform translate-x-full md:hidden  z-10"
      >
        <ul className="space-y-4 font-semibold">
          <li className="hover:text-green-500 cursor-pointer"> <Link to="/Room"> Rooms</Link></li>
          <li className="hover:text-green-500 cursor-pointer"> <Link to="/CarRent"> Car Rentals</Link></li>
          <li className="hover:text-green-500 cursor-pointer"><Link to="/Tours"> Tours</Link></li>
          <li className="hover:text-green-500 cursor-pointer"><Link to="/Blogs"> Blogs</Link></li>
          <li>
            <button className="border border-green-500 text-green-500 px-4 py-1 rounded-md w-full hover:bg-green-500 hover:text-white">Sign In</button>
          </li>
          <li>
            <button className="border border-red-500 text-red-500 px-4 py-1 rounded-md w-full hover:bg-red-500 hover:text-white">Register</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
