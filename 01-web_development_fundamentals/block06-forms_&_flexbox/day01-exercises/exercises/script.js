let objEstados = {
  AC: 'Acre',
  AL: 'Alagoas',
  AM: 'Amazonas',
  AP: 'Amapá',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RO: 'Rondônia',
  RS: 'Rio Grande do Sul',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SE: 'Sergipe',
  SP: 'São Paulo',
  TO: 'Tocantins',
};

const estadoSelect = document.getElementById('estado');

Object.keys(objEstados).forEach((estado) => {
  const optionElement = document.createElement('option');
  optionElement.value = objEstados[estado];
  optionElement.innerText = estado;

  estadoSelect.appendChild(optionElement);
});

function checkPreenchido(elArray) {
  for (el of elArray) {
    if (el === '') {
      alert('Campos Obrigatórios não foram preenchidos!');
      throw new Error('Campos Obrigatórios não foram preenchidos!');
    }
  }
}

function checkTamanho(objTamanhos) {
  Object.keys(objTamanhos).forEach((key) => {
    const value = objTamanhos[key];
    if (value.length > key) {
      alert(`Tamanho de ${value} inválido!`);
      throw new Error(`Tamanho de ${value} inválido!`);
    }
  });
}

function verifyData(data) {
  dataArr = data.split('/'); //['12', '12', '2020']
  for (let idx = 0; idx < dataArr.length; idx += 1) {
    dataArr[idx] = parseInt(dataArr[idx]);
  }
  console.log(dataArr[0]);

  let isWrong = false;

  // Ref: https://www.w3schools.com/jsref/jsref_isnan.asp
  if (isNaN(dataArr[0])) {
    alert(`Data inválida! Formato de texto detectado.`);
    isWrong = true;
  } else if (dataArr[0] < 0 || dataArr > 31) {
    alert(`Dia ${dataArr[0]} inválido!`);
    isWrong = true;
  } else if (dataArr[1] < 0 || dataArr[1] > 12) {
    alert(`Mês ${dataArr[1]} inválido!`);
    isWrong = true;
  } else if (dataArr[2] < 0) {
    alert(`Ano ${dataArr[2]} inválido!`);
    isWrong = true;
  }

  if (isWrong) {
    throw new Error(`Data inválida!`);
  }
}

function getDadosPessoais() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  let tipoEndereco = document.getElementsByName('tipo-endereco');

  const elObrigatorios = [nome, email, cpf, endereco, cidade];
  //checkPreenchido(elObrigatorios);
  const objTamanhos = {
    40: nome,
    50: email,
    14: cpf,
    200: endereco,
    28: cidade,
  };
  checkTamanho(objTamanhos);

  for (tipo of tipoEndereco) {
    if (tipo.checked === true) {
      tipoEndereco = tipo.id;
    }
  }

  return {
    nome,
    email,
    cpf,
    endereco,
    cidade,
    estado,
    'tipo de endereço': tipoEndereco,
  };
}

function getDadosEmprego() {
  const curriculo = document.getElementById('curriculo').value;
  const cargo = document.getElementById('cargo').value;
  const descricaoCargo = document.getElementById('descricao-cargo').value;
  const dataInicio = document.getElementById('data-inicio').value;

  const elObrigatorios = [curriculo, cargo, descricaoCargo, dataInicio];
  checkPreenchido(elObrigatorios);
  const objTamanhos = {
    1000: curriculo,
    40: cargo,
    500: descricaoCargo,
    10: dataInicio,
  };
  checkTamanho(objTamanhos);
  verifyData(dataInicio);

  return {
    curriculo,
    cargo,
    'descrição do cargo': descricaoCargo,
    'data de início': dataInicio,
  };
}

function createConfirmaDados(objDados) {
  const divConfirmaDados = document.getElementById('confirmar-dados');

  while (divConfirmaDados.firstChild) {
    divConfirmaDados.removeChild(divConfirmaDados.firstChild);
  }

  if (Object.keys(objDados).length > 0) {
    const titleConfirmaDados = document.createElement('h2');
    titleConfirmaDados.innerText = 'Confirme seus Dados:';
    divConfirmaDados.appendChild(titleConfirmaDados);
  }

  for (campo in objDados) {
    textConfirma = document.createElement('p');
    textConfirma.innerText = `${campo}: ${objDados[campo]}`;

    divConfirmaDados.appendChild(textConfirma);
  }
}

function processarForm(evt) {
  evt.preventDefault();

  let dadosPessoais = getDadosPessoais();
  let dadosEmprego = getDadosEmprego();

  // Referência: https://stackoverflow.com/questions/171251/how-can-i-merge-properties-of-two-javascript-objects-dynamically
  const objDados = { ...dadosPessoais, ...dadosEmprego };
  createConfirmaDados(objDados);
}

const botaoEnviar = document.getElementById('botao-enviar');
botaoEnviar.addEventListener('click', processarForm);

function limparForm() {
  const textToClear = [
    'nome',
    'email',
    'cpf',
    'endereco',
    'cidade',
    'curriculo',
    'cargo',
    'descricao-cargo',
    'data-inicio',
  ];

  for (id of textToClear) {
    document.getElementById(id).value = '';
  }

  document.getElementById('estado').value = 'Acre';
  document.getElementsByName('tipo-endereco')[0].checked = true;

  createConfirmaDados({});
}

const botaoLimpar = document.getElementById('limpar-form');
botaoLimpar.addEventListener('click', limparForm);
