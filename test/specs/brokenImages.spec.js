import brokenImagesPage from '../pageObjects/brokenImages.page'
import data from '../testData/data'

describe('Test Broken Images', () => {
    it('should able find broken images', () => {
 
        //Based on specified environment URL is passed automatically
        brokenImagesPage.open(data.getURL().brokenImages)

        let listOfbrokenImages = brokenImagesPage.getBrokenImages()

        console.log("Broken Images ARE: ", listOfbrokenImages)
        expect(listOfbrokenImages.length).toEqual(2)   
    })
})