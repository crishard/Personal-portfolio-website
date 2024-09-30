
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import imageNav from "../../assets/Navbar/Logo.png";
import { Nav } from "./Nav";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-between items-center">
            <img src={imageNav} alt="logo" className="h-8" />

            <div className="hidden  min-[810px]:flex justify-center items-center gap-6">
                <Nav />
                <a href="#contact" className="border px-4 py-3 rounded border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500">Contact Me</a>

            </div>

             {/* Menu responsivo para mobile (telas menores) */}
             {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg min-[810px]:hidden h-svh py-16">
                    <Nav />
                    <div className="flex justify-center py-4">
                        <button className="border px-4 py-2 rounded border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500">
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
            <div className="block min-[810px]:hidden">
                <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>


        </div>
    )
}
