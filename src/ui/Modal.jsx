import styled from "styled-components";
import Button from "./Button";

const StyledModal = styled.div`
  position: fixed;
  z-index: 0;

  top: 15rem;
  right: 45rem;

  width: 96rem;
  height: 58rem;

  background-color: var(--color-nor-red);
  border: 0.5rem solid var(--color-nor-red);
  border-radius: 0.5rem;
  box-shadow: 0.5rem 1rem 1rem 1rem var(--color-shadow);

  margin-right: 10rem;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    top: 20rem;
    right: 15rem;

    width: 56rem;
    height: 48rem;
  }

  //25%
  @media (max-width: 36rem) {
    top: 20rem;
    right: 0.8rem;

    width: 36rem;
    height: 50rem;
  }

  @media (max-height: 36rem) {
    height: 25rem;
  }
`;

const AreaBtn = styled.div`
  position: absolute;
  z-index: 1;

  right: 5rem;
  top: 1rem;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    right: 4rem;
    top: 2rem;
  }

  //25%
  @media (max-width: 36rem) or (max-height: 36rem) {
    right: 3rem;
    top: 3rem;
  }
`;

const AreaContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-nor-blue);

  border: 1.8rem solid var(--color-nor-white);
  border-radius: 0.5rem;

  height: 93%;
  width: 96%;

  & > div > h1 {
    font-size: 10rem;
    color: var(--color-nor-white);
    letter-spacing: 0.8rem;
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
  }

  & > div > p {
    font-size: 1.8rem;
    line-height: 1.7;
    letter-spacing: 0.2rem;
    color: var(--color-nor-white);
    font-weight: 300;
  }

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  //50%
  @media (max-width: 60rem) or (max-height: 40rem) {
    & > div > h1 {
      font-size: 6rem;
      color: var(--color-nor-white);
      letter-spacing: 0.6rem;
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
    }

    & > div > p {
      font-size: 2.4rem;
      line-height: 1.8;
      letter-spacing: 0.1rem;
      color: var(--color-nor-white);
      font-weight: 300;
    }
  }

  //25%
  @media (max-height: 36rem) {
    & > div > h1 {
      font-size: 3rem;
      color: var(--color-nor-white);
      letter-spacing: 0.3rem;
      font-family: "Times New Roman", Times, serif;
      font-weight: 700;
    }

    & > div > p {
      font-size: 1.2rem;
      line-height: 1.8;
      letter-spacing: 0.1rem;
      color: var(--color-nor-white);
      font-weight: 300;
    }
  }
`;

function Modal({ children, onOpenModal }) {
  function closeModal() {
    onOpenModal(false);
  }

  return (
    <StyledModal>
      <AreaBtn>
        <Button type="modal" onClick={closeModal}>
          &#10006;
        </Button>
      </AreaBtn>
      <AreaContent>{children}</AreaContent>
    </StyledModal>
  );
}

export default Modal;
