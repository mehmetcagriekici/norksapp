import styled from "styled-components";
import { useState } from "react";

import Modal from "./Modal";
import ContentContainer from "./ContentContainer";
import Heading from "./Heading";
import CardCol from "./cards/CardCol";
import Paginate from "./Paginate";
import Text from "./Text";

import { useFeatures } from "../hooks/useFeatures";

const Container = styled.div`
  height: 80%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-right: 0.4rem solid var(--color-nor-white);
  border-radius: 0.4rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  background-color: ${(props) => props.$open || "var(--color-nor-blue)"};

  background: ${(props) =>
    props.$open &&
    "linear-gradient(to top left, var(--color-nor-blue) 20%, var(--color-nor-white))"};

  clip-path: ${(props) =>
    !props.$open
      ? `polygon( 12% 18% , 100% 14%, 100% 94%, 16% 84%
  )`
      : `polygon(
    7% 0%, 100% 0%, 100% 100%, 14% 100%
  )`};

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    clip-path: ${(props) =>
      !props.$open
        ? `polygon( 0% 15% , 100% 15%, 100% 86%, 0% 86%
  )`
        : `polygon(
    5% 0%, 100% 0%, 100% 100%, 5% 100%
  )`};

    padding-bottom: 2rem;
  }
`;

const CardsContainer = styled.div`
  width: 80%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;

  padding: 5rem;

  border-right: 0.4rem solid var(--color-nor-red);

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    overflow: auto;

    width: 60%;
    padding-left: 2rem;
    padding-right: 8rem;

    margin-top: 4rem;

    border: none;

    scrollbar-color: var(--color-nor-red) var(--color-nor-white);
    scrollbar-width: thin;

    //25%
    @media (max-width: 36rem) {
      margin-top: 0;
      margin-bottom: 10rem;
      padding-right: 4rem;
    }
  }
`;

function ColPageLayout({ data }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);

  const { display, totalPages } = useFeatures({
    page,
    data,
    displayPerPage: 5,
  });

  function openModal() {
    setOpen(true);
  }

  return (
    <Container $open={open}>
      <CardsContainer $open={open}>
        {display.map((element, index) => {
          //general data
          const { name, info, url } = element;

          return open ? (
            <Modal key={index} onOpenModal={setOpen}>
              <ContentContainer type="primary">
                <Heading type="primary">{name}</Heading>
              </ContentContainer>
              <ContentContainer type="primary">
                <Text type="secondary">{info}</Text>
              </ContentContainer>
            </Modal>
          ) : (
            <CardCol bgImg={url} key={index}>
              <ContentContainer type="primary">
                <Heading type="tertiary" onClick={openModal}>
                  {name}
                </Heading>
              </ContentContainer>
            </CardCol>
          );
        })}
      </CardsContainer>
      {open || (
        <Paginate
          coords={{ right: "50%", bottom: "24%" }}
          page={page}
          setPage={setPage}
          lastPage={totalPages}
        />
      )}
    </Container>
  );
}

export default ColPageLayout;
