
//gets a new object (the architecture allows us to not have to use the new keyword here)
var g = G$('John', 'Doe');
// use chainable methods
g.greet().setLang('es').greet(true).log();
// let's use our object on the click of the login button
$('#login').click(function(){
  var loginGrtr = G$('john', 'doe');
  $('#logindiv').hide();
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
