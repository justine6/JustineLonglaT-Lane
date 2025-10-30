import { describe, it, expect } from "vitest";
import { renderAutoReplyText, renderAutoReplyHtml } from "@/lib/email-templates";

describe("email auto-reply", () => {
  it("renders tailored text for 'request-resume'", () => {
    const txt = renderAutoReplyText("Justine", "request-resume");
    expect(txt).toMatch(/requested my résumé/i);
    expect(txt).toContain("Justine");
  });

  it("renders HTML for general reason", () => {
    const html = renderAutoReplyHtml("Justine", "general");
    expect(html).toContain("Thanks for your message");
    expect(html).toContain("Jutellane Solutions");
  });
});
