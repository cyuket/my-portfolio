import styled from "styled-components";

export const SectionTwoContainer = styled.section`
	margin-top: 4rem;
	width: 100%;
	display: flex;
	flex-direction: column;

	.content-title {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			font-size: 37px;
			font-weight: bold;
			color: white;
			line-height: 32px;
		}
		h2 {
			font-size: 14px;
			color: #3d3d4a;
		}
	}
	.content-body {
		margin-top: 2rem;
		width: 100%;
		display: flex;
		flex-direction: column;

		i {
			color: #465bfe;
			font-size: 20px;
		}
		h1 {
			font-size: 14px;
			font-weight: bold;
			color: #eef0fd;
			@media screen and (max-width: 800px) {
				font-size: 10px;
			}
		}
	}
`;
