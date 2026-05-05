<?php
    class cadastraUsuarioPf extends conexao{
        function __construct($nome, $dtnasc, $cpf, $genero, $ddd1, $cel, $ddd2, $tel, $email, $token, $senha){
            parent :: conection();
            $this -> sql = "INSERT INTO usuario_pf(nome, dtnasc, cpf, genero, ddd1, cel, ddd2, tel, email, token, senha) VALUES('$nome', '$dtnasc', '$cpf', '$genero', '$ddd1', '$cel', '$ddd2', '$tel', '$email', '$token', '$senha')";
            $this -> executa = mysqli_query($this -> conectar, $this -> sql);
            $this -> error = mysqli_error($this -> conectar);
        }
    }
?>