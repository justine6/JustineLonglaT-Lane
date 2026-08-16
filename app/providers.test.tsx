import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next-themes", () => ({
  ThemeProvider: ({
    attribute,
    children,
    defaultTheme,
    disableTransitionOnChange,
    enableSystem,
  }: {
    attribute?: string;
    children: ReactNode;
    defaultTheme?: string;
    disableTransitionOnChange?: boolean;
    enableSystem?: boolean;
  }) => (
    <div
      data-attribute={attribute}
      data-default-theme={defaultTheme}
      data-disable-transition={
        disableTransitionOnChange ? "true" : "false"
      }
      data-enable-system={enableSystem ? "true" : "false"}
      data-testid="theme-provider"
    >
      {children}
    </div>
  ),
}));

import { Providers } from "./providers";

describe("Providers", () => {
  it("establishes dark as the first-visit theme contract", () => {
    render(
      <Providers>
        <span>Theme contract child</span>
      </Providers>,
    );

    const provider = screen.getByTestId("theme-provider");

    expect(provider.getAttribute("data-attribute")).toBe("class");
    expect(provider.getAttribute("data-default-theme")).toBe("dark");
    expect(provider.getAttribute("data-enable-system")).toBe("true");
    expect(provider.getAttribute("data-disable-transition")).toBe(
      "true",
    );
    expect(
      screen.getByText("Theme contract child").textContent,
    ).toBe("Theme contract child");
  });
});
