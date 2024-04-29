import cars from "./cars.js";

const totalPrice = document.querySelector("#totalPrice");
const paymentMethod = document.querySelector("#paymentMethod");
const carName = document.querySelector("#carName");
const carImage = document.querySelector("img");

const selectedCarIndex = localStorage.getItem("index");
const selectedCar = cars[selectedCarIndex];

const formData = JSON.parse(localStorage.getItem("formData"));
const method = formData.radio;
const total = JSON.parse(localStorage.getItem("total"));
console.log(total)


function displayCarInfo(car){
    carImage.src = car.image;
    carName.textContent = car.brand + " " + car.model;
    totalPrice.textContent = total + "$";
    paymentMethod.textContent = method
}

window.onload = function () {
    displayCarInfo(selectedCar);
};

localStorage.clear()