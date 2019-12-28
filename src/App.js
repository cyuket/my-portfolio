import React from "react";

import { Container } from "react-bootstrap";
import styled from "styled-components";
import NavBar from "./componets/navBar";
import SectionOne from "./componets/sectionOne";
import SectionTwo from "./componets/sectionTwo";
import Contact from "./componets/contact";
import Footer from "./componets/footer";
const ContainerDiv = styled.div`
	background-color: #09090b;

	width: 100%;
	height: 100vh;
	.navbar-light .navbar-nav .nav-link {
		color: #9ea0be !important;
	}
	.navbar-light .navbar-toggler {
		color: #9ea0be !important;
		border-color: #9ea0be !important;
	}
	.navbar-light .navbar-nav .nav-link {
		text-align: center;
	}
	@media screen and (max-width: 800px) {
		#di {
			padding-right: 0px !important;
			padding-left: 0px !important;
		}
	}
`;

function App() {
	return (
		<ContainerDiv>
			<Container id='di'>
				<NavBar />
				<SectionOne />
				<SectionTwo />
				<Contact />
				<Footer />
			</Container>
		</ContainerDiv>
	);
}

export default App;
