<?php
    require_once("conexao/conexao.php");
    require_once("classes/class_estados.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="imagens/logopag.jpg" sizes="32x32" type="image/x-icon">
    <style type="text/css">@import url("css/config_ini.css");</style>
    <style type="text/css">@import url("css/cadastro.css");</style>
    <script type="text/javascript" src="js/jquery_4_0.js"></script>
    <script type="text/javascript" src="js/cadastro.js"></script>
    <script type="text/javascript" src="js/mascara.js"></script>
    <title>Marisa - Cadastro</title>
</head>
<body>

    <?php include("includes/topo.php");?>

    <div class="cadastro">
        <div class="cadastro_box">
            <div class="cadastro_box1">
                <h3>Quer se cadastrar?</h3>
                <label>Por favor preencha os campos abaixo, vai ser rapidinho</label>
                    <div class="box_form">
                        <span><input type="radio" name="pessoa" class="inp_radio" checked="" id="inp_pf" onclick="mostraPf(this.id);"/>Pessoa Física</span>
                        <span><input type="radio" name="pessoa" class="inp_radio" id="inp_pj" onclick="mostraPj(this.id);"/>Pessoa Jurídica</span>
                    </div>
                <form action="" method="" class="form1">
                    <div class="box_form">
                        <b>Nome completo *</b>
                        <input type="text" name="login" placeholder="Informe seu nome" class="inp_cad1" id="nome_cpf" />
                    </div>
                    <div class="box_form">
                        <div class="box_form_nasc">
                            <b>Data de nescimento*</b>
                            <input type="text" name="dtnasc" placeholder="00/00/0000" maxlength="10" class="inp_cad2" id="data_cpf" id="masc_dtnasc" onkeyup="mascaraData(this.id);"/>
                        </div>
                        <div class="box_form_cpf">
                            <b>CPF *</b>
                            <input type="text" name="login" placeholder="000.000.000-00" maxlength="14" class="inp_cad3" id="cpf_cpf" id="masc_cpf" onkeyup="mascaraCpf(this.id)"/>
                        </div>
                    </div>
                    <div class="box_form">
                        <b class="subtit1">Gênero *</b>
                        <span><input type="radio" name="genero" class="inp_radio" id="genero_cpf" value="Masculino"/>Masculino</span>
                        <span><input type="radio" name="genero" class="inp_radio" id="genero_cpf" value="Feminino"/>Feminino</span>
                        <span><input type="radio" name="genero" class="inp_radio" id="genero_cpf" value="Não informar"/>Não informar</span>
                    </div>
                    <div class="box_form">
                        <div class="box_form_ddd1">
                            <b>DDD *</b>
                            <input type="text" name="ddd1" placeholder="(00)" maxlength="2" class="inp_cad4" id="ddd1_cpf" id="masc_ddd1" onkeyup="mascaraDdd1(this.id)"/>
                        </div>
                        <div class="box_form_celular">
                            <b>Celular *</b>
                            <input type="text" name="celular" placeholder="00000 - 0000" maxlength="10" class="inp_cad5" id="cel_cpf" id="masc_cel" onkeyup="mascaraCel(this.id)"/>
                        </div>
                        <div class="box_form_ddd2">
                            <b>DDD *</b>
                            <input type="text" name="ddd2" placeholder="(00)" maxlength="4" class="inp_cad4" id="ddd2_cpf" id="masc_ddd2" onkeyup="mascaraDdd2(this.id)"/>
                        </div>
                        <div class="box_form_tel">
                            <b>Telefone *</b>
                            <input type="text" name="tel" placeholder="0000 - 0000" maxlength="9" class="inp_cad5" id="tel_cpf" id="masc_tel" onkeyup="mascaraTel(this.id)"/>
                        </div>
                    </div>
                </form>
                <form action="" method="" class="form1_1">
                    <div class="box_form">
                        <b>Nome da Empresa *</b>
                        <input type="text" name="nome_emp" placeholder="" class="inp_cad1" id="empresa_pj"/>
                    </div>
                    <div class="box_form">
                        <b>Responsável *</b>
                        <input type="text" name="nome_resp" placeholder="" class="inp_cad1" id="resp_pj"/>
                    </div>
                    <div class="box_form">
                        <b>CNPJ *</b>
                        <input type="text" name="cnpj" placeholder="" class="inp_cad1" id="cnpj_pj"/>
                    </div>
                    <div class="box_form">
                        <div class="box_form_uf">
                            <b>UF *</b>
                            <select class="inp_cad6" id="uf_pj">
                                <?php
                                    $consultaUf = new selecionaEstados();
                                    while($retornaUf = mysqli_fetch_array($consultaUf->executa)){
                                ?>
                                    <option value="<?php echo $retornaUf['sigla'];?>"><?php echo $retornaUf['nome'];?></option>
                                <?php
                                    }
                                ?>
                            </select>
                        </div>
                        <div class="box_form_trib">
                            <b>Situação tributária (ICMS) *</b>
                            <select class="inp_cad7" id="icms_pj">
                                <option value="Isento">Isento</option>
                                <option value="Contribuinte de ICMS">Contribuinte de ICMS</option>
                                <option value="Não Contribuinte de ICMS">Não Contribuinte de ICMS</option>
                            </select>
                        </div>
                    </div>
                    <div class="box_form">
                        <b>Inscrição Estadual *</b>
                        <input type="text" name="ie" placeholder="" class="inp_cad1" id="ie_pj"/>
                    </div>
                    <div class="box_form">
                        <div class="box_form_ddd1">
                            <b>DDD *</b>
                            <input type="text" name="ddd1_1" placeholder="(00)" class="inp_cad4" id="ddd1_pj"/>
                        </div>
                        <div class="box_form_celular">
                            <b>Celular *</b>
                            <input type="text" name="celular1" placeholder="0000 - 0000" class="inp_cad5" id="cel_pj"/>
                        </div>
                        <div class="box_form_ddd2">
                            <b>DDD *</b>
                            <input type="text" name="ddd2_1" placeholder="(00)" class="inp_cad4" id="ddd2_pj"/>
                        </div>
                        <div class="box_form_tel">
                            <b>Telefone *</b>
                            <input type="text" name="tel1" placeholder="0000 - 0000" class="inp_cad5" id="tel_pj"/>
                        </div>
                    </div>
                </form>
            </div>
            <div class="cadastro_box2">
                <form action="" method="" class="form2">
                    <div class="box_form">
                        <b>E-mail *</b>
                        <input type="text" name="email" placeholder="Informe o e-mail" class="inp_cad1" id="email_d2"/>
                    </div>
                    <div class="box_form">
                        <span class="bt_token" onclick="enviarDados2();">Receber token de cadastro</span>
                        <label class="txt_token">O token será enviado por e-mail/SMS*</label>
                    </div>
                    <div class="box_form">
                        <b>Token *</b>
                        <input type="text" name="token" placeholder="Informe seu token de cadastro" class="inp_cad1" id="token_d2"/>
                    </div>
                    <div class="box_form">
                        <b>Senha *</b>
                        <input type="text" name="senha" placeholder="Insira a senha" class="inp_cad1" id="senha_d2"/>
                        <div class="box_bt_mostrar">
                            <img src="imagens/eye-slash.png" alt="Mostra Senha" class="bt_mostra_senha" />
                        </div>
                    </div>
                    <div class="box_form">
                        <b>Confirmar Senha *</b>
                        <input type="text" name="senha2" placeholder="Insira a senha novamente" class="inp_cad1" id="conf_senha_d2"/>
                        <div class="box_bt_mostrar">
                            <img src="imagens/eye-slash.png" alt="Mostra Senha" class="bt_mostra_senha" />
                        </div>
                    </div>
                </form>
            </div>
            <div class="cadastro_box3">
                <input type="checkbox" class="inp_ck_termos" />
                <label> Li, compreendi e concordo com as <a href="">Condições Gerais</a>, inclusive quanto à proteção de dados pessoais, suas finalidades e hipóteses de tratamento de acordo com a nossa <a href="">Política de Privacidade</a>. Autorizo também o recebimento de e-mails promocionais da Marisa.</label>
                <span class="bt_finaliza" onclick="enviarDadosCpf();">Finalizar Cadastro</span>
            </div>
                <div class="termo_cnpj">
                    <h2>Ofertas</h2>
                    <hr />
                    <label>Deseja receber um boletim com novidades e promoções da Marisa?</label>
                    <span><input type="checkbox" name="pemail" id="pemail_pj"/>Por E-mail</span>
                    <span><input type="checkbox" name="pcelular" id="pcel_pj"/>Por Celular</span>
                    <span class="bt_finaliza" onclick="enviarDadosPj();">Finalizar Cadastro</span>
                </div>
            </div>
        </div>
    </div>

    <?php include("includes/rodape.php");?>

</body>
</html>