import puppeteer from "puppeteer";

jest.setTimeout(30000); 
describe("page start", () => {
  let browser;
  let page;
  const baseUrl = "http://localhost:9000";

 
  beforeEach(async () => {
    browser = await puppeteer.launch({
     
      headless: false, 
      slowMo: 100,
      devtools: true, 
    });

    page = await browser.newPage();
  });

  test("test", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector("body"); 
  });

 
  afterAll(async () => {
    await browser.close();
  });
});