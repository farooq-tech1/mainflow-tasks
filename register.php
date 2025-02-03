<?php
if (isset($_POST['register'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Encrypt the password
    $hashedPassword = password_hash(password: $password, algo: PASSWORD_DEFAULT);

    // Connect to the database
    $servername = "localhost";
    $usernameDb = "root";
    $passwordDb = "";
    $dbname = "logindb";
    
    $conn = new mysqli(hostname: $servername, username: $usernameDb, password: $passwordDb, database: $dbname);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare SQL to insert new user
    $sql = "INSERT INTO login(username, password) VALUES (?, ?)";
    $stmt = $conn->prepare(query: $sql);
    $stmt->bind_param("ss", $username, $hashedPassword);
    
    if ($stmt->execute()) {
        echo "Registration successful!";
        header(header: "Location: login.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $conn->close();
}
?>
