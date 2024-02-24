import styled from "styled-components";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Footer from "../ui/Footer";
import ContentContainer from "../ui/ContentContainer";
import OutletContainer from "../ui/OutletContainer";

const StyledIntro = styled.div`
  height: 96%;
  width: 98%;

  display: grid;
  grid-template-rows: repeat(20, 1fr);
  grid-template-columns: repeat(10, 1fr);

  background: linear-gradient(
    to right,
    var(--color-nor-white),
    var(--color-nor-blue) 60%
  );

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
  }
`;

const GridHeading = styled.div`
  grid-row: 5/15;
  grid-column: 1/11;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  letter-spacing: 2.4rem;

  background: linear-gradient(
    to right,
    var(--color-nor-white),
    var(--color-nor-blue)
  );

  background-clip: text;
  color: transparent;

  border-bottom: 0.2rem solid var(--color-blue-4);

  ::first-letter {
    color: var(--color-nor-blue);
    font-size: 46rem;
    font-family: "Times New Roman", Times, serif;
    letter-spacing: -1.6rem;
  }

  span {
    text-decoration: underline;
    vertical-align: 36%;
  }

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    grid-row: 8/13;

    font-size: 4rem;

    border-bottom: 0.15rem solid var(--color-blue-4);

    margin-top: -16rem;

    ::first-letter {
      font-size: 20rem;
    }
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    font-size: 2rem;

    border-bottom: 0.1rem solid var(--color-blue-4);

    margin-top: 0;

    ::first-letter {
      font-size: 12rem;
      letter-spacing: 0rem;
    }
  }
`;

const GridText = styled.div`
  grid-row: 16/20;
  grid-column: 1/6;

  display: flex;
  justify-content: flex-start;

  padding-left: 10rem;

  font-style: italic;
  font-size: 1.5rem;
  color: var(--color-nor-blue);

  ::first-letter {
    font-size: 3rem;
    font-weight: 700;
  }

  ::first-line {
    line-height: 1.1;
  }

  span {
    vertical-align: 10%;
  }

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    grid-row: 14/20;

    font-size: 1.1rem;
    padding-left: 5rem;

    ::first-letter {
      font-size: 2.4rem;
      font-weight: 700;
    }

    ::first-line {
      line-height: 0.9;
    }

    span {
      vertical-align: 5%;
    }
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    font-size: 0.9rem;
  }
`;

const GridFooter = styled.div`
  grid-row: 1/4;
  grid-column: 1/10;

  border-bottom: 0.2rem solid var(--color-blue-4);

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    grid-row: 1/5;

    border-bottom: 0.2rem solid var(--color-blue-4);
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    border-bottom: 0.1rem solid var(--color-blue-4);
  }
`;

function Introduction() {
  return (
    <OutletContainer bgImg="">
      <StyledIntro>
        <GridFooter>
          <Footer></Footer>
        </GridFooter>

        <GridHeading>
          <ContentContainer type="primary">
            <Heading type="primary">
              n<span>orskapp</span>
            </Heading>
          </ContentContainer>
        </GridHeading>

        <GridText>
          <Text type="primary">
            W
            <span>
              elcome to <strong>Norskapp</strong>. Norskapp is a static website,
              also an SPA, built on React with the help of React Router. The
              data used in the application is totaly fake, but will be updated
              to real data in time, a server which will contain all the
              information needed is in building proccess. The theme of the
              website is based on colors of Norway, and in time will present
              information about the topics in navigation bar.
            </span>
          </Text>
        </GridText>
      </StyledIntro>
    </OutletContainer>
  );
}

export default Introduction;
