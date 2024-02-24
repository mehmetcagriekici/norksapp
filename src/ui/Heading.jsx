import styled from "styled-components";

const PrimaryHeading = styled.h1`
  text-align: center;
  text-transform: uppercase;
`;

const SecondaryHeading = styled.h2`
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: var(--header-secondary-size);
`;
const TertiaryHeading = styled.h3`
  text-align: right;
  text-transform: uppercase;
`;

function Heading({ children, type, onClick = () => {} }) {
  return (
    <>
      {type === "primary" && (
        <PrimaryHeading onClick={onClick}>{children}</PrimaryHeading>
      )}
      {type === "secondary" && (
        <SecondaryHeading onClick={onClick}>{children}</SecondaryHeading>
      )}
      {type === "tertiary" && (
        <TertiaryHeading onClick={onClick}>{children}</TertiaryHeading>
      )}
    </>
  );
}

export default Heading;
