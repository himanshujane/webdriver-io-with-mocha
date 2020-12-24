import Page from './page'
var path = require('path')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UploadPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFileUpload () { return $('#file-upload') }
    get btnUpload() { return $('#file-submit')}
    get txtFileUploaded() { return $('h3')}
    get txtFileName() { return $('#uploaded-files')}

    /**
     * a method to encapsule automation code to interact with the page
     */
    upload (filePath) {
        const remoteFilePath = browser.uploadFile(path.join(filePath))
        this.inputFileUpload.addValue(remoteFilePath)
    }

}

export default new UploadPage();
