const calculate = document.getElementById("calculate");

function imc() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const imcValue = (weight / (height * height)).toFixed(1);

    let classification = "";

    if (imcValue < 18.5) {
      classification = "abaixo do peso.";
    } else if (imcValue < 25) {
      classification = "com o peso ideal. Parabéns!";
    } else if (imcValue < 30) {
      classification = "levemente acima do peso.";
    } else if (imcValue < 35) {
      classification = "com obesidade Grau I.";
    } else if (imcValue < 40) {
      classification = "com obesidade Grau II.";
    } else {
      classification = "com obesidade Grau III. Cuidado!";
    }

    result.textContent = `${name}, seu IMC é ${imcValue} e você está ${classification}`;
  } else {
    result.textContent = "Preencha todos os campos!";
  }
}

calculate.addEventListener("click", imc);
