<?php
session_start();

// Session timeout logic
$sessionTimeout = 1800; // 30 minutes in seconds
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity']) > $sessionTimeout) {
    session_unset();
    session_destroy();
    header(header: "Location: login.html");
    exit();
}
$_SESSION['last_activity'] = time();

// Connect to the database
$servername = "localhost";
$username = "root"; // XAMPP default
$password = ""; // XAMPP default
$dbname = "logindb";

$conn = new mysqli(hostname: $servername, username: $username, password: $password, database: $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['login'])) {
    $inputUsername = $_POST['username'];
    $inputPassword = $_POST['password'];

    // Prepare SQL query to fetch user by username
    $sql = "SELECT * FROM login WHERE username = ?";
    $stmt = $conn->prepare(query: $sql);
    $stmt->bind_param("s", $inputUsername);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Fetch user data
        $user = $result->fetch_assoc();
        
        // Verify password
        if (password_verify(password: $inputPassword, hash: $user['password'])) {
            // Password is correct, start session and redirect
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];
            header(header: "Location: mainflowtask2.html"); // Redirect to dashboard page
            exit();
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with this username!";
    }
}

$conn->close();
?>
