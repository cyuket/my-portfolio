import React from "react";
import { Container } from "react-bootstrap";
import { FooterContainer } from "./styledComponents";
import logo from "../../asset/log.png";
function Footer() {
	return (
		<>
			<Container>
				<FooterContainer>
					<div className='row'>
						<div className='col-lg-2 col-sm-12'>
							<img src={logo} alt='' />
						</div>
						<div className='col-lg-7 col-sm-12'>
							<div className='link-container'>
								<ul className='footer-link'>
									<li>
										<a href=''>Home</a>
									</li>
									<li>
										<a href=''>Resume</a>
									</li>
									<li>
										<a href=''>Work</a>
									</li>
									<li>
										<a href=''>Contact</a>
									</li>
								</ul>
								<div className='email'>
									<h6>You Want to Contact me directly by email?</h6>

									<a href='mailto:cyriluket12@gmail.com'>
										cyriluket12@gmail.com
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-sm-12'>
							<div className='copyright-container'>
								<h6>
									&#169;{new Date().getFullYear()} Cyril Uket <br />
									All Right Reserved
								</h6>
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
										<a href='/' class='icoLinkedin' title='Linkedin'>
											<i class='fa fa-linkedin'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</FooterContainer>
			</Container>
		</>
	);
}

export default Footer;
