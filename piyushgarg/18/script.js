// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(2)(3)(5)); //this will not exicute untill you have given all the parameters
const add = (a) => (b) => (c) => a + b + c;
console.log(add(2)(3)(5));

// function sendAutoEmail(to) {
//   return function (subject) {
//     return function (body) {
//       console.log(`Sending Email to ${to} with subject ${subject}:${body}`);
//     };
//   };
// }

const sendAutoEmail = (to) => (subject) => (body) =>
  `Sending Email to ${to} with subject ${subject}:${body}`;
let step1 = sendAutoEmail("daszankita23@gmail.com");
let step2 = step1("New Order Confirmation");
let step3 = step2("hey ankita you order will be delivered tommorow");
console.log(step3);

