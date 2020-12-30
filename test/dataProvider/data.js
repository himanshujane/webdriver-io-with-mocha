import base from '../../configs/baseShared.conf'

class testdata {

    //URLs
    get username() { return 'tomsmith' }
    get password() { return 'SuperSecretPassword!' }

    //File Paths
    get testFile() { return 'test/dataProvider/testfiles/image.jpg' }

    //---------------------------------------------------------------------------
    //Variable Env URLs
    getURL() {
        switch (base.config.environment) {
            case 'test':
                return {
                    baseURL: 'http://the-internet.herokuapp.com',
                    loginURL: 'http://the-internet.herokuapp.com/login',
                    uploadURL: 'http://the-internet.herokuapp.com/upload'

                }
            case 'pre-prod':
                return {
                    loginURL: 'http://the-internet.herokuapp.com/login',

                }
            default:
                console.log("Incorrect Enviornment Passed")
        }
    }
}
export default new testdata();