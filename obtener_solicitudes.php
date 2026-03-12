<?php
header('Content-Type: application/json');

$conn = new mysqli("localhost", "root", "", "formulario");

if ($conn->connect_error) {
    echo json_encode(["ok" => false, "error" => $conn->connect_error]);
    exit;
}

$result = $conn->query("
    SELECT 
        a.id_aspirante,
        a.nombres,
        a.apellidos,
        a.correo,
        a.telefono,
        p.nombre_puesto,
        a.fecha_nacimiento
    FROM aspirante a
    JOIN experiencia e ON a.id_aspirante = e.id_aspirante
    JOIN puesto p ON e.id_puesto = p.id_puesto
");

if ($result) {
    $aspirantes = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode(["ok" => true, "data" => $aspirantes]);
} else {
    echo json_encode(["ok" => false, "error" => $conn->error]);
}

$conn->close();
?>