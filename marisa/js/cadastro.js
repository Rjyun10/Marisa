function mostraPj(id) {
  $(".form1, .cadastro_box3").hide();
  $(".form1_1, .termo_cnpj").show();
}

function mostraPf(id) {
  $(".form1, .cadastro_box3").show();
  $(".form1_1, .termo_cnpj").hide();
}

function enviarDadosCpf() {
  if (
    validaNomePf("nome_cpf") &&
    validarData("data_cpf") &&
    validarCpf("cpf_cpf") &&
    validaGenero("genero_cpf") &&
    validaDdd("ddd2_cpf") &&
    validaCel1("cel_cpf") &&
    validaDdd("ddd2_cpf") &&
    validaTel1("tel_cpf") &&
    validaEmail("email_d2") &&
    validaToken("token_d2") &&
    validaSenha("senha_d2") &&
    validaSenha("conf_senha_d2") &&
    comparaSenha() &&
    validaTermoPf("check_termo")
  ) {
    var nome = document.getElementById("nome_cpf").value;
    var data = document.getElementById("data_cpf").value;
    var cpf = document.getElementById("cpf_cpf").value;
    var genero = document.getElementById("genero_cpf").value;
    var ddd1 = document.getElementById("ddd1_cpf").value;
    var cel = document.getElementById("cel_cpf").value;
    var ddd2 = document.getElementById("ddd2_cpf").value;
    var tel = document.getElementById("tel_cpf").value;
    var email = document.getElementById("email_d2").value;
    var token = document.getElementById("token_d2").value;
    var senha = document.getElementById("senha_d2").value;
    var conf_senha = document.getElementById("conf_senha_d2").value;
    var termo = document.getElementById("check_termo").value;
  }
}

/*if (validarData("data_cpf")) {
    alert("Data válida!");
  } else {
    alert("Data com erro!");
  }
  if (validarCpf("cpf_cpf")) {
    alert("CPF válida!");
  } else {
    alert("CPF com erro!");
  }
  if (validaGenero()) {
    alert("Genero escolhido!");
  } else {
    alert("Escolha um genero!");
  }
  if (validaNomePf("nome_cpf")) {
    alert("Nome válido!");
  } else {
    alert("Erro: digite um nome de pelo menos 5 digitos!");
  }
  if (validaSenha("senha_d2")) {
    alert("Senha válida!");
  } else {
    alert("Erro: Senha deve conter no mínimo 8 digitos!");
  }
  if (validaSenha("conf_senha_d2")) {
    alert("Senha válida!");
  } else {
    alert("Erro: Senha deve conter no mínimo 8 digitos!");
  }
  if (comparaSenha()) {
    alert("Senhas válidas!");
  } else {
    alert("Erro: Senhas erradas!");
  }
  if (validaTermoPf("check_termo")) {
    alert("s");
  } else {
    alert("no");
  }
  if (validaDdd1("ddd1_cpf")) {
    alert("DDD correto!");
  } else {
    alert("DDD incorreto!");
  }
  if (validaCel1("cel_cpf")) {
    alert("Celular correto!");
  } else {
    alert("Celular incorreto!");
  }
  if (validaDdd2("ddd2_cpf")) {
    alert("DDD correto!");
  } else {
    alert("DDD incorreto!");
  }
  if (validaTel1("tel_cpf")) {
    alert("Telefone correto!");
  } else {
    alert("Telefone incorreto!");
  }*/

/*alert(nome +" / "+ data +" / "+ cpf +" / "+ genero +" / "+ ddd1 +" / "+ cel +" / "+ ddd2 +" / "+ tel);*/

function enviarDadosPj() {
  /*if (validaSenha("senha_d2")) {
    alert("Senha válida!");
  } else {
    alert("Erro: Senha deve conter no mínimo 8 digitos!");
  }
  if (validaSenha("conf_senha_d2")) {
    alert("Senha válida!");
  } else {
    alert("Erro: Senha deve conter no mínimo 8 digitos!");
  }
  if (comparaSenha()) {
    alert("Senhas válidas!");
  } else {
    alert("Erro: Senhas erradas!");
  }*/

  var empresa = document.getElementById("empresa_pj").value;
  var responsavel = document.getElementById("resp_pj").value;
  var cnpj = document.getElementById("cnpj_pj").value;
  var uf = document.getElementById("uf_pj").value;
  var icms = document.getElementById("icms_pj").value;
  var ie = document.getElementById("ie_pj").value;
  var ddd1 = document.getElementById("ddd1_pj").value;
  var cel = document.getElementById("cel_pj").value;
  var ddd2 = document.getElementById("ddd2_pj").value;
  var tel = document.getElementById("tel_pj").value;
  var pemail = document.getElementById("pemail_pj").value;
  var pcel = document.getElementById("pcel_pj").value;

  /*alert(empresa +" / "+ responsavel +" / "+ cnpj +" / "+ uf +" / "+ icms +" / "+ ie +" / "+ ddd1 +" / "+ cel +" / "+ ddd2 +" / "+ tel +" / "+ pemail +" / "+ pcel,);*/
}

function mostraSenha1(id) {
  $("#" + id).hide();
  $("#pass_oculta1").show();
  document.getElementById("senha_d2").type = "text";
}

function ocultaSenha1(id) {
  $("#" + id).hide();
  $("#pass_mostra1").show();
  document.getElementById("senha_d2").type = "password";
}

function mostraSenha2(id) {
  $("#" + id).hide();
  $("#pass_oculta2").show();
  document.getElementById("conf_senha_d2").type = "text";
}

function ocultaSenha2(id) {
  $("#" + id).hide();
  $("#pass_mostra2").show();
  document.getElementById("conf_senha_d2").type = "password";
}
