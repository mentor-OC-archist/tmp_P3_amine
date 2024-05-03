export default class DOMClass{
    // Public field declarations
    // publicField = 0;
    // Public Static field declarations
    // static staticField = 0;
    // Private field declarations
    // #privateField = 0;
    // Private Static field declarations
    // static #privateStaticField = 0;



    constructor(props) {
        props && Object.assign(this, props)
        console.log(this)
    }



    
    
    //renderWorksCards(works){
        renderWorksCards = (works) => {
            works.forEach((item, i) => {
                document.querySelector(".gallery").innerHTML +=
                `<figure>
                <img src="${item.imageUrl}" alt="Abajour Tahina">
                <figcaption>${item.title}</figcaption>
                </figure>`
            });
        }
        
        // renderFilterGallery(categories){
            renderFilterGallery = (categories) => {
                categories.unshift({ name: "Tous" });
                categories.forEach((item, i) => {
                    document.querySelector(".filterBtn").innerHTML +=
                    `<button>${item.name}</button>`
                });
            }

            filterWorksByCategory = (category) => {
                const allWorks = document.querySelectorAll(".gallery");
                allWorks.forEach(work => {
                    if (category === "Tous" || work.dataset.category === category) {
                        work.style.display = 'block';
                    } else {
                        work.style.display = 'none';
                    }
                });
                
            }
            
            
            
        }
        


    
