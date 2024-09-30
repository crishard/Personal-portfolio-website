import { Fade } from "react-awesome-reveal"
import { NavBar } from "./NavBar"

export const Header = () => {
    return (
        <header className="py-4  shadow shadow-bg-shade drop-shadow-sm px-10 sm:px-20">
            <Fade direction="up" triggerOnce={true} duration={2000}>
                <NavBar />
            </Fade>
        </header>
    )
}
