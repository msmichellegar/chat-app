import React, { useState } from "react";
import {
  Conversation as ConversationData,
  Message as MessageData,
} from "../../pages";
import { formatDate } from "../../utils/format-date";
import {
  ConversationWrapper,
  NewMessageBox,
  Messages,
  Message,
  ScrollAnchor,
} from "./styles";

type Props = {
  conversation: ConversationData | undefined;
  addNewMessage: (message: MessageData, conversationId: string) => void;
};

const Conversation = ({ conversation, addNewMessage }: Props) => {
  const { messages = [], id: conversationId } = conversation || {};

  const [newMessage, setNewMessage] = useState<string>("");

  // handler for storing new message value in state as it's typed
  const handleMessageInput = (event: { target: { value: string } }) => {
    setNewMessage(event.target.value);
  };

  // handler for submitting the new message
  const handleSubmitMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (newMessage && conversationId) {
      const newMessageObj = {
        text: newMessage,
        last_updated: new Date().toISOString(), // current date
        id: Math.floor(Math.random() * 1000).toString(), // random id
      };

      addNewMessage(newMessageObj, conversationId); // add it to data
      setNewMessage(""); // reset text box
    }
  };

  return (
    <ConversationWrapper>
      <Messages>
        {messages?.map(({ id, text, last_updated }) => {
          const formattedDate = formatDate(last_updated);

          return (
            <Message key={id}>
              <time dateTime={last_updated}>{formattedDate}</time>
              <p>{text}</p>
            </Message>
          );
        })}
        <ScrollAnchor />
      </Messages>
      <NewMessageBox>
        <form onSubmit={handleSubmitMessage}>
          <input
            onChange={handleMessageInput}
            type="text"
            placeholder="Write your message here"
            value={newMessage}
          />
          <button type="submit" value="Submit">
            SEND MESSAGE
          </button>
        </form>
      </NewMessageBox>
    </ConversationWrapper>
  );
};

export { Conversation };
