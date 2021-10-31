async function getDataFromJson(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function createServiceCardsSection(url) {
  let container = document.querySelector(".service-cards");
  getDataFromJson(url).then((data) => {
    data.forEach((el) => {
      let cardDiv = document.createElement("div");
      cardDiv.className = "service-card";
      cardDiv.innerHTML = `
       <a href="#">
          <div class="service-card__title">
            <div class="service-card__logo">
                <img src=${el.logo}>
            </div>
            <div class="service-card__subtitle">${el.title}</div>
          </div>
          <div class="service-card__text">${el.text}</div>
        </a>
       `;
      container.append(cardDiv);
    });
    return container;
  });
}

const urlServiceCards = "./json/serviceCards.json";
createServiceCardsSection(urlServiceCards);
