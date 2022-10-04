import * as app from '../../framework_ui/index';

describe('Grid Space page', () => {

  beforeEach(() => {
    cy.login(
      app.config.credentials.login,
      app.config.credentials.password
    )
  }),

   it('Create new card in board', () => { 
    app.page.GridPage.visit()
    app.page.GridPage.getCreateCard('Create card')
    app.page.GridPage.addCardTitle('Project')
    app.page.GridPage.clickCreateBtn()
    cy.get('[style]').contains('Project')
    cy.url().should('eq', 'https://fox770test.flowfast.io/space/69428/grid')
   })
});   