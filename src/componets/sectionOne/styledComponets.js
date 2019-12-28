import styled from "styled-components";
import back from "../../asset/pac11.jpg";
export const SectionOneContainer = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	-webkit-animation: puff-in-center 3000ms cubic-bezier(0.47, 0, 0.745, 0.715)
		both;
	animation: puff-in-center 3000ms cubic-bezier(0.47, 0, 0.745, 0.715) both;
	@media screen and (max-width: 800px) {
		.container {
			padding-right: 0px !important;
			padding-left: 0px !important;
		}
		background: url(${back});
		background-size: cover;
	}
	.content-row {
		display: flex;
		flex-direction: row;

		@media screen and (max-width: 800px) {
			width: 100%;
			h1 {
				font-size: 30px;
			}
		}
		img {
			position: absolute;
			height: 93vh;
			top: 3rem;
			left: -3rem;

			-webkit-animation: scale-in-center 73000ms
				cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
			animation: scale-in-center 7000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
				both;

			@media screen and (max-width: 800px) {
				display: none;
			}
		}
		.circle {
			width: 130px;
			height: 130px;
			background: #465bfe;
			border-radius: 100%;
		}
		.content-text {
			margin-top: 24px;
			margin-left: -5rem;
		}
		h1 {
			font-size: 64px;
			font-weight: bold;
			color: white;
			line-height: 58px;
			@media screen and (max-width: 800px) {
				font-size: 53px;
			}
		}
		h2 {
			font-size: 21px;
			font-weight: bold;
			color: #f19b0b;
			text-align: center;
		}
	}
	.social-media {
		margin-left: 7rem;
		@media screen and (max-width: 800px) {
			margin-left: 0rem;
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
