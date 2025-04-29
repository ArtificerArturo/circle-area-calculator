function calculateCircle(event) {
   const radiusInput = document.querySelector("#circleCalculator #radiusInput")
   const diameterInput = document.querySelector("#circleCalculator #diameterInput")
   const circumferenceInput = document.querySelector("#circleCalculator #circumferenceInput")
   const areaInput = document.querySelector("#circleCalculator #areaInput")

   /*
   let radius = parseFloat(radiusInput?.value)
   let diameter = parseFloat(diameterInput?.value)
   let circumference = parseFloat(circumferenceInput?.value)
   let area = parseFloat(areaInput?.value)
   */

   if (event?.target == radiusInput) {
      let radius = parseFloat(radiusInput.value)
      diameterInput.value = 2 * radius
      circumferenceInput.value = Math.PI * radius * 2
      areaInput.value = Math.PI * (radius * radius)
   }
   if (event?.target == diameterInput) {
      let diameter = parseFloat(diameterInput.value)
      radiusInput.value = diameter / 2
      circumferenceInput.value = Math.PI * diameter
      areaInput.value = Math.PI * ((diameter / 2) * (diameter / 2))
   }
   if (event?.target == circumferenceInput) {
      let circumference = parseFloat(circumferenceInput.value)
      diameterInput.value = circumference / Math.PI
      radiusInput.value = circumference / Math.PI / 2
      areaInput.value = Math.PI * ((circumference / Math.PI / 2) * (circumference / Math.PI / 2))
   }
   if (event?.target == areaInput) {
      let area = parseFloat(areaInput.value)
      radiusInput.value = Math.sqrt(area / Math.PI)
      diameterInput.value = Math.sqrt(area / Math.PI) * 2
      circumferenceInput.value = Math.sqrt(area / Math.PI) * 2 * Math.PI
   }
}

function clearForm() {
   const radiusInput = document.querySelector("#circleCalculator #radiusInput")
   const diameterInput = document.querySelector("#circleCalculator #diameterInput")
   const circumferenceInput = document.querySelector("#circleCalculator #circumferenceInput")
   const areaInput = document.querySelector("#circleCalculator #areaInput")

   radiusInput.value = ""
   diameterInput.value = ""
   circumferenceInput.value = ""
   areaInput.value = ""
   resultElement.style.color = "black"
}

function resultConditioner(number) {
   //Intelligent rounding. Results with only a decimal component need sig figs,
   //results greater than 1 do not
   if (number < 1 && number > -1) {
      number = numberWithCommas(+number.toPrecision(2))
   } else {
      number = numberWithCommas(+number.toFixed(2))
   }
   return number
}
function numberWithCommas(number) {
   //taken from SO. Worked better than .toLocaleString()
   return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}
