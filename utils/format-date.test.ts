import { formatDate } from "./format-date";

describe("formatDate", () => {
  it("should format a date correctly", () => {
    const formattedDate = formatDate("2020-05-04T03:37:18");
    const expected = "4 May 2020 03:37:18";

    expect(formattedDate).toEqual(expected);
  });

  it("should use two digits in timestamps", () => {
    const formattedDate = formatDate("2020-05-04T03:07:08"); // with added zeros
    const expected = "4 May 2020 03:07:08";

    expect(formattedDate).toEqual(expected);
  });
});
