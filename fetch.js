const $grid = document.querySelector(".grid");

fetch("https://hp-api.onrender.com/api/characters")
.then((respeusta)=>respeusta.json())
.then((data)=>{
    console.log(data)
    data.forEach(character => {
        $grid.innerHTML += `<div><h4 class="name">${character.name}</h4>
        <img src="${character.image}" alt = "Imagen de ${character.name}">
        <p class="gender">Gender: ${character.gender}</p>
        <p class="species">Specie: ${character.species}</p>
        <p class="house">House: ${character.house}</p>
        </div>
        `
    });
})

