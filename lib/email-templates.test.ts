import { describe, it, expect } from "vitest";
import { LINKS } from '@/config/links';
import { renderContactText } from "@/lib/email-templates";

describe("email templates", () => {
  it("renders contact text with sender name", () => {
    const out = renderContactText({
      name: "Justine",
      email: "justine@example.com",
      reason: "general",
      message: "Hello!"
    });
    expect(out).toContain("Justine");
    expect(out).toContain("justine@example.com");
  });
});



