import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/users">Users</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default Header