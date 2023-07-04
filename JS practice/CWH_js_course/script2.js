//CODE WITH HARRY JS27 - alert(), confirm(), prompt()

//alert() - used to invoke a mini window with a msg
alert('Welcome! to my new website');

//prompt(normal text, default value) - used to take user input as string [always]
alert('Enter the value of a!');
let a = prompt('Enter a here :', 22);
// document.write(a);

//confirm() - shows a message and waits for the user to press OK or CANCEL. Returns true for OK, returns false for CANCEL
let write = confirm('Do you want to write in the page?');
if(write){
    document.write(a);
} else{
    document.write('Please allow me to write...');
}

//these methods are too old. we can use modals instead of these methods for look modern