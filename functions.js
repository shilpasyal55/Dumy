//Function Declaration or Statement
function add(num1, num2) {
    return num1 + num2
}
console.log(add(2,3));

//Function Expression
let multiply = function(num1,num2) {
    return num1 * num2
}
console.log(multiply(3,5));

//Arrow Functions
let multiplyArrow = (num1,num2) => {
    return num1 * num2;
}
console.log(multiplyArrow(4,2));

//Immediately Invoked Function Expression
(function(num1, num2) {
    console.log(num1 * num2);
})(6,8);

class User {
    constructor ({userName, avatar}) {
      this.userName = userName;
      this.avatar = avatar;
    }
  }
  const currentUser = new User({
    userName: 'Foo',
    avatar: 'foo.png'
  });

User.prototype = {}
  console.log(currentUser instanceof User);

