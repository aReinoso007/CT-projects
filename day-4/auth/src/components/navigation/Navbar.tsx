import { Navbar } from "react-bootstrap"
import NavBarButtons from "../NavBarButtons"

const NavBar: React.FC = () =>{

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavBarButtons />
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavBar;