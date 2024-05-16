const puppeteer = require('puppeteer');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
describe('Chess game', () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: false });
      page = await browser.newPage();
      await page.setViewport({ width: 1600, height: 800 });
      await page.goto('http://localhost:3000'); // Replace with your chess game URL
    });
  
    afterAll(async () => {
      await browser.close();
    });
    const Movement = async(piece, x, y) => {
        const pieceBoundingBox = await piece.boundingBox();
        const startX = pieceBoundingBox.x + 50;
        const startY = pieceBoundingBox.y + 50;
        const endX = startX + x;
        const endY = startY + y;
        await page.mouse.move(startX, startY);
        await page.mouse.down();
        await page.mouse.move(endX, endY);
        await page.mouse.up();
      };
  
    test('Checkmate scenario', async () => {
        
      await page.waitForSelector('#play-button.landing-button', { timeout: 10000 });
      await page.click('#play-button.landing-button');

      
      await page.waitForSelector('#Chess.game-option', { timeout: 10000 });
      await page.click('#Chess.game-option');
      const piece1 = await page.$('.p-51');
      await Movement(piece1, 0, -100);
      // await delay(2000);
      const piece2 = await page.$('.p-46');
      await Movement(piece2, 0, 200);
      // await delay(2000);
      const piece3 = await page.$('.p-61');
      await Movement(piece3, 0, -200);
      // await delay(2000);
      const piece4 = await page.$('.p-37');
      await Movement(piece4, 400, 400);
    
  
 
      // await delay(2000);
      const popupSelector = '.popup'; 
      await page.waitForSelector(popupSelector, { timeout: 10000 });
      const popup = await page.$(popupSelector);
      expect(popup).not.toBeNull();
    }, 10000);
  });