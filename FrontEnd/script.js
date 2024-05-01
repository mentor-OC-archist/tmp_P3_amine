// import MyClass from "../assets/js/MyClass.js"



console.log("ok");

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
      data.forEach((item,i) => {
          document.querySelector(".gallery").innerHTML += `<figure>
          <img src="${item.imageUrl}" alt="Abajour Tahina">
          <figcaption>${item.title}</figcaption>
        </figure>`        
      });}
        )
  .catch(error => console.error('Erreur lors de la récupération des données:', error));


  fetch('http://localhost:5678/api/categories')
  
    .then(response => response.json())
  
    .then(data => {
          console.log(data);
          data.forEach((item, index) => {
          // CODE ??
    });}
        )
    .catch(error => console.log(error));

    