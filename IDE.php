<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles2.css">
	<script src="script.js"></script>
	<title>Visual IDE</title>
</head>
<body>

	<?php require_once 'header.php'; ?>

	<div class="container">

		<h1 class="light" style="color: aquamarine">Code Blocks</h1>
		<!-- a div / block for 'for' block -->
		<div id="for" class="draggable" draggable="true" >for</div>
		<!-- if block -->
		<div id="if" class="draggable" draggable="true" >if</div>
		<!-- else if -->
		<div id="elif" class="draggable" draggable="true" >else if</div>
		<!-- else -->
		<div id="else" class="draggable" draggable="true" >else</div>
		<!-- defining variable -->
		<div id="assign" class="draggable" draggable="true" >var assign</div>
		<!-- while loop -->
		<div id="while" class="draggable" draggable="true" >while</div>
		<!-- Function creation -->
		<div id="function" class="draggable" draggable="true" >function creation</div>
		<!-- Arithematic Operations -->
		<div id="add" class="draggable" draggable="true" >Add</div>
		<div id="sub" class="draggable" draggable="true" >Subtract</div>
		<div id="mult" class="draggable" draggable="true" >Multiply</div>
		<div id="divide" class="draggable" draggable="true" >Divide</div>
		<!-- Reading file -->
		<div id="Readfile" class="draggable" draggable="true">Read File</div>
		<div id="Writefile" class="draggable" draggable="true">Write File</div>

	</div>

	<div class="program">
		<h1 style="color: aquamarine;">Program</h1>
		
	</div>
</body>
</html>
