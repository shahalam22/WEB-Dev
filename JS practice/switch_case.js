/* SYNTAX
    switch (expression) {
        case value1 : 
            statement1;
            break;
        case value2 :
            statement2;
            break;
        case value3 :
            statement3;
            break;
        ...
        ...
        ...
        default :
            statement;
            break;
    }
*/

//switch case to find day name of the week using number
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName);

//If we don't use break then it will execute all the statements till finds break from where it matches.

let val = 1;

switch (val){
    case 1:
        console.log("This ");
    case 2:
        console.log("is ");
    case 3:
        console.log("printing ");
    case 4:
        console.log("every statements");
        break;
    default:
        console.log("There is nothing.");
        break;
}