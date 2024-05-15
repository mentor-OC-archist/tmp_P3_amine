import DOMClass from "./DOMClass.js"

export default class APIClass extends DOMClass {
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
        props && Object.assign(this, props)
        //console.log(this)
    }


    getWorks(param) {
        fetch(this.#works_endpoint)
            .then(response => response.json())
            .then(this.renderWorksCards)
            .catch(error => console.log(error));
    }

    getCategories(param) {
        fetch(this.#categories_endpoint)
            .then(response => response.json())
            .then(this.renderFilterGallery)
            .catch(error => console.log(error));

    }
    getLogged = (e) => {
        e.preventDefault()
        const formData = new FormData(loginForm)
        // console.log(loginForm)
        // console.log(loginForm.email)
        // console.log(loginForm.email.value)
        // console.log(loginForm.password_.value)
        const autre = {
            email: loginForm.email.value
            , password: loginForm.password.value
        }
        // alert(autre)

        
        
        fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json"
            }
            , body: JSON.stringify(autre)
        })
            .then(r => r.json())
            .then(this.homepageLoggedBehavior)
            .catch(error => console.log(error));
    }

    getFilter(param) {
        Promise.all([
            fetch(this.#works_endpoint),
            fetch(this.#categories_endpoint)
        ])
        .then(([worksRes, categoriesRes]) => Promise.all([worksRes.json(), categoriesRes.json()]))
        .then(([works, categories]) => {
            this.filterClickEvent()
        })
        .catch(error => console.log(error));
    }



                
}
