import styled from "styled-components";

const PrimaryTex = styled.p`
  text-align: left;
  letter-spacing: 0.1rem;
  line-height: 1.7;
`;
const SecondaryText = styled.p`
  text-align: center;
  line-height: 1.7;
`;
const TertiaryText = styled.p`
  text-align: right;
  letter-spacing: 0.1rem;
  line-height: 1.7;
`;

function Text({ children, type }) {
  return (
    <>
      {type === "primary" && <PrimaryTex>{children}</PrimaryTex>}
      {type === "secondary" && <SecondaryText>{children}</SecondaryText>}
      {type === "tertiary" && <TertiaryText>{children}</TertiaryText>}
    </>
  );
}

export default Text;
