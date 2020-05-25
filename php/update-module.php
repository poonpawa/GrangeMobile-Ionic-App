<?php
session_start();
/*
 * Following code will list all the modules on a course
 */

//Enable cross domain Communication - Beware, this can be a security risk 
header('Access-Control-Allow-Origin: *');

// array for JSON response
$response = array();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "collegeData";

//Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
//Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_REQUEST['id'];

$sql = "UPDATE moduletable SET Enrolled='1' WHERE moduleNo='$id'";
$conn->query($sql);
if ($conn ->affected_rows === 1) {
    $response = true;
  } else {
    $response = true;
  }
  print (json_encode($response));
?>

