/**
* This contains all methods and functionality
* that is shared across framework
*/
class Utility {
    /**
    * Makes a GET request and returns response object
    * @param url API endpoint
    */
    makeGETRequest(url) {

        let response
        try {
            browser.pause(200)
            response = browser.call(() => fetch(url).then((res) => res))
            console.log("GET Response Status is::" + response.status + "::")
            return response
        } catch (err) {
            throw err
        }
    }
}
export default new Utility();