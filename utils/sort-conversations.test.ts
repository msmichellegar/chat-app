import { Conversation } from "../pages";
import { formatDate } from "./format-date";
import { sortConversations } from "./sort-conversations";

describe("sortConversations", () => {
  it("should sort conversations by last updated", () => {
    const mockConversations = [
      {
        name: "Least recent",
        last_updated: "4 May 2020 03:37:18",
        messages: [],
      },
      {
        name: "Most recent",
        last_updated: "6 May 2020 03:37:18",
        messages: [
          { last_updated: "4 May 2020 03:37:18" },
          { last_updated: "6 May 2020 03:37:18" },
          { last_updated: "5 May 2020 03:37:18" },
        ],
      },
      {
        name: "Middle of the pack",
        last_updated: "5 May 2020 03:37:18",
        messages: [],
      },
    ];

    const sortedConversations = sortConversations(
      mockConversations as Conversation[]
    );

    // most recent conversation first
    expect(sortedConversations[0].last_updated).toBe("6 May 2020 03:37:18");
    expect(sortedConversations[0].name).toBe("Most recent");

    // least recent conversation last
    expect(sortedConversations[2].last_updated).toBe("4 May 2020 03:37:18");
    expect(sortedConversations[2].name).toBe("Least recent");

    // messages are also sorted by last_updated

    // least recent message first
    expect(sortedConversations[0].messages[0].last_updated).toBe(
      "4 May 2020 03:37:18"
    );

    // most recent message last
    expect(sortedConversations[0].messages[2].last_updated).toBe(
      "6 May 2020 03:37:18"
    );
  });
});
