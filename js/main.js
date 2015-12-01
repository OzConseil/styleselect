styleSelect('select');

// Rest of code is for demonstration purposes...
var selectBox = document.querySelector('select')

var demoBinding = new Ractive({
  el: document.querySelector('p.result'),
  template: 'Value of real select box is currently {{ value }}',
  data: {value: selectBox.value}
})

selectBox.addEventListener('change', function(){
  demoBinding.set('value', selectBox.value)
})
