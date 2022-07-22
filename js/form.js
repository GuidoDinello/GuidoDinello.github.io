
var button = document.getElementById('submitter');

button.addEventListener('click', readForm());

function readForm(){
    const form = document.getElementById('form');
    const formData = new FormData(form);
    console.log(formData)
}

// var ty_note = document.getElementById('ty_note'); 

// ty_note.innerHTML = "Gracias! Tu mensaje ha sido enviado.";

// var inputs = form.getElementsByTagName('input');
// var textarea = form.getElementsByTagName('textarea');

// console.log(inputs);

// alert("Thank you for your message " + inputs[0].value + ", I will reach out to you as soon as possible.");