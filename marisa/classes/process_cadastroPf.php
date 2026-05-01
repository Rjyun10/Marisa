<?php
    $nome = $_POST['nome'];
    $data = $_POST['data'];
    $cpf = $_POST['cpf'];
    $genero = $_POST['genero'];
    $ddd1 = $_POST['ddd1'];
    $cel = $_POST['cel'];
    $ddd2 = $_POST['ddd2'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $token = $_POST['token'];
    $senha = $_POST['senha'];
    $conf_senha = $_POST['conf_senha'];
    $termo = $_POST['termo'];
    echo $nome." / ".$data." / ".$cpf." / ".$genero." / ".$ddd1." / ".$cel." / ".$ddd2." / ".$tel." / ".$email." / ".$token." / ".$senha." / ".$conf_senha." / ".$termo;
?>