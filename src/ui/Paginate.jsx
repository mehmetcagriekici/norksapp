import styled from "styled-components";
import Button from "./Button";

const PaginationNavigator = styled.div`
  color: var(--color-nor-white);
  font-size: 7rem;
  font-weight: 700;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-bottom: 0.4rem solid var(--color-nor-white);

  span {
    user-select: none;
  }

  button {
    margin-bottom: 1.6rem;
  }

  &:has(> button:hover) {
    color: var(--color-nor-red);
    border-bottom: 0.4rem solid var(--color-nor-red);
  }

  //25%
  @media (max-width: 36rem) {
    position: fixed;
    right: ${(props) => props.$coords.right};
    bottom: ${(props) => props.$coords.bottom};

    transform: translateX(36%);
  }

  @media (max-height: 36rem) {
    font-size: 4rem;
    right: ${(props) => props.$coords.right};
    bottom: ${(props) => props.$coords.bottom};
    border-bottom: 0.4rem solid var(--color-nor-white);
  }
`;

function Paginate({ lastPage, page, setPage, coords }) {
  return (
    <PaginationNavigator $coords={coords}>
      {page > 0 && (
        <Button direction="90deg" onClick={() => setPage(page - 1)}>
          &larr;
        </Button>
      )}
      <span>{page + 1}</span>
      {page < lastPage - 1 && (
        <Button direction="-90deg" onClick={() => setPage(page + 1)}>
          &rarr;
        </Button>
      )}
    </PaginationNavigator>
  );
}

export default Paginate;
