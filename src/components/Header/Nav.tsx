
export const Nav = () => {
    return (
        <nav className="list-none min-[800px]:flex block gap-6 text-center">
            <NavItem text="Home" href={"#home"} />
            <NavItem text="Portfolio" href={"#portfolio"} />
            <NavItem text="About me" href={"#about"} />
            <NavItem text="Testimonials" href={"#testimonials"} />
        </nav>
    )
}

interface NavItemProps {
    text: string;
    href: string
}


const NavItem = ({ text, href }: NavItemProps) => {
    return (
        <li>
            <a href={href} className="hover:text-primary min-[800px]:py-0 py-2"> {text}
            </a>
        </li>
    )
}
