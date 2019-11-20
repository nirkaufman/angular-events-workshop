import { getGreeting } from '../support/app.po';

describe('events-client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to events-client!');
  });
});
