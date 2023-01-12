import styled from "styled-components";

export const List = styled.section`
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-top: 12px;
`;

type ConversationLinkProps = {
  isActive: boolean;
};

export const ConversationLink = styled.button<ConversationLinkProps>`
  text-decoration: underline;
  margin-bottom: 6px;
  border: none;
  background: none;
  padding: 0;
  text-align: left;
  cursor: pointer;

  ${({ isActive }) => (isActive ? "font-weight: bold;" : "")}

  &:hover {
    color: darkslategray;
  }
`;
