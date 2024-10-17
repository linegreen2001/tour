describe('login',()=>{
    it('login_mail không hợp lệ',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.get('a[href="/sign-in"]').click()
    cy.url('https://tour-client-zeta.vercel.app/sign-in')
    cy.get('#identifier-field').type('helo34@gmail.com')
    cy.get('[data-localization-key="formButtonPrimary"]').click()
    cy.contains("Couldn't find your account.")
})
it('login_mail hợp lệ',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/', { failOnStatusCode: false });
    cy.get('a[href="/sign-in"]').click()
    cy.url('https://tour-client-zeta.vercel.app/sign-in')
    cy.get('#identifier-field').type('7.thuydung.2001@gmail.com')
    cy.get('[data-localization-key="formButtonPrimary"]').click()
    cy.url('https://tour-client-zeta.vercel.app/sign-in/factor-one')
})
it('login bằng tk google',()=>{
    cy.visit('https://tour-client-zeta.vercel.app/sign-in/factor-one', { failOnStatusCode: false });
    cy.get('[alt="Sign in with Google"]').click()
    cy.wait(5000)
    cy.origin('https://accounts.google.com', () => {
        cy.url().should('include', 'accounts.google.com/o/oauth2/auth');
      cy.get('[jsname="bQIQze"]').should('have.text','7.thuydung.2001@gmail.com')
    .click()
})
})})