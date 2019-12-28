import React from "react";
import { Container } from "react-bootstrap";
import { Bounce } from "react-reveal";
import Flash from "react-reveal/Flash";
import RubberBand from "react-reveal/RubberBand";
import { SectionTwoContainer } from "./styledComponets";

function SectionTwo() {
	return (
		<>
			<Container id='skills'>
				<SectionTwoContainer>
					<div className='content-title'>
						<Bounce>
							<h1>My Skills</h1>
						</Bounce>
						<Flash>
							<h2>
								<em>I Learn Everyday !!</em>
							</h2>
						</Flash>
					</div>
					<div className='content-body'>
						<Container>
							<div className='row ml-lg-5'>
								<div className='col-6'>
									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>HTML</h1>
											</div>
										</div>
									</RubberBand>

									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>JavaScript</h1>
											</div>
										</div>
									</RubberBand>

									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>NodeJs</h1>
											</div>
										</div>
									</RubberBand>

									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>Flutter</h1>
											</div>
										</div>
									</RubberBand>
								</div>
								<div className='col-6'>
									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className='col-8 mt-1'>
												<h1>CSS</h1>
											</div>
										</div>
									</RubberBand>

									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>React</h1>
											</div>
										</div>
									</RubberBand>

									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>Firebase</h1>
											</div>
										</div>
									</RubberBand>

									<RubberBand>
										<div className='row'>
											<div className='col-1'>
												<i class='fa fa-check'></i>
											</div>
											<div className=' col-8 mt-1 '>
												<h1>React Native</h1>
											</div>
										</div>
									</RubberBand>
								</div>
							</div>
						</Container>
					</div>
				</SectionTwoContainer>
			</Container>
		</>
	);
}

export default SectionTwo;
