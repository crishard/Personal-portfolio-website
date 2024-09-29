
export const Nav = () => {
    return (
        <nav className="list-none min-[800px]:flex block gap-6 text-center">
            <NavItem text="Home" />
            <NavItem text="Portfolio" />
            <NavItem text="About me" />
            <NavItem text="Testimonials" />
        </nav>
    )
}

interface NavItemProps {
    text: string;
}


const NavItem = ({ text }: NavItemProps) => {
    return (
        <li>
            <a href="" className="hover:text-primary min-[800px]:py-0 py-2"> {text}
            </a>
        </li>
    )
}
