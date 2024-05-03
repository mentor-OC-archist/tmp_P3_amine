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
    fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(this.renderWorksCards)
    .catch(error => console.error('Erreur lors de la récupération des données:', error));
        
    }
    
    getCategories(param) {
        fetch('http://localhost:5678/api/categories')
        .then(response => response.json())
        .then(this.renderFilterGallery)
        .catch(error => console.log(error));
    
    }
    
    getFilter(param){

    }
}

let filterButtons = document.querySelectorAll(".filterBtn");
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        this.filterWorksByCategory();
        console.log("ok");
    });
});

let filterWorksByCategory = (category) => {
    const allWorks = document.querySelectorAll(".gallery figure");
    allWorks.forEach(work => {
        if (category === "Tous" || work.dataset.category === category) {
            work.style.display = 'block';
        } else {
            work.style.display = 'none';
        }
    });}
