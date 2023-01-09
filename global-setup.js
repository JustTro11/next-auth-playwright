// eslint-disable-next-line import/no-extraneous-dependencies
const { chromium } = require('@playwright/test');
import path from 'node:path';

import prisma from './prisma/prisma';

module.exports = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Sign in with GitHub' }).click();
  await page
    .getByLabel('Username or email address')
    .fill('jenting8173@gmail.com');
  await page.getByLabel('Password').fill('beP1340e*Y');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();


  // const storagePath = path.resolve(__dirname, 'storageState.json')

  // const date = new Date()

  // // This is a dummy random session token
  // const sessionToken = 'e5393ae2-c750-4b6a-a243-666377f8bbec'

  // // 1. We make sure a test user exists in our local database, `upsert` will make sure we only have this user in our database
  // await prisma.user.upsert({
  //   where: {
  //     email: 'e2e@e2e.com'
  //   },
  //   create: {
  //     name: 'e2e',
  //     email: 'e2e@e2e.com',
  //     // 2. We need a session which is used by NextAuth and represents this `e2e@e2e.com` user login session
  //     sessions: {
  //       create: {
  //         // 2.1. Here we are just making sure the expiration is for a future date, to avoid NextAuth to invalidate our session during the tests
  //         expires: new Date(date.getFullYear(), date.getMonth() + 1, 0),
  //         sessionToken
  //       }
  //     },
  //     // 3. Here we are binding our user with a "Github fake account", this is needed since we are using OAuth, we don't have to worry about this data since we are gonna intercept and mock the direct Github API calls
  //     accounts: {
  //       create: {
  //         type: 'oauth',
  //         provider: 'github',
  //         providerAccountId: '2222222',
  //         access_token: 'ggg_zZl1pWIvKkf3UDynZ09zLvuyZsm1yC0YoRPt',
  //         token_type: 'bearer',
  //         scope: 'read:org,read:user,repo,user:email'
  //       }
  //     }
  //   },
  //   update: {},
  // })

  // // 4. Finally we need to set up the authentication cookie into our test browser state
  // // This will guarantee you will have an authenticated user once you boot up your tests
  // const browser = await chromium.launch({
  //   headless: false,
  // });
  // const context = await browser.newContext({ storageState: storagePath });
  // // 4.1. This cookie is what `NextAuth` will look after to validate if our user is authenticated
  // // Please note that the `value` of the cookie **must be the same** as the `sessionToken` we added in `step 2.`
  // await context.addCookies([
  //   {
  //     name: 'next-auth.session-token',
  //     value: sessionToken,
  //     domain: 'localhost',
  //     path: '/',
  //     httpOnly: true,
  //     sameSite: 'Lax',
  //     expires: 1661406204
  //   }
  // ])
  // await context.storageState({ path: storagePath });
  // await browser.close();
};
