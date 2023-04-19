# Visual-IDE-PHP
This is Web Engineering assignment 2 where we have to create a visual ide that uses programmable blocks to implement a PHP script.

The assignment consists of 4 files. "IDE.php", "header.php", "styles2.css" and "script.js".

header.php includes the header.

"IDE.php" page consists of 4 main parts. First part consists of all the code blocks that can be used and are draggable. The second part consists of the dropped program blocks. The third part consists of all the php code output by the block program. Finally, the last part of the page shows the output of the php code after it is executed. 

styles2.css includes all the styling done in the page.

script.js implements the drag and drop functionality of the blocks. Once a block is dropped the block component is completed when javascript asks for additional information like - loop variable, conditions and the choice between increment and decrement in case of for loop- and then generates the corresponding php code that it writes to the text area below. After that you can use the execute button to submit the code which i then run by the server and executed.