<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="imagens/logopag.jpg" sizes="32x32" type="image/x-icon">
    <style type="text/css">@import url(css/config_ini.css);</style>
    <style type="text/css">@import url(css/login.css);</style>
    <script type="text/javascript" src="js/jquery_4_0.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
    <title>Marisa - Login</title>
</head>
<body>

    <?php include("includes/topo.php");?>

    <div class="login">
        <form action="" method="" class="formulario">
            <h3>Faça seu login</h3>
            <label>E-mail ou CPF *</label>
            <input type="text" name="login" placeholder="Informe e-mail ou CPF" class="inp_login" id="email_login"/>
            <label>Senha *</label>
            <input type="text" name="senha" placeholder="Informe senha" class="inp_senha" id="senha_login"/>
            <a href="" class="link_esqueceu">Esqueceu sua senha?</a>
            <input type="submit" value="Entrar" class="bt_entrar" onclick="enviarDadosLogin()"/>
            <b class="cria_conta">Ainda não tem um cadastro? <a href="cadastro.php">Crie sua conta<a></b>
        </form>
    </div>

    <?php include("includes/rodape.php");?>

</body>
</html>