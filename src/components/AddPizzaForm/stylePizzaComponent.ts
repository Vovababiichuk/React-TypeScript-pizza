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