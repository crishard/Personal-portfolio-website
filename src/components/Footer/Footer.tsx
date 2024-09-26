import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import imageFooter from "../../assets/Frame.png";

export const Footer = () => {
    return (
        <footer className="py-10 px-20 bg-bg-shade">
            <div className="flex justify-between items-center py-14">
                <img src={imageFooter} alt="logo" />

                <div className="flex gap-5 text-sm">
                    <p>Home</p>
                    <p>Portfolio</p>
                    <p>About me</p>
                    <p>Contact</p>
                    <p>Testimonials</p>
                    <p>Portfolio</p>
                </div>

                <div className="flex gap-3 text-lg">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
            <div className="bg-[#28293844] h-[2px]"></div>
            <div className="flex justify-between text-xs pt-10 pb-16">
                <p>Made with 💖 by Airdokan</p>
                <div className="flex gap-5">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies Settings</p>
                </div>
            </div>
        </footer>
    )
}
