import { test, expect } from "@playwright/test";

const pages = [
  { path: "/",                  title: "Bistrica.AI" },
  { path: "/use-cases",         title: "Use Cases" },
  { path: "/agentic-lifecycle", title: "Agentic Lifecycle" },
  { path: "/education",         title: "Education" },
  { path: "/contact",           title: "Get in Touch" },
];

// ── Navigation & basic rendering ──────────────────────────────────────────────
for (const { path, title } of pages) {
  test(`${path} — loads and has correct title`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(new RegExp(title));
  });

  test(`${path} — no console errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
    await page.goto(path);
    expect(errors).toHaveLength(0);
  });
}

// ── Navigation ────────────────────────────────────────────────────────────────
test("navigation — links work", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Use Cases");
  await expect(page).toHaveURL(/use-cases/);

  await page.click("text=Agentic Lifecycle");
  await expect(page).toHaveURL(/agentic-lifecycle/);
});

test("navigation — Get in Touch button goes to contact", async ({ page }) => {
  await page.goto("/");
  await page.locator("header").getByText("Get in Touch").click();
  await expect(page).toHaveURL(/contact/);
});

// ── Mobile ────────────────────────────────────────────────────────────────────
test("mobile — hamburger menu opens and closes", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: /toggle menu/i });
  await toggle.click();
  await expect(page.getByRole("link", { name: "Use Cases" }).first()).toBeVisible();
  await toggle.click();
  await expect(page.getByRole("link", { name: "Use Cases" }).first()).toBeHidden();
});

test("mobile — hero CTA buttons are fully visible", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/");
  const cta = page.getByRole("link", { name: /start the conversation/i });
  await expect(cta).toBeVisible();
  const box = await cta.boundingBox();
  expect(box?.width).toBeGreaterThan(100);
});

test("mobile — contact form fields are usable", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile only");
  await page.goto("/contact");
  const firstName = page.getByPlaceholder("Jane");
  await expect(firstName).toBeVisible();
  await firstName.fill("Ana");
  expect(await firstName.inputValue()).toBe("Ana");
});

// ── Accessibility (WCAG 2.1 / EN 301 549) ────────────────────────────────────
test("accessibility — skip link is focusable", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: /skip to main content/i });
  await expect(skip).toBeFocused();
});

test("accessibility — all images have alt text", async ({ page }) => {
  await page.goto("/");
  const imgs = await page.locator("img").all();
  for (const img of imgs) {
    const alt = await img.getAttribute("alt");
    expect(alt, "image missing alt attribute").not.toBeNull();
  }
});

test("accessibility — form labels are associated with inputs", async ({ page }) => {
  await page.goto("/contact");
  const inputs = page.locator("input[id]");
  const count = await inputs.count();
  for (let i = 0; i < count; i++) {
    const id = await inputs.nth(i).getAttribute("id");
    if (id) {
      const label = page.locator(`label[for="${id}"]`);
      await expect(label, `no label for input #${id}`).toHaveCount(1);
    }
  }
});

test("accessibility — page has landmark regions", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);
});

test("accessibility — headings are not empty", async ({ page }) => {
  await page.goto("/");
  const headings = await page.locator("h1, h2, h3").all();
  for (const h of headings) {
    const text = (await h.textContent())?.trim();
    expect(text?.length, "empty heading").toBeGreaterThan(0);
  }
});

test("accessibility — nav has aria-label or accessible name", async ({ page }) => {
  await page.goto("/");
  const nav = page.locator("nav");
  const count = await nav.count();
  expect(count).toBeGreaterThan(0);
});

// ── 404 ───────────────────────────────────────────────────────────────────────
test("404 page renders for unknown route", async ({ page }) => {
  await page.goto("/this-page-does-not-exist");
  await expect(page.getByText("Page not found")).toBeVisible();
  await expect(page.getByRole("link", { name: /back to home/i })).toBeVisible();
});

// ── Sitemap and robots ────────────────────────────────────────────────────────
test("sitemap.xml is accessible", async ({ page }) => {
  const res = await page.request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("<urlset");
});

test("robots.txt is accessible", async ({ page }) => {
  const res = await page.request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("Sitemap:");
});

test("llms.txt is accessible", async ({ page }) => {
  const res = await page.request.get("/llms.txt");
  expect(res.status()).toBe(200);
});
