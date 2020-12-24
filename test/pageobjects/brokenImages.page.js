import Page from './page'
var path = require('path')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UploadPage extends Page {
    /**
     * define selectors using getter methods
     */
    get allImages() { return $$('img') }

    /**
     * a method to encapsule automation code to interact with the page
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
}

export default new UploadPage();
