<?php


$servername = "localhost";
$username = "root";
$password = "Hari21122002";
$dbname = "hariinfo";
$mysqli = new mysqli($servername, $username, $password, $dbname);
if($mysqli->connect_error) {
  exit('Could not connect');
}
$sql="INSERT INTO register values(?,?,?,?)";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("ssss",$_POST["name"],$_POST["email"],$_POST["pass"],$_POST["re_pass"]);
$stmt->execute();
$stmt->store_result();
echo '<script>alert("Registered succssfully")</script>'; 
header("Location: ..\index.html");

?>