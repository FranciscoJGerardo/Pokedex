let pokeContainer = document.querySelector(".poke-Container");
let nextPoke = document.querySelector(".myButtton");


function getPoke(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).
    then(response => response.json()).
    then(pokeInfo => {console.log(pokeInfo)
    createCard(pokeInfo)}
    );
}

function createCard(pokeInfo){

    var pokeCard = document.createElement('div');
    pokeCard.classList.add("poke-Card");
    
    var imgContainer = document.createElement('div');
    imgContainer.classList.add("img-Container");
    
    var pokeImg = document.createElement('img');
    pokeImg.classList.add("poke-Img");
    pokeImg.src = pokeInfo.sprites.front_default;

    var pokeStats = document.createElement('div');
    pokeStats.classList.add("poke-Stats");


    var pokeName = document.createElement('p');
    pokeName.classList.add('pokename');
    pokeName.textContent ="Pokemon: " + pokeInfo.species.name;
    pokeStats.appendChild(pokeName);

    var pokeId = document.createElement('p');
    pokeId.classList.add('pokeid');
    pokeId.textContent = "ID:0" + pokeInfo.id;
    pokeStats.appendChild(pokeId); 

    imgContainer.appendChild(pokeImg);
    imgContainer.appendChild(pokeStats);
    pokeCard.appendChild(imgContainer); 

    //CONTENEDOR GENERAL 
    pokeContainer.appendChild(pokeCard);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
function reloadPoke(){
    window.location.reload();
}


getPoke(getRandomInt(900));