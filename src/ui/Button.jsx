import styled from "styled-components";
import useGradientFest from "../hooks/useGradientFest";
import { RAINBOW_COLOR_SET } from "../utils/constants";

const StyledButton = styled.button`
  border: none;
  background: none;

  font-size: 10rem;
  color: var(--color-nor-white);

  &:hover {
    cursor: pointer;

    background: linear-gradient(
      ${(props) => props.$direction},
      var(${(props) => props.$gridFest.first}),
      var(${(props) => props.$gridFest.second}),
      var(${(props) => props.$gridFest.third})
    );

    background-clip: text;

    color: transparent;
  }

  @media (max-height: 36rem) {
    font-size: 7rem;
  }
`;

const ModalButton = styled.button`
  border: none;
  background: none;

  font-size: 12rem;
  color: var(--color-nor-white);

  &:hover {
    cursor: pointer;
    color: var(${(props) => props.$gridFest.first});
  }

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    font-size: 7.8rem;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 36rem) {
    font-size: 4rem;
  }
`;

const FlipCardButton = styled.button`
  background: none;
  border: none;

  color: var(--color-nor-white);
  font-size: 1.8rem;
  font-weight: bolder;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      to left,
      var(${(props) => props.$gridFest.first}),
      var(${(props) => props.$gridFest.second}),
      var(${(props) => props.$gridFest.third})
    );

    background-clip: text;

    color: transparent;
    font-size: 3.2rem;
    font-weight: bolder;
    letter-spacing: 0.6rem;

    transition: all 400ms;
  }

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    &:hover {
      cursor: pointer;
      background: linear-gradient(
        to left,
        var(${(props) => props.$gridFest.first}),
        var(${(props) => props.$gridFest.second}),
        var(${(props) => props.$gridFest.third})
      );

      background-clip: text;

      color: transparent;
      font-size: 1.8rem;
      font-weight: bolder;
      letter-spacing: 0.3rem;

      transition: all 400ms;
    }
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
  }
`;

function Button({ children, onClick, type = null, direction }) {
  const { colors: hoverColors } = useGradientFest({
    intervalTime: 99,
    colorSet: RAINBOW_COLOR_SET,
  });

  const { colors: blinkColors } = useGradientFest({
    intervalTime: 320,
    colorSet: [
      "--color-nor-white",
      "--color-nor-red",
      "--color-nor-white",
      "--color-nor-red",
    ],
  });

  if (!type)
    return (
      <StyledButton
        $direction={direction}
        $gridFest={hoverColors}
        onClick={onClick}
      >
        {children}
      </StyledButton>
    );
  if (type === "modal")
    return (
      <ModalButton $gridFest={blinkColors} onClick={onClick}>
        {children}
      </ModalButton>
    );

  if (type === "flip")
    return (
      <FlipCardButton $gridFest={hoverColors} onClick={onClick}>
        {children}
      </FlipCardButton>
    );
}

export default Button;
