import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test('User Login', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    loginData.username,
    loginData.password
  );

  await loginPage.verifyLoginSuccess();

});