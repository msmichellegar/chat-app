import Head from "next/head";
import { ConversationsList } from "../components/ConversationsList";
import { Header } from "../components/Header";
import { Conversation } from "../components/Conversation";
import { ConversationsLayout } from "../components/ConversationsLayout";
import { useEffect, useState } from "react";
import { sortConversations } from "../utils/sort-conversations";

export type Message = {
  id: string;
  text: string;
  last_updated: string;
};

export type Conversation = {
  id: string;
  name: string;
  last_updated: string;
  messages: Message[];
};

export default function Home() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<Conversation>();

  // fetch conversations, sort them and store in state
  useEffect(() => {
    const url = "/api/static-data";

    fetch(url)
      .then((res) => res.json())
      .then((conversationsData) => {
        const parsedConversations = JSON.parse(conversationsData);

        const sortedConversations = sortConversations(
          parsedConversations
        ) as Conversation[];

        setConversations(sortedConversations);
      });
  }, []);

  // set first conversation to "active" when data is initially loaded
  useEffect(() => {
    if (!activeConversation) {
      setActiveConversation(conversations[0]);
    }
  }, [conversations]);

  // handler to update the active conversation
  const updateActiveConversation = (conversationId: string) => {
    const activeConversation = conversations.find(
      ({ id }) => id === conversationId
    );

    setActiveConversation(activeConversation);
  };

  // handler to add new message to a conversation
  const addNewMessage = (message: Message, conversationId: string) => {
    const updatedConversations = conversations.map((convo) => {
      // select the right conversation to update based  on id
      if (convo.id === conversationId) {
        const newConvo: Conversation = { ...convo };
        newConvo.messages.push(message); // push new message

        setActiveConversation(convo); // update active conversation in state

        return newConvo;
      }

      return convo;
    });

    setConversations(updatedConversations); // update conversations in state
  };

  return (
    <>
      <Head>
        <title>Chat App</title>
      </Head>
      <Header />
      <ConversationsLayout>
        <ConversationsList
          activeConversation={activeConversation}
          conversations={conversations}
          updateActiveConversation={updateActiveConversation}
        />
        <Conversation
          conversation={activeConversation}
          addNewMessage={addNewMessage}
        />
      </ConversationsLayout>
    </>
  );
}
5;
