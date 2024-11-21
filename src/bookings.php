<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "trakai";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle POST request for new booking
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $date = $_POST['date'];
    $time = $_POST['time'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $notes = $_POST['notes'];

    $sql = "INSERT INTO bookings (date, time, name, email, phone, notes) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $date, $time, $name, $email, $phone, $notes);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Booking successful"]);
    } else {
        echo json_encode(["success" => false, "message" => "Booking failed"]);
    }

    $stmt->close();
    $conn->close();
}
?>
