function calculateCircle(event) {
   const radiusInput = document.querySelector("#circleCalculator #radiusInput")
   const diameterInput = document.querySelector("#circleCalculator #diameterInput")
   const circumferenceInput = document.querySelector("#circleCalculator #circumferenceInput")
   const areaInput = document.querySelector("#circleCalculator #areaInput")
   const radiusDropdown = document.querySelector("#circleCalculator #radiusDropdown")
   const diameterDropdown = document.querySelector("#circleCalculator #diameterDropdown")
   const circumferenceDropdown = document.querySelector("#circleCalculator #circumferenceDropdown")
   const areaDropdown = document.querySelector("#circleCalculator #areaDropdown")

   let radius = 0
   let diameter = 0
   let circumference = 0
   let area = 0
   let radiusUnit = radiusDropdown.value
   let diameterUnit = diameterDropdown.value
   let circumferenceUnit = circumferenceDropdown.value
   let areaUnit = areaDropdown.value

   if (event?.target == radiusInput) {
      if (isNaN(radiusInput.value) || radiusInput.value == "") return
      radius = convertToMeters(parseFloat(radiusInput.value), radiusUnit)
      console.log(radius)
      diameter = 2 * radius
      circumference = Math.PI * radius * 2
      area = Math.PI * (radius * radius)

      diameterInput.value = resultConditioner(convertFromMeters(diameter, diameterUnit))
      circumferenceInput.value = resultConditioner(convertFromMeters(circumference, circumferenceUnit))
      areaInput.value = resultConditioner(convertFromSquareMeters(area, areaUnit))
      unitArray = [radiusUnit, diameterUnit, circumferenceUnit, areaUnit]
   }
   if (event?.target == diameterInput) {
      if (isNaN(diameterInput.value) || diameterInput.value == "") return
      diameter = convertToMeters(parseFloat(diameterInput.value), diameterUnit)
      radius = diameter / 2
      circumference = Math.PI * diameter
      area = Math.PI * ((diameter / 2) * (diameter / 2))

      radiusInput.value = resultConditioner(convertFromMeters(radius, radiusUnit))
      circumferenceInput.value = resultConditioner(convertFromMeters(circumference, circumferenceUnit))
      areaInput.value = resultConditioner(convertFromSquareMeters(area, areaUnit))
      unitArray = [radiusUnit, diameterUnit, circumferenceUnit, areaUnit]
   }
   if (event?.target == circumferenceInput) {
      if (isNaN(circumferenceInput.value) || circumferenceInput.value == "") return
      circumference = convertToMeters(parseFloat(circumferenceInput.value), circumferenceUnit)
      diameter = circumference / Math.PI
      radius = circumference / Math.PI / 2
      area = Math.PI * ((circumference / Math.PI / 2) * (circumference / Math.PI / 2))

      diameterInput.value = resultConditioner(convertFromMeters(diameter, diameterUnit))
      radiusInput.value = resultConditioner(convertFromMeters(radius, radiusUnit))
      areaInput.value = resultConditioner(convertFromSquareMeters(area, areaUnit))
      unitArray = [radiusUnit, diameterUnit, circumferenceUnit, areaUnit]
   }
   if (event?.target == areaInput) {
      if (isNaN(areaInput.value) || areaInput.value == "") return
      area = convertToSquareMeters(parseFloat(areaInput.value), areaUnit)
      radius = Math.sqrt(area / Math.PI)
      diameter = Math.sqrt(area / Math.PI) * 2
      circumference = Math.sqrt(area / Math.PI) * 2 * Math.PI

      radiusInput.value = resultConditioner(convertFromMeters(radius, radiusUnit))
      diameterInput.value = resultConditioner(convertFromMeters(diameter, diameterUnit))
      circumferenceInput.value = resultConditioner(convertFromMeters(circumference, circumferenceUnit))
      unitArray = [radiusUnit, diameterUnit, circumferenceUnit, areaUnit]
   }
   if (event.target == radiusDropdown) {
      let unitChangingFrom = radiusDropdown.getAttribute("data-unit")
      radiusDropdown.setAttribute("data-unit", radiusDropdown.value)
      if (isNaN(radiusInput.value) || radiusInput.value == "") return
      radiusInput.value = resultConditioner(
         convertFromMeters(convertToMeters(parseFloat(radiusInput.value), unitChangingFrom), radiusDropdown.value)
      )
   }
   if (event.target == diameterDropdown) {
      let unitChangingFrom = diameterDropdown.getAttribute("data-unit")
      diameterDropdown.setAttribute("data-unit", diameterDropdown.value)
      if (isNaN(diameterInput.value) || diameterInput.value == "") return
      diameterInput.value = resultConditioner(
         convertFromMeters(convertToMeters(parseFloat(diameterInput.value), unitChangingFrom), diameterDropdown.value)
      )
   }
   if (event.target == circumferenceDropdown) {
      let unitChangingFrom = circumferenceDropdown.getAttribute("data-unit")
      circumferenceDropdown.setAttribute("data-unit", circumferenceDropdown.value)
      if (isNaN(circumferenceInput.value) || circumferenceInput.value == "") return
      circumferenceInput.value = resultConditioner(
         convertFromMeters(
            convertToMeters(parseFloat(circumferenceInput.value), unitChangingFrom),
            circumferenceDropdown.value
         )
      )
   }
   if (event.target == areaDropdown) {
      let unitChangingFrom = areaDropdown.getAttribute("data-unit")
      areaDropdown.setAttribute("data-unit", areaDropdown.value)
      if (isNaN(areaInput.value) || areaInput.value == "") return
      areaInput.value = resultConditioner(
         convertFromSquareMeters(
            convertToSquareMeters(parseFloat(areaInput.value), unitChangingFrom),
            areaDropdown.value
         )
      )
      areaDropdown.setAttribute("data-unit", areaDropdown.value)
   }
}

