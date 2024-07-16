import React, { useState } from "react";
import styled from "styled-components";
import { useAllTokenState, useOpenModalState } from "../../state";
import { Button, Input } from "@mui/material";
import "./modal.scss";
const ModalButton = styled.button`
  font-family: inherit;
  cursor: pointer;
  background: #ffffff;
  color: #000000;
  border: 0;
  border-radius: 8px;
  padding: 20px 36px;
  font-size: 16px;
  font-weight: bold;
`;

const ModalContainer: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  opacity: ${({ open }: any) => (open ? "1" : "0")};
  visibility: ${({ open }: any) => (open ? "visible" : "hidden")};
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.5s, visibility 0.5s;
`;

const ModalWindow: any = styled.div`
  position: fixed;
  top: 50%;
  right: ${({ open }: any) => (open ? "50%" : "-300px")};
  transform: translate(50%, -50%);
  background: #ffffff;
  color: #000000;
  padding: 48px 40px;
  width: ${({ open }: any) => (open ? "400px" : "118px")};
  height: 118px;
  border-radius: ${({ open }: any) => (open ? "12px" : "50%")};
  transition: width 1s, right 1s, border-radius 1s;
`;

const ModalCardContainer: any = styled.div`
  opacity: ${({ open }: any) => (open ? "1" : "0")};
  transition: opacity 1s;
  display: flex;
`;

const ModalAddListToken = () => {
  const { open, updateModalOpen } = useOpenModalState();
  const { update_Token } = useAllTokenState();
  const [valuesToken, setValuesToken] = useState<any>();
  const handleClickExit = () => {
    if (valuesToken) {
      update_Token(valuesToken);
      updateModalOpen(false);
      setValuesToken([]);
    }
  };
  const ariaLabel = { "aria-label": "description" };
  const handleOnchaneInput = (e: any) => {
    setValuesToken(e.target.value);
  };
  return (
    <>
      {/* <ModalButton onClick={toggleModal}>Open Modal</ModalButton> */}
      <ModalContainer open={open}>
        <ModalWindow open={open}>
          <ModalCardContainer open={open}>
            <Input
              placeholder=" Placeholder"
              inputProps={ariaLabel}
              className="inputModal"
              onChange={handleOnchaneInput}
              value={valuesToken ? valuesToken : ""}
              required
            />
            <Button onClick={handleClickExit} className="button_Modal">
              Submit
            </Button>
          </ModalCardContainer>
        </ModalWindow>
      </ModalContainer>
    </>
  );
};

export default ModalAddListToken;
