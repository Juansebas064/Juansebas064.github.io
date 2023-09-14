function clearAll(event) {
  let service = event.target.id.split('-')[1]
  console.log(service)
  let inputs = document.getElementById(`${service}-inputs`).getElementsByTagName("input")
  inputs[0].value = ""
  inputs[1].value = ""
  inputs[2].value = ""
  inputs[3].value = ""
  inputs[4].value = ""
  if (inputs[5]) {
    inputs[5].value = ""
  }
  document.getElementById(`${service}-result`).hidden = true
}


function calculateEnergy() {
  let inputs = document.getElementById("energy-inputs").getElementsByTagName("input")
  let consumo = Number(inputs[1].value) - Number(inputs[0].value)
  console.log("Consumo:" + consumo)
  consumo = consumo * Number(inputs[2].value)
  console.log("Consumo total:" + consumo)
  let aseo = Number(inputs[3].value) / 3
  console.log("Aseo:" + aseo)
  let alumbrado = Number(inputs[4].value) / 2
  console.log("Alumbrado:" + alumbrado)

  let total = consumo + aseo + alumbrado
  if (total && consumo && aseo && alumbrado) {
    document.getElementById("energy-result").hidden = false
    document.getElementById("energy-result").textContent = "Total: $" + Math.floor(total).toLocaleString()
  } else {
    alert('Deben llenarse todos los campos')
  }
}

function calculateWater() {
  let inputs = document.getElementById("water-inputs").getElementsByTagName("input")
  let consumo = Number(inputs[1].value) - Number(inputs[0].value)

  let consumoAgua = consumo * Number(inputs[2].value)
  let consumoAlcantarillado = consumo * Number(inputs[3].value)

  let total = consumo + consumoAgua + consumoAlcantarillado + Number(inputs[4].value) / 2 + Number(inputs[5].value) / 2

  if (consumo && consumoAgua && consumoAlcantarillado && Number(inputs[4].value) && Number(inputs[5].value)) {
    document.getElementById("water-result").hidden = false
    document.getElementById("water-result").textContent = "Total: $" + Math.floor(total).toLocaleString()
  } else {
    alert('Deben llenarse todos los campos')
  }
}

function changeTab(event) {
  if (event.target.id === "energy-tab") {
    document.getElementById('water-tab').classList.remove('active-tab')
    event.target.classList.add('active-tab')
    document.querySelector('.energy').hidden = false
    document.querySelector('.water').hidden = true
  } else {
    document.getElementById('energy-tab').classList.remove('active-tab')
    event.target.classList.add('active-tab')
    document.querySelector('.energy').hidden = true
    document.querySelector('.water').hidden = false
  }
}