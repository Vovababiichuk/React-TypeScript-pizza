import styled from 'styled-components';

export const CustomCard = styled(Card)`
  background-image: url('public/img/bg-cut.jpg'); /* Задайте шлях до вашої картинки */
  background-size: cover; /* Масштабування картинки до розміру блоку */
  background-position: center; /* Центрування картинки */
  color: #fff; /* Задайте колір тексту, щоб він був видимим на фоновій картинці */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 20px;
`
