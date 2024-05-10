export default class DOMClass {
    // Public field declarations
    // publicField = 0;
    // Public Static field declarations
    // static staticField = 0;
    // Private field declarations
    // #privateField = 0;
    // Private Static field declarations
    // static #privateStaticField = 0;
    works = []
    categories = []



    constructor(props) {
        props && Object.assign(this, props)
        //console.log(this)
    }





    //renderWorksCards(works){
    renderWorksCards = (data) => {
        this.works = data
        data.forEach((item, i) => {
        document.querySelector(".gallery").innerHTML +=
                `<figure data-category = "${item.category.name}">
                <img src="${item.imageUrl}" alt="Abajour Tahina">
                <figcaption>${item.title}</figcaption>
                </figure>`
        });
    }

    // renderFilterGallery(categories){
    renderFilterGallery = (data) => {
        //console.log(this.works)
        this.categories = data
        this.works = data
        data.unshift({ name: "Tous" });
        data.forEach((item, i) => {
            document.querySelector(".filterBtn").innerHTML +=
                `<button>${item.name}</button>`
        });
    };

    filterClickEvent = () => {

        let filters = document.querySelectorAll(".filterBtn")


        for (let filter of filters) {
            filter.addEventListener("click", function () {

                let tag = this.textContent;
                console.log(this.textContent);
            })
        }

    }
}