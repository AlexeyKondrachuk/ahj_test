import puppetteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout

describe("card validator form", () => {
  let browser;
  let page;
  const baseUrl = "http://localhost:9000";

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, 
      slowMo: 250,
    });
    page = await browser.newPage(); 
  });
  
  afterAll(async () => {
    await browser.close();
  });

  test("form should render on page start", async () => {
    await page.goto(baseUrl);
    await page.waitForSelector(".filter-widget-form");
  });

  
  test("checking valid code", async () => {
    await page.goto(baseUrl);
    const form = await page.$(".filter-widget-form");
    const input = await page.$("input");
    const button = await form.$("button");
    await input.type("5555555555554444");
    await button.click();
    const result = await page.evaluate(
      () => document.getElementById("result").textContent
    );
    await expect(result).toBe("Действующая карта");
  });

  
  test("checking invalid code", async () => {
    await page.goto(baseUrl);
    const form = await page.$(".filter-widget-form");
    const input = await page.$("input");
    const button = await form.$("button");
    await input.type("346356345");
    await button.click();
    const result = await page.evaluate(
      () => document.getElementById("result").textContent
    );
    await expect(result).toBe("Введён некорректный номер карты!");
  });
});