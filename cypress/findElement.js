/// <reference types="cypress" />

async function finElement (opera)  {
  console.log('========>', opera.findType)
  switch (opera.findType) {
    case 'xpath':
      return cy.xpath(opera.value, { timeout: 10000 }).should('be.visible', true)
    case 'iframe':
      return null
    default:
      return null
  }
}

export default finElement
