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

// Define os estados de acordo com o objeto objEstados
const estadoSelect = document.getElementById('estado');

Object.keys(objEstados).forEach((estado) => {
  const optionElement = document.createElement('option');
  optionElement.value = objEstados[estado];
  optionElement.innerText = estado;

  estadoSelect.appendChild(optionElement);
});

// Define as propriedades do campo de calendário
const campoDataInicio = document.getElementById('data-inicio');
const calendario = new Pikaday({
  field: campoDataInicio,
  format: 'DD/MM/YYYY',
  onSelect: function () {
    campoDataInicio.value = calendario.toString();
  },
  i18n: {
    previousMonth: 'Mês Anterior',
    nextMonth: 'Próximo Mês',
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    weekdays: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  },
});

function checkPreenchido(elArray) {
  for (let el of elArray) {
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

function getDadosPessoais() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;
  let tipoEndereco = document.getElementsByName('tipo-endereco');

  // const elObrigatorios = [nome, email, cpf, endereco, cidade];
  // checkPreenchido(elObrigatorios);
  // const objTamanhos = {
  //   40: nome,
  //   50: email,
  //   14: cpf,
  //   200: endereco,
  //   28: cidade,
  // };
  // checkTamanho(objTamanhos);

  for (let tipo of tipoEndereco) {
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

  // const elObrigatorios = [curriculo, cargo, descricaoCargo, dataInicio];
  // checkPreenchido(elObrigatorios);
  // const objTamanhos = {
  //   1000: curriculo,
  //   40: cargo,
  //   500: descricaoCargo,
  //   10: dataInicio,
  // };
  // checkTamanho(objTamanhos);

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
    titleConfirmaDados.className = 'mb-3';
    titleConfirmaDados.innerText = 'Confirme seus Dados:';
    divConfirmaDados.appendChild(titleConfirmaDados);
  }

  for (let campo in objDados) {
    const textConfirma = document.createElement('li');
    textConfirma.className = 'list-group-item';
    textConfirma.innerHTML = `<strong class="text-capitalize">${campo}:</strong> ${objDados[campo]}`;

    divConfirmaDados.appendChild(textConfirma);
  }
}

function defineValidationRules() {
  const objFields = {
    40: 'nome',
    50: 'email',
    11: 'cpf',
    200: 'endereco',
    28: 'cidade',
    1000: 'curriculo',
    40: 'cargo',
    500: 'descricao-cargo',
  };

  Object.keys(objFields).forEach((key) => {
    // key = Limite Caracteres
    // objFields[key] Nome do Campo
    //console.log(objFields[key])

    validation.rules[objFields[key]] = {
      message: `${objFields[key]} inválido! Tamanho máximo de ${key} caracteres`,
      method: (el) => {
        return el.value.length <= key;
      },
    };
  });
}

function processarForm(evt) {
  evt.preventDefault();

  validation.init('form');
  defineValidationRules();
  validation.highlight();

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

  for (let id of textToClear) {
    document.getElementById(id).value = '';
  }

  document.getElementById('estado').value = 'Acre';
  document.getElementsByName('tipo-endereco')[0].checked = true;

  createConfirmaDados({});
}

const botaoLimpar = document.getElementById('limpar-form');
botaoLimpar.addEventListener('click', limparForm);
