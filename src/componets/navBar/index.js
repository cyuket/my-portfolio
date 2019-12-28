import React from "react";
import logo from "../../asset/log.png";

import { Navbar, Nav, Button, Container } from "react-bootstrap";

const NavBarComponet = () => {
	return (
		<Navbar expand='lg' fixed='top'>
			<Container>
				<Navbar.Brand href='/'>
					<img
						width='100'
						height='30'
						className='d-inline-block align-top'
						alt='Cy Uket'
						src={logo}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse
					id='responsive-navbar-nav'
					className='justify-content-end'>
					<Nav className='mr-5'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/#skills'>Skills</Nav.Link>
						{/* <Nav.Link href='/#Work'>Experience</Nav.Link> */}
						<Button href='/#contact' className='ml-2'>
							Contact Me
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBarComponet;
