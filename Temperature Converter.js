function convert() {
    event.preventDefault();
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const convertedTemperature = document.getElementById("convertedTemperature");
    let result;
    if (unit === "Celsius"){
        result = (temperatureInput * 9/5) + 32;
        convertedTemperature.textContent = `${temperatureInput}°C is equal to ${result.toFixed(2)}°F`;
    }
    else if (unit === "Fahrenheit"){
        result = (temperatureInput - 32) * 5/9;
        convertedTemperature.textContent = `${temperatureInput}°F is equal to ${result.toFixed(2)}°C`;
    }}