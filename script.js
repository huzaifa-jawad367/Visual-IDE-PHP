function generateCompleteCodeBlock(block){
    if (block.id === "for") {
        loop_variable = prompt("Enter the loop varible: ");
        init = prompt("enter initial value")
        exit_condition = prompt("Exit condition: ");
        exit_condition = exit_condition.replace(loop_variable, "$"+loop_variable)
        inc_dec = prompt("Enter ++ or --");
        block.innerHTML += " ($" + loop_variable + " = " + init + "; " + exit_condition + "; " + "$"+loop_variable + inc_dec + ")";
    } else if (block.id === "if") {
        condition = prompt("Enter the if condition (Enter '$' before variable name)");
        block.innerHTML += " " + condition;
    } else if (block.id == "elif") {
        condition = prompt("Enter the else if condition (Enter '$' before variable name)");
        block.innerHTML += " " + condition;
    } else if (block.id == "assign") {
        variable = prompt("enter the name of the variable:");
        val = prompt("Enter variable value: (Enter '$' before variable name incase of variable)");
        block.innerHTML = "$" + variable + " = " + val;
    } else if (block.id == "while") {
        condition = prompt("Enter the while condition (Enter '$' before variable name)");
        block.innerHTML += " (" + condition + ")";
    } else if (block.id == "function") {
        fname = prompt("Function name: ");
        numOfParameters = parseInt(prompt("Enter the number a parameters"));
        block.innerHTML = "function "+ fname + "(";
        for (i=0; i<numOfParameters; i++){
            parameter = prompt("Enter parameter "+(i+1));
            if (i==numOfParameters-1){
                block.innerHTML += "$" + parameter;
            } else {
                block.innerHTML += "$" + parameter+ ",";
            }
        }
        block.innerHTML += ")"
    } else if (block.id === "add") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        if (!isNaN(val1[0])) {
            val1 = parseFloat(val1)
        } else {
            val1 = "$" + val1;
        }
        if (!isNaN(val2[0])) {
            val2 = parseFloat(val1)
        } else {
            val2 = "$" + val1;
        }
        assign_to = prompt("variable name: ");
        block.innerHTML = "$"+assign_to + " = " + val1 + " + " + val2;
    } else if (block.id === "sub") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        if (!isNaN(val1[0])) {
            val1 = parseFloat(val1)
        } else {
            val1 = "$" + val1;
        }
        if (!isNaN(val2[0])) {
            val2 = parseFloat(val2)
        } else {
            val2 = "$" + val2;
        }
        assign_to = prompt("variable name: ");
        block.innerHTML = "$"+assign_to + " = " + val1 + " - " + val2;
    } else if (block.id === "mult") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        if (!isNaN(val1[0])) {
            val1 = parseFloat(val1);
        } else {
            val1 = "$" + val1;
        }
        if (!isNaN(val2[0])) {
            val2 = parseFloat(val2);
        } else {
            val2 = "$" + val2;
        }
        assign_to = prompt("variable name: ");
        block.innerHTML = "$"+assign_to + " = " + val1 + " * " + val2;
    } else if (block.id === "divide") {
        val1 = prompt("Enter the first value: ");
        val2 = prompt("Enter the second value: ");
        if (!isNaN(val1[0])) {
            val1 = parseFloat(val1)
        } else {
            val1 = "$" + val1;
        }
        if (!isNaN(val2[0])) {
            val2 = parseFloat(val1);
        } else {
            val2 = "$" + val1;
        }
        assign_to = prompt("variable name: ");
        block.innerHTML = "$"+assign_to + " = " + val1 + " / " + val2;
    } else if (block.id === "Readfile") {
        file_name = prompt("File name:");
        block.innerHTML += " " + file_name;
    } else if (block.id === "Writefile") {
        file_name = prompt("File name:");
        block.innerHTML += " " + file_name;
    } else if (block.id === "print") {
        exp = prompt("Enter expression (Enter $ before variable names)");
        block.innerHTML += " " + exp;
    }
}

function generatePHPCode(code_block) {
    PHPcode = document.getElementById("PHP_code");
    if (code_block.id==="for") {
        code = code_block.innerHTML;
        code = code.replace("&lt", "<");
        code = code.replace("&gt", ">");
        code = code.replace("&amp", "&");
        PHPcode.value += code + "{" + "\n";
    } else if (code_block.id==="if" || code_block.id === "while") {
        code = code_block.innerHTML;
        code = code.replace("&lt", "<");
        code = code.replace("&gt", ">");
        code = code.replace("&amp", "&");
        PHPcode.value += code + "{" + "\n";
    } else if (code_block.id === "elif") {
        code = code_block.innerHTML;
        code = code.replace("&lt", "<");
        code = code.replace("&gt", ">");
        code = code.replace("&amp", "&");
        PHPcode.value += code + "{" + "\n";
    } else if (code_block.id === "else") {
        PHPcode.value += "else {\n";
    } else if (code_block.id === "endFor" || code_block.id === "endFunc" || code_block.id === "endif" || code_block.id === "endWhile" || code_block.id === "endElseIf" || code_block.id === "endElse") {
        PHPcode.value += "}\n";
    } else if (code_block.id==="assign"){
        PHPcode.value += code_block.innerHTML + ";\n";
    } else if (code_block.id === "add" || code_block.id === "add" || code_block.id === "mult" || code_block.id === "divide") {
        PHPcode.value += code_block.innerHTML + ";\n";
    } else if (code_block.id === "Readfile") {
        filename = (code_block.innerHTML).split(' ')[2]
        PHPcode.value += "$filename = '"+ filename +"'; \n$file = fopen($filename, 'r');\n if ($file === false) {\necho 'Error opening file.';\n} else {\n$contents = fread($file, filesize($filename));\nfclose($file);\necho $contents;\n}\n"
    } else if (code_block.id === "Writefile") {
        filename = (code_block.innerHTML).split(' ')[2]
        PHPcode.value += "$filename = " + filename + ";\n$file = fopen($filename, 'w');\nif ($file === false) {\necho 'Error opening file.';\n} else {\nfwrite($file, 'Hello, world!');\nfclose($file);\necho 'File written successfully.';\n}\n";
    } else if (code_block.id === "print") {
        expression = "";
        print_statment = (code_block.innerHTML).split(' ');
        if (print_statment.length > 1){
            for (i=1; i<print_statment.length; i++){
                expression += print_statment[i]+" ";
            }
            PHPcode.value += "echo " + expression + ";\n";
        } else {
            PHPcode.value += "echo '';\n"
        }
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
    generatePHPCode(clonedElement);
	program.appendChild(clonedElement);
});

// Set the ID of the dragged element
draggable.forEach((element) => {
	element.addEventListener('dragstart', (event) => {
		event.dataTransfer.setData('text/plain', event.target.id);
	});
});


