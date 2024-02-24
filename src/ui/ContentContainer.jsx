import styled from "styled-components";

const PrimaryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 60rem) or (max-height: 40rem) {
    overflow: auto;
    height: 50%;

    align-items: safe center;
    justify-content: safe center;

    scrollbar-color: var(--color-nor-white) var(--color-nor-blue);
    scrollbar-width: thin;
  }
`;

const SecondaryContainer = styled.div`
  width: 96%;
  height: 100%;

  display: grid;

  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(4, 25%);
`;

function ContentContainer({ children, type }) {
  if (type === "primary")
    return <PrimaryContainer>{children}</PrimaryContainer>;
  if (type === "secondary")
    return <SecondaryContainer>{children}</SecondaryContainer>;
}

export default ContentContainer;
