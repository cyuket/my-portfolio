import React from "react";
import { Container } from "react-bootstrap";
import { SectionOneContainer } from "./styledComponets";

import pics from "../../asset/mee.png";

function SectionOne() {
	return (
		<div className='section-one'>
			<Container>
				<SectionOneContainer>
					<div className='content-row'>
						<img src={pics} alt='' />
						<div className='circle'></div>
						<div className='content-text'>
							<h1>Cyril Uket</h1>
							<h2> Software Developer</h2>
						</div>
					</div>
					<div className='social-media pt-lg-0  pt-sm-5'>
						<ul class='social-network social-circle'>
							<li>
								<a
									href='mailto:cyriluket12@gmail.com'
									class='icoTwitter'
									title='Facebook'>
									<i class='fa fa-envelope'></i>
								</a>
							</li>
							<li>
								<a
									href='https://github.com/cyuket'
									class='icoGithub'
									title='Facebook'>
									<i class='fa fa-github'></i>
								</a>
							</li>
							<li>
								<a
									href='https://twitter.com/cy_uket'
									class='icoTwitter'
									title='Facebook'>
									<i class='fa fa-twitter'></i>
								</a>
							</li>
							<li>
								<a
									href='https://api.whatsapp.com/send?phone=2349096531575'
									class='icoWhatsapp'
									title='Facebook'>
									<i class='fa fa-whatsapp'></i>
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/cyuket.me'
									class='icoFacebook'
									title='Facebook'>
									<i class='fa fa-facebook'></i>
								</a>
							</li>
							<li>
								<a href='#' class='icoLinkedin' title='Linkedin'>
									<i class='fa fa-linkedin'></i>
								</a>
							</li>
						</ul>
					</div>
				</SectionOneContainer>
			</Container>
		</div>
	);
}

export default SectionOne;
