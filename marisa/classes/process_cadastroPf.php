<?php
    require_once("../conexao/conexao.php");
    require_once("../classes/class_cadastros.php");

    $nome = $_POST['nome'];
    $dtnasc = $_POST['dtnasc'];
    $cpf = $_POST['cpf'];
    $genero = $_POST['genero'];
    $ddd1 = $_POST['ddd1'];
    $cel = $_POST['cel'];
    $ddd2 = $_POST['ddd2'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $token = $_POST['token'];
    $senha = $_POST['senha'];

    $cadastra = new cadastraUsuarioPf($nome, $dtnasc, $cpf, $genero, $ddd1, $cel, $ddd2, $tel, $email, $token, $senha);

    if($cadastra->error){
        echo "Ocorreu um errro ao cadastrar o usuário! ERRO: ".$cadastra->error;
    }else{
        echo "Cadastro realisado com sucesso!";
    }

    echo $nome." / ".$dtnasc." / ".$cpf." / ".$genero." / ".$ddd1." / ".$cel." / ".$ddd2." / ".$tel." / ".$email." / ".$token." / ".$senha;
?>