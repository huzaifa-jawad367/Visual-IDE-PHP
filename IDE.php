<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css" integrity="sha512-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" crossorigin="anonymous" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.bundle.min.js" integrity="sha512-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" crossorigin="anonymous" defer></script>
	<link rel="stylesheet" href="styles.css"/>
	<script src="script.js"></script>
	<title>Document</title>
</head>
<body>

	<?php require_once 'header.php'; ?>

	<div class="container">

		<h1 class="light">Code Blocks</h1>

		<!-- a div / block for 'for' block -->
		<div class="draggable" draggable="true">
			for <form action="GET" style="display: inline">
			<input type="text" style="display: inline">
			= <input type="number" style="display: inline">
			; <input type="text" style="display: inline">
			; i++</form>
		</div>
		<br>

		<!-- if block -->
		<div class="draggable" draggable="true">
			if <form action="GET" style="display: inline">
			<input type="text" style="display: inline">
		</div>
		<br>

		<!-- else if -->
		<div class="draggable" draggable="true">
			else if <form action="GET" style="display: inline">
			<input type="text" style="display: inline">
		</div>
		<br>

		<!-- else -->
		<div class="draggable" draggable="true">
			else <form action="GET" style="display: inline">
			<input type="text" style="display: inline">
		</div>
		<br>
	</div>

	<div class="container program">
		<h1>Program</h1>
		<!-- defining variables -->
		<div class="draggable" draggable="true">
			<form action="GET" style="display: inline">
			<input type="text" style="display: inline"> = <input type="text" style="display: inline">
		</div>
	</div>
</body>
</html>
