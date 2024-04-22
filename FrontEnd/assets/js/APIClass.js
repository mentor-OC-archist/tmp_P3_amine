import DOMClass from "./DOMClass.js"

export default class APIClass extends DOMClass{
    // Public field declarations
    // publicField = 0;
    // Public Static field declarations
    // static staticField = 0;
    // Private field declarations
    // #privateField = 0;
    // Private Static field declarations
    // static #privateStaticField = 0;
    #works_endpoint = "http://localhost:5678/api/works"
    #categories_endpoint = "http://localhost:5678/api/categories"



    constructor(props) {
        super()
        props && Object.assign(this,props)
        console.log(this)
    }
    


    getWorks(param) {
        
    }
    
    getCategories(param) {

    }
    
    
    
}
// const chose = new DOMClass()