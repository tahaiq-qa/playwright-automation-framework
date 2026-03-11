import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  username = this.page.locator('#user-name');
  password = this.page.locator('#password');
  loginButton = this.page.locator('#login-button');
  inventoryPageTitle = this.page.locator('.title');

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.inventoryPageTitle).toHaveText('Products');
  }

}