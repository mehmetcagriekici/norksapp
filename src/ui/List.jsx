import styled from "styled-components";

const StlyedList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  flex-direction: ${(props) => (props.$isCol ? "column" : "row")};
`;

function List({ isCol, children }) {
  return <StlyedList $isCol={isCol}>{children}</StlyedList>;
}

export default List;
