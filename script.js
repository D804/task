let moment = require("moment");
let now = moment();
let dateTime = now.format("MMMM Do YYYY, h:mm:ss a");
console.log(dateTime);
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

// Check if the following date is valid or not:
// 2020-01-01
// 2020-14-01

function checkDate(date){
    let dateCheck = moment(date, 'YYYY-MM-DD', true);
    return dateCheck.isValid();
}
console.log(checkDate('2020-01-01'));
console.log(checkDate('2020-14-01'));

// adds 7 days to current date
  console.log(moment().add(7, 'days').calendar());
// adds 7 months to current date
console.log(moment().add(7, 'months').calendar());
// adds 7 years to current date
console.log(moment().add(7, 'year').calendar());
// subtracts 7 days to current date
console.log(moment().subtract(7, 'days').calendar());
// subtracts 7 months to current date
console.log(moment().subtract(7, 'months').calendar());
// subtracts 7 years to current date
console.log(moment().subtract(7, 'year').calendar());

// Find the difference between the following 2 dates:
// date1: 2014-11-11
// date2: 2015-09-11
let date1 = moment('2014-11-11');
let date2 = moment('2015-09-11');

let differance = date2.diff(date1, 'days');
console.log(differance);



/*2.
date1: 2014-11-27
date2: 2015-09-16
*/
let dateFirst = moment('2014-11-27');
let dateSecond = moment('2015-09-16');
let dateDifferance = dateSecond.diff(dateFirst, 'days');
console.log(dateDifferance);

// Check is 2020-01-01 date after 2018-01-01
let firstDate = moment('2020-01-01');
let secondDate = moment('2018-01-01');
let isAfter = firstDate.isAfter(secondDate);
console.log(isAfter);

// Check is 2010-01-01 date after 2018-01-01
let first = moment('2010-01-01');
let second = moment('2018-01-01');
let after  = first.isAfter(second);
console.log(after);
// Check if the year 2019 is a leap year
function isLeapYear(year){
  let testYear = moment(`${year}`, "YYYY-MM-DD",true);
  return testYear.isValid();
}
console.log(isLeapYear(2019)); 
// Check if the year 2020 is a leap year
function leapYear(year){
  let yearCheck = moment(`${year}`,"YYY-MM-DD",true);
  return yearCheck.isValid();
}
console.log(leapYear(2020));

// Array Method
//chunk
let lodash = require('lodash');
let number = [1,2,3,4];
let chunk = lodash.chunk(number,2);
console.log(chunk);

// compact(array)
let data = [1, "a", false, "",NaN];
let compat = lodash.compact(data);
console.log(compat);

//concat(array) 
let arr = ["a","b","c"];
let concat = lodash.concat(arr, [1,2,3,4]);
console.log(concat);

// difference(array)
let arr1 = [7,8,9,10];
let arr2 = [10,11,12,13];
let diff = lodash.difference(arr1,arr2);
console.log(diff);

// .drop(array)
let arrSlice = lodash.drop([34,56,76,45,66],3);
console.log(arrSlice);

// collection methods
// _.find()
var users = [
  { 'user': 'Rahul',  'age': 28, 'active': true },
  { 'user': 'Deep',    'age': 26, 'active': false },
  { 'user': 'abhi', 'age': 20,  'active': true }
];
let find = lodash.find(users, function(obj) { return obj.age < 30; });
console.log(find);

// _.map()
function getSquare(num) {
  return num * num;
}
let square = lodash.map([6], getSquare);
console.log(square);

// orderBy()

var user = [
  { 'user': 'Rahul',  'age': 28, 'active': true },
  { 'user': 'Deep',    'age': 26, 'active': false },
  { 'user': 'abhi', 'age': 20,  'active': true }
];
let ascending = lodash.orderBy(users, ['user', 'age'], ['desc']);
console.log(ascending);

// reduce
let  array = [[0, 1], [2, 3], [4, 5]];
 
let reduceArr = lodash.reduceRight(array, function(flattened, other) {
  return flattened.concat(other);
}, []);
console.log(reduceArr);

// shuffle()
let num1 = [45,555,89,88,9];
let shuffleArr = lodash.shuffle(num1);
console.log(shuffleArr); 