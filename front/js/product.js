
const reponseApi = fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(result => generateFurnitures(result));

function getId() {
    const getFurnituresId = new URLSearchParams(reponseApi);
    const ParamsFurnituresId = getFurnituresId.get("id");
    console.log(ParamsFurnituresId);
}

// const getSpecificApi = fetch(`http://localhost:3000/api/products/${getId}`)
    
function generateFurnitures(furnitures) {
    for (let i = 0; i < furnitures.length; i++) {
        const article = furnitures[i];

        const imageContainer = document.querySelector(".item__img");
        const furnitureImage = document.createElement("img");
        furnitureImage.src = article.imageUrl;
        furnitureImage.alt = article.altTxt;
        imageContainer.appendChild(furnitureImage);

        const furnitureTitle = document.querySelector("#title");
        furnitureTitle.innerText = article.name;

        const furniturePrice = document.querySelector("#price");
        furniturePrice.innerText = article.price;

        const furnitureDescription = document.querySelector("#description");
        furnitureDescription.innerText = article.description;

        const furnitureSelect = document.querySelector("#colors");
        const furnitureColors = article.colors;

        for (let color; color < furnitureColors.length; color++) {
            const colorOption = furnitureColors[color];
            const furnitureOptions = document.createElement("option");
            
            furnitureOptions.innerHTML = colorOption;
            furnitureOptions.value = colorOption;

            furnitureSelect.appendChild(colorOption);
        }
    }
}