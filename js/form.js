const init = function(){
    document.getElementById('submitter').addEventListener('click', send);
    document.getElementById('form').reset();
}

const send = function(ev){
    ev.preventDefault();

    const form = document.getElementById('form');

    let email = form.elements.namedItem('email').value;
    let message = form.elements.namedItem('message').value;

    if (email === '' || message === ''){
        alert('Please fill in the required fields');
    } else {

        Email.send({
            SecureToken : "acb28ec1-b43c-4892-875f-43fd3475d019",
            To : 'guido.dinello@gmail.com',
            From : email,
            Subject : "Website Contact Form",
            Body : name + "<br>" + email + "<br>" + message
        }).then(
          message => alert(message)
        );

        let name = form.elements.namedItem('name').value;
        alert("Thank you for your message " + name + ", I will reach out to you as soon as possible.");
    }
}


document.addEventListener('DOMContentLoaded', init);