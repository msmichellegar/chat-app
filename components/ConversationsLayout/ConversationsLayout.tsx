import React from "react";
import { ConversationsWrapper } from "./styles";

type Props = {
  children: React.ReactNode;
};

const ConversationsLayout = ({ children }: Props) => {
  return <ConversationsWrapper>{children}</ConversationsWrapper>;
};

export { ConversationsLayout };
