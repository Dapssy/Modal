import { faker } from '@faker-js/faker' ;
import * as locators  from './pageobjects/locators.js' ;
const  firstName  = faker.name.firstName()
console.log()



describe('Modal HR', function()  {
    beforeEach(() => {   
        cy.visit(locators.URL);
        cy.viewport(1348, 969);
    })


    it("Verify Employee Login functionality and access to HR Modal", () => {
        cy.get("form > div:nth-of-type(1) input").click();
        cy.get("form > div:nth-of-type(1) input").type("demo+LJ-01324@mercans.com");
        cy.get("form > div:nth-of-type(2) input").click();
        cy.get("form > div:nth-of-type(2) input").type("Employee1!");
        cy.get("div.launchpad__left-side button > span").click();
    
  });
  
  
    it("Verify Employee can apply for leave via the Modal", () => {
        cy.get("form > div:nth-of-type(1) input").click();
        cy.get("form > div:nth-of-type(1) input").type("demo+LJ-01324@mercans.com");
        cy.get("form > div:nth-of-type(2) input").click();
        cy.get("form > div:nth-of-type(2) input").type("Employee1!");
        cy.get("div.launchpad__left-side button > span").click();
        cy.get("a:nth-of-type(2) > span.lp-dashboard-card__description").click();
        cy.get("div.my-leaves__mobile-new svg").click();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").dblclick();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").click();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").click();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").dblclick();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").click();
        cy.get("#2022-11-22").click();
        cy.get("#2022-11-24").click();
        cy.get("button.button-action--save > span").click();
        cy.get("#confirmAction > span").click();
        cy.wait(900)
      
        });
  
    it("Verify correct error message displays for overlapping date", () => {
  
        cy.get("form > div:nth-of-type(1) input").click();
        cy.get("form > div:nth-of-type(1) input").type("demo+LJ-01324@mercans.com");
        cy.get("form > div:nth-of-type(2) input").click();
        cy.get("form > div:nth-of-type(2) input").type("Employee1!");
        cy.get("div.launchpad__left-side button > span").click();
        cy.get("a:nth-of-type(2) > span.lp-dashboard-card__description").click();
        cy.get("div.my-leaves__mobile-new svg").click();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").dblclick();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").click();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").click();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").dblclick();
        cy.get("div.calendar__header-nav > div:nth-of-type(1) > div").click();
        cy.get("#2022-11-22").click();
        cy.get("#2022-11-24").click();
        cy.get("button.button-action--save > span").click();
        cy.get("button.button-action--save > span").click();
        cy.contains('Absence period overlaps with another leave of the same type') 
     
    });
  
  
  
    it("Verify Employee can withdraw leave application in HR Modal", () => {
     
        cy.get("form > div:nth-of-type(1) input").click();
        cy.get("form > div:nth-of-type(1) input").type("demo+LJ-01324@mercans.com");
        cy.get("form > div:nth-of-type(2) input").click();
        cy.get("form > div:nth-of-type(2) input").type("Employee1!");
        cy.get("div.launchpad__left-side button > span").click();
        cy.get("a:nth-of-type(2) > span.lp-dashboard-card__description").click();
        cy.get('.tile-wrapper').click();
        cy.get('.button-action--delete').click()
        cy.get('.fcr > .button-action--delete').click()
        
    
  
    
      });
   
    
  
    
  
  
  })