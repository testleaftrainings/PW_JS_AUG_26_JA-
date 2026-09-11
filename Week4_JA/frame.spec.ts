import {test} from "@playwright/test"

test("frame session",async ({page}) => {
await page.goto('') 

//await page.frame({url:'https://www.leafground.com/framebutton.xhtml'})?.locator('Click Me').click()

const frame=page.frame({url:'https://www.leafground.com/framebutton.xhtml'})
await frame?.locator('Click Me').click()

})