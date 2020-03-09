/// <reference types="cypress" />

let spy
Cypress.on('window:before:load', win => {
  spy = cy.spy(win.console, 'log')
})

it('scroll to target element', () => {
  cy.visit('http://localhost:3000').should(() => {
    expect(spy).to.be.calledWith('is intersect:', false)
  })
  cy.contains(/target element/i)
    .scrollIntoView()
    .should(() => {
      expect(spy).to.be.calledWith('is intersect:', true)
    })
  cy.scrollTo('bottom').should(() => {
    expect(spy).to.be.calledWith('is intersect:', false)
  })
})
