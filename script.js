function toggleValueInput() {
    const operation = document.getElementById('operation').value;
    const valueInputDiv = document.getElementById('valueInput');

    if (operation === 'pn' || operation === 'pnk') {
        valueInputDiv.classList.remove('hidden');
    } else {
        valueInputDiv.classList.add('hidden');
    }
}

function calculate() {
    let lambda = parseFloat(document.getElementById('lambda').value);
    let mu = parseFloat(document.getElementById('mu').value);
    const lambdaUnit = document.getElementById('lambdaUnit').value;
    const muUnit = document.getElementById('muUnit').value;
    const operation = document.getElementById('operation').value;
    const value = parseFloat(document.getElementById('value').value);

    if (!lambda || !mu) {
        alert("Por favor, insira valores válidos para λ e μ.");
        return;
    }

    // Conversão das unidades
    if (lambdaUnit === 'pm') {
        lambda *= 60; // Converter p/m para p/h
    }
    if (muUnit === 'minutes') {
        mu = 60 / mu; // Converter minutos para horas corretamente
    }

    let result;

    switch (operation) {
        case 'pn':
            const rho = lambda / mu;
            result = Math.pow(rho, value) * (1 - rho);
            break;
        case 'pnk':
            const rhoK = lambda / mu;
            result = Math.pow(rhoK, value + 1);
            break;
        case 'l':
            result = lambda / (mu - lambda);
            break;
        case 'lq':
            result = Math.pow(lambda, 2) / (mu * (mu - lambda));
            break;
        case 'wq':
            result = lambda / (mu * (mu - lambda));
            break;
        case 'w':
            result = 1 / (mu - lambda);
            break;
        default:
            result = "Operação inválida";
    }

    document.getElementById('result').innerText = `Resultado: ${result.toFixed(4)}`;
}
