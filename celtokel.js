const celsius = document.querySelector("#celsius");
const kelvin = document.querySelector("#kelvin");

    
window.addEventListener("load" ,() => celsius.focus());
    
celsius.addEventListener("input",() => {
    kelvin.value = (parseFloat(celsius.value) + 273.15 );
    
    
    if(!celsius.value) kelvin.value = "";
});
    
kelvin.addEventListener("input",()=>{
    celsius.value = Math.round(((kelvin.value - 273.15)*100)/100);

    if(!kelvin.value) celsius.value="";
});