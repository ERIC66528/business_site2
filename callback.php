<?php
$data = file_get_contents('php://input');
file_put_contents('callback_response.json', $data);
?>
