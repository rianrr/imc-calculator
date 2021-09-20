const calculate = document.getElementById("calculate");

function imc() {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const imcValue = (weight / (height * height)).toFixed(1);
    const underweight = imcValue < 18.5;
    const idealWeight = imcValue < 25;
    const slightlyOverweight = imcValue < 30;
    const obesityFirstDegree = imcValue < 35
    const obesitySecondDegree = imcValue < 40;

    let classification = "";

    if ( underweight ) {
      classification = "abaixo do peso.";
    } else if ( idealWeight ) {
      classification = "com o peso ideal. Parabéns!";
    } else if ( slightlyOverweight ) {
      classification = "levemente acima do peso.";
    } else if ( obesityFirstDegree ) {
      classification = "com obesidade Grau I.";
    } else if ( obesitySecondDegree ) {
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
