const puppeteer = require('puppeteer');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
describe('Chess game', () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch({ headless: false });
      page = await browser.newPage();
      await page.setViewport({ width: 1600, height: 1600 }); //Change for different view size
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

  test('Castling scenario', async () => {
    await page.waitForSelector('#play-button.go-back', { timeout: 10000 });
      await page.click('#play-button.go-back');

      await page.waitForSelector('#play-button.landing-button', { timeout: 10000 });
      await page.click('#play-button.landing-button');

    
    await page.waitForSelector('#Chess.game-option', { timeout: 10000 });
    await page.click('#Chess.game-option');
    //white knight moves
    const piece1 = await page.$('.p-60');
    await Movement(piece1, 100, -200);
    
    //await delay(1000);
    
    //black pawn moves
    const piece2 = await page.$('.p-46');
    await Movement(piece2, 0, 100);

    // await delay(10000);

    //white pawn moves
    const piece3 = await page.$('.p-61');
    await Movement(piece3, 0, -100);

    // await delay(10000);

    //black pawn moves
    const piece4 = await page.$('.p-56');
    await Movement(piece4, 0, 100);

    //white pawn moves
    const piece5 = await page.$('.p-50');
    await Movement(piece5, 100, -100);
  
    //black pawn moves
    const piece6 = await page.$('.p-66');
    await Movement(piece6, 0, 100);

    //white pawn moves
    const piece7 = await page.$('.p-40');
    await Movement(piece7, 200, 0);

    //await delay(10000);
    

    const className1 = await page.evaluate(piece => piece.className, await page.$('.p-60'));
    expect(className1).toContain('wk');
    const className2 = await page.evaluate(piece => piece.className, await page.$('.p-50'));
    expect(className2).toContain('wr');
    
  }, 10000);
});

  