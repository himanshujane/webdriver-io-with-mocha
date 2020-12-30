import uploadPage from '../pageObjects/upload.page'
import data from '../dataProvider/data'

describe('Test File Upload', () => {
    it('should able to upload file', () => {
 
        //Based on specified environment URL is passed automatically
        uploadPage.open(data.getURL().uploadURL)

        uploadPage.upload(data.testFile)
        uploadPage.btnUpload.click()
        expect(uploadPage.txtFileUploaded).toHaveText('File Uploaded!')
        expect(uploadPage.txtFileName).toHaveText('image.jpg')
    })
})