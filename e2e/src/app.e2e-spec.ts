import {AppPage} from './app.po';
import {browser, by, logging, WebElement} from 'protractor';
import {ILocation, ISize} from 'selenium-webdriver';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    return page.navigateTo();
  });

  it('displays the first list', () => {
    page.getItemTexts().then((texts: string[]) => {
      expect(texts.length).toBe(9);
      for (let i = 0; i < texts.length; i++) {
        expect(texts[i]).toBe('Item ' + (i + 1) + '; Index ' + i);
      }
    });
  });

  it('adds an element', () => {
    page.getAddButton().then((button) => {
      return button.click();
    }).then(() => {
      return page.getItemTexts();
    }).then((texts) => {
      expect(texts.length = 10);
      for (let i = 0; i < texts.length; i++) {
        expect(texts[i]).toBe('Item ' + (i + 1) + '; Index ' + i);
      }
    });
  });

  it('switches the two lists', () => {
    page.getSwitchButton().then((button) => {
      return button.click();
    }).then(() => {
      return page.getItemTexts();
    }).then((texts) => {
      expect(texts.length).toBe(11);
      for (let i = 0; i < texts.length; i++) {
        expect(texts[i]).toBe('Item ' + (i + 1) * 2 + '; Index ' + i);
      }
    });
  });

  // TODO: add test for drag&drop movement
  // it('moves an element by Drag&Drop', () => {
  //   let itemWrapperList: WebElement[];
  //   let targetLocation: ILocation;
  //   page.getDropListItems().then((itemWrappers: WebElement[]) => {
  //     itemWrapperList = itemWrappers;
  //     expect(itemWrappers.length).toBe(9);
  //     return itemWrapperList[6].getLocation();
  //   }).then((size: ILocation) => {
  //     targetLocation = size;
  //     return itemWrapperList[1].findElement(by.className('sam-drag-container'));
  //   }).then((source: WebElement) => {
  //     console.log(targetLocation);
  //     return browser.actions().dragAndDrop(source, {
  //       x: Math.floor(targetLocation.x) + 20,
  //       y: Math.floor(targetLocation.y) + 20
  //     }).perform();
  //   }).then(() => {
  //     // page.getItemTexts().then((txts) => console.log(txts));
  //     browser.sleep(5000);
  //   });
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
