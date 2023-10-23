import styled from "styled-components";

export const LinkWrapperContent = styled.div`
  position: relative;
`

export const LinkWrapper = styled.div`
  transition: scale 0.2s ease-in-out;
  /* content: ''; */
  /* position: absolute; */
  /* top: -240px; */
  /* right: -200px; */

  &:hover {
    scale: 1.1;
  }
`

export const LinkSvg = styled.div`
  -webkit-text-decoration: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`
export const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const Shadow = styled.div`
  align-items: center;
  background: rgba(225,159,23,.5);
  border-radius: 49% 51% 52% 48%/58% 47% 53% 42%;
  border-radius: 46% 54% 54% 46%/58% 56% 44% 42%;
  display: flex;
  height: 98px;
  justify-content: center;
  position: relative;
  width: 98px;
`
export const Blob = styled.div`
  align-items: center;
  background-image: url("../public/img/bg18.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid #e19f17;
  border-radius: 56% 44% 45% 55%/58% 53% 47% 42%;
  display: flex;
  height: 93px;
  justify-content: center;
  width: 91px;
`

export const Data = styled.div`
  place-items: center;
`
export const ImgLinkApp = styled.img`
  width: 60px;
  height: auto;
`
export const Title = styled.div`
  color: rgb(255, 180, 41);
  color: #fff;
  /* margin: auto; */
  /* max-width: 106px; */
  text-align: center;
  padding-top: 6px;
`
export const Text = styled.span`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.1;
  width: 120px;
  display: block;
  text-transform: uppercase;
`

