import MyClass from "./assets/js/MyClass.js"
const myApp = new MyClass()

let filters = document.querySelectorAll(".filterBtn") 
console.log(filters);  

for (let filter of filters) {
    filter.addEventListener("click", function() {
    
        let tag = this.textContent;
        console.log(this.textContent);
    })
}






  
    