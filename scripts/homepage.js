import cars from './cars.js';
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
        if (car.hasOwnProperty(property) && property !== 'name' && property !== 'brand' && property !== 'model' && property !== 'image') {
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
// Function to display details of the selected car and additional options
function displaySelectedCar(car) {
    // Create a new div for displaying selected car details
    const selectedCarDiv = document.createElement("div");
    selectedCarDiv.classList.add("selected-car");

    // Create elements to display car details
    const carName = document.createElement("h1");
    carName.textContent = car.name;

    const carModel = document.createElement("h2");
    carModel.textContent = `${car.brand} ${car.model}`;

    const carImage = document.createElement("img");
    carImage.src = car.image;
    carImage.classList.add("car-image");

    const carDetailList = document.createElement("ul");
    carDetailList.classList.add("car-details");

    // Add car details to the list
    for (const property in car) {
        if (car.hasOwnProperty(property) && property !== 'name' && property !== 'brand' && property !== 'model' && property !== 'image') {
            const listItem = document.createElement("li");
            listItem.classList.add(property);
            listItem.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${car[property]}`;
            carDetailList.appendChild(listItem);
        }
    }

    const backLink = document.createElement("a");
    backLink.classList.add("button","back");
    backLink.href = "homepage.html";
    const span = document.createElement("span");
    span.textContent = " ← Back";
    backLink.appendChild(span);


    // Append elements to the selected car div
    selectedCarDiv.appendChild(carName);
    selectedCarDiv.appendChild(carModel);
    selectedCarDiv.appendChild(carImage);
    selectedCarDiv.appendChild(carDetailList);
    selectedCarDiv.appendChild(backLink);

    const settingsContainer = document.querySelector(".settings-container");
    settingsContainer.appendChild(selectedCarDiv);

}

// Function to handle button click event
function handleConfigureButtonClick(event) {
    event.preventDefault();

    const carDiv = event.target.closest('.car');

    // Hide the cars container
    const carsContainer = document.querySelector(".cars-container");
    carsContainer.style.display = "none";
    const settingsContainer = document.querySelector(".settings-container");
    settingsContainer.style.display = "flex";

    // Get the selected car index
    const selectedCarIndex = parseInt(carDiv.dataset.index);
    const selectedCar = cars[selectedCarIndex];

    // Display the selected car details
    displaySelectedCar(selectedCar);
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

// Add event listeners to all buttons
document.addEventListener("DOMContentLoaded", function() {
    addCarsToHTML(cars);

    const buttons = document.querySelectorAll('.config');
    buttons.forEach(button => {
        button.addEventListener('click', handleConfigureButtonClick);
    });
});

//ERROR MESSAGE FOR CAR FORM
document.getElementById("car-form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let pickup = document.getElementById("selectDate").value;

    if (name === '' || surname === '' || pickup === '') {
      document.getElementById("error-msg").style.display = "block";
      event.preventDefault();
    }
});

//FUNCTION FOR PICKUP DATE
function generateDate() {
    let selectElement = document.getElementById("selectDate");
    let selectedValue = parseInt(selectElement.value);
    let currentDate = new Date();
    let nextDate = new Date();
    nextDate.setDate(currentDate.getDate() + selectedValue);
    let formattedDate = nextDate.toLocaleDateString("en-US");
    let datesContainer = document.getElementById("dates");
    datesContainer.innerHTML = "<p>Your pick up date: " + formattedDate + "</p>";
}

window.onload = function() {
    generateDate();
};

document.getElementById("selectDate").addEventListener("change", generateDate);

//FUNCTION FOR PRICE CALCULATION
function calculateTotalPrice(){
let priceField = document.querySelector(".price").innerText;
let carPrice = priceField.split(":")[1].trim();


let totalField = document.querySelector(".total");
totalField.innerHTML = "Your total is: " + carPrice;
console.log(carPrice);}