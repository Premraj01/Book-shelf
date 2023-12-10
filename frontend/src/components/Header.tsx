import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='primary' expand='lg'>
                <Navbar.Brand style={{
                    color: "white"
                }}>
                    Book Shelf
                </Navbar.Brand>
                <Nav
                >
                    <Nav.Item >
                        <Nav.Link style={{
                            color: "white"
                        }} href="/books-list">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="link-1" style={{
                            color: "white"
                        }} href="/add-book">Add Book</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar>
        </header >
    )
}

export default Header