const kelvin = document.querySelector("#kelvin");
const fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("load" ,() => fahrenheit.focus());

fahrenheit.addEventListener("input",() => {
    kelvin.value = (5/9 *(fahrenheit.value - 32 ) + 273.15).toFixed(3);

    if(!fahrenheit.value) kelvin.value ="";
});

kelvin.addEventListener("input",()=>{
    fahrenheit.value = (5/9 *(fahrenheit.value - 32 )).toFixed(3);

    if(!kelvin.value) fahrenheit.value="";
});