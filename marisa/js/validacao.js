function validarData(id) {
  let data = document.getElementById(id).value;
  // Verifica o formato dd/mm/yyyy
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = data.match(regex);

  if (!match) return false;

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10) - 1; // mês começa em 0
  const ano = parseInt(match[3], 10);

  const dataObj = new Date(ano, mes, dia);

  // Verifica se a data realmente existe
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes &&
    dataObj.getDate() === dia
  );
}

function validarCpf(id) {
  let cpf = document.getElementById(id).value;
  // Verifica o formato 000.000.000-00
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (!regex.test(cpf)) return false;

  // Remove pontos e traço
  cpf = cpf.replace(/[^\d]/g, "");

  // Verifica se todos os números são iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Validação do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }
  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;

  if (digito1 !== parseInt(cpf[9])) return false;

  // Validação do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }
  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;

  if (digito2 !== parseInt(cpf[10])) return false;

  return true;
}

function validarCnpj(id) {
  let cnpj = document.getElementById(id).value;
  // Remove tudo que não for número
  cnpj = cnpj.replace(/[^\d]/g, "");

  // Deve ter 14 dígitos
  if (cnpj.length !== 14) return false;

  // Elimina CNPJs com todos os dígitos iguais
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  // Validação do primeiro dígito verificador
  let tamanho = 12;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);

  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  // Validação do segundo dígito verificador
  tamanho = 13;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}

function validaEmail(id) {
  let email = document.getElementById(id).value;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email);
}

function validaGenero() {
  if (
    document.getElementById("genero_m_cpf").checked == false &&
    document.getElementById("genero_f_cpf").checked == false &&
    document.getElementById("genero_nf_cpf").checked == false
  ) {
    return false;
  } else {
    return true;
  }
}

function validaNomePf(id) {
  let nome = document.getElementById(id).value;
  if (nome.length >= 5) {
    return true;
  } else {
    return false;
  }
}

function validaToken(id) {
  let token = document.getElementById(id).value;
  if (token.length >= 9) {
    return true;
  } else {
    return false;
  }
}

function validaSenha(id) {
  let senha = document.getElementById(id).value;
  if (senha.length >= 8) {
    return true;
  } else {
    return false;
  }
}

function comparaSenha() {
  let senha1 = document.getElementById("senha_d2").value;
  let senha2 = document.getElementById("conf_senha_d2").value;
  if (senha1 === senha2) {
    return true;
  } else {
    return false;
  }
}

function validaTermoPf(id) {
  if (document.getElementById(id).checked == true) {
    return true;
  } else {
    return false;
  }
}

function validaDdd(id) {
  let DDD1 = document.getElementById(id).value;
  if (DDD1.length == 4) {
    return true;
  } else {
    return false;
  }
}
function validaCel1(id) {
  let cel1 = document.getElementById(id).value;
  if (cel1.length == 10) {
    return true;
  } else {
    return false;
  }
}

function validaTel1(id) {
  let tel1 = document.getElementById(id).value;
  if (tel1.length == 9) {
    return true;
  } else {
    return false;
  }
}
