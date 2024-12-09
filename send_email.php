<?php
// Controlla se il modulo è stato inviato
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera i dati dal modulo
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Imposta i dettagli dell'email
    $to = "ghiirottiroberto@gmail.com"; // Sostituisci con il tuo indirizzo email
    $subject = "Messaggio dal tuo sito web";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Corpo dell'email
    $body = "Hai ricevuto un nuovo messaggio dal modulo di contatto:\n\n";
    $body .= "Nome: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Messaggio:\n$message\n";

    // Invia l'email
    if (mail($to, $subject, $body, $headers)) {
        echo "Messaggio inviato con successo!";
    } else {
        echo "Errore durante l'invio del messaggio. Riprova.";
    }
} else {
    echo "Metodo non supportato.";
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Indirizzo email non valido.");
}
if (strlen($message) < 10) {
    die("Il messaggio deve contenere almeno 10 caratteri.");
}


?>
