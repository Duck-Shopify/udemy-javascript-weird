var people = [
  {
    firstname: 'john',
    lastname: 'doe',
    addresses: [
      '111 Main St.',
      '222 Third St.'
    ]
  },
  {
    firstname: 'Jane',
    lastname: 'doe',
    addresses: [
      '333 main st.',
      '444 Fifth St.'
    ],
    greet: function(){
      return 'Hello!';
    }
  }
]

console.log(people);
