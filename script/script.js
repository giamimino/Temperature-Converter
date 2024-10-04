const dropdowns = document.querySelectorAll(".dropdown");

// loop through all dropdown elements
dropdowns.forEach(dropdown => {
    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Add a click event to the select element
    select.addEventListener("click", ()=> {
        // Add the clicked select styles to the select element
        select.classList.toggle("select-clicked");
        // Add the rotate styles to the caret element
        caret.classList.toggle("caret-rotate");
        // Add the open styles to the menu element
        menu.classList.toggle("menu-open");
    });

    //Loop through all option elements
    options.forEach(option => {
        //Add a click event to the option element
        option.addEventListener("click", ()=> {
            //Change selected inner text to clicked option inner text
            selected.innerHTML = option.innerText;
            //Add the clicked select styles to the select element
            select.classList.remove("select-clicked");
            //Add the rotate styles to the caret element
            caret.classList.remove("caret-rotate");
            //Add the open styles to the menu element
            menu.classList.remove("menu-open");
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove("active");
            });
            //Add active class to clicked option element
            option.classList.add("active");
            
            
        });
    });
});

const inputPt1 = document.getElementById("input-temperature-pt1");
const inputPt2 = document.getElementById("input-temperature-pt2");
let temperatureTypePt1 = document.querySelector(".pt1").innerHTML;
let temperatureTypePt2 = document.querySelector(".pt2").innerHTML;

const updateTemperatureTypes = () => {
    temperatureTypePt1 = document.querySelector('.dropdown:first-of-type .selected').innerText;
    temperatureTypePt2 = document.querySelector('.dropdown:last-of-type .selected').innerText;
};

document.querySelectorAll('.dropdown').forEach(dropdown => {
    const options = dropdown.querySelectorAll('.menu li');
    options.forEach(option => {
        option.addEventListener('click', updateTemperatureTypes);
    });
});

inputPt1.addEventListener("input", () => {
    let value = parseFloat(inputPt1.value);
   // Check if the input is a valid number
       if (!isNaN(value)) {
        if (temperatureTypePt1 === "Degree Celsius" && temperatureTypePt2 === "Fahrenheit") {
            // Convert Celsius to Fahrenheit
            inputPt2.value = (value * 9/5) + 32; 
        } else if (temperatureTypePt1 === "Fahrenheit" && temperatureTypePt2 === "Degree Celsius") {
            // Convert Fahrenheit to Celsius
            inputPt2.value = (value - 32) * 5/9; 
        } else if (temperatureTypePt1 === "Kelvin" && temperatureTypePt2 === "Degree Celsius") {
            // Convert Fahrenheit to Celsius
            inputPt2.value = value - 273.15; 
        } else if (temperatureTypePt1 === "Degree Celsius" && temperatureTypePt2 === "Kelvin") {
            // Convert Fahrenheit to Celsius
            inputPt2.value = value + 273.15; 
        } else if (temperatureTypePt1 === "Fahrenheit" && temperatureTypePt2 === "Kelvin") {
            // Convert Fahrenheit to Celsius
            inputPt2.value = (value - 32) * 5/9 + 273.15; 
        } else if (temperatureTypePt1 === "Kelvin" && temperatureTypePt2 === "Fahrenheit") {
            // Convert Fahrenheit to Celsius
            inputPt2.value = (value - 273.15) * 9/5 + 32; 
        } else {
            // If both types are the same, just display the same value
            inputPt2.value = value; 
        }
    } else {    
        inputPt2.value = ""; // Clear the output if input is invalid
    }
});

