import imageNav from "../../assets/Navbar/Logo.png"
import { Nav } from "./Nav"

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={imageNav} alt="logo" className="h-8"/>
            <Nav />
            <button className="border px-4 py-3 rounded border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-500">Contact Me</button>
        </div>
    )
}
