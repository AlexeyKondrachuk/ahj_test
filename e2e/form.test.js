import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("in form", () => {
  let browser;
  let page;

  
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false, 
      slowMo: 250,
    });

    page = await browser.newPage();
  });

  
  afterAll(async () => {
    await browser.close();
  });

  test("form should render on page", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".filter-widget-form");
  });

  test("valid form", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector(".filter-widget-form");

    const form = await page.$(".filter-widget-form");
    const input = await form.$(".form-control");
    const button = await form.$(".btn");
    await input.type("2202200112561350");
    await button.click();

    await page.waitForSelector(".filter-widget-form");
  });
});