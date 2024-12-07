




function convertToFahrenheit() {
    let celsiusInput = document.getElementById('celcius')
    let fahrenheitInput = document.getElementById('fahrenheit')

    if(celsiusInput.value.length > 0 && fahrenheitInput.value.length > 0){
        let calculocelcius = (Number(celsiusInput.value) * 1.8) + 32
        let calculofahrenheit = (Number(fahrenheitInput.value) - 32) / 1.8
    
        const resultadocelcius = document.getElementById('cres')
        const resultadofahrenheit = document.getElementById('fres')
    
        resultadocelcius.innerText = "Celsius para Fahrenheit: " + calculocelcius.toFixed(2) + " °F";
        resultadofahrenheit.innerText = "Fahrenheit para Celsius: " + calculofahrenheit.toFixed(2) + " °C";
    }else{
        alert("ERRO insira um valor valido")
    }

}