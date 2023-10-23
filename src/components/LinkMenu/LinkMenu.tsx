import { Link } from 'react-router-dom';

import {
  LinkWrapper,
  LinkSvg,
  WrapContent,
  Shadow,
  Blob,
  Data,
  ImgLinkApp,
  Title,
  Text,
} from './LinkMenuElements';

interface LinkMenuProps {
  to: string; // Шлях, на який потрібно перейти при кліку на LinkMenu
  imgSrc: string; // Шлях до зображення, яке потрібно відображати в LinkMenu
  text: string; // Текст, який відображатиметься в LinkMenu
}

export const LinkMenu: React.FC<LinkMenuProps> = ({ to, imgSrc, text }) => {
  return (
    <LinkWrapper>
      <LinkSvg>
        <Link to={to}>
          <WrapContent>
            <Shadow>
              <Blob>
                <Data>
                  <ImgLinkApp src={imgSrc} alt={text} />
                </Data>
              </Blob>
            </Shadow>
            <Title>
              <Text>
              {text}
              </Text>
            </Title>
          </WrapContent>
        </Link>
        </LinkSvg>
    </LinkWrapper>
  );
};

