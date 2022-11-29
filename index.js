
const meterToFeet = 3.281 
const literToGallon = 0.264 
const kilogramToPound = 2.204
let convert=document.getElementById("convert")
let lengthText=document.getElementById("length-text")
let volumeText=document.getElementById("volume-text")
let massText=document.getElementById("mass-text")
let inputValue=document.getElementById("num")

convert.addEventListener("click",function(){
    let base=inputValue.value
   lengthText.textContent=`${base}meters=${(base*meterToFeet).toFixed(3)}feet | ${base}feet=${(base/meterToFeet).toFixed(3)}meters`
   volumeText.textContent=`${base}liters=${(base*literToGallon).toFixed(3)}gallons | ${base}gallons=${(base/literToGallon).toFixed(3)}liters`
   massText.textContent=`${base}kilos=${(base*kilogramToPound).toFixed(3)}pounds | ${base}pounds=${(base/kilogramToPound).toFixed(3)}kilos`
   
})