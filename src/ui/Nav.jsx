import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import List from "./List";
import ListItem from "./ListElement";

const linkStyle = { textDecoration: "none", color: "inherit" };

const StyledNavigation = styled.nav`
  height: 100%;
  width: 100%;

  padding: 0%;

  color: var(--color-nor-white);

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Navigation() {
  const { pathname } = useLocation();

  return (
    <StyledNavigation>
      <List isCol={true}>
        {pathname !== "/" && (
          <ListItem isCol={true} type="primary">
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </ListItem>
        )}
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="cities">
            Cities
          </Link>
        </ListItem>
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="universities">
            Universities
          </Link>
        </ListItem>
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="famousPeople">
            Famous People
          </Link>
        </ListItem>
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="books">
            Books
          </Link>
        </ListItem>
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="songs">
            Songs
          </Link>
        </ListItem>
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="movies">
            Movies
          </Link>
        </ListItem>
        <ListItem isCol={true} type="primary">
          <Link style={linkStyle} to="poems">
            Poems
          </Link>
        </ListItem>
      </List>
    </StyledNavigation>
  );
}

export default Navigation;
