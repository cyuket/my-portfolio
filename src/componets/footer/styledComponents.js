import styled from "styled-components";
export const FooterContainer = styled.footer`
	margin-top: 4rem;
	width: 100%;
	color: #3d3d4a;
	font-size: 15px;
	img {
		width: 103px;
	}
	.link-container {
		width: 100%
        display: flex
        flex-direction: column
		.footer-link {
			list-style: none;
			display: inline;
			margin-left: 0 !important;
			padding: 0;
			li {
				display: inline;
				margin: 0 5px;
				padding: 1.5rem;
				@media screen and (max-width: 800px) {
					padding: 0rem;
				}
				a {
					color: #3d3d4a;
					x
				}
				a:hover {
					text-decoration: none;
				}
			}
		}
		.email {
			padding: 1.5rem;
			@media screen and (max-width: 800px) {
				padding: 0rem;
			}
			a {
                color: white;
                @media screen and (max-width: 800px) {
					padding: 0rem;
				}
			}
			a:hover {
				text-decoration: none;
			}
			h6 {
				font-size: 15px;
			}
		}
	}
	.copyright-container {
		width: 100%
        display: flex
        flex-direction: column
        h6 {
			padding: 1rem;
			font-size: 15px;
			text-align: center;
		}
		ul.social-network {
			list-style: none;
			display: inline;
			margin-left: 0 !important;
			padding: 0;
		}

		ul.social-network li {
			display: inline;
			margin: 0 5px;
		}

		/* footer social icons */

		.social-network a.icoFacebook:hover {
			background-color: #3b5998;
		}

		.social-network a.icoLinkedin:hover {
			background-color: #007bb7;
		}
		.social-network a.icoWhatsapp:hover {
			background-color: #25d366;
		}
		.social-network a.icoTwitter:hover {
			background-color: #00acee;
		}
		.social-network a.icoGithub:hover {
			background-color: #211f1f;
		}

		.social-network a.icoFacebook:hover i,
		.social-network a.icoGithub:hover i,
		.social-network a.icoTwitter:hover i,
		.social-network a.icoWhatsapp:hover i,
		.social-network a.icoLinkedin:hover i {
			color: #fff;
		}

		.social-network a.socialIcon:hover,
		.socialHoverClass {
			color: #44bcdd;
		}

		.social-circle li a {
			display: inline-block;
			position: relative;
			margin: 0 auto 0 auto;
			-moz-border-radius: 50%;
			-webkit-border-radius: 50%;
			border-radius: 50%;
			text-align: center;
			width: 30px;
			height: 30px;
			font-size: 15px;
		}

		.social-circle li i {
			margin: 0;
			line-height: 30px;
			text-align: center;
		}

		.social-circle li a:hover i,
		.triggeredHover {
			-moz-transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
			-ms--transform: rotate(360deg);
			transform: rotate(360deg);
			-webkit-transition: all 0.2s;
			-moz-transition: all 0.2s;
			-o-transition: all 0.2s;
			-ms-transition: all 0.2s;
			transition: all 0.2s;
		}

		.social-circle i {
			color: #595959;
			-webkit-transition: all 0.8s;
			-moz-transition: all 0.8s;
			-o-transition: all 0.8s;
			-ms-transition: all 0.8s;
			transition: all 0.8s;
		}

		.social-network a {
			background-color: transparent;
		}
	}
`;
