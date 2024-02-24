import { useState } from "react";
import styled from "styled-components";
import { useFeatures } from "../hooks/useFeatures";
import CardRow from "./cards/CardRow";
import Paginate from "./Paginate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //25%
  @media (max-width: 36rem) {
    height: 56%;

    flex-direction: row;
    flex-direction: row;
    justify-content: safe center;
    align-items: safe center;
    gap: 2rem;

    padding-right: 2rem;

    overflow: auto;

    scrollbar-color: var(--color-nor-blue) var(--color-nor-white);
    scrollbar-width: thin;
  }

  @media (max-height: 36rem) {
  }
`;

const SongsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  //25%
  @media (max-width: 36rem) {
    overflow: auto;

    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-height: 36rem) {
  }
`;

const CardContainer = styled.div`
  margin: 0.8rem;

  background-size: cover;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    margin: 0.4rem;
  }
`;

function RowPageLayout({ data }) {
  const [page, setPage] = useState(0);
  const { display, totalPages } = useFeatures({
    page,
    data,
    displayPerPage: 4,
  });

  return (
    <Container>
      <SongsContainer>
        {display.map((element, index) => {
          return (
            <CardContainer key={index}>
              <CardRow data={element} />
            </CardContainer>
          );
        })}
      </SongsContainer>
      <Paginate
        coords={{ right: "50%", bottom: "8%" }}
        page={page}
        lastPage={totalPages}
        setPage={setPage}
      />
    </Container>
  );
}

export default RowPageLayout;
