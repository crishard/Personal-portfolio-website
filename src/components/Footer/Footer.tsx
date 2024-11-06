import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import imageFooter from "../../assets/Frame.png";

export const Footer = () => {
    return (
        <footer className="py-10 px-10 sm:px-20 bg-bg-shade">
            <div className="flex justify-between max-[480px]:block items-center py-14  max-[480px]:py-8">
                <img src={imageFooter} alt="logo" className=" max-[480px]:pb-5" />

                <div className="flex max-[900px]:grid grid-cols-3 max-[600px]:grid-cols-2  max-[480px]:grid-cols-3 gap-5 text-sm">
                    <a href="#home" className="hover:text-primary">Home</a>
                    <a href="#portfolio" className="hover:text-primary">Portfolio</a>
                    <a href="#about" className="hover:text-primary">About me</a>
                    <a href="#contact" className="hover:text-primary">Contact</a>
                    <a href="#testimonials" className="hover:text-primary">Testimonials</a>
                    <a href="#portfolio" className="hover:text-primary">Portfolio</a>
                </div>

                <div className="flex  max-[480px]:flex  max-[480px]:pt-4  gap-3 text-xl">
                    <FaFacebookF className="max-[900px]:my-1" />
                    <FaInstagram className="max-[900px]:my-1" />
                    <FaTwitter className="max-[900px]:my-1" />
                    <FaLinkedin className="max-[900px]:my-1" />
                </div>
            </div>
            <div className="bg-[#28293844] h-[1.3px]"></div>
            <div className="flex justify-between max-[420px]:block max-[420px]: text-xs pt-10 pb-16">
                <p className="max-[420px]:pb-3">Made with 💖 by Airdokan</p>
                <div className="flex gap-5 ">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </footer>
    )
}
