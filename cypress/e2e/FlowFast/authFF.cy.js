import * as app from '../../framework_ui/index';

describe('Authorization in FlowFast.io', () => {
  it('Success Login into FlowFast.io', () => {
    app.page.SignIn.visit()
    app.page.SignIn
      .fillEmail(app.config.credentials.login)

    app.page.SignIn.openDropdown()

    app.page.SignIn
      .fillPassword(app.config.credentials.password)

    app.page.SignIn.enterButton()

    cy.url().should('eq', 'https://fox770test.flowfast.io/space/69428')
  })
  it('Could not login with empty email', () => {
    app.page.SignIn.visit()
    app.page.SignIn.enterWithEmptyEmail()

    app.page.SignIn
      .getError()
      .contains("Can't get user for provided email. Please, make sure that your email is valid for the company.")

    cy.url().should(($url) => {
      expect($url).to.not.equal('https://fox770test.flowfast.io/space/69428')
    })
  })
  it('Could not login with empty email & password', () => {
    app.page.SignIn.visit()

    app.page.SignIn.openDropdown()

    app.page.SignIn.enterButton()

    app.page.SignIn
      .getError()
      .contains("Can't get user for provided email. Please, make sure that your email is valid for the company.")

    cy.url().should(($url) => {
      expect($url).to.not.equal('https://fox770test.flowfast.io/space/69428')
    })
  })
});