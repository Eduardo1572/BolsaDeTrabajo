<?php
header('Content-Type: application/json');
$conn = new mysqli("localhost", "root", "", "formulario");
if ($conn->connect_error) {
    echo json_encode(["ok" => false, "error" => $conn->connect_error]);
    exit;
}

$nombres    = $_POST['nombres']    ?? '';
$apellidos  = $_POST['apellidos']  ?? '';
$fecha      = $_POST['fecha_nacimiento'] ?: date('Y-m-d');
$curp       = $_POST['curp']       ?? '';
$genero     = $_POST['genero']     ?? '';
$civil      = $_POST['estado_civil'] ?? '';
$correo     = $_POST['correo']     ?? '';
$telefono   = $_POST['telefono']   ?? '';

// Insertar dirección mínima (id_colonia=1 por defecto)
$conn->query("INSERT INTO direccion (calle_y_numero, id_colonia) VALUES ('" . $conn->real_escape_string($_POST['ciudad'] ?? '') . "', 1)");
$id_dir = $conn->insert_id;

$stmt = $conn->prepare(
  "INSERT INTO aspirante (nombres, apellidos, fecha_nacimiento, curp, genero, estado_civil, correo, telefono, id_direccion)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
);
$stmt->bind_param("ssssssssi", $nombres, $apellidos, $fecha, $curp, $genero, $civil, $correo, $telefono, $id_dir);

if ($stmt->execute()) {
    echo json_encode(["ok" => true]);
} else {
    echo json_encode(["ok" => false, "error" => $stmt->error]);
}
$conn->close();
?>