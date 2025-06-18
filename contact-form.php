<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $firstName = htmlspecialchars($_POST['firstName'] ?? '');
    $lastName = htmlspecialchars($_POST['lastName'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (!$firstName || !$lastName || !$email || !$phone || !$message) {
        http_response_code(400);
        echo json_encode(["error" => "All fields are required."]);
        exit;
    }

    $to = "elkarshomestay@gmail.com";
    $subject = "New Inquiry from Elkar Website";
    $body = "
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> {$firstName} {$lastName}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Message:</strong><br/>{$message}</p>
    ";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: Elkar Website <noreply@{$_SERVER['SERVER_NAME']}>\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["message" => "Thanks for reaching out! We'll get back to you soon."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Email failed to send"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Invalid request method"]);
}
?>
