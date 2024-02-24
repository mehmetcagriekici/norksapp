import styled from "styled-components";
import { useState } from "react";

import Heading from "../Heading";
import Text from "../Text";
import Button from "../Button";

const CardContainer = styled.div`
  height: 60rem;
  width: 30rem;
  position: relative;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    height: 36rem;
    width: 18rem;
  }

  //25%
  @media (max-width: 36rem) {
    height: 50rem;
    width: 25rem;
  }

  @media (max-height: 36rem) {
    height: 29rem;
    width: 20rem;
  }
`;

const Front = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  perspective: 85rem;

  background: linear-gradient(
    to right bottom,
    var(--color-nor-red),
    var(--color-nor-white) 10% 15%,
    var(--color-nor-blue) 22%
  );

  border: 0.4rem solid var(--color-shadow);
  border-radius: 0.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  color: var(--color-nor-white);
  font-family: "Times New Roman", Times, serif;
  font-weight: lighter;
  font-size: 2.4rem;
  letter-spacing: 0.2rem;

  transition: all 800ms;
  animation: ${(props) => props.$show || " flip_front"} 800ms ease-out;

  transform: rotateY(${(props) => props.$show || "180deg"});

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    gap: 3rem;
    font-size: 1.4rem;
    letter-spacing: 0.15rem;
  }

  @keyframes flip_front {
    from {
      transform: rotateY(0deg);
    }

    to {
      transform: rotateY(180deg);
    }
  }
`;

const Back = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  border: 0.4rem solid var(--color-shadow);
  border-radius: 0.4rem;

  background: linear-gradient(
    to bottom,
    var(--color-nor-white) 6%,
    var(--color-nor-blue) 12%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  transition: all 800ms;
  transform: rotateY(${(props) => props.$show && "180deg"});
  animation: ${(props) => props.$show || " flip_back"} 800ms ease-out;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    background: linear-gradient(
      to bottom,
      var(--color-nor-white) 4%,
      var(--color-nor-blue) 10%
    );
  }

  @keyframes flip_back {
    from {
      transform: rotateY(180deg);
    }

    to {
      transform: rotateY(0deg);
    }
  }
`;

const LyricsContainer = styled.div`
  height: 80%;
  width: 80%;
  overflow: auto;

  text-align: center;
  font-size: 2.1rem;
  line-height: 1.7;
  color: var(--color-nor-white);

  border-radius: 0.4rem;

  scrollbar-color: var(--color-nor-blue) var(--color-nor-white);
  scrollbar-width: thin;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    font-size: 1.3rem;
    line-height: 1.4;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
  }
`;

function CardRow({ data }) {
  const { title, content, year, creator } = data;

  const [showFront, setShowFront] = useState(true);

  function flipCard() {
    setShowFront((front) => !front);
  }

  return (
    <CardContainer>
      <Front $show={showFront}>
        <Heading type="primary">{title}</Heading>
        <Heading type="primary">{creator}</Heading>
        <Heading type="primary">{year}</Heading>
        <Button type="flip" onClick={flipCard}>
          Show Lyrics
        </Button>
      </Front>

      <Back $show={showFront}>
        <LyricsContainer>
          <Text type="secondary">{content}</Text>
        </LyricsContainer>
        <Button type="flip" onClick={flipCard}>
          Back
        </Button>
      </Back>
    </CardContainer>
  );
}

export default CardRow;
