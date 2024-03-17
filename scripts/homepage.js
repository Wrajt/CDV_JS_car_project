const cars = [
    {
        "name": "Ramone",
        "brand": "Chevrolet",
        "model": "Impala",
        "image": "assets/ramone1.png",
        "price": "57 950$",
        "year": 1959,
        "power": "185kw",
        "mileage": "85 171 km"
    },

    {
        "name": "Lighting McQueen",
        "brand": "Ferrari",
        "model": "599 GTB Fiorano",
        "image": "assets/mcqueen.png",
        "price": "129 500$",
        "year": 1977,
        "power": "456 kW",
        "mileage": "36 540 km"
    },
    {
        "name": "Tow Mater",
        "brand": "Haulital",
        "model": "Hook'em",
        "image": "assets/towmater.png",
        "price": "5 000$",
        "year": 1957,
        "power": "unknown",
        "mileage": "12 000 km"
    },
    {
        "name": "Sally Carrera",
        "brand": "Porsche",
        "model": "Carrera (996)",
        "image": "assets/sally.png",
        "price": "39 000$",
        "year": 2002,
        "power": "320kw",
        "mileage": "99 000 km"
    },
    {
        "name": "Snot Rod",
        "brand": "Dodge",
        "model": "Charger",
        "image": "assets/snotrod.png",
        "price": "101 000$",
        "year": 1969,
        "power": "368kw",
        "mileage": "55 726 km"
    },
    {
        "name": "Chick Hicks",
        "brand": "Shyster",
        "model": "Cremlin",
        "image": "assets/chickhicks.png",
        "price": "113 000$",
        "year": 1979,
        "power": "400kw",
        "mileage": "28 726 km"
    },
    {
        "name": "Jackson Storm",
        "brand": "Hudson",
        "model": "Hornet",
        "image": "assets/jacksonstorm.png",
        "price": "83 900",
        "year": 1957,
        "power": "162kw",
        "mileage": "113 300 km"
    },
    {
        "name": "Max Schnell",
        "brand": "Mercedes-Benz",
        "model": "AMG C-Class (W204) DTM",
        "image": "assets/maxschnell.png",
        "price": "120 000$",
        "year": 2009,
        "power": "470kw",
        "mileage": "90 000 km"
    },
    {
        "name": "Lewis Hamilton",
        "brand": "McLaren",
        "model": "MP4 12C",
        "image": "assets/lewishamilton.png",
        "price": "180 000$",
        "year": 2009,
        "power": "575kw",
        "mileage": "20 000 km"
    },
    {
        "name": "Holley Shiftwell",
        "brand": "McLaren",
        "model": "MP4 12C",
        "image": "assets/holley.png",
        "price": "180 000$",
        "year": 2008,
        "power": "275kw",
        "mileage": "20 000 km"
    }
]






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
    configureLink.classList.add("button");
    configureLink.href = "#0";
    const span = document.createElement("span");
    span.textContent = "Configure model";
    configureLink.appendChild(span);
    carDiv.appendChild(configureLink);

    return carDiv;
}




// Function to add car elements to the HTML
function addCarsToHTML(carsArray) {
    const carContainer = document.querySelector(".cars-container");
    carsArray.forEach(car => {
        const carElement = createCarElement(car);
        carContainer.appendChild(carElement);
    });
}

// Call the function to add cars to HTML
addCarsToHTML(cars);