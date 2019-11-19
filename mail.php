<?php
$result = array();

if (empty($result['error'])) {
    $name = protection($_POST['name']);
    $email = protection($_POST['email']);
    $text = protection($_POST['text']);
    $mes = protection($_POST['mes']);
    $to .= "info@acina.eu" . ', ';
    $to .= "a.kireychik@ashwood.by";

    $subject = 'Acina';

    $message = '
        <html>
            <head>
                <title>Notice from the site Acina</title>
            </head>
            <body>
                <h3>Notice from the site Acina</h3>
                <p><b>Name:</b> ' . $name . '</p>
                <p><b>Email:</b> ' . $email . '</p>
                <p><b>Subject:</b> ' . $text . '</p>
                <p><b>Message:</b> ' . $mes . '</p>
            </body>
        </html>';

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: info@acina.eu';

    mail($to, $subject, $message, implode("\r\n", $headers));


    $result['success'] = true;
    $result['message'] = $info[$_POST['title']];
}

echo json_encode($result);

function protection($value)
{
    $result = htmlspecialchars($value);
    $result = urldecode($result);
    $result = trim($result);

    return $result;
}