let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let textInput = document.getElementById('textarea');

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
})

let btn = document.getElementById('formBtn');
btn.addEventListener('click', () => {
  if(nameInput.value == '' || emailInput.value == '' || textInput.value == ''){
    alert('Please fill in all fields.');
  }else{
    alert('Form submitted successfully!');
      form.reset();
  }
})


