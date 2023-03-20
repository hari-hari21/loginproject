<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up Form by Colorlib</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="../css/login.css">
</head>
<body>

    <div class="main">

        <!-- Sign up form -->
        <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title"> Profile </h2>
                        
                    <?php

$servername = "localhost";
$username = "root";
$password = "Hari21122002";
$dbname = "hariinfo";
$mysqli = new mysqli($servername, $username, $password, $dbname);
if($mysqli->connect_error) {
  exit('Could not connect');
}
$sql="SELECT * from register where fname=?";
$stmt = $mysqli->prepare($sql);

$stmt->bind_param("s",$_POST["name"]);
$stmt->execute();

$result = $stmt->get_result();

while($row = $result->fetch_assoc()) {
    echo " <b> Hello </b> ". $row["fname"]."<br>";
    echo " <b> Mail Id  </b> ".$row["mail"]. " <br>";
   }
?>
                         
                    </div>
                    <div class="signup-image">
                        <figure><img src="../assets/signup-image.jpg" alt="sing up image"></figure>
                        <a href="../login.html" class="signup-image-link"> <b>I am already member </b> </a>
                    </div>
                </div>
            </div>
        </section>


    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>