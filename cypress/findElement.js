/// <reference types="cypress" />

async function finElement (opera)  {
  console.log('========>', opera.findType)
  switch (opera.findType) {
    case 'xpath':
      await cy.xpath(opera.value, { timeout: 10000 }).should('be.visible')
      cy.xpath(opera.value, { timeout: 10000 }).click()
    default:
      break
  }
}

export default finElement
