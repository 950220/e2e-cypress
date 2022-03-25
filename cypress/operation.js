/// <reference types="cypress" />

/* 做操作，例如赋值，点击等 */
async function operation(opera) {
  switch (opera.operation) {
    case 'click':
      if (opera.position) {
        await cy.xpath(opera.value).click({position: opera.position})
      } else {
        await cy.xpath(opera).click()
      }
      break
    case 'input':
      await cy.xpath(opera.value).type(opera.insertValue+'')
      break
    case 'scroll':
      await cy.xpath(opera.value).scrollIntoViewIfNeeded()
      break
    case 'changePage':
      // TODO：判断页面标题合法性
      break
    case 'finish':
      console.log('最后一步，完成😁😁')
      // await page.close();
      break
  }
  return opera
}

export default operation
