describe('Checkmate test', () => {
  it('should throw up a popup after checkmate', () => {
    cy.visit('http://localhost:3000');

    // Ensure the play button is clicked to start the game
    cy.get('#play-button').should('exist').click();

    // Select the Chess game
    cy.get('#Chess').should('exist').click();

    cy.get('.piece.p-51').trigger('mousedown', 50, 50  );

    cy.get('.piece.p-51').trigger('mousemove',  50, -50 ,{force: true});
    
    cy.get('.piece.p-51').trigger('mouseup',  50, -50,{force: true});

    cy.get('.piece.p-46').trigger('mousedown', 50, 50  );

    cy.get('.piece.p-46').trigger('mousemove',  50, 150 ,{force: true});
    
    cy.get('.piece.p-46').trigger('mouseup',  50, 150,{force: true});

    cy.get('.piece.p-61').trigger('mousedown', 50, 50  );

    cy.get('.piece.p-61').trigger('mousemove',  50, -150 ,{force: true});
    
    cy.get('.piece.p-61').trigger('mouseup',  50, -150,{force: true});

    cy.get('.piece.bq').trigger('mousedown', 50, 50  );

    cy.get('.piece.bq').trigger('mousemove',  450, 450 ,{force: true});
    
    cy.get('.piece.bq').trigger('mouseup',  450, 450,{force: true});
    

    

    
    
  });

});

