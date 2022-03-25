/* 文件生成器 */
const path = require('path')
const fs = require('fs')
const files = fs.readdirSync(path.resolve(__dirname,'./channels'))


const base = (fileName) => `/// <reference types="cypress" />
// @ts-ignore
import channels from "../channels/${fileName}";
import login from '../setLogin'

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
          break
        case 'input':
          await cy.xpath(opera.value).type(opera.insertValue+'')
          break
        default:
          break
      }
    }
  })
})`

files.forEach((file) => {
  console.log(file)
  fs.writeFile(path.resolve(__dirname, `./integration/${file}`.replace('.js', '.spec.js')), base(file), (e) => {
    e && console.error(e)
  })
})
