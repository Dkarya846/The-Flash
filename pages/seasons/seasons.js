var seasonsElement = document.getElementById("seasons");

if (seasons.length > 1) {
  seasonsElement.style.height = "auto";
}

seasons.forEach((season) => {
  let content = `<div class="season-container">
                    <div class="season-title">${season.name}</div>
                    <div class="season">
                        <div class="season-trailer">
                            <iframe src="${season.trailer}" title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        </div>
                        <div class="episodes">
                            <div class="episodes-row">
                            <div class="episode">
                                <a target="_blank" href="${season.images[0]}">
                                    <img src="${season.images[0]}" alt="${season.name}">
                                </a>
                            </div>
                            <div class="episode">
                                <a target="_blank" href="${season.images[1]}">
                                    <img src="${season.images[1]}" alt="${season.name}">
                                </a>
                            </div>
                            </div>
                            <div class="episodes-row">
                                <div class="episode">
                                    <a target="_blank" href="${season.images[2]}">
                                        <img src="${season.images[2]}" alt="${season.name}">
                                    </a>
                                </div>
                                <div class="episode">
                                    <a target="_blank" href="${season.images[3]}">
                                        <img src="${season.images[3]}" alt="${season.name}">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

  seasonsElement.innerHTML += content;
  console.log(seasonsElement);
});
