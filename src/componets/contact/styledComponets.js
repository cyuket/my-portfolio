import styled from "styled-components";
export const SectionThreeContainer = styled.section`
	margin-top: 4rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.btn-primary {
		color: #5342c7;
		background-color: #f8f9fa;
		border-color: #5342c7;
	}
	.form-control {
		background-color: #16171c !important;
		border: 1px solid #373844 !important;
	}
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
	.circle {
		width: 71px;
		height: 71px;
		background: #465bfe;
		margin-left: -2rem;
		margin-top: -3rem;

		border-radius: 100%;
	}
`;
