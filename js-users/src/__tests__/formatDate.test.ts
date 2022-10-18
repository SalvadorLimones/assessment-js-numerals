import { formatDate } from "../utils/formatDate";
import { describe, expect, it } from "vitest";

describe("converting the input date onto a yyy.mm.dd. hh.mm.ss format", () => {
  it("returns the correct date format", () => {
    expect(formatDate("2011-10-05T14:48:00.000Z")).toEqual(
      "2011. 10. 05. 16:48:00"
    );
  });

  it("returns the correct date format", () => {
    expect(formatDate("2022-10-18T10:48:00.000Z")).toEqual(
      "2022. 10. 18. 12:48:00"
    );
  });
});
