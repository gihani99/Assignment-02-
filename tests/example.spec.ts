import { test, expect } from '@playwright/test';
import { only } from 'node:test';

const SEARCH_BOX : "//input[@id=\"searchField1\"]" = '//input[@id="searchField1"]';

const DROP : " //input[@id=\"accordionHeader-1\"]" = ' //input[@id="accordionHeader-1"]';



const  Title: "information technology" = "information technology";

const  ISBN: "9781786307491" =  "9781786307491";

test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

 await page.locator(SEARCH_BOX).pressSequentially(ISBN)



});

 test ('search bar', async ({ page }) => {

  await page.goto('https://onlinelibrary.wiley.com/');

 await page.locator(SEARCH_BOX).pressSequentially(Title)


});

const subject = " Women in Statistics and Data Science";

test ('select subject', async ({ page }) => {

  await page.goto('https://onlinelibrary.wiley.com/topic/browse/000113');

  await page.click(`text=Women in Statistics and Data Science`);
 await page.waitForLoadState();

}); 


test ('drop down' , async ({ page }) => {

     await page.goto('https://onlinelibrary.wiley.com/');
   

     await page.click('text="Subjects"');

     await page.click('text="Agriculture, Aquaculture & Food Science"');

 
});


