<?php
	$servername = "localhost:3306";
	$username = "root";
	$password = "";
	$database = "registro";
	$conn = mysqli_connect($servername, $username, $password, $database);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
	<link rel="stylesheet" href="http://localhost/ejemplo/Resposteria/Css/portada.css">
</head>
<body>

<div class="container">
    <h1>Inicio de sesion</h1>
    <form action="#" name="login_form" method="POST">
        <div class="form-group">
            <label for="usuario_ini">Usuario*</label>
            <input type="text" name="usuario_ini" id="usuario_ini" placeholder="Enter your Usename"required>
        </div>
        <div class="form-group">
            <label for="contrasena_ini">Contraseña*</label>
            <input type="password" name="contrasena_ini" id="contrasena_ini" placeholder="Enter your Password"required>
        </div>

        <div class="button-container">
    		<button type="submit" name="solo" formaction="#">Enter</button>
    		
		</div>
		<div class="link-container">
			<p ><a href="indexR.php">No tienes una cuenta?</a></p>
    		<p ><a href="#">Olvidaste tu contraseña?</a></p>
		</div>
		
		<?php if(!empty($error)){?>
			<p style="color: red;"><?php echo $error;?></p>
		<?php }?>
		
    </form>
	
</div>

</body>
</html>
<?php
	if(isset($_POST[ 'solo'])){
		$usuario_ini = $_POST['usuario_ini'];
		$contrasena_ini = $_POST['contrasena_ini'];

		// Check if the user exists in the database
		$query = "SELECT * FROM registro WHERE nombre = '$usuario_ini' AND contraseña = '$contrasena_ini'";
		$result = mysqli_query($conn, $query);

		if (mysqli_num_rows($result) > 0) {
			header('Location: pagina.php'); // Redirigir a otro archivo PHP
        	exit;
		} else {
			$error = "Usuario o contraseña incorrectos";
		}
	}
	
?>