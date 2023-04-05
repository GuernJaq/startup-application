function makeUrl(){
    const randNum = Math.floor(Math.random() * (906))
    baseUrl = `https://pokeapi.co/api/v2/pokemon/${randNum}`
    return baseUrl
}

function callService(url, displayCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayCallback(data);
      });
  }

function getPokemon(data) {
    const nameEl = document.querySelector('#pokeName')
    nameEl.innerHTML = ''
    pokeName = data.species.name
    nameEl.textContent = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)

    const containerEl = document.querySelector("#pokePic");
    containerEl.innerHTML = ''
  
    const imgUrl = data.sprites.front_default;
    const imgEl = document.createElement("img");
    imgEl.classList.add('picture')
    imgEl.setAttribute("src", imgUrl);
    containerEl.appendChild(imgEl);
}

function newPokemon(){
    callService(makeUrl(),getPokemon)
}