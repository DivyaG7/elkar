<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = htmlspecialchars($_POST['email'] ?? '');
    $agreed = $_POST['agreed'] ?? '';

    if (!$email || $agreed !== 'true') {
        http_response_code(400);
        echo json_encode(["error" => "Please agree to the terms & policies."]);
        exit;
    }

    $to = "elkarshomestay@gmail.com";
    $subject = "New Newsletter Subscriber";
    $body = "
        <h3>New Newsletter Subscription</h3>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Agreed to Terms:</strong> Yes</p>
    ";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Elkar Website <noreply@{$_SERVER['SERVER_NAME']}>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "You're subscribed to our newsletter!"]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send subscription email"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Invalid request method"]);
}
?>
