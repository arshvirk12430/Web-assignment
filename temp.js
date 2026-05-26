// Temperature conversion function
function convertTemperature() {

    let temp =
        parseFloat(document.getElementById("temperature").value);

    let unit =
        document.getElementById("unit").value;

    let output =
        document.getElementById("output");

    let result = "";

    if (unit === "celsius") {

        let fahrenheit =
            (temp * 9 / 5) + 32;

        let kelvin =
            temp + 273.15;

        result =
            "Fahrenheit: " +
            fahrenheit.toFixed(2) +

            " °F | Kelvin: " +

            kelvin.toFixed(2) + " K";
    }

    else if (unit === "fahrenheit") {

        let celsius =
            (temp - 32) * 5 / 9;

        let kelvin =
            celsius + 273.15;

        result =
            "Celsius: " +
            celsius.toFixed(2) +

            " °C | Kelvin: " +

            kelvin.toFixed(2) + " K";
    }

    else {

        let celsius =
            temp - 273.15;

        let fahrenheit =
            (celsius * 9 / 5) + 32;

        result =
            "Celsius: " +
            celsius.toFixed(2) +

            " °C | Fahrenheit: " +

            fahrenheit.toFixed(2) + " °F";
    }

    output.innerHTML = result;
}


// Footer

document.getElementById("footer").innerHTML =
    "© 2026 Arshvir Kaur | " +
    new Date().toDateString();