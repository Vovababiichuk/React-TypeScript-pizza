import styled from 'styled-components';



export const DefaultImageList = styled.div`
	display: block;

	@media (max-width: 768px) {
		display: none;
	}
`
export const MobileImageList = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`

export const BoxMyContainer = styled.div`
	width: 100%;
	max-width: 600px;
	background-image: url('/img/bg-cut.jpg');
	background-size: cover;
	/* background-position: center; */
	color: #fff;
	/* border: 1px solid #f6ad55; */
	padding: 16px;
	border-radius: 10px;
	margin: 0 auto;
`

export const VisibleTextDrop = styled.div`
	display: block;

	@media (max-width: 768px) {
		display: none;
	}
`
export const VisibleTextTab = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}

	font-size: 15px;
`