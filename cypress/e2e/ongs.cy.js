it('Deve realizar cadastro com sucesso', () => {
    cy.visit('https://bethehero-frontend.netlify.app/');
    cy.get('a.back-link').click();
    cy.get('[placeholder="Nome da ONG"]').type('Dogs amados');
    cy.get('[placeholder="E-mail"]').type('dogsamados@gmail.com');
    cy.get('[placeholder="Whatsapp"]').type(992945880);
    cy.get('[placeholder="Cidade"]').type('Natal');
    cy.get('[placeholder="UF"]').type('MG');


    cy.intercept('POST', '/ongs', {
        statusCode: 200
    }).as('postOngs')// sem @ para criar o elias

    cy.get('button.button').click();
    cy.wait('@postOngs')// @ para invocar o elias
});



