describe('Form', () => {

    //schedule something to happen before each test
    // before each test we nav to the site its hosted on
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    //use the 'it' keyword for tests

    // helpers to avoid tons of reps
    const nameInput = () => cy.get('input[name="username"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const emailInput = () => cy.get('input[name="email"]')

    it('exist checks', () =>{
        //assertion(s)
        nameInput().should('exist')
        passwordInput().should('exist')
        emailInput().should('exist')
    })
    
})