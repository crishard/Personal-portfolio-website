
export const Nav = () => {
    return (
        <nav className="list-none flex gap-6">
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
            <a href="" className="hover:text-primary"> {text}
            </a>
        </li>
    )
}
