import {browser, by, WebElement, WebElementPromise} from 'protractor';

export class AppPage {
  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getAddButton(): Promise<WebElement> {
    return browser.findElement(by.id('add_button')) as any;
  }

  getSwitchButton(): Promise<WebElement> {
    return browser.findElement(by.id('switch_button')) as any;
  }

  getDropListItems(): Promise<WebElement[]> {
    return browser.findElements(by.className('sam-drop-list-item')) as Promise<WebElement[]>;
  }

  getItemTexts(): Promise<string[]> {
    return this.getDropListItems().then((itemWrappers) => {
      return Promise.all(
        itemWrappers.map((itemWrapper) => {
          return itemWrapper.getText();
        })
      );
    });
  }
}
