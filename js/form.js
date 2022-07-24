const init = function(){
    document.getElementById('submitter').addEventListener('click', send);
}

const send = function(ev){
    ev.preventDefault();

    let captcha_response = grecaptcha.getResponse();

    if (captcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">You must verify the captcha</span>';
        return;
    }

    const form = document.getElementById('form');

    const name = form.elements.namedItem('name').value;
    const email = form.elements.namedItem('email').value;
    const message = form.elements.namedItem('message').value;

    if (email === '' || message === ''){
        alert('Please fill in the required fields');
    } else {

        Email.send({
            SecureToken : "acb28ec1-b43c-4892-875f-43fd3475d019",
            To : 'guido.dinello@gmail.com',
            From : email,
            Subject : "Website Contact Form",
            Body : name + "<br>" + message
        });

        alert("Thank you for your message " + name + ", I will reach out to you as soon as possible.");

        form.reset();
    }
}

function recaptcha_callback(){
    document.getElementById('g-recaptcha-error').innerHTML = '';
}


document.addEventListener('DOMContentLoaded', init);