//there is 3 kinds of loops 1. while loop, 2. for loop, 3. do-while loop

//while loop
/* Syntax
    while (expression/condition){
        codes...
    }
*/

console.log("While Loop -");

let val = 1;
while (val<=5){
    console.log(val);
    val += 1;
}

//do-while loop - special thing about this is it will be performed atleast once at this checks condition at the last of the loop
/* Syntax
    do{
        codes...
    } while(condition);
*/

console.log("Do while Loop -");

val = 1;
do{
    console.log(val);
    val++;
} while(val<=5);

//for loop
/* Syntax
    for (initialization; condition; modification){
        codes...
    }
*/

console.log("For Loop -");

for(let i = 1; i <= 5; i++){
    console.log(i);
}

console.log("without initializer");

let j = 1;
for(; j<=5; j++){
    console.log(j);
}

console.log("without condition");

for(let j=1; ; j++){
    console.log(j);
    if(j==5){
        break;  
    }
}

console.log("without any expression");

let k = 1;
for(;;){
    console.log(k);
    if(k==5){
        break;
    }
    k++;
}

console.log("Usage of break - ");

for(let i = 1; i <= 5; i++){
    if(i==3) break;     //break - This breaks the loop when the condition matches into the if condition
    console.log(i);
}

console.log("Usage of continue - ");

for(let i = 1; i <= 5; i++){
    if(i==3) continue;      //continue - the loop skips that part when condition matches  
    console.log(i);
}