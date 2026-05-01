function mostraPj(id) {
  $(".form1, .cadastro_box3").hide();
  $(".form1_1, .termo_cnpj").show();
}

function mostraCpf(id) {
  $(".form1, .cadastro_box3").show();
  $(".form1_1, .termo_cnpj").hide();
}

function enviarDadosCpf() {
  if (
    validaNomeCpf("nome_cpf") &&
    validarData("data_cpf") &&
    validarCpf("cpf_cpf") &&
    validaGenero("genero_cpf") &&
    validaDdd("ddd2_cpf") &&
    validaCel1("cel_cpf") &&
    validaDdd("ddd2_cpf") &&
    validaTel1("tel_cpf") /*&&
    validaEmail("email_d2") &&
    validaToken("token_d2") &&
    validaSenha("senha_d2") &&
    validaSenha("conf_senha_d2") &&
    comparaSenha() &&
    validaTermoCpf("check_termo")*/
  ) {
    var nome = document.getElementById("nome_cpf").value;
    var data = document.getElementById("data_cpf").value;
    var cpf = document.getElementById("cpf_cpf").value;
    var gen_m = document.getElementById("genero_m_cpf").value;
    var gen_f = document.getElementById("genero_f_cpf").value;
    var gen_nf = document.getElementById("genero_nf_cpf").value;
    if (document.getElementById("genero_m_cpf").checked == true) {
      var genero = "Masculino";
    } else if (document.getElementById("genero_f_cpf").checked == true) {
      var genero = "Feminino";
    } else genero = "Não definido";
    var ddd1 = document.getElementById("ddd1_cpf").value;
    var cel = document.getElementById("cel_cpf").value;
    var ddd2 = document.getElementById("ddd2_cpf").value;
    var tel = document.getElementById("tel_cpf").value;
    var email = document.getElementById("email_d2").value;
    var token = document.getElementById("token_d2").value;
    var senha = document.getElementById("senha_d2").value;
    var conf_senha = document.getElementById("conf_senha_d2").value;
    var termo = document.getElementById("check_termo").value;
    enviaDadosCpf(
      nome,
      data,
      cpf,
      genero,
      ddd1,
      cel,
      ddd2,
      tel,
      email,
      token,
      senha,
      conf_senha,
      termo,
    );
  }
}

function enviaDadosCpf(
  nome,
  data,
  cpf,
  genero,
  ddd1,
  cel,
  ddd2,
  tel,
  email,
  token,
  senha,
  conf_senha,
  termo,
) {
  $.ajax({
    url: "http://localhost/marisa/classes/process_cadastroPf.php",
    type: "post",
    dataType: "html",
    data: {
      nome: nome,
      data: data,
      cpf: cpf,
      genero: genero,
      ddd1: ddd1,
      cel: cel,
      ddd2: ddd2,
      tel: tel,
      email: email,
      token: token,
      senha: senha,
      conf_senha: conf_senha,
      termo: termo,
    },
    beforeSend: function () {},
    success: function (result) {
      $("#retorno_cpf").html(result);
    },
    error: function (result) {
      $("#retorno_cpf").html(result);
    },
  });
}

function enviarDadosPj() {
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
