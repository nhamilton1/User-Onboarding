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
    const checkboxInput = () => cy.get('input[name="toS"]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')

    it('exist checks', () =>{
        //assertion(s)
        nameInput().should('exist')
        passwordInput().should('exist')
        emailInput().should('exist')
    })
    
    describe('using assertion to check text input', () => {
        it('text input contains name that was provided', () => {
            nameInput()
                .type('Name')
                .should('have.value', 'Name')
        })
    })

    describe('Filling out inputs', () => {
        it('can type inside the name input', () => {
            nameInput()
                .should('have.value','')
                .type('Username123')
                .should('have.value','Username123')
        })
        it('can type inside the password input', () => {
            passwordInput()
            .should('have.value', '')
            .type('password123')
            .should('have.value', 'password123')
        })
        it('can type inside the email input', () => {
            emailInput()
            .should('have.value', '')
            .type('myusername@gmail.com')
            .should('have.value', 'myusername@gmail.com')
        })
    })


    describe('Can check the checkbox', () => {
        it('can check off the ToS box', () => {
            checkboxInput()
                .click()
                .should('be.enabled')
        })
    })

    describe('Can submit a form', () => {
        it('able to submit a form', () => {
            nameInput().type('myusername')
            emailInput().type('username123@gmail.com')
            passwordInput().type('password123')
            checkboxInput().click()
            submitBtn().should('be.enabled')
        })
    })

    describe('Form validation ', () => {
        it('checking form validation', () => {
            nameInput().type('te')
            submitBtn().should('be.disabled')
            emailInput().type('username123gmail.com')
            submitBtn().should('be.disabled')
            passwordInput().type('passw')
            submitBtn().should('be.disabled')
            checkboxInput().click()
            submitBtn().should('be.disabled')
        })

    })
})
