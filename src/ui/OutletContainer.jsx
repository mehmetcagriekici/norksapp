import styled from "styled-components";

const StyledOutled = styled.div`
  height: 100%;
  width: 100%;

  background-size: cover;
  background: linear-gradient(
      to left,
      var(--color-nor-blue) 40%,
      var(--color-nor-white)
    ),
    url(${(props) => props.$url});

  display: flex;
  align-items: center;
  justify-content: center;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    background: none;
  }
`;

function OutletContainer({ children, bgImg }) {
  return <StyledOutled $url={bgImg}>{children}</StyledOutled>;
}

export default OutletContainer;
