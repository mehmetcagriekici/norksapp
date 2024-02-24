import styled from "styled-components";

const PrimaryListItem = styled.li`
  font-size: 2.8rem;
  line-height: 1.6;

  width: fit-content;
  height: fit-content;

  margin-top: ${(props) => (props.$isCol ? "2.6rem" : "2rem")};
  padding-bottom: 0.6rem;

  transition: all 0.3s;

  &:not(:last-child) {
    margin-bottom: ${(props) => (props.$isCol ? "2rem" : "0")};

    margin-right: ${(props) => (props.$isCol ? "0" : "4rem")};
  }

  &:hover {
    cursor: pointer;
    padding-left: 0.2rem;
    padding-right: 0.2rem;

    border-bottom: solid var(--color-nor-white);
    border-width: 0.2rem;
    border-radius: 0.2rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    background-color: var(--color-white-3);

    animation: on_hover 0.5s ease-in;
  }

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    font-size: 1.6rem;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    font-size: 1rem;
  }

  @keyframes on_hover {
    0% {
      border-bottom: 0.2rem solid var(--color-nor-white);
      border-radius: 0.2rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background-color: var(--color-white-5);
    }

    50% {
      border-bottom: 0.2rem solid var(--color-nor-white);
      border-radius: 0.2rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background-color: var(--color-white-4);
    }

    100% {
      border-bottom: 0.2rem solid var(--color-nor-white);
      border-radius: 0.2rem;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background-color: var(--color-white-3);
    }
  }
`;

const SecondaryListItem = styled.li`
  font-size: 2.88rem;
  line-height: 1.6;

  width: fit-content;
  height: fit-content;

  margin-top: ${(props) => (props.$isCol ? "1.4rem" : "1.8rem")};

  transition: all 0.3s;

  &:not(:last-child) {
    margin-bottom: ${(props) => (props.$isCol ? "2rem" : "0")};

    margin-right: ${(props) => (props.$isCol ? "0" : "4rem")};
  }

  &:hover {
    cursor: pointer;

    border-radius: 0.2rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    transform: scaleX(1.5);
  }

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    font-size: 1.4rem;
    margin-top: 4rem;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 22rem) {
    font-size: 1rem;
    margin-top: 3rem;
  }
`;

function ListItem({ children, isCol, type }) {
  return (
    <>
      {type === "primary" && (
        <PrimaryListItem $isCol={isCol}>{children}</PrimaryListItem>
      )}
      {type === "secondary" && (
        <SecondaryListItem $isCol={isCol}>{children}</SecondaryListItem>
      )}
    </>
  );
}

export default ListItem;
