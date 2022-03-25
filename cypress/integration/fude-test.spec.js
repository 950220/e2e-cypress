/// <reference types="cypress" />
// @ts-ignore
import channels from "../channels/fude-test.js";
import login from '../setLogin'
import operation from '../operation'
import finElement from "../findElement";

const {messages, steps} = channels
describe(messages.name, async () => {

  beforeEach(async () => {
    await login(messages.domain, messages.cookieType)
    cy.visit(messages.url)
  })

  it(messages.name, async () => {
    for (const opera of steps) {
      switch(opera.findType) {
        case 'xpath':
          await cy.xpath(opera.value, {timeout: 10000}).should('be.visible')
          break
        default:
          break
      }
      switch(opera.operation) {
        case 'click':
          await cy.xpath(opera.value).click()
        default:
          break
      }
    }
  })
})