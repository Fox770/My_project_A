/**Page Object - Sign in into FlowFast.io*/

export default {
  visit() {
    cy.visit('https://fox770test.flowfast.io/login')
  },
  fillEmail(email) {
    const field = cy.get('#email_username')
    field.clear()
    field.type(email)
    return this
  },
  openDropdown() {
    cy.get('.MuiButtonBase-root > .MuiTypography-root').click()
  },
  fillPassword(password) {
    const field = cy.get('#password')
    field.clear()
    field.type(password)
    return this
  },
  enterButton() {
    cy.get('form > .MuiButton-root > .MuiButton-label').contains('Enter using password').click()
  },

  enterWithEmptyEmail() {
    cy.get('form > .MuiButton-root').contains('Enter').click()
  },
  getError() {
    return cy.get('#notistack-snackbar')
  }
}