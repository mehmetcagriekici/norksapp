import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Navigation from "../ui/Nav";

//grid two parts navigation and pages

const Layout = styled.div`
  background-color: var(--color-nor-blue);

  display: grid;
  grid-template-columns: 85% 15%;

  position: absolute;
  bottom: 0%;
  right: 0%;

  height: 96%;
  width: 98%;

  opacity: 0.9;

  border: 0.5rem solid var(--color-nor-white);
  border-bottom: none;
  border-right: none;
  border-radius: 0;
  border-top-left-radius: 0.4rem;

  //50%
  @media (max-width: 60rem) {
  }
  @media (max-height: 30rem) {
  }

  //25%
  @media (max-width: 30rem) {
  }
  @media (max-height: 15rem) {
  }
`;

const GridNav = styled.div`
  //only one direct child element
  height: 100%;

  //50%
  @media (max-width: 60rem) {
  }
  @media (max-height: 30rem) {
  }

  //25%
  @media (max-width: 30rem) {
  }
  @media (max-height: 15rem) {
  }
`;

const GridPage = styled.div`
  //only one direct child
  height: 100%;

  //50%
  @media (max-width: 60rem) {
  }
  @media (max-height: 30rem) {
  }

  //25%
  @media (max-width: 30rem) {
  }
  @media (max-height: 15rem) {
  }
`;

function AppLayout() {
  return (
    <Layout>
      <GridPage>
        <Outlet />
      </GridPage>

      <GridNav>
        <Navigation></Navigation>
      </GridNav>
    </Layout>
  );
}

export default AppLayout;
