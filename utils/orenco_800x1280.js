const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 800,
    height: 1280,
    deviceScaleFactor: 1,
  });
  await page.goto('https://orencotaphouse.com/taplist/');
  await page.screenshot({path: 'c:/users/kruff/Desktop/orenco_800x1280.png'});

  await browser.close();
})();