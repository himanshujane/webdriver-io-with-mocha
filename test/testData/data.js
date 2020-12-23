import base from '../../configs/baseShared.conf'

class testdata {

    //URLs
    get username() { return 'tomsmith' }
    get password() { return 'SuperSecretPassword!' }

    //File Paths
    get testFiles() {
        return {
            image: 'test/testdata/testfiles/image.jpg',
        }
    }

    //---------------------------------------------------------------------------
    //Variable Env URLs
    getURL() {
        switch (base.config.environment) {
            case 'test':
                return {
                    loginURL: 'http://the-internet.herokuapp.com/login',
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