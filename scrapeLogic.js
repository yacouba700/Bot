const puppeteer = require("puppeteer");
const html = require("./html.js")
require("dotenv").config();

const scrapeLogic = async (res) => {
  const browser = await puppeteer.launch({
    args: [
      "--disable-setuid-sandbox",
      "--no-sandbox",
      "--single-process",
      "--no-zygote",
    ],
    executablePath:
      process.env.NODE_ENV === "production"
        ? process.env.PUPPETEER_EXECUTABLE_PATH
        : puppeteer.executablePath(),
  });
  try {
    const page = await browser.newPage();

   // await page.goto("https://developer.chrome.com/");

    // Set screen size
    //await page.setViewport({ width: 1080, height: 1024 });

    // Type into search box
   // await page.type(".search-box__input", "automate beyond recorder");

    // Wait and click on first result
   // const searchResultSelector = ".search-box__link";
   // await page.waitForSelector(searchResultSelector);
    //await page.click(searchResultSelector);

    // Locate the full title with a unique string
    //const textSelector = await page.waitForSelector(
    //  "text/Customize and automate"
   // );
    //const fullTitle = await textSelector.evaluate((el) => el.textContent);

    // Print the full title
    //const logStatement = `The title of this blog post is ${fullTitle}`;
    //console.log(logStatement);
    const content = html("Yacouba","3000","0","intermédiaire", "non payer ");
    await page.setContent(content)
    const pdfs = await page.pdf({
      path: "result.pdf",
      margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
      printBackground: true,
      format: "A4",
    });
    res.sendFile(`${__dirname}/result.pdf`);
  } catch (e) {
    console.error(e);
    res.send(`Something went wrong while running Puppeteer: ${e}`);
  } finally {
    await browser.close();
  }
};

module.exports = { scrapeLogic };
