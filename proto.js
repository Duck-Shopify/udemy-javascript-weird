var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

// Don't do it this way

john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
  firstname: 'Jane'
}

jane.__proto__ = person;
console.log(jane.firstname);
console.log(jane.getFullName());
