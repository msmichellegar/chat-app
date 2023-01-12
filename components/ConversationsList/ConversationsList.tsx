import React from "react";
import { Conversation } from "../../pages";
import { ConversationLink, List } from "./styles";

type Props = {
  conversations: Conversation[];
  updateActiveConversation: (conversationId: string) => void;
  activeConversation: Conversation | undefined;
};

const ConversationsList = ({
  conversations,
  updateActiveConversation,
  activeConversation,
}: Props) => {
  const { id: activeConversationId } = activeConversation || {};

  return (
    <List>
      {conversations.map(({ name, id, last_updated }) => {
        const isActive = id === activeConversationId;

        return (
          <ConversationLink
            onClick={() => updateActiveConversation(id)}
            key={id}
            isActive={isActive}
          >
            {name}
          </ConversationLink>
        );
      })}
    </List>
  );
};

export { ConversationsList };
