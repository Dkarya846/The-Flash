var charactersElement = document.getElementById("characters");

var charCount = 0;
var characterRow;
characters.forEach((item) => {
  if (charCount % 3 === 0) {
    console.log(charCount);
    characterRow = document.createElement("div");
    characterRow.classList.add("characters-row");
    charactersElement.appendChild(characterRow);
    if (characters.length > 3) {
      charactersElement.style.height = "auto";
    } else {
      characterRow.style.height = "100%";
      characterRow.style.alignItems = "center";
    }
  }
  let content = `<div class="character-container">
                    <div class="character">
                        <div class="char-name">${item.character.name}</div>
                        <div class="char-image">
                            <img src="${item.character.image}" alt="${item.character.name}">
                        </div>
                        <div class="char-alter-ego">${item.character.alerEgo}</div>
                    </div>
                    <a class="character played-by" href="${item.actor.link}" target="_blank">
                        <div class="char-name">Played By</div>
                        <div class="char-image">
                            <img src="${item.actor.image}" alt="${item.actor.name}">
                        </div>
                        <div class="char-alter-ego">${item.actor.name}</div>
                    </a>
                </div>`;
  characterRow.innerHTML += content;
  charCount += 1;
});
