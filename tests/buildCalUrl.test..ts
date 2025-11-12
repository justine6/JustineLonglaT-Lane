import { buildCalUrl } from "@/components/Panel";

describe("buildCalUrl()", () => {
  test("appends required Cal query params", () => {
    const url = buildCalUrl({
      link: "https://cal.com/justine/intro-call"
    });

    expect(url).toContain("embed=inline");
    expect(url).toContain("layout=month_view");
    expect(url).toContain("theme=system");
  });

  test("preserves existing query params", () => {
    const url = buildCalUrl({
      link: "https://cal.com/justine/intro-call?foo=bar"
    });

    expect(url).toContain("foo=bar");
  });

  test("uses fallback base if given a non-URL", () => {
    const url = buildCalUrl({
      link: "/justine/intro-call"
    });

    expect(url.startsWith("https://cal.com/")).toBe(true);
  });

  test("applies optional params", () => {
    const url = buildCalUrl({
      link: "https://cal.com/justine/intro-call",
      locale: "fr",
      hideEventTypeDetails: true,
      primaryColor: "1d4ed8"
    });

    expect(url).toContain("locale=fr");
    expect(url).toContain("hide_event_type_details=true");
    expect(url).toContain("primary_color=1d4ed8");
  });
});
