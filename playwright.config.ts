import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  use: {
    baseURL: "https://bistricaai.vercel.app",
  },
  projects: [
    { name: "desktop-chrome", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-iphone",  use: { ...devices["iPhone 14"] } },
    { name: "mobile-android", use: { ...devices["Pixel 7"] } },
  ],
});
