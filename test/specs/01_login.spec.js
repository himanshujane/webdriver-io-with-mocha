import loginPage from '../pageObjects/login.page'
import securePage from '../pageObjects/secure.page'
import data from '../dataProvider/data'


describe('My Login application', () => {
    it('should login with valid credentials', () => {
 
        //Based on specified environment loginURL is passed automatically
        loginPage.open(data.getURL().loginURL)

        loginPage.login(data.username, data.password)
        expect(securePage.flashAlert).toBeExisting()
        expect(securePage.flashAlert).toHaveTextContaining('You logged into a secure area!')
    })
})