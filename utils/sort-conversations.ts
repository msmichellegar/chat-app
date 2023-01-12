import { Conversation } from "../pages";

// sort conversations and their messages by last updated
export const sortConversations = (conversations: Conversation[]) => {
  // conversations should be sorted with most recent conversation first
  const sortedConversations = conversations.sort((a, b) => {
    const lastUpdated1 = new Date(a.last_updated).getTime();
    const lastUpdated2 = new Date(b.last_updated).getTime();

    return lastUpdated2 - lastUpdated1;
  });

  // messages should be sorted with least recent message first
  const withSortedMessages = sortedConversations.map((conversation) => {
    const sortedMessages = conversation.messages.sort((a, b) => {
      const lastUpdated1 = new Date(a.last_updated).getTime();
      const lastUpdated2 = new Date(b.last_updated).getTime();

      return lastUpdated1 - lastUpdated2;
    });

    return { ...conversation, messages: sortedMessages };
  });

  return withSortedMessages;
};
