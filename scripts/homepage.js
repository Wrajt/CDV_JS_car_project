import cars from "./cars.js";

// Function to create a car element
function createCarElement(car) {
  const carDiv = document.createElement("div");
  carDiv.classList.add("car");

  const carName = document.createElement("h1");
  carName.textContent = car.name;
  carDiv.appendChild(carName);

  const carModel = document.createElement("h2");
  carModel.textContent = `${car.brand} ${car.model}`;
  carDiv.appendChild(carModel);

  const carImage = document.createElement("img");
  carImage.src = car.image;
  carImage.classList.add("car-image");
  carDiv.appendChild(carImage);

  const carDetail = document.createElement("div");
  carDiv.appendChild(carDetail);

  const detailList = document.createElement("ul");
  detailList.classList.add("car-details");
  carDetail.appendChild(detailList);

  for (const property in car) {
    if (
      car.hasOwnProperty(property) &&
      property !== "name" &&
      property !== "brand" &&
      property !== "model" &&
      property !== "image"
    ) {
      const listItem = document.createElement("li");
      listItem.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${car[property]}`;
      detailList.appendChild(listItem);
    }
  }

  const configureLink = document.createElement("a");
  configureLink.classList.add("button", "config");
  configureLink.href = "#";
  const span = document.createElement("span");
  span.textContent = "Configure model";
  configureLink.appendChild(span);
  carDiv.appendChild(configureLink);

  return carDiv;
}

// Function to add car elements to the HTML
function addCarsToHTML(carsArray) {
  const carContainer = document.querySelector(".cars-container");
  carsArray.forEach((car, index) => {
    const carElement = createCarElement(car);
    carElement.dataset.index = index; // Add index as data attribute
    carContainer.appendChild(carElement);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  addCarsToHTML(cars);

 // Function to handle button click event
  function handleConfigureButtonClick(event){
    event.preventDefault()
    const carDiv = event.target.closest(".car");
    // Get the selected car index
    const selectedCarIndex = carDiv.dataset.index
    localStorage.setItem("index", selectedCarIndex)
    window.location.href = "config-form.html"
  }
// Add event listeners to all buttons
  const buttons = document.querySelectorAll(".config");
  buttons.forEach((button) => {
    button.addEventListener("click", handleConfigureButtonClick);
  });
});


