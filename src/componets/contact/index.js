import React from "react";
import { Container, Form, FormControl, Col, Button } from "react-bootstrap";
import { SectionThreeContainer } from "./styledComponets";

function Contact() {
	return (
		<>
			<Container>
				<SectionThreeContainer id='contact'>
					<div className='content-title'>
						<h1>Contact</h1>
						<h2>
							<em>Say Hi Let's Talk' !!</em>
						</h2>
					</div>
					<div className='form-content'>
						<Form>
							<Form.Row>
								<Form.Group as={Col} md='6' controlId='validationCustom01'>
									<Form.Label>First name</Form.Label>
									<Form.Control required type='text' placeholder='First name' />
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='6' controlId='validationCustom02'>
									<Form.Label>Last name</Form.Label>
									<Form.Control required type='text' placeholder='Last name' />
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group as={Col} md='6' controlId='validationCustom03'>
									<Form.Label>Email</Form.Label>
									<Form.Control type='email' placeholder='Email' required />
									<Form.Control.Feedback type='invalid'>
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md='6' controlId='validationCustom04'>
									<Form.Label>Subject</Form.Label>
									<Form.Control as='select'>
										<option>Freelance</option>
										<option>Let's Talk</option>
										<option>Others</option>
									</Form.Control>
								</Form.Group>
							</Form.Row>
							<Form.Group>
								<Form.Control as='textarea' aria-label='With textarea' />
							</Form.Group>
							<Button type='submit'>
								<i class='fa fa-paper-plane'></i> Send
							</Button>
							<div className='circle'></div>
						</Form>
					</div>
				</SectionThreeContainer>
			</Container>
		</>
	);
}

export default Contact;
