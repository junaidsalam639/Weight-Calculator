let kg = document.getElementById("kg");
let pounds = document.getElementById("pounds");
let ounces = document.getElementById("ounces");

const user = () => {
    let multi1 = (kg.value * 2.205).toFixed(2);
    let multi2 = (kg.value * 35.274).toFixed(2);
    pounds.value = multi1;
    ounces.value = multi2;
}

const user1 = () => {
    kg.value = (pounds.value / 2.205).toFixed(2);
    ounces.value = (pounds.value * 16).toFixed(2);
}

const user2 = () => {
    kg.value = (ounces.value / 35.274).toFixed(2);
    pounds.value = (ounces.value / 16);
}