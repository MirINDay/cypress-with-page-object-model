class ContactPage {

 fillInCredentials(fullname, email, company) {
    cy.get(':nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type(fullname)
    cy.get(':nth-child(3) > .wpcf7-form-control-wrap > .wpcf7-form-control').type(email)
    cy.get(':nth-child(4) > .wpcf7-form-control-wrap > .wpcf7-form-control').type(company)
 }
}

export default new ContactPage();