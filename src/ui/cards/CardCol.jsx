import styled from "styled-components";
import useGradientFest from "../../hooks/useGradientFest";

const Card = styled.div`
  height: 11rem;
  width: 33rem;

  border-radius: 0.4rem;
  border: 0.3rem solid var(--color-nor-white);

  color: var(--color-nor-blue);
  font-size: 1.3rem;
  text-decoration: underline;

  background: linear-gradient(
    90deg,
    var(--color-nor-blue),
    var(--color-nor-white) 25% 75%,
    var(--color-nor-red)
  );
  background-size: cover;

  box-shadow: 1.5rem 1.7rem 2rem 0.3rem var(--color-shadow);

  transition: all 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    opacity: 0.6;
  }

  &:has(> div > h3:hover) {
    background: linear-gradient(
      to left,
      var(${(props) => props.$gridFest.first}),
      var(${(props) => props.$gridFest.second}),
      var(${(props) => props.$gridFest.third})
    );
    background-clip: text;

    text-decoration: none;
    color: transparent;
    font-family: "Times New Roman", Times, serif;
    letter-spacing: 0.24rem;
    line-height: 1.8;
    font-weight: 900;
    font-style: italic;

    border: 0.3rem solid var(--color-nor-red);

    & > div > h3 {
      font-size: 3rem;

      border-radius: 0.4rem;
      border-bottom: 0.3rem solid var(--color-nor-red);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      background-color: var(--color-white-3);

      //50%
      @media (max-width: 60rem) or (max-height: 40rem) {
        font-size: 2.4rem;
      }
    }
  }
  transform: scale(1.1);

  &:hover {
    border: 0.3rem solid var(--color-nor-white);
    transform: scale(1.1);

    border: 0.3rem solid var(--color-nor-white);
    border-radius: 0.2rem;

    color: var(--color-nor-white);

    background: linear-gradient(
      90deg,
      var(--color-nor-blue) 10%,
      var(--color-red-1),
      var(--color-red-5),
      var(--color-red-9),
      var(--color-nor-red)
    );

    & > div {
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

function CardCol({ children, bgImg }) {
  const { colors: hoverColors } = useGradientFest({
    intervalTime: 75,
    colorSet: [
      "--color-violet",
      "--color-indigo",
      "--color-blue",
      "--color-green",
      "--color-yellow",
      "--color-orange",
      "--color-red",
    ],
  });

  return (
    <Card $gridFest={hoverColors} $url={bgImg}>
      {children}
    </Card>
  );
}

export default CardCol;
