import cars from "./cars.js";

const selectedCarIndex = localStorage.getItem("index");
const selectedCar = cars[selectedCarIndex];
const selectedCarPrice = selectedCar.price;
const total = document.querySelector(".total");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const errorMSG = document.getElementById("error-msg");

function displaySelectedCar(car) {
  //Display car details
  const carName = document.querySelector("h1");
  carName.textContent = car.name;
  const carModel = document.querySelector("h2");
  carModel.textContent = `${car.brand} ${car.model}`;
  const carImage = document.querySelector("img");
  carImage.src = car.image;
  //Create list element for car details
  const selectedCarContainer = document.querySelector(".selected-car");
  const carDetailList = document.createElement("ul");
  carDetailList.classList.add("car-details");
  // Add car details to the list
  for (const property in car) {
    if (
      car.hasOwnProperty(property) &&
      property !== "name" &&
      property !== "brand" &&
      property !== "model" &&
      property !== "image"
    ) {
      const listItem = document.createElement("li");
      listItem.classList.add(property);
      listItem.textContent = `${property.charAt(0).toUpperCase() + property.slice(1)}: ${car[property]}`;
      carDetailList.appendChild(listItem);
    }
  }
  //Add back button
  const backLink = document.createElement("a");
  backLink.classList.add("button", "back");
  backLink.href = "homepage.html";
  const span = document.createElement("span");
  span.textContent = " ← Back";
  backLink.appendChild(span);

  selectedCarContainer.appendChild(carDetailList);
  selectedCarContainer.appendChild(backLink);
}
//Display selected car on window load
window.onload = function () {
  displaySelectedCar(selectedCar);
};

//ERROR MESSAGE FOR CAR FORM
document
  .getElementById("car-form")
  .addEventListener("submit", function (event) {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let pickup = document.getElementById("selectDate").value;

    if (name === "" || surname === "" || pickup === "") {
      errorMSG.style.display = "block";
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
  datesContainer.innerHTML = "<p>Your pickup date: " + formattedDate + "</p>";
}
document.getElementById("selectDate").addEventListener("change", generateDate);

//ADDING CHECKED ATTRIBUTE TO CHECKBOXES
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.setAttribute("checked", "checked");
    } else {
      this.removeAttribute("checked");
    }
  });
});
//DISPLAYING CURRENT PRICE
function justCarPrice(selectedCarPrice) {
  total.textContent = `Your current total: ${selectedCarPrice}$`;
}
justCarPrice(selectedCarPrice);

//CALCULATING TOTAL PRICE
function calculatePrice(selectedCarPrice) {
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      let sum = 0;
      checkboxes.forEach(function (cb) {
        if (cb.checked) {
          sum += parseInt(cb.value);
        }
      });
      total.textContent = `Your current total: ${selectedCarPrice + sum}$`;
    });
  });
}
calculatePrice(selectedCarPrice);

function submitOrder(){
  if(errorMSG.style.display === "none"){
    window.location.href = "confirmation-page.html";
  }else{
    alert("Please fill in the form correctly");
}}
document.querySelector("#submit").addEventListener("click", submitOrder);