/// <reference types="cypress" />

describe('Lleva los campos para una nueva cita y la edita', () => {
    it('campos nueva cita', () => {
      
        cy.visit('/index.html')  
        
        cy.get('[data-cy="mascota-input"]')
            .type('Hook');

        cy.get('[data-cy="propietaro-input"]')
            .type('Taiel');

        cy.get('[data-cy="telefono-input"]')
            .type('1085382355');

        cy.get('[data-cy="fecha-input"]')
            .type('2021-12-03');

        cy.get('[data-cy="hora-input"]')
            .type('20:30');

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Cancer');

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas')
          
        // Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente')
   
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')
            
    });

    it('Edita la cita', () => {

        cy.get('[data-cy="btn-editar"]').click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Nuevo Hook')

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente')
   
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')

    })
});