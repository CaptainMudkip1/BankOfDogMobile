<html>
<head>
  <script src="index.js"></script>
  <title>Grade Calculator</title>
  <link rel="shortcut icon" href="/img/favicon.png" />
</head>
<body>
<form method="POST">
  <label for="earned">Earned points:</label>
  <input type="number" id="earned" name="earned"><br>
  <label for="total">Total points:</label>
  <input type="number" id="total" name="total"><br>
  <input type="submit" value="Calculate">
</form>
<?php
if (isset($_POST["earned"]) && isset($_POST["total"])) {
    echo '<script>CALC(' . $_POST["earned"] . ', ' . $_POST["total"] . ')</script>';
}
?>
</body>
