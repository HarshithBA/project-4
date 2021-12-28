function check()
{
    /**1. Take value from the input box with id "word" and store it in a variable named "input" */
    var input = document.getElementById("word").value;


    /**2. Print the variable "input" to the console */
    console.log(input);

    /**3. Use length property to count the characters in the variable "input" (input.length) and store it in a variable named "count" */
    var count=input.length;

    /**4. Print the variable "count" to the console */
    console.log(count);
    
    /***5. Check :
     * if "count" is greater than  7, then print a message in console :  The Entered word has more than 7 letters. 
     * Else print a message : The Entered word has less than 7 letters */
    if(count>7){
        console.log('Entered word has more than 7 letters');
    }
    else{
        console.log('the entered word has less than 7');
    }
    
}

