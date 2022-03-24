/* 文件生成器 */
const path = require('path')
const fs = require('fs')
const files = fs.readdirSync(path.resolve(__dirname,'./channels'))


const base = (fileName) => `/// <reference types="cypress" />
// @ts-ignore
import channels from "../channels/${fileName}";
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
      const element = await finElement(opera)
      await operation(element, opera)
    }
  })
})`

files.forEach((file) => {
  console.log(file)
  fs.writeFile(path.resolve(__dirname, `./integration/${file}`.replace('.js', '.spec.js')), base(file), (e) => {
    e && console.error(e)
  })
})
