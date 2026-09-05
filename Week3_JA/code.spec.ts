

import {test} from "@playwright/test"

/* test("pratcice session",async ({page}) => {
    

page.getByRole("")
page.getByLabel("")
page.getByText('visible text')
page.getByPlaceholder('for placeholder text')
page.getByAltText('alt="Salesforce login"')
page.getByTitle('title="App Launcher"')
page.getByTestId('')

}) */



/* test("pratcice session",async ({page}) => {
await page.goto('https://www.myntra.com/')  
await page.hover('(//a[text()="Men"])[1]')
await page.waitForTimeout(2000)
await page.locator('(//a[text()="Casual Shirts"])[1]').click()
}) */


/* test("pratcice session",async ({page}) => {
await page.goto('https://www.google.com/')  
await page.locator('.gLFyf').first().fill('Selenium')
await page.waitForTimeout(2000)
await page.locator('.gLFyf').first().type('playwright')

}) */
/* 
test("pratcice session",async ({page}) => {
await page.goto('https://www.telerik.com/contact')  
let dd=page.locator('[id="Country-1"]')
await dd.scrollIntoViewIfNeeded()
await page.waitForTimeout(2000)
await dd.selectOption({label:"American Samoa"})

}) */



/* test("pratcice session",async ({page}) => {
await page.goto('https://www.abhibus.com/')  
await page.locator('[placeholder="Leaving From"]').pressSequentially("che",{delay:1000})

}) */


test("pratcice session",async ({page}) => {
await page.goto('https://testautomationpractice.blogspot.com/')  

let multidd=page.locator('#colors')
await page.keyboard.press('PageDown')
await multidd.selectOption([{label:"Red"},{value:"blue"},{index:2}])
await page.waitForTimeout(2000)
})



