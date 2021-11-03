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
  });
}

function createProductCardsSection(url) {
  let container = document.querySelector(".product-cards__list");
  getDataFromJson(url).then((data) => {
    data.forEach((el) => {
      let cardDiv = document.createElement("div");
      cardDiv.className = "product-card";
      cardDiv.innerHTML = `
      <a href="#">
        <div class="product-card__foto">
          <img src=${el.foto}>
        </div>
        <div class="product-card__title">${el.title}</div>
        <div class="product-card__price">${el.price}</div>
      </a>
      `;
      container.append(cardDiv);
    });
  });
}

const urlServiceCards = "./json/serviceCards.json";
const urlProductCards = "./json/productCards.json";

createServiceCardsSection(urlServiceCards);
createProductCardsSection(urlProductCards);
