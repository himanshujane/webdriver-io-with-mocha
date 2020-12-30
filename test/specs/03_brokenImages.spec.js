import brokenImagesPage from '../pageObjects/brokenImages.page'
import data from '../dataProvider/data'

describe('Test Broken Images', () => {

    before('Launch URL', () => {
        //Based on specified environment URL is passed automatically
        brokenImagesPage.open(data.getURL().baseURL)
        brokenImagesPage.linkBrokenImage.click()
        expect(brokenImagesPage.txtHeading).toBeDisplayed()
    })


    it('should able find broken images', () => {

        let listOfbrokenImages = brokenImagesPage.getBrokenImages()

        console.log("Broken Images ARE: ", listOfbrokenImages)
        expect(listOfbrokenImages.length).toEqual(2)
    })

    it('should able find broken images using API call', () => {

        let listOfbrokenImagesUsingAPI = brokenImagesPage.getBrokenImagesUsingAPI()

        console.log("Broken Images ARE: ", listOfbrokenImagesUsingAPI)
        expect(listOfbrokenImagesUsingAPI.length).toEqual(2)
    })
})