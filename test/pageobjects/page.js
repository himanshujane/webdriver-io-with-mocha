/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens the page
    * @param url URL of the page
    */
    open (url) {
        return browser.url(url)
    }
}
