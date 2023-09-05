const min = 1;
const max = 100; // here be declared the range of generating random number 1 to 100
const comp_number = Math.floor(Math.random() * (max - min + 1)) + min;

let guess_count = 1;
// console.log(comp_number)
let your_number;
while (true) { // this loop run untill user enter correct value
  your_number = prompt('enter the your guessing number')
  your_number = Number.parseInt(your_number)
  if (comp_number == your_number) {
    break;
    // if user input and random number are same then loop is break down
  }
  else if (comp_number < your_number) {
    console.log('\nplease enter least value');
  }
  else {
    console.log('\nplease enter greater value');
  }
  guess_count++; // countin the how much times you enter the input for guessing the number

}
let score = 100 - guess_count;// here show score guess count is minus by hundered that is final score
console.log('NICE !!! you guess the number in ', guess_count, ' times AND your total score is ', score);