function convertFromMeters(value, unit) {
   if (unit == "mm") return value * 1000
   if (unit == "cm") return value * 100
   if (unit == "m") return value
   if (unit == "km") return value * 0.001
   if (unit == "in") return value * 39.3701
   if (unit == "ft") return value * 3.28084
   if (unit == "yd") return value * 1.093613
   if (unit == "mi") return value * 0.00062137121212119323429
}

function convertToMeters(value, unit) {
   if (unit == "mm") return value / 1000
   if (unit == "cm") return value / 100
   if (unit == "m") return value
   if (unit == "km") return value / 0.001
   if (unit == "in") return value / 39.3701
   if (unit == "ft") return value / 3.28084
   if (unit == "yd") return value / 1.093613
   if (unit == "mi") return value / 0.00062137121212119323429
}

function convertFromSquareMeters(value, unit) {
   if (unit == "mm2") return value * 1000000
   if (unit == "cm2") return value * 10000
   if (unit == "m2") return value
   if (unit == "km2") return value * 0.000001
   if (unit == "in2") return value * 1550
   if (unit == "ft2") return value * 10.7639
   if (unit == "yd2") return value * 1.19599
   if (unit == "mi2") return value * 0.000000386102
}

function convertToSquareMeters(value, unit) {
   if (unit == "mm2") return value / 1000000
   if (unit == "cm2") return value / 10000
   if (unit == "m2") return value
   if (unit == "km2") return value / 0.000001
   if (unit == "in2") return value / 1550
   if (unit == "ft2") return value / 10.7639
   if (unit == "yd2") return value / 1.19599
   if (unit == "mi2") return value / 0.000000386102
}

function clearForm() {
   const radiusInput = document.querySelector("#circleCalculator #radiusInput")
   const diameterInput = document.querySelector("#circleCalculator #diameterInput")
   const circumferenceInput = document.querySelector("#circleCalculator #circumferenceInput")
   const areaInput = document.querySelector("#circleCalculator #areaInput")
   const radiusDropdown = document.querySelector("#circleCalculator #radiusDropdown")
   const diameterDropdown = document.querySelector("#circleCalculator #diameterDropdown")
   const circumferenceDropdown = document.querySelector("#circleCalculator #circumferenceDropdown")
   const areaDropdown = document.querySelector("#circleCalculator #areaDropdown")

   radiusInput.value = ""
   diameterInput.value = ""
   circumferenceInput.value = ""
   areaInput.value = ""
   radiusDropdown.value = "m"
   diameterDropdown.value = "m"
   circumferenceDropdown.value = "m"
   areaDropdown.value = "m2"
}

function resultConditioner(number) {
   //Intelligent rounding. Results with only a decimal component need sig figs,
   //results greater than 1 do not
   if (number < 1 && number > -1) {
      number = +number.toPrecision(3)
   } else {
      number = +number.toFixed(3)
   }
   return number
}
