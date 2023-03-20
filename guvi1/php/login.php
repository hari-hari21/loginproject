<?php

$servername = "localhost";
$username = "root";
$password = "Hari21122002";
$dbname = "hariinfo";
$mysqli = new mysqli($servername, $username, $password, $dbname);
if($mysqli->connect_error) {
  exit('Could not connect');
}
$sql="SELECT fname from register where pass=?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s",$_POST["pass"]);
$stmt->execute();
$re=false;

$result = $stmt->get_result();

while($row = $result->fetch_assoc()) {
   if($row["fname"]==$_POST["name"]){
  $re=true;
   }
  }
if($re==true  ){

    header("Location: ..\profile.html");
}
else{
  sleep(1);
    echo '<script>alert("something went wrong please try again")</script>'; 
    sleep(1);
    header("Location: ..\login.html");
}
?>