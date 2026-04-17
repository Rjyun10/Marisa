function mostraPj(id) {
  $(".form1, .cadastro_box3").hide();
  $(".form1_1, .termo_cnpj").show();
}

function mostraPf(id) {
  $(".form1, .cadastro_box3").show();
  $(".form1_1, .termo_cnpj").hide();
}

function enviarDadosCpf() {
  var nome = document.getElementById("nome_cpf").value;
  var data = document.getElementById("data_cpf").value;
  var cpf = document.getElementById("cpf_cpf").value;
  var genero = document.getElementById("genero_cpf").value;
  var ddd1 = document.getElementById("ddd1_cpf").value;
  var cel = document.getElementById("cel_cpf").value;
  var ddd2 = document.getElementById("ddd2_cpf").value;
  var tel = document.getElementById("tel_cpf").value;
  /*alert(nome +" / "+ data +" / "+ cpf +" / "+ genero +" / "+ ddd1 +" / "+ cel +" / "+ ddd2 +" / "+ tel);*/
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
  /*alert(empresa +" / "+ responsavel +" / "+ cnpj +" / "+ uf +" / "+ icms +" / "+ ie +" / "+ ddd1 +" / "+ cel +" / "+ ddd2 +" / "+ tel +" / "+ pemail +" / "+ pcel,);*/
}

function enviarDados2() {
  var email = document.getElementById("email_d2").value;
  var token = document.getElementById("token_d2").value;
  var senha = document.getElementById("senha_d2").value;
  var conf_senha = document.getElementById("conf_senha_d2").value;
  /*alert(email + " / " + token + " / " + senha + " / " + conf_senha);*/
}
