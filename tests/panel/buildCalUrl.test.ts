import { describe, it, expect } from "vitest";
import { buildCalUrl } from "@/components/Panel";

describe("buildCalUrl()", () => {
  it("appends required Cal.com embed params", () => {
    const url = buildCalUrl({
      link: "https://cal.com/justine/intro-call",
    });

    expect(url).toContain("embed=inline");
    expect(url).toContain("layout=month_view");
    expect(url).toContain("theme=system");
  });

  it("preserves existing query params", () => {
    const url = buildCalUrl({
      link: "https://cal.com/justine/intro-call?foo=bar",
    });

    expect(url).toContain("foo=bar");
  });

  it("uses fallback base URL when given a relative path", () => {
    const url = buildCalUrl({
      link: "/justine/intro-call",
    });

    expect(url.startsWith("https://cal.com/")).toBe(true);
  });

  it("applies optional params", () => {
    const url = buildCalUrl({
      link: "https://cal.com/justine/intro-call",
      locale: "fr",
      hideEventTypeDetails: true,
      primaryColor: "1d4ed8",
    });

    expect(url).toContain("locale=fr");
    expect(url).toContain("hide_event_type_details=true");
    expect(url).toContain("primary_color=1d4ed8");
  });
});

