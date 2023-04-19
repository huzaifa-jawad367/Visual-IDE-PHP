function generateCompleteCodeBlock(block){
    if (block.id === "for") {
        loop_variable = prompt("Enter the loop varible: ");
        init = prompt("enter initial value")
        exit_condition = prompt("Exit condition: ");
        inc_dec = prompt("Enter i++ or i--");
        block.innerHTML += " " + loop_variable + " = " + init + "; " + exit_condition + "; " + inc_dec;
    } else if (block.id === "if") {
        condition = prompt("Enter the if condition");
        block.innerHTML += " " + condition;
    } else if (block.id == "elif") {
        condition = prompt("Enter the else if condition");
        block.innerHTML += " " + condition;
    } else if (block.id == "assign") {
        variable = prompt("enter the name of the variable:");
        val = prompt("Enter variable value: ");
        block.innerHTML = variable + " = " + val;
    } else if (block.id == "while") {
        condition = prompt("Enter the while condition");
        block.innerHTML += " (" + condition + ")";
    } else if (block.id == "function") {
        fname = prompt("Function name: ");
        block.innerHTML = "function "+ fname + "()";
    } else if (block.id === "add") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        assign_to = prompt("variable name: ");
        block.innerHTML = assign_to + " = " + val1 + " + " + val2;
    } else if (block.id === "sub") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        assign_to = prompt("variable name: ");
        block.innerHTML = assign_to + " = " + val1 + " - " + val2;
    } else if (block.id === "mult") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        assign_to = prompt("variable name: ");
        block.innerHTML = assign_to + " = " + val1 + " * " + val2;
    } else if (block.id === "divide") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        assign_to = prompt("variable name: ");
        block.innerHTML = assign_to + " = " + val1 + " / " + val2;
    } else if (block.id === "Readfile") {
        file_name = prompt("File name:");
        block.innerHTML += " " + file_name;
    } else if (block.id === "Writefile") {
        file_name = prompt("File name:");
        block.innerHTML += " " + file_name;
    }
}

const draggable = document.querySelectorAll('.draggable');
const program = document.querySelector('.program');

// Prevent default behavior for dragover and drop events
program.addEventListener('dragover', (event) => {
	event.preventDefault();
});

program.addEventListener('drop', (event) => {
	event.preventDefault();
	
	// Get the ID of the dragged element
	let draggedElementId = event.dataTransfer.getData('text/plain');
	let draggedElement = document.getElementById(draggedElementId);
	
	// Clone the dragged element and append it to the drop target
	let clonedElement = draggedElement.cloneNode(true);
    program.appendChild(document.createElement("div"));
    generateCompleteCodeBlock(clonedElement);
	program.appendChild(clonedElement);
});

// Set the ID of the dragged element
draggable.forEach((element) => {
	element.addEventListener('dragstart', (event) => {
		event.dataTransfer.setData('text/plain', event.target.id);
	});
});


