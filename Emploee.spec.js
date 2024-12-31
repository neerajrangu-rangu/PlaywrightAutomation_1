const{test, expect} =require('@playwright/test');

const credentilas=require("./credentials");

test ("PF Amount Checking",async({page}) =>{


  //Navigating into Application Using URL
  await page.goto('https://www.epfindia.gov.in/site_en/index.php');

  //Click on Services
  await page.getByRole('link', { name: 'Services Services' }).click();

  //Click On Employee Link
  await page.getByRole('link', { name: 'For Employees' }).click();
 
  //Click On Member PassBook
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Member Passbook' }).click();

  //redirected to another window
  const page1 = await page1Promise;

  //Eneter UAN number
  await page1.getByPlaceholder('UAN Number').click();
  await page1.getByPlaceholder('UAN Number').fill(credentilas.UAN);

  //Enter Password
  await page1.getByPlaceholder('Password').click();
  await page1.getByPlaceholder('Password').fill(credentilas.password);

  //Enter Captcha Manually
  await page1.waitForTimeout(10000);


 //Click On Login
  await page1.locator('#login').click();


  //After Login Enter OTP Whiich was send to your mobile  and Verify it

 

})