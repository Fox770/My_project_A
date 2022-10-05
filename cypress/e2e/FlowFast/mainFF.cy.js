import * as app from '../../framework_ui/index';

describe('Main Space page', () => {

  beforeEach(() => {
    cy.login(
      app.config.credentials.login,
      app.config.credentials.password
    )
  }),

  it('Add column to Main board', () => { 
    app.page.MainPage.visit()
    app.element.BoardsWrapper.getBoard('Main board') 
    app.element.BoardsWrapper.addButton()
    app.element.BoardsWrapper.addColumn()
    cy.get('h2').contains('Create column')
    
    app.element.BoardsWrapper.getColumnName()
    cy.get('label').contains("Column's name")

    app.element.BoardsWrapper.fillColumnName('Repeat')
    app.element.BoardsWrapper.createBtn()
    cy.wait(2000)
    cy.get('[data-test="column-title"]').contains('Repeat')
   }),

   it('Create Card by "Add" button', () => { 
    app.page.MainPage.visit()
    app.element.AddButton.buttonOnTop('Add')
    app.element.AddButton.createItem('Card')
    app.element.AddButton.addCardTitle('Hollywood card')
    app.element.AddButton.clickBtn('Create')
    cy.wait(3000)
    cy.get('[data-test-title]').contains('Hollywood card')
   }),

   it('Leave comment in Card on Main board', () => { 
    app.page.MainPage.visit()
    app.element.EditCard.getBoardByTitle('Main board') 
    app.element.EditCard.getCardById('#board-card-6169424')
    cy.get('[data-test-title]').contains('Kerwood card')
    app.element.EditCard.leaveComment('Need to do asap')
    app.element.EditCard.sendBtn()
    cy.get('[data-test="card-comment"]').contains('[role="presentation"]', 'Need to do asap') 
    cy.url().should('eq', 'https://fox770test.flowfast.io/space/69428/card/6169424')
   }),

   it('Open and close "Add lanes" popup on Main board', () => { 
    app.page.MainPage.visit()
    app.element.BoardsWrapper.getBoard('Main board') 
    app.element.BoardsWrapper.addButton()
    app.element.BoardsWrapper.chooseLanes('Add lane')
    app.element.BoardsWrapper.clickBtn('Close')
    cy.get('[id="boardsContainer"]').should('not.have.value', 'Lanes')
   }),

   it('Collapse Main board', () => { 
    app.page.MainPage.visit()
    app.element.BoardsWrapper.getBoard('Main board') 
    app.element.BoardsWrapper.collapseBoard()
    app.element.BoardsWrapper.boardHeader('cards')
    cy.get('[id="boardsContainer"]').should('not.have.value', 'To DO')
   })
});

