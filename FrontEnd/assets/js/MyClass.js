import APIClass from "./APIClass.js"


export default class MyClass extends APIClass{
    // Public field declarations
    // publicField = 0;
    // Public Static field declarations
    // static staticField = 0;
    // Private field declarations
    // #privateField = 0;
    // Private Static field declarations
    // static #privateStaticField = 0;
    
    
    
    constructor(props) {
        super()
        props && Object.assign(this,props)
        //console.log(this)
        
        this.getWorks()
        this.getCategories()
        this.getFilter()
        this.LoginBehavior()
    }
    okk(){
        alert('okkkko')
    }
    
    LoginBehavior(param) {
        
        
        this.renderLogin()
        this.loginPage()

    }
    homepageLoggedBehavior(data){
        console.log(data)
        alert('ok')
    }
    
}
const myApp = new MyClass()