import styled from "styled-components";

import List from "./List";
import ListItem from "./ListElement";
import Text from "./Text";
import ContentContainer from "./ContentContainer";

import useGradientFest from "../hooks/useGradientFest";
import { RAINBOW_COLOR_SET } from "../utils/constants";
import { useSocials } from "../hooks/useSocials";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AreaAuthorInformation = styled.div`
  grid-column: 1/11;
  grid-row: 1/3;

  background: radial-gradient(
    circle at 100%,
    var(${(props) => props.$gridFest.first}),
    var(${(props) => props.$gridFest.second}),
    var(${(props) => props.$gridFest.third})
  );
  background-clip: text;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.65rem;
  font-style: italic;
  color: transparent;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    font-size: 1rem;
    letter-spacing: 0.3rem;

    margin-top: 1rem;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    font-size: 0.8rem;
  }
`;

const AreaLinks = styled.div`
  grid-column: 1/6;
  grid-row: 2/4;

  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-transform: capitalize;
  color: var(--color-nor-blue);

  border-radius: 0.2rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;

  &:hover {
    border-image: radial-gradient(
        circle at 100%,
        transparent 25%,
        var(${(props) => props.$gridFest.first}),
        var(${(props) => props.$gridFest.second}),
        var(${(props) => props.$gridFest.third}),
        transparent 75%
      )
      0 0 1 0 / 0 0 0.3rem 0 / 1.2rem round;

    //50%
    @media (max-width: 60rem) or (max-height: 40rem) {
      border-image: radial-gradient(
          circle at 100%,
          transparent 20%,
          var(${(props) => props.$gridFest.first}),
          var(${(props) => props.$gridFest.second}),
          var(${(props) => props.$gridFest.third}),
          transparent 85%
        )
        0 0 1 0 / 0 0 0.3rem 0 / 1.2rem round;
    }

    //25%
    @media (max-width: 36rem) or (max-height: 22rem) {
      border-image: radial-gradient(
          circle at 100%,
          transparent 12%,
          var(${(props) => props.$gridFest.first}),
          var(${(props) => props.$gridFest.second}),
          var(${(props) => props.$gridFest.third}),
          transparent 95%
        )
        0 0 1 0 / 0 0 0.3rem 0 / 0.2rem round;
    }
  }
`;

const AreaWebsiteInformation = styled.div`
  grid-row: 3/5;
  grid-column: 8/11;

  font-weight: lighter;
  text-decoration: underline;
  font-style: italic;
  font-size: 0.86rem;

  line-height: 1.8;
  letter-spacing: 0.2rem;

  color: var(--color-nor-white);

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    font-size: 0.8rem;
    line-height: 1.6;
    letter-spacing: 0.1rem;

    margin-top: 1.1rem;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    font-size: 0.75rem;
    line-height: 1.1;
    letter-spacing: 0.05rem;
  }
`;

const StyledSpan = styled.span`
  border-radius: 0.2rem;

  &:hover {
    background-color: var(${(props) => props.$bgc});
    color: var(${(props) => props.$clr});
  }
`;

function Footer() {
  const { colors: colorsText } = useGradientFest({
    intervalTime: 100,
    colorSet: RAINBOW_COLOR_SET,
  });

  const { colors: colorsBorder } = useGradientFest({
    intervalTime: 550,
    colorSet: ["--color-nor-red", "--color-nor-white", "--color-nor-blue"],
  });

  const { twitter, facebook, instagram } = useSocials();

  return (
    <StyledFooter>
      <ContentContainer type="secondary">
        <AreaAuthorInformation $gridFest={colorsText}>
          <Text type="secondary">
            I don&#39;t have any social media accounts, but here some fake
            links.
          </Text>
        </AreaAuthorInformation>

        <AreaLinks $gridFest={colorsBorder}>
          <List isCol={false}>
            <ListItem isCol={false} type="secondary">
              <StyledSpan $clr={colorsBorder.first} $bgc={colorsBorder.third}>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href={twitter}
                >
                  twitter
                </a>
              </StyledSpan>
            </ListItem>
            <ListItem isCol={false} type="secondary">
              <StyledSpan $clr={colorsBorder.third} $bgc={colorsBorder.second}>
                <a
                  href={facebook}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  facebook
                </a>
              </StyledSpan>
            </ListItem>
            <ListItem isCol={false} type="secondary">
              <StyledSpan $clr={colorsBorder.second} $bgc={colorsBorder.first}>
                <a
                  href={instagram}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  instagram
                </a>
              </StyledSpan>
            </ListItem>
          </List>
        </AreaLinks>

        <AreaWebsiteInformation>
          <Text type="secondary">
            This website is built for training purposes only, and I am the only
            contributor.
          </Text>
        </AreaWebsiteInformation>
      </ContentContainer>
    </StyledFooter>
  );
}

export default Footer;
