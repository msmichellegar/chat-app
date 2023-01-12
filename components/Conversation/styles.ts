import styled from "styled-components";

export const ConversationWrapper = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: auto min-content;
`;

export const Message = styled.div`
  overflow-anchor: none;
`;

// this element helps the scroll stay at the bottom
export const ScrollAnchor = styled.div`
  height: 1px;
  overflow-anchor: auto;
`;

export const Messages = styled.div`
  padding-left: 12px;
  padding-top: 12px;
  overflow: scroll;
  height: 100%;

  // approx 100vh minus the new message box and nav bar
  max-height: calc(100vh - 160px);

  time {
    font-weight: bold;
    font-size: 14px;
  }

  p {
    margin-top: 8px;
  }
`;

export const NewMessageBox = styled.div`
  border-top: 2px solid black;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 12px;

  input {
    padding: 10px 12px;
    width: 500px;
    margin-right: 10px;
  }

  button {
    background-color: black;
    border: none;
    color: white;
    letter-spacing: 1px;
    padding: 10px 12px;
    cursor: pointer;
  }
`;
