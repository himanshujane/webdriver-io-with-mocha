import Page from './page'
import utils from '../common/utility'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BrokenImagesPage extends Page {
    /**
     * define selectors using getter methods
     */
    get allImages() { return $$('img') }
    get linkBrokenImage() { return $('=Broken Images') }
    get txtHeading() { return $('h3=Broken Images') }

    /**
     * method to return list of broken images by checking natural width property
     */
    getBrokenImages() {
        let brokenImageNames = []
        let ele
        let i = 0

        for (ele of this.allImages) {

            if (ele.getProperty("naturalWidth") == "0") {
                brokenImageNames[i] = ele.getAttribute("src")
                i++
            }
        }
        return brokenImageNames
    }

    /**
    * method to return list of broken images by making api call
    */
    getBrokenImagesUsingAPI() {
        let brokenImageNames = []
        let ele
        let i = 0
        let response
        for (ele of this.allImages) {

            response = utils.makeGETRequest(ele.getAttribute("src"))
            if (response.status != 200) {
                brokenImageNames[i] = ele.getAttribute("src")
                i++
            }
        }
        return brokenImageNames

    }
}
export default new BrokenImagesPage();