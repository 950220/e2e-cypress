/// <reference types="cypress" />
const cookies = {
  'spec': {
    value: 'f34962dd4df640838c05f57170d1144c9zCRN6',
  },
  'common': {
    value: 'f34962dd4df640838c05f57170d1144c9zCRN6',
  }
}

export default async function login(domain, cookieType) {
  console.log(cookieType)
  await cy.setCookie('wapToken', cookies[cookieType]?.value, {
    domain,
    path: '/'
  })
}
