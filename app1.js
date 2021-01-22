var boxElement = document.getElementById('button');

var submitOrder = document.getElementById('submit');

//var orderTotal = document.getElementById('total');

boxElement.addEventListener('click', function() {
  console.log('button was clicked');
  event.preventDefault();
});


submitOrder.addEventListener('submit', function(){

  console.log('button was hovered');
});

submitOrder.addEventListener('insertText', function(){
  console.log('Entered Text');

});
