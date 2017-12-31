console.log('running the code');

// displaying technique advice after button click
var tipsButton = document.getElementById('tipsButton');
var technique = document.getElementById('technique');

tipsButton.addEventListener('click', function(e){
  technique.innerHTML = "<br><span class = 'strategy'> A lot of predicting organic chemistry reactions involve troubleshooting. You often don't discover problems or solutions until you run into them. The key is to attempt and then stop to analyze each step of the chemical reaction.</span>";
});


// displaying condition rules after checking box
var acidic = document.getElementById('acidic');
var pos = document.getElementById('pos');

acidic.addEventListener('click', function(e){
  pos.innerHTML = "<span class = 'rules'>Protonate and keep positive/neutral charges!</span>";
});

var basic = document.getElementById('basic');
var neg = document.getElementById('neg');

basic.addEventListener('click', function(e){
  neg.innerHTML = "<span class = 'rules'>Deprotonate and keep negative/neutral charges!</span>";
});





// var reactButton = document.getElementById('reactButton');
// var introduce = document.getElementById("introduce");
//
// reactButton.addEventListener('click', function(e){
//   introduce.innerHTML = "Enter Reactants!"
//   introduce.appendChild(createreactTextBox());
// });
//
// function createreactTextBox() {
//   var input = document.createElement('input');
//   input.type = 'text';
//   input.name = 'reactants[]';
//   return input;
// }
//
//
//
// var solventButton = document.getElementById('solventButton');
// var solvents = document.getElementById("solvents");
//
// solventButton.addEventListener('click', function(e){
//   solvents.innerHTML = "Enter Solvents!"
//   solvents.appendChild(createsolvTextBox());
// });
//
// function createsolvTextBox() {
//   var input = document.createElement('input');
//   input.type = 'text';
//   input.name = 'solvents[]';
//   return input;
// }
//
//
//
// var acidicButton = document.getElementById('acidicButton');
// var acids = document.getElementById("acids");
//
// acidicButton.addEventListener('click', acidicText);
// function acidicText(){
//   acids.innerHTML = "Protonate and keep positive/neutral charges!"
// }
//
// var basicButton = document.getElementById('basicButton');
// var bases = document.getElementById("bases");
//
// basicButton.addEventListener('click', basicText);
// function basicText(){
//   bases.innerHTML = "Deprotonate and keep negative/neutral charges!"
// }
//
//
// var currStep = 0;
// var stepsOfReaction = ['1. activate', '2. attack', '3. neutralize'];
// var visualizeButton = document.getElementById('visualizeButton');
// var steps = document.getElementById("steps");
//
// visualizeButton.addEventListener('click', function(e) {
//   if (currStep < stepsOfReaction.length) {
//       steps.innerHTML += '<div>'+stepsOfReaction[currStep]+'</div>';
//       currStep++;
//     }
// });
//
//
// var productButton = document.getElementById('productButton');
// var products = document.getElementById("products");
//
// productButton.addEventListener('click', productText);
// function productText(){
//   products.innerHTML = "Show final product(s) already!"
// }
