function convertTemperature() {
  
    var celsiusInput = document.getElementById('Celsius').value;
    var fahrenheitInput = document.getElementById('Fahrenheit').value;

    if (celsiusInput === '' && fahrenheitInput === '') {
        alert('Please enter at least one temperature value.');
        return;
    }

  
    if (celsiusInput !== '' && fahrenheitInput !== '') {
        alert('Please enter only one temperature value.');
        return;
    }

    
    if (celsiusInput !== '') {
        var celsius = parseFloat(celsiusInput);
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').innerHTML = celsius + ' Celsius is ' + fahrenheit.toFixed(2) + ' Fahrenheit.';
    } else {
        var fahrenheit = parseFloat(fahrenheitInput);
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').innerHTML = fahrenheit + ' Fahrenheit is ' + celsius.toFixed(2) + ' Celsius.';
    }
}